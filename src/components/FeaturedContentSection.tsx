import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const featuredArticle = {
  category: 'MARKET INTELLIGENCE',
  categoryClass: 'category-market',
  title: 'Why Series A Valuations Are Diverging From Clinical Data',
  excerpt: 'Analysis of 200+ biotech funding rounds reveals a widening gap between scientific promise and market pricing. Here\'s what\'s driving the disconnect and what it means for Q1 dealmaking...',
  author: 'BioIntel Research',
  date: 'Dec 15, 2024',
  readTime: '8 min read',
  link: '/article/series-a-valuations',
};

const recentArticles = [
  {
    category: 'EXECUTIVE BRIEFING',
    categoryClass: 'category-executive',
    title: 'Gene Therapy M&A: Pattern Analysis From 50+ Deals',
    excerpt: 'Strategic buyers are prioritizing platform technology over single-asset plays...',
    author: 'BioIntel Research',
    date: 'Dec 14, 2024',
    readTime: '6 min read',
    popularity: 72,
    link: '/article/gene-therapy-ma',
  },
  {
    category: 'RISK REPORT',
    categoryClass: 'category-risk',
    title: 'What 500 Phase III Trials Reveal About Predictable Failure',
    excerpt: 'Endpoint selection errors account for 43% of late-stage clinical failures...',
    author: 'BioIntel Research',
    date: 'Dec 13, 2024',
    readTime: '10 min read',
    popularity: 91,
    hasImage: false,
    link: '/article/phase-iii-failures',
  },
  {
    category: 'CAPITAL ANALYSIS',
    categoryClass: 'category-capital',
    title: 'Institutional Money Movement: Q4 Portfolio Repositioning',
    excerpt: 'Top-tier funds are shifting allocation models based on three key signals...',
    author: 'BioIntel Research',
    date: 'Dec 12, 2024',
    readTime: '7 min read',
    popularity: 64,
    link: '/article/institutional-money',
  },
];

const FeaturedContentSection = () => {
  const [filter, setFilter] = useState<'latest' | 'popular'>('latest');

  const filteredRecentArticles = useMemo(() => {
    if (filter === 'popular') {
      return [...recentArticles].sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
    }

    return recentArticles;
  }, [filter]);

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
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-4xl font-display text-foreground/20">BI</span>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <span className={`category-tag ${featuredArticle.categoryClass} mb-4 inline-block`}>
                {featuredArticle.category}
              </span>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-accent transition-colors">
                <a href={featuredArticle.link}>{featuredArticle.title}</a>
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{featuredArticle.author}</span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              
              <a href={featuredArticle.link} className="arrow-link">
                READ FULL ANALYSIS
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </article>
        
        {/* Recent Articles List */}
        <div className="space-y-0">
          {filteredRecentArticles.map((article, index) => (
            <article 
              key={article.title} 
              className={`py-6 ${index !== filteredRecentArticles.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {article.hasImage !== false && (
                  <div className="lg:col-span-4">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className="text-4xl font-display text-foreground/20">BI</span>
                    </div>
                  </div>
                )}

                <div className={article.hasImage !== false ? 'lg:col-span-8' : 'lg:col-span-12'}>
                  <span className={`category-tag ${article.categoryClass} mb-4 inline-block`}>
                    {article.category}
                  </span>

                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-accent transition-colors">
                    <a href={article.link}>{article.title}</a>
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

        <div className="mt-10 w-full">
          <button type="button" className="btn-outline text-xs py-3 px-5 w-full text-center">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentSection;
