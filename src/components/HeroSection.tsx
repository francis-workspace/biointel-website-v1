import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { PillarCategory } from '@/data/articles';
import { useFeaturedArticle, useRecentArticles } from '@/data/articlesApi';
import authorAvatar from '@/images/luffy.webp';

type HeroSectionProps = {
  category?: PillarCategory;
};

const HeroSection = ({ category }: HeroSectionProps) => {
  const fallbackImageUrl = '/placeholder.svg';

  const { data: recent } = useRecentArticles(category);
  const { data: featured } = useFeaturedArticle(category);

  const scopedLatestItems = (recent ?? []).slice(0, 3);
  const scopedFeaturedItem = featured;

  return (
    <section id="hero" className="py-10 lg:py-14 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="space-y-5 animate-fade-in">
              {scopedLatestItems.map((item) => (
                <div
                  key={item.slug}
                  className="group flex gap-4 rounded-xl border border-border bg-background hover:border-accent transition-colors p-4"
                >
                  {item.hasImage !== false && (
                    <img
                      src={item.imageUrl ?? fallbackImageUrl}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg border border-border shrink-0 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground leading-snug max-h-11 overflow-hidden group-hover:text-accent transition-colors">
                      <Link to={item.link}>{item.title}</Link>
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <img
                        src={authorAvatar}
                        alt="Author profile"
                        className="w-6 h-6 rounded-full border border-border object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="truncate">{item.author}</span>
                      <span aria-hidden="true">•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`lg:col-span-7 animate-fade-in ${
              scopedFeaturedItem ? '' : 'pointer-events-none opacity-70'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="group relative block overflow-hidden rounded-2xl border border-border bg-foreground">
              {scopedFeaturedItem?.hasImage !== false && (
                <img
                  src={scopedFeaturedItem?.imageUrl ?? fallbackImageUrl}
                  alt={scopedFeaturedItem?.title ?? 'Featured article'}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/25 to-black/55" />
              <div className="relative p-6 sm:p-8 lg:p-10 min-h-[320px] sm:min-h-[360px] flex flex-col justify-end">
                <div className="text-xs font-semibold tracking-wide text-background/70 uppercase">
                  Featured
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-background leading-tight">
                  {scopedFeaturedItem ? (
                    <Link to={scopedFeaturedItem.link}>{scopedFeaturedItem.title}</Link>
                  ) : null}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-background/80 max-w-2xl">
                  {scopedFeaturedItem?.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-2 text-xs text-background/70">
                    <img
                      src={authorAvatar}
                      alt="Author profile"
                      className="w-7 h-7 rounded-full border border-background/20 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="font-medium text-background/85">{scopedFeaturedItem?.author}</span>
                    <span aria-hidden="true">•</span>
                    <span>{scopedFeaturedItem?.date}</span>
                  </div>

                  {scopedFeaturedItem ? (
                    <Link
                      to={scopedFeaturedItem.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-background/90 group-hover:text-background transition-colors"
                    >
                      Read featured
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-background/90">
                      Read featured
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
