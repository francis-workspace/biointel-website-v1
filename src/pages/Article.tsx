import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import { useArticleBySlug } from '@/data/articlesApi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Article = () => {
  const { slug } = useParams();
  const { data: article, isLoading } = useArticleBySlug(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section id="hero" className="py-12 lg:py-16 bg-background">
            <div className="container-main">
              <div className="max-w-3xl mx-auto">
                <div className="h-8 w-3/4 bg-secondary/40" />
                <div className="mt-4 h-4 w-1/2 bg-secondary/30" />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (article === null) {
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
              {article.hasImage !== false && !!article.imageUrl && (
                <div className="mb-8">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="aspect-[16/9] w-full border border-border object-cover"
                    loading="lazy"
                    decoding="async"
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
                  {article.authorAvatarUrl ? (
                    <img
                      src={article.authorAvatarUrl}
                      alt={article.author}
                      className="w-8 h-8 rounded-full border border-border object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}

                  {article.authorSlug ? (
                    <Link to={`/author/${article.authorSlug}`} className="font-medium text-foreground/80 hover:text-accent">
                      {article.author}
                    </Link>
                  ) : (
                    <span className="font-medium text-foreground/80">{article.author}</span>
                  )}
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
                <div className="prose prose-slate max-w-none dark:prose-invert prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-pre:bg-secondary/30 prose-pre:border prose-pre:border-border prose-code:text-foreground">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      a: ({ children, href }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {article.content}
                  </ReactMarkdown>
                </div>
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
