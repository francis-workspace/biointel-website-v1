export type PillarCategory =
  | 'AI in Drug Discovery'
  | 'Biopharmaceutical Industry'
  | 'Biotech Innovation'
  | 'Healthcare Investment'
  | 'Medical Technology'
  | 'Regulatory & Policy';

export type Article = {
  slug: string;
  category: PillarCategory;
  categoryClass:
    | 'category-ai-drug-discovery'
    | 'category-biopharma-industry'
    | 'category-biotech-innovation'
    | 'category-healthcare-investment'
    | 'category-medical-technology'
    | 'category-regulatory-policy';
  title: string;
  excerpt: string;
  author: string;
  authorSlug?: string;
  authorAvatarUrl?: string;
  date: string;
  readTime: string;
  deck?: string;
  imageUrl?: string;
  content: string;
  link: string;
  popularity?: number;
  hasImage?: boolean;
};

export const featuredArticle: Article | null = null;

export const recentArticles: Article[] = [];

export const getScopedArticles = (category?: PillarCategory) => {
  const all = [...(featuredArticle ? [featuredArticle] : []), ...recentArticles];
  if (!category) return all;
  return all.filter((a) => a.category === category);
};

export const getArticleBySlug = (slug: string) => {
  const all = [...(featuredArticle ? [featuredArticle] : []), ...recentArticles];
  return all.find((a) => a.slug === slug);
};
