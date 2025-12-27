import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 lg:py-16 bg-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                What is BioIntel?
              </h1>
              <p className="mt-4 text-base lg:text-lg text-muted-foreground">
                An independent-looking content platform focused on AI, biotechnology, biopharmaceutics, and healthcare innovation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14 bg-background">
          <div className="container-main">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-10">
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">Who it serves</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">Biotech & Biopharmaceutical Companies</div>
                      <div className="mt-2 text-sm text-muted-foreground">Drug discovery, development, and clinical trials.</div>
                    </div>
                    <div className="border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">AI in Medicine & Healthcare Technology</div>
                      <div className="mt-2 text-sm text-muted-foreground">Machine learning applications and predictive analytics.</div>
                    </div>
                    <div className="border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">Investment Community</div>
                      <div className="mt-2 text-sm text-muted-foreground">VC, private equity, and institutional investing in biotech/healthtech.</div>
                    </div>
                    <div className="border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">Research & Academia</div>
                      <div className="mt-2 text-sm text-muted-foreground">Scientists, researchers, and university programs.</div>
                    </div>
                    <div className="border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">Regulatory & Business Development</div>
                      <div className="mt-2 text-sm text-muted-foreground">FDA approvals, partnerships, and licensing deals.</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">Core pillars</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">AI in Drug Discovery</div>
                      <div className="mt-2 text-sm text-muted-foreground">Machine learning, predictive models, and computational biology.</div>
                    </div>
                    <div className="border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">Biopharmaceutical Industry</div>
                      <div className="mt-2 text-sm text-muted-foreground">Drug development, clinical trials, and regulatory news.</div>
                    </div>
                    <div className="border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">Biotech Innovation</div>
                      <div className="mt-2 text-sm text-muted-foreground">Gene therapy, CRISPR, synthetic biology, and emerging technologies.</div>
                    </div>
                    <div className="border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">Healthcare Investment</div>
                      <div className="mt-2 text-sm text-muted-foreground">Funding rounds, M&A, IPOs, and market analysis.</div>
                    </div>
                    <div className="border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">Medical Technology</div>
                      <div className="mt-2 text-sm text-muted-foreground">Digital health, diagnostics, and medical devices.</div>
                    </div>
                    <div className="border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">Regulatory & Policy</div>
                      <div className="mt-2 text-sm text-muted-foreground">FDA approvals, healthcare policy, and compliance.</div>
                    </div>
                  </div>
                </div>

                <div className="border border-border bg-secondary/30 p-6">
                  <h2 className="text-lg font-bold text-foreground">Editorial stance</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    BioIntel is designed to feel independent and research-driven combining clear writing, signal-first analysis, and practical context for decision-makers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
