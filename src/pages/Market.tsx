import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedContentSection from '@/components/FeaturedContentSection';
import Footer from '@/components/Footer';

const Market = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="hero" className="py-12 lg:py-16 bg-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Markets
              </h1>
              <p className="mt-4 text-base lg:text-lg text-muted-foreground">
                Pricing signals, capital formation, and market structure—what moves biotech stocks and why.
              </p>
            </div>
          </div>
        </section>
        <HeroSection category="Markets" />
        <FeaturedContentSection category="Markets" />
      </main>
      <Footer />
    </div>
  );
};

export default Market;
