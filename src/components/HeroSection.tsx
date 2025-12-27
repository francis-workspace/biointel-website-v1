import { ArrowRight } from 'lucide-react';

const latestItems = [
  {
    title: 'FDA Week: Signals From Clinical Holds, Fast Tracks, and Label Updates',
    href: '/news',
    author: 'BioIntel Desk',
    date: 'This week',
  },
  {
    title: 'What The Next Wave of Obesity Assets Means for Biotech Valuations',
    href: '/analysis',
    author: 'Research Team',
    date: 'Recently',
  },
  {
    title: 'Market Map: Key Catalysts to Watch Across Oncology and Rare Disease',
    href: '/market',
    author: 'Market Notes',
    date: 'Today',
  },
];

const featuredItem = {
  eyebrow: 'Featured analysis',
  title: 'Decoding Risk Across the Most Asymmetric Biotech Catalysts',
  excerpt:
    'A compact framework for evaluating signal vs noise across trial design, endpoints, financing terms, and competitive landscapes.',
  author: 'BioIntel',
  date: 'Latest',
  href: '/analysis',
};

const HeroSection = () => {
  return (
    <section className="py-10 lg:py-14 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="space-y-5 animate-fade-in">
              {latestItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex gap-4 rounded-xl border border-border bg-background hover:border-accent transition-colors p-4"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-muted to-muted/50 border border-border shrink-0" />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground leading-snug max-h-11 overflow-hidden group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted border border-border text-foreground/80 text-[10px] font-semibold">
                        {item.author
                          .split(' ')
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join('')}
                      </span>
                      <span className="truncate">{item.author}</span>
                      <span aria-hidden="true">•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            className="lg:col-span-7 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <a
              href={featuredItem.href}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-foreground"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/80" />
              <div className="absolute inset-0 opacity-35 bg-gradient-to-tr from-primary/30 via-transparent to-muted/20" />
              <div className="relative p-6 sm:p-8 lg:p-10 min-h-[320px] sm:min-h-[360px] flex flex-col justify-end">
                <div className="text-xs font-semibold tracking-wide text-background/70 uppercase">
                  {featuredItem.eyebrow}
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-background leading-tight">
                  {featuredItem.title}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-background/80 max-w-2xl">
                  {featuredItem.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-2 text-xs text-background/70">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-background/10 border border-background/20 text-background/90 text-[10px] font-semibold">
                      BI
                    </span>
                    <span className="font-medium text-background/85">{featuredItem.author}</span>
                    <span aria-hidden="true">•</span>
                    <span>{featuredItem.date}</span>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-background/90 group-hover:text-background transition-colors">
                    Read featured
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
