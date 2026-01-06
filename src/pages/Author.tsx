import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

import { supabase } from '@/lib/supabaseClient';

type AuthorRow = {
  id: string;
  slug: string;
  name: string;
  bio: string | null;
  avatar_url: string | null;
};

type ArticleRow = {
  slug: string;
  title: string;
  excerpt: string;
  date_display: string | null;
  published_date: string | null;
  read_time: string;
  category: string;
  category_class: string;
  image_url: string | null;
  has_image: boolean;
};

const Author = () => {
  const { slug } = useParams();

  const { data: author, isLoading: authorLoading } = useQuery({
    queryKey: ['authors', 'by-slug', slug ?? ''],
    enabled: !!slug,
    queryFn: async (): Promise<AuthorRow | null> => {
      if (!slug) return null;
      if (!supabase) return null;

      const { data, error } = await supabase
        .from('authors')
        .select('id,slug,name,bio,avatar_url')
        .eq('slug', slug)
        .limit(1);

      if (error) throw error;
      return ((data?.[0] as AuthorRow | undefined) ?? null) as AuthorRow | null;
    },
  });

  const { data: recent, isLoading: recentLoading } = useQuery({
    queryKey: ['articles', 'by-author', slug ?? ''],
    enabled: !!author?.id,
    queryFn: async (): Promise<ArticleRow[]> => {
      if (!author?.id) return [];
      if (!supabase) return [];

      const { data, error } = await supabase
        .from('articles')
        .select(
          'slug,title,excerpt,date_display,published_date,read_time,category,category_class,image_url,has_image'
        )
        .eq('is_published', true)
        .eq('author_id', author.id)
        .order('published_date', { ascending: false })
        .limit(5);

      if (error) throw error;
      return (data as ArticleRow[] | null) ?? [];
    },
  });

  const isLoading = authorLoading || recentLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-12 lg:py-16 bg-background">
            <div className="container-main">
              <div className="max-w-3xl mx-auto">
                <div className="h-8 w-2/3 bg-secondary/40" />
                <div className="mt-4 h-4 w-1/2 bg-secondary/30" />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (!author) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-12 lg:py-16 bg-background">
            <div className="container-main">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Author not found
                </h1>
                <p className="mt-4 text-base lg:text-lg text-muted-foreground">
                  This author profile may not exist yet.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 lg:py-16 bg-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-6">
                {author.avatar_url ? (
                  <img
                    src={author.avatar_url}
                    alt={author.name}
                    className="w-20 h-20 rounded-full border border-border object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
                <div className="min-w-0">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    {author.name}
                  </h1>
                  {author.bio ? (
                    <p className="mt-4 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {author.bio}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-lg font-bold text-foreground">Recent posts</h2>
              <AuthorRecentCarousel author={author} posts={recent ?? []} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const AuthorRecentCarousel = ({
  author,
  posts,
}: {
  author: AuthorRow;
  posts: ArticleRow[];
}) => {
  const items = useMemo(() => posts.slice(0, 5), [posts]);
  const [activeIndex, setActiveIndex] = useState(0);

  const active = items[activeIndex] ?? null;
  const canGoPrev = items.length > 1;
  const canGoNext = items.length > 1;

  if (items.length === 0) {
    return (
      <div className="mt-6 border border-border bg-secondary/30 p-6 text-sm text-muted-foreground">
        No posts yet.
      </div>
    );
  }

  if (!active) return null;

  const goPrev = () => {
    setActiveIndex((i) => (i - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setActiveIndex((i) => (i + 1) % items.length);
  };

  const renderCard = (item: ArticleRow) => {
    const date = item.date_display ?? item.published_date ?? '';
    const hasImage = item.has_image !== false && !!item.image_url;

    return (
      <article className="group relative block overflow-hidden rounded-2xl border border-border bg-foreground">
        {hasImage ? (
          <img
            src={item.image_url!}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : null}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/25 to-black/60" />

        <div className="relative p-6 sm:p-8 lg:p-10 min-h-[280px] sm:min-h-[320px] flex flex-col justify-end">
          <div className="text-xs font-semibold tracking-wide text-background/70 uppercase">Recent</div>
          <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-background leading-tight">
            <Link to={`/article/${item.slug}`}>{item.title}</Link>
          </h3>
          <p className="mt-4 text-sm sm:text-base text-background/80 max-w-2xl">{item.excerpt}</p>

          <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-xs text-background/70">
              {author.avatar_url ? (
                <img
                  src={author.avatar_url}
                  alt={author.name}
                  className="w-6 h-6 rounded-full border border-white/20 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
              <span className="font-medium text-background/85">{author.name}</span>
              <span aria-hidden="true">•</span>
              <span>{date}</span>
            </div>

            <Link
              to={`/article/${item.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-background/90 group-hover:text-background transition-colors"
            >
              Read
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs text-muted-foreground">
          {activeIndex + 1} / {items.length}
        </div>

        <div className="inline-flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border bg-background text-foreground hover:border-accent transition-colors disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Previous post"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border bg-background text-foreground hover:border-accent transition-colors disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Next post"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative mt-4 overflow-hidden rounded-2xl">
        <div
          className="flex w-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.slug} className="w-full shrink-0">
              {renderCard(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Author;
