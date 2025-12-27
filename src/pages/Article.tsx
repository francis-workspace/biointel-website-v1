import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'react-router-dom';
import { getArticleBySlug } from '@/data/articles';
import blogThumbnails from '@/images/blog-thumbnails.webp';
import authorAvatar from '@/images/luffy.webp';

const Article = () => {
  const { slug } = useParams();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section id="hero" className="py-12 lg:py-16 bg-background">
            <div className="container-main">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Article not found
                </h1>
                <p className="mt-4 text-base lg:text-lg text-muted-foreground">
                  This article may have moved or is not yet published.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="hero" className="py-12 lg:py-16 bg-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              {article.hasImage !== false && (
                <div className="mb-8">
                  <img
                    src={blogThumbnails}
                    alt="Blog thumbnail"
                    className="aspect-[16/9] w-full border border-border object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <span className={`category-tag ${article.categoryClass} mb-4 inline-block`}>
                {article.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {article.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <img
                    src={authorAvatar}
                    alt="Author profile"
                    className="w-8 h-8 rounded-full border border-border object-cover"
                    loading="lazy"
                  />
                  <span className="font-medium text-foreground/80">{article.author}</span>
                </span>
                <span aria-hidden="true">•</span>
                <span>{article.date}</span>
                <span aria-hidden="true">•</span>
                <span>{article.readTime}</span>
              </div>

              {article.deck && (
                <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {article.deck}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto space-y-8">
              {article.content.length === 0 ? (
                <div className="border border-border bg-secondary/30 p-6">
                  <h2 className="text-lg font-bold text-foreground">Content coming soon</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    This post is available as a preview card. Full write-up will be added next.
                  </p>
                </div>
              ) : (
                article.content.map((block) => {
                  if (block.type === 'h2') {
                    return (
                      <h2 key={block.key} className="text-xl lg:text-2xl font-bold text-foreground">
                        {block.text}
                      </h2>
                    );
                  }

                  return (
                    <p key={block.key} className="text-base text-muted-foreground leading-relaxed">
                      {block.text}
                    </p>
                  );
                })
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
