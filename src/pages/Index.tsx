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
