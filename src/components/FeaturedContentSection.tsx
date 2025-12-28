import { useEffect, useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredArticle, getScopedArticles, recentArticles, type Article, type PillarCategory } from '@/data/articles';

type FeaturedContentSectionProps = {
  category?: PillarCategory;
};

const FeaturedContentSection = ({ category }: FeaturedContentSectionProps) => {
  const [filter, setFilter] = useState<'latest' | 'popular'>('latest');
  const [showAll, setShowAll] = useState(false);
  const fallbackImageUrl =
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb';

  const scopedArticles = useMemo(() => {
    return getScopedArticles(category);
  }, [category]);

  const scopedFeaturedArticle = useMemo(() => {
    if (!category) return featuredArticle;
    return scopedArticles[0] ?? featuredArticle;
  }, [category, scopedArticles]);

  const scopedRecentArticles = useMemo(() => {
    if (!category) return recentArticles;
    return scopedArticles
      .filter((a) => a.title !== scopedFeaturedArticle.title)
      .map((a) => ({ ...a, popularity: a.popularity ?? 0 }));
  }, [category, scopedArticles, scopedFeaturedArticle.title]);

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
        
        {/* Featured Article */}
        <article className="mb-8 pb-8 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-4">
              <img
                src={scopedFeaturedArticle.imageUrl ?? fallbackImageUrl}
                alt={scopedFeaturedArticle.title}
                className="aspect-video w-full border border-border object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="lg:col-span-8">
              <span className={`category-tag ${scopedFeaturedArticle.categoryClass} mb-4 inline-block`}>
                {scopedFeaturedArticle.category}
              </span>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-accent transition-colors">
                <Link to={scopedFeaturedArticle.link}>{scopedFeaturedArticle.title}</Link>
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {scopedFeaturedArticle.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{scopedFeaturedArticle.author}</span>
                <span>•</span>
                <span>{scopedFeaturedArticle.date}</span>
                <span>•</span>
                <span>{scopedFeaturedArticle.readTime}</span>
              </div>
              
              <Link to={scopedFeaturedArticle.link} className="arrow-link">
                READ MORE
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </article>
        
        {/* Recent Articles List */}
        <div className="space-y-0">
          {visibleRecentArticles.map((article, index) => (
            <article 
              key={article.title} 
              className={`py-6 ${index !== visibleRecentArticles.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {article.hasImage !== false && (
                  <div className="lg:col-span-4">
                    <img
                      src={article.imageUrl ?? fallbackImageUrl}
                      alt={article.title}
                      className="aspect-video w-full border border-border object-cover"
                      loading="lazy"
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
                    <span>{article.author}</span>
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
