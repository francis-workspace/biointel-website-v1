import { TrendingUp, Microscope, BarChart3, Building2, FileText, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: TrendingUp,
    title: 'MARKET INTELLIGENCE',
    description: 'Funding, M&A, IPO trends, capital flow analysis',
    link: '/market',
  },
  {
    icon: Microscope,
    title: 'SCIENTIFIC SIGNALS',
    description: 'Breakthroughs, platform shifts, AI + biology',
    link: '/ai-science',
  },
  {
    icon: BarChart3,
    title: 'RISK & PROBABILITY',
    description: 'Trial failure patterns, capital mispricing',
    link: '/analysis',
  },
  {
    icon: Building2,
    title: 'COMPANY SPOTLIGHTS',
    description: 'Strategic analysis of biotech companies',
    link: '/companies',
  },
  {
    icon: FileText,
    title: 'EXECUTIVE BRIEF',
    description: 'CEO, investor, and operator insights',
    link: '/executive',
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-main">
        <h2 className="section-title">INTELLIGENCE BY CATEGORY</h2>
        <div className="section-divider" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.link}
              className="bg-background p-6 lg:p-8 group hover:bg-secondary/50 transition-colors"
            >
              <category.icon className="w-6 h-6 text-muted-foreground mb-4 group-hover:text-accent transition-colors" />
              
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                {category.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              
              <span className="arrow-link text-xs">
                VIEW ALL
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
