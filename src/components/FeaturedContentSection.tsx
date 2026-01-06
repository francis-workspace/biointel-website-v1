import { useEffect, useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Article, PillarCategory } from '@/data/articles';
import { useFeaturedArticle, useRecentArticles } from '@/data/articlesApi';

type FeaturedContentSectionProps = {
  category?: PillarCategory;
};

const FeaturedContentSection = ({ category }: FeaturedContentSectionProps) => {
  const [filter, setFilter] = useState<'latest' | 'popular'>('latest');
  const [showAll, setShowAll] = useState(false);

  const { data: featuredArticle } = useFeaturedArticle(category);
  const { data: recentArticles } = useRecentArticles(category);

  const scopedRecentArticles = useMemo(() => {
    const all = (recentArticles ?? []).map((a) => ({ ...a, popularity: a.popularity ?? 0 }));
    if (!featuredArticle) return all;
    return all.filter((a) => a.title !== featuredArticle.title);
  }, [featuredArticle, recentArticles]);

  const filteredRecentArticles = useMemo(() => {
    if (filter === 'popular') {
      return [...scopedRecentArticles].sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
    }

    return scopedRecentArticles;
  }, [filter, scopedRecentArticles]);

  useEffect(() => {
    setShowAll(false);
  }, [category, filter]);

  const visibleRecentArticles = useMemo(() => {
    if (showAll) return filteredRecentArticles;
    return filteredRecentArticles.slice(0, 10);
  }, [filteredRecentArticles, showAll]);

  const hasAnyArticles = !!featuredArticle || filteredRecentArticles.length > 0;

  if (!hasAnyArticles) {
    return (
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container-main">
          <h2 className="section-title mb-0">ALL INTELLIGENCE</h2>
          <div className="section-divider" />
          <div className="rounded-2xl border border-border bg-background p-8 lg:p-10 text-center">
            <h3 className="text-base font-bold text-foreground">No articles posted yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">When new posts are available, they’ll appear here.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container-main">
        <div className="flex items-center justify-between gap-6">
          <h2 className="section-title mb-0">ALL INTELLIGENCE</h2>
          <div className="inline-flex items-center rounded-full border border-border bg-background p-1">
            <button
              type="button"
              onClick={() => setFilter('latest')}
              className={`px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors ${
                filter === 'latest'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-accent'
              }`}
            >
              Latest
            </button>
            <button
              type="button"
              onClick={() => setFilter('popular')}
              className={`px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors ${
                filter === 'popular'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-accent'
              }`}
            >
              Most Popular
            </button>
          </div>
        </div>
        <div className="section-divider" />

        {featuredArticle ? (
          <article className="mb-8 pb-8 border-b border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {featuredArticle.hasImage !== false && !!featuredArticle.imageUrl ? (
                <div className="lg:col-span-4">
                  <img
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    className="aspect-video w-full border border-border object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : null}

              <div className="lg:col-span-8">
                <span className={`category-tag ${featuredArticle.categoryClass} mb-4 inline-block`}>
                  {featuredArticle.category}
                </span>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-accent transition-colors">
                  <Link to={featuredArticle.link}>{featuredArticle.title}</Link>
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{featuredArticle.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  {featuredArticle.authorAvatarUrl ? (
                    <img
                      src={featuredArticle.authorAvatarUrl}
                      alt={featuredArticle.author}
                      className="w-7 h-7 rounded-full border border-border object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                  {featuredArticle.authorSlug ? (
                    <Link to={`/author/${featuredArticle.authorSlug}`} className="hover:text-accent">
                      {featuredArticle.author}
                    </Link>
                  ) : (
                    <span>{featuredArticle.author}</span>
                  )}
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <Link to={featuredArticle.link} className="arrow-link">
                  READ MORE
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>
        ) : null}
        
        {/* Recent Articles List */}
        <div className="space-y-0">
          {visibleRecentArticles.map((article, index) => (
            <article 
              key={article.slug} 
              className={`py-6 ${index !== visibleRecentArticles.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {article.hasImage !== false && !!article.imageUrl && (
                  <div className="lg:col-span-4">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="aspect-video w-full border border-border object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}

                <div className={article.hasImage !== false ? 'lg:col-span-8' : 'lg:col-span-12'}>
                  <span className={`category-tag ${article.categoryClass} mb-4 inline-block`}>
                    {article.category}
                  </span>

                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-accent transition-colors">
                    <Link to={article.link}>{article.title}</Link>
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {article.authorAvatarUrl ? (
                      <img
                        src={article.authorAvatarUrl}
                        alt={article.author}
                        className="w-7 h-7 rounded-full border border-border object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : null}
                    {article.authorSlug ? (
                      <Link to={`/author/${article.authorSlug}`} className="hover:text-accent">
                        {article.author}
                      </Link>
                    ) : (
                      <span>{article.author}</span>
                    )}
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showAll && filteredRecentArticles.length > 10 && (
          <div className="mt-10 w-full">
            <button
              type="button"
              className="btn-outline text-xs py-3 px-5 w-full text-center"
              onClick={() => setShowAll(true)}
            >
              VIEW MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedContentSection;
