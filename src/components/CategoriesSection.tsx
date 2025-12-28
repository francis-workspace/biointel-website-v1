import { TrendingUp, Microscope, BarChart3, Scale, Cpu, Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: Cpu,
    title: 'AI IN DRUG DISCOVERY',
    description: 'Machine learning, predictive models, and computational biology',
    link: '/ai-drug-discovery',
  },
  {
    icon: BarChart3,
    title: 'BIOPHARMACEUTICAL INDUSTRY',
    description: 'Drug development, clinical trials, and industry signals',
    link: '/biopharma-industry',
  },
  {
    icon: Microscope,
    title: 'BIOTECH INNOVATION',
    description: 'Gene therapy, CRISPR, synthetic biology, and emerging tech',
    link: '/biotech-innovation',
  },
  {
    icon: TrendingUp,
    title: 'HEALTHCARE INVESTMENT',
    description: 'Funding, M&A, IPOs, and market analysis',
    link: '/healthcare-investment',
  },
  {
    icon: Stethoscope,
    title: 'MEDICAL TECHNOLOGY',
    description: 'Digital health, diagnostics, and medical devices',
    link: '/medical-technology',
  },
  {
    icon: Scale,
    title: 'REGULATORY & POLICY',
    description: 'FDA approvals, healthcare policy, and compliance',
    link: '/regulatory-policy',
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-main">
        <h2 className="section-title">INTELLIGENCE BY CATEGORY</h2>
        <div className="section-divider" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
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
