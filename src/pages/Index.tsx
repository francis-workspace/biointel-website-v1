import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedContentSection from '@/components/FeaturedContentSection';
import Footer from '@/components/Footer';
import { useSubscribeModal } from '@/components/useSubscribeModal';

const Index = () => {
  const { openSubscribe } = useSubscribeModal();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background min-h-[60vh] lg:min-h-[70vh] flex items-center py-12 lg:py-16">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Intelligence for the Future of Medicine
              </h1>
              <p className="mt-4 text-base lg:text-lg text-muted-foreground">
                BioIntel covers the signals that shape biotech—AI in drug discovery, biopharma industry dynamics, biotech innovation, healthcare investment, medical technology, and regulatory &amp; policy.
              </p>
              <div className="mt-8 flex justify-center">
                <button type="button" className="btn-primary" onClick={openSubscribe}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        <HeroSection />

        <section className="border-b border-border py-12 lg:py-16">
          <div className="container-main">
            <div className="bg-secondary border border-border p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                    Join the BioIntel newsletter
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Get curated biotech intelligence across AI, industry, innovation, investment, medtech, and policy—delivered to your inbox.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button type="button" className="btn-primary" onClick={openSubscribe}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturedContentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
