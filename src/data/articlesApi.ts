import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabaseClient';
import {
  featuredArticle as fallbackFeaturedArticle,
  recentArticles as fallbackRecentArticles,
  type Article,
  type PillarCategory,
} from '@/data/articles';

type DbArticleRow = {
  slug: string;
  category: PillarCategory;
  category_class: Article['categoryClass'];
  title: string;
  excerpt: string;
  author: string;
  published_date: string | null;
  date_display: string | null;
  read_time: string;
  deck: string | null;
  image_url: string | null;
  has_image: boolean;
  content: Article['content'];
  popularity: number | null;
  is_featured: boolean;
};

const mapRowToArticle = (row: DbArticleRow): Article => {
  return {
    slug: row.slug,
    category: row.category,
    categoryClass: row.category_class,
    title: row.title,
    excerpt: row.excerpt,
    author: row.author,
    date: row.date_display ?? row.published_date ?? '',
    readTime: row.read_time,
    deck: row.deck ?? undefined,
    imageUrl: row.image_url ?? undefined,
    hasImage: row.has_image,
    content: row.content ?? [],
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
    queryFn: async (): Promise<Article> => {
      if (!supabaseEnabled) {
        if (!category) return fallbackFeaturedArticle;
        return (
          fallbackRecentArticles.find((a) => a.category === category) ??
          fallbackFeaturedArticle
        );
      }

      const base = supabase!
        .from('articles')
        .select(
          'slug,category,category_class,title,excerpt,author,published_date,date_display,read_time,deck,image_url,has_image,content,popularity,is_featured'
        )
        .eq('is_published', true);

      const { data, error } = category
        ? await base.eq('category', category).order('is_featured', { ascending: false }).order('published_date', { ascending: false }).limit(1)
        : await base.order('is_featured', { ascending: false }).order('published_date', { ascending: false }).limit(1);

      if (error) throw error;
      const first = (data?.[0] as DbArticleRow | undefined) ?? undefined;
      if (!first) return fallbackFeaturedArticle;
      return mapRowToArticle(first);
    },
  });
};

export const useRecentArticles = (category?: PillarCategory) => {
  const supabaseEnabled = useSupabaseEnabled();

  return useQuery({
    queryKey: ['articles', 'recent', category ?? 'all'],
    queryFn: async (): Promise<Article[]> => {
      if (!supabaseEnabled) {
        return category
          ? fallbackRecentArticles.filter((a) => a.category === category)
          : fallbackRecentArticles;
      }

      let q = supabase!
        .from('articles')
        .select(
          'slug,category,category_class,title,excerpt,author,published_date,date_display,read_time,deck,image_url,has_image,content,popularity,is_featured'
        )
        .eq('is_published', true)
        .order('published_date', { ascending: false });

      if (category) q = q.eq('category', category);

      const { data, error } = await q;
      if (error) throw error;
      return (data as DbArticleRow[]).map(mapRowToArticle);
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

      if (!supabaseEnabled) {
        const all = [fallbackFeaturedArticle, ...fallbackRecentArticles];
        return all.find((a) => a.slug === slug) ?? null;
      }

      const { data, error } = await supabase!
        .from('articles')
        .select(
          'slug,category,category_class,title,excerpt,author,published_date,date_display,read_time,deck,image_url,has_image,content,popularity,is_featured'
        )
        .eq('is_published', true)
        .eq('slug', slug)
        .limit(1);

      if (error) throw error;
      const first = (data?.[0] as DbArticleRow | undefined) ?? undefined;
      if (!first) return null;
      return mapRowToArticle(first);
    },
  });
};
