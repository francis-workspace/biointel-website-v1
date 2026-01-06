import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabaseClient';
import {
  type Article,
  type PillarCategory,
} from '@/data/articles';

type DbAuthorRow = {
  slug: string;
  name: string;
  avatar_url: string | null;
};

type DbArticleRow = {
  slug: string;
  category: PillarCategory;
  category_class: Article['categoryClass'];
  title: string;
  excerpt: string;
  author: string;
  author_id: string | null;
  published_date: string | null;
  date_display: string | null;
  read_time: string;
  deck: string | null;
  image_url: string | null;
  has_image: boolean;
  content: unknown;
  popularity: number | null;
  is_featured: boolean;
  authors?:
    | {
        slug: string;
        name: string;
        avatar_url: string | null;
      }[]
    | null;
};

const stripTrailingBlocks = (blocks: Array<{ type?: string; key?: string }> | null | undefined) => {
  const list = blocks ?? [];
  const trailingKeys = new Set(['h2-source', 'link-source', 'h2-published', 'p-published']);
  return list.filter((b) => !(b.key && trailingKeys.has(b.key)));
};

const blocksToMarkdown = (content: unknown) => {
  if (!Array.isArray(content)) return '';

  const cleaned = stripTrailingBlocks(content as Array<{ type?: string; key?: string }>);
  const lines: string[] = [];

  for (const raw of cleaned as Array<Record<string, unknown>>) {
    const type = raw.type;
    if (type === 'h2') {
      const text = typeof raw.text === 'string' ? raw.text : '';
      if (text.trim()) lines.push(`## ${text.trim()}`);
      continue;
    }

    if (type === 'p') {
      const text = typeof raw.text === 'string' ? raw.text : '';
      if (text.trim()) lines.push(text.trim());
      continue;
    }

    if (type === 'link') {
      const text = typeof raw.text === 'string' ? raw.text : '';
      const href = typeof raw.href === 'string' ? raw.href : '';
      if (href.trim()) {
        lines.push(`[${text.trim() || href.trim()}](${href.trim()})`);
      } else if (text.trim()) {
        lines.push(text.trim());
      }
    }
  }

  return lines.join('\n\n').trim();
};

const mapDbContentToMarkdown = (content: unknown): string => {
  if (typeof content === 'string') return content;
  return blocksToMarkdown(content);
};

const buildAuthorIndex = (authors: DbAuthorRow[]) => {
  const index = new Map<string, DbAuthorRow>();
  for (const author of authors) {
    index.set(author.name.trim().toLowerCase(), author);
  }
  return index;
};

const fetchAuthorsIndex = async () => {
  if (!supabase) return new Map<string, DbAuthorRow>();

  const { data, error } = await supabase.from('authors').select('slug,name,avatar_url');
  if (error) return new Map<string, DbAuthorRow>();
  const authors = (data as DbAuthorRow[] | null) ?? [];
  return buildAuthorIndex(authors);
};

const mapRowToArticle = (row: DbArticleRow, authorIndex?: Map<string, DbAuthorRow>): Article => {
  const authorProfile = row.authors?.[0] ?? null;
  const fallbackAuthor =
    !authorProfile && authorIndex ? authorIndex.get((row.author ?? '').trim().toLowerCase()) ?? null : null;

  return {
    slug: row.slug,
    category: row.category,
    categoryClass: row.category_class,
    title: row.title,
    excerpt: row.excerpt,
    author: authorProfile?.name ?? fallbackAuthor?.name ?? row.author,
    authorSlug: authorProfile?.slug ?? fallbackAuthor?.slug ?? undefined,
    authorAvatarUrl: authorProfile?.avatar_url ?? fallbackAuthor?.avatar_url ?? undefined,
    date: row.date_display ?? row.published_date ?? '',
    readTime: row.read_time,
    deck: row.deck ?? undefined,
    imageUrl: row.image_url ?? undefined,
    hasImage: row.has_image,
    content: mapDbContentToMarkdown(row.content),
    popularity: row.popularity ?? undefined,
    link: `/article/${row.slug}`,
  };
};

const useSupabaseEnabled = () => {
  return !!supabase;
};

export const useFeaturedArticle = (category?: PillarCategory) => {
  const supabaseEnabled = useSupabaseEnabled();

  return useQuery({
    queryKey: ['articles', 'featured', category ?? 'all'],
    queryFn: async (): Promise<Article | null> => {
      if (!supabaseEnabled) return null;

      const authorIndex = await fetchAuthorsIndex();

      const base = supabase!
        .from('articles')
        .select(
          'slug,category,category_class,title,excerpt,author,author_id,published_date,date_display,read_time,deck,image_url,has_image,content,popularity,is_featured,authors:author_id(slug,name,avatar_url)'
        )
        .eq('is_published', true);

      const { data, error } = category
        ? await base.eq('category', category).order('is_featured', { ascending: false }).order('published_date', { ascending: false }).limit(1)
        : await base.order('published_date', { ascending: false }).limit(1);

      if (error) throw error;
      const first = (data?.[0] as DbArticleRow | undefined) ?? undefined;
      if (!first) return null;
      return mapRowToArticle(first, authorIndex);
    },
  });
};

export const useRecentArticles = (category?: PillarCategory) => {
  const supabaseEnabled = useSupabaseEnabled();

  return useQuery({
    queryKey: ['articles', 'recent', category ?? 'all'],
    queryFn: async (): Promise<Article[]> => {
      if (!supabaseEnabled) return [];

      const authorIndex = await fetchAuthorsIndex();

      let q = supabase!
        .from('articles')
        .select(
          'slug,category,category_class,title,excerpt,author,author_id,published_date,date_display,read_time,deck,image_url,has_image,content,popularity,is_featured,authors:author_id(slug,name,avatar_url)'
        )
        .eq('is_published', true)
        .order('published_date', { ascending: false });

      if (category) q = q.eq('category', category);

      const { data, error } = await q;
      if (error) throw error;
      const rows = (data as DbArticleRow[] | null) ?? [];

      return rows.map((row) => mapRowToArticle(row, authorIndex));
    },
  });
};

export const useArticleBySlug = (slug?: string) => {
  const supabaseEnabled = useSupabaseEnabled();

  return useQuery({
    queryKey: ['articles', 'by-slug', slug ?? ''],
    enabled: !!slug,
    queryFn: async (): Promise<Article | null> => {
      if (!slug) return null;

      if (!supabaseEnabled) return null;

      const authorIndex = await fetchAuthorsIndex();

      const { data, error } = await supabase!
        .from('articles')
        .select(
          'slug,category,category_class,title,excerpt,author,author_id,published_date,date_display,read_time,deck,image_url,has_image,content,popularity,is_featured,authors:author_id(slug,name,avatar_url)'
        )
        .eq('is_published', true)
        .eq('slug', slug)
        .limit(1);

      if (error) throw error;
      const first = (data?.[0] as DbArticleRow | undefined) ?? undefined;
      if (!first) return null;
      return mapRowToArticle(first, authorIndex);
    },
  });
};
