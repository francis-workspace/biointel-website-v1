import { Check, ArrowRight } from 'lucide-react';

const keyPoints = [
  {
    title: 'Editorial Independence',
    description: 'No promotional content, objective analysis',
  },
  {
    title: 'Expert Analysis',
    description: 'Data-driven insights from industry veterans',
  },
  {
    title: 'Trusted by Leaders',
    description: 'Read by CEOs, investors, and strategic operators',
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container-main">
        <div className="max-w-3xl">
          <h2 className="section-title">WHAT BIOINTEL IS</h2>
          <div className="section-divider" />
          
          <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
            BioIntel is an independent biotech intelligence media brand that translates science, 
            capital, and risk into clear, actionable insight for biotech leaders and investors.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {keyPoints.map((point) => (
              <div key={point.title} className="flex gap-3">
                <Check className="w-5 h-5 text-category-executive shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <a href="/about" className="arrow-link">
            LEARN MORE ABOUT US
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
