import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredArticle, recentArticles, type PillarCategory } from '@/data/articles';
import blogThumbnails from '@/images/blog-thumbnails.webp';
import authorAvatar from '@/images/luffy.webp';

type HeroSectionProps = {
  category?: PillarCategory;
};

const HeroSection = ({ category }: HeroSectionProps) => {
  const scopedLatestItems = category
    ? recentArticles.filter((a) => a.category === category).slice(0, 3)
    : recentArticles.slice(0, 3);

  const scopedFeaturedItem = category
    ? (recentArticles.find((a) => a.category === category) ?? featuredArticle)
    : featuredArticle;

  return (
    <section id="hero" className="py-10 lg:py-14 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="space-y-5 animate-fade-in">
              {scopedLatestItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="group flex gap-4 rounded-xl border border-border bg-background hover:border-accent transition-colors p-4"
                >
                  <img
                    src={blogThumbnails}
                    alt="Blog thumbnail"
                    className="w-16 h-16 rounded-lg border border-border shrink-0 object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground leading-snug max-h-11 overflow-hidden group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <img
                        src={authorAvatar}
                        alt="Author profile"
                        className="w-6 h-6 rounded-full border border-border object-cover"
                        loading="lazy"
                      />
                      <span className="truncate">{item.author}</span>
                      <span aria-hidden="true">•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div
            className="lg:col-span-7 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <Link
              to={scopedFeaturedItem.link}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-foreground"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/80" />
              <div className="absolute inset-0 opacity-35 bg-gradient-to-tr from-primary/30 via-transparent to-muted/20" />
              <div className="relative p-6 sm:p-8 lg:p-10 min-h-[320px] sm:min-h-[360px] flex flex-col justify-end">
                <div className="text-xs font-semibold tracking-wide text-background/70 uppercase">
                  Featured
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-background leading-tight">
                  {scopedFeaturedItem.title}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-background/80 max-w-2xl">
                  {scopedFeaturedItem.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-2 text-xs text-background/70">
                    <img
                      src={authorAvatar}
                      alt="Author profile"
                      className="w-7 h-7 rounded-full border border-background/20 object-cover"
                      loading="lazy"
                    />
                    <span className="font-medium text-background/85">{scopedFeaturedItem.author}</span>
                    <span aria-hidden="true">•</span>
                    <span>{scopedFeaturedItem.date}</span>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-background/90 group-hover:text-background transition-colors">
                    Read featured
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
