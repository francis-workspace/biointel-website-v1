import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedContentSection from '@/components/FeaturedContentSection';
import Footer from '@/components/Footer';

const AiScience = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="hero" className="py-12 lg:py-16 bg-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                AI & Science
              </h1>
              <p className="mt-4 text-base lg:text-lg text-muted-foreground">
                Research-backed coverage of emerging biology, clinical data, and AI-native tools shaping how therapies are discovered, developed, and evaluated.
              </p>
            </div>
          </div>
        </section>
        <HeroSection category="AI & Science" />
        <FeaturedContentSection category="AI & Science" />
      </main>
      <Footer />
    </div>
  );
};

export default AiScience;
