import { TrendingUp, AlertTriangle, DollarSign, Atom, ArrowRight } from 'lucide-react';

const intelligenceCards = [
  {
    icon: TrendingUp,
    label: 'MARKET SIGNAL',
    dataPoint: '↑ 34%',
    headline: 'Q4 Funding Trends',
    description: 'Institutional capital shifts toward AI-enabled platforms',
    link: '/markets',
    linkText: 'VIEW MARKETS',
    accentColor: 'text-category-market',
  },
  {
    icon: AlertTriangle,
    label: 'RISK ANALYSIS',
    dataPoint: '67%',
    headline: 'Phase II Failure Rate',
    description: 'Concentrated in three predictable categories',
    link: '/industry',
    linkText: 'VIEW INDUSTRY',
    accentColor: 'text-category-risk',
  },
  {
    icon: DollarSign,
    label: 'CAPITAL FLOWS',
    dataPoint: '$2.3B',
    headline: 'New Deal Volume',
    description: 'Where investors are placing bets this quarter',
    link: '/markets',
    linkText: 'VIEW MARKETS',
    accentColor: 'text-category-capital',
  },
  {
    icon: Atom,
    label: 'SCIENTIFIC SIGNAL',
    dataPoint: '12',
    headline: 'AI Trial Milestones',
    description: 'Breakthrough vs hype in latest clinical data',
    link: '/ai-science/trial-milestones',
    linkText: 'DEEP DIVE',
    accentColor: 'text-category-science',
  },
];

const AtAGlanceSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-main">
        <h2 className="section-title">THIS WEEK'S INTELLIGENCE</h2>
        <div className="section-divider" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {intelligenceCards.map((card) => (
            <div key={card.label} className="card-intel group">
              <div className="flex items-center gap-2 mb-4">
                <card.icon className={`w-4 h-4 ${card.accentColor}`} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {card.label}
                </span>
              </div>
              
              <div className={`data-point ${card.accentColor} mb-3`}>
                {card.dataPoint}
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {card.headline}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-6">
                {card.description}
              </p>
              
              <a href={card.link} className="arrow-link">
                {card.linkText}
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtAGlanceSection;
