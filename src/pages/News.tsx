import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedContentSection from '@/components/FeaturedContentSection';
import Footer from '@/components/Footer';

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 lg:py-16 bg-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Industry News
              </h1>
              <p className="mt-4 text-base lg:text-lg text-muted-foreground">
                The latest business news and updates related to big tech and tech startups, including industry trends, events, new hires, and layoffs. We get the scoops.
              </p>
            </div>
          </div>
        </section>
        <HeroSection />
        <FeaturedContentSection />
      </main>
      <Footer />
    </div>
  );
};

export default News;
