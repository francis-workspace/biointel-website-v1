import { TrendingUp, Microscope, BarChart3, Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: Newspaper,
    title: 'NEWS',
    description: 'The latest industry updates, deals, and headlines',
    link: '/news',
  },
  {
    icon: BarChart3,
    title: 'ANALYSIS',
    description: 'Deep dives into risk, catalysts, and what matters next',
    link: '/analysis',
  },
  {
    icon: TrendingUp,
    title: 'MARKET',
    description: 'Pricing signals, capital flows, and market narratives',
    link: '/market',
  },
  {
    icon: Microscope,
    title: 'AI & SCIENCE',
    description: 'AI-native tools, biology signals, and research-backed coverage',
    link: '/ai-science',
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
            <Link
              key={category.title}
              to={category.link}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
