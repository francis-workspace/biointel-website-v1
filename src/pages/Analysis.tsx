import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedContentSection from '@/components/FeaturedContentSection';
import Footer from '@/components/Footer';

const Analysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="hero" className="py-12 lg:py-16 bg-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Regulation
              </h1>
              <p className="mt-4 text-base lg:text-lg text-muted-foreground">
                Regulatory updates and signals—FDA actions, timelines, holds, labels, and what changes probability.
              </p>
            </div>
          </div>
        </section>
        <HeroSection category="Regulation" />
        <FeaturedContentSection category="Regulation" />
      </main>
      <Footer />
    </div>
  );
};

export default Analysis;
