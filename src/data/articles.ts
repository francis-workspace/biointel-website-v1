export type PillarCategory = 'Industry' | 'Markets' | 'Regulation' | 'AI & Science';

export type ArticleContentBlock =
  | {
      type: 'h2';
      key: string;
      text: string;
    }
  | {
      type: 'p';
      key: string;
      text: string;
    };

export type Article = {
  slug: string;
  category: PillarCategory;
  categoryClass: 'category-industry' | 'category-markets' | 'category-regulation' | 'category-ai';
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  deck?: string;
  content: ArticleContentBlock[];
  link: string;
  popularity?: number;
  hasImage?: boolean;
};

export const featuredArticle: Article = {
  slug: 'decoding-risk-asymmetric-catalysts',
  category: 'Industry',
  categoryClass: 'category-industry',
  title: 'Decoding Risk Across the Most Asymmetric Biotech Catalysts',
  excerpt:
    'A compact framework for evaluating signal vs noise across trial design, endpoints, financing terms, and competitive landscapes—so you can separate momentum from durable signal.',
  author: 'BioIntel Research',
  date: 'Dec 15, 2025',
  readTime: '8 min read',
  deck:
    'A signal-first checklist for sizing asymmetric biotech setups—what to measure, what to ignore, and how to avoid getting trapped by narrative.',
  content: [
    {
      type: 'p',
      key: 'p-1',
      text: 'Asymmetry is the reason biotech exists as an asset class—and the reason it punishes sloppy thinking. The same setup can look “obvious” on a slide deck and still be fragile once you stress test the assumptions.',
    },
    {
      type: 'h2',
      key: 'h2-1',
      text: 'Start with the question: what must be true?',
    },
    {
      type: 'p',
      key: 'p-2',
      text: 'Define the single claim the thesis relies on (target engagement, endpoint translation, durability, safety margin). Then list the minimum evidence required for that claim to hold. If you can’t write it down, you don’t have a thesis—you have a story.',
    },
    {
      type: 'h2',
      key: 'h2-2',
      text: 'Trial design is the first hidden risk trade',
    },
    {
      type: 'p',
      key: 'p-3',
      text: 'Powering assumptions, comparator choice, and endpoint hierarchy can manufacture confidence. Look for places where the trial can “win” without proving the core claim—and where it can “lose” even if the biology works.',
    },
    {
      type: 'h2',
      key: 'h2-3',
      text: 'Financing terms tell you what insiders believe',
    },
    {
      type: 'p',
      key: 'p-4',
      text: 'Non-dilutive capital, structured deals, and insider participation don’t guarantee upside—but they do reveal who is willing to underwrite the timeline and risk. In asymmetric setups, the balance sheet is often the real catalyst.',
    },
  ],
  link: '/article/decoding-risk-asymmetric-catalysts',
};

export const recentArticles: Article[] = [
  {
    slug: 'fda-week-clinical-holds-fast-tracks-label-updates',
    category: 'Regulation',
    categoryClass: 'category-regulation',
    title: 'FDA Week: Signals From Clinical Holds, Fast Tracks, and Label Updates',
    excerpt: 'A quick readout of regulatory moves that matter for near-term catalysts and sentiment.',
    author: 'BioIntel Research',
    date: 'Dec 14, 2025',
    readTime: '6 min read',
    deck:
      'A practical scan of what changed at the FDA this week—and how to think about second-order implications for timelines and probability-weighted value.',
    content: [
      {
        type: 'p',
        key: 'p-1',
        text: 'Most weeks, FDA updates read like noise. This week had signal: clinical holds that reshape timelines, fast tracks that move investor attention, and label language that quietly changes the competitive landscape.',
      },
      {
        type: 'h2',
        key: 'h2-1',
        text: 'Clinical holds: treat them as timeline risk first',
      },
      {
        type: 'p',
        key: 'p-2',
        text: 'The most common investor mistake is treating a hold as a binary “good/bad” on the asset. In practice, the first-order impact is duration. Ask: what has to be remediated (CMC, tox, protocol), and who controls that clock?',
      },
      {
        type: 'h2',
        key: 'h2-2',
        text: 'Fast track: an attention catalyst, not a value proof',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'Fast track often compresses perceived risk, even when the underlying evidence hasn’t changed. Use it to map upcoming interactions and decision points—but don’t confuse designation with differentiation.',
      },
      {
        type: 'h2',
        key: 'h2-3',
        text: 'Label updates: read the words that exclude competitors',
      },
      {
        type: 'p',
        key: 'p-4',
        text: 'Language around line of therapy, biomarker requirements, and contraindications can move market share more than efficacy curves. If a label narrows the addressable set, pricing power can change overnight.',
      },
    ],
    popularity: 72,
    link: '/article/fda-week-clinical-holds-fast-tracks-label-updates',
  },
  {
    slug: 'deal-watch-partnership-structures-back-2024',
    category: 'Industry',
    categoryClass: 'category-industry',
    title: 'Deal Watch: Partnership Structures That Are Back in 2024',
    excerpt: 'How milestone ladders and regional rights are being priced as risk appetite returns.',
    author: 'BioIntel Research',
    date: 'Dec 13, 2025',
    readTime: '10 min read',
    content: [],
    popularity: 91,
    hasImage: false,
    link: '/article/deal-watch-partnership-structures-back-2024',
  },
  {
    slug: 'hiring-layoffs-operator-moves-signal-q1',
    category: 'Industry',
    categoryClass: 'category-industry',
    title: 'Hiring & Layoffs: What Operator Moves Signal Into Q1',
    excerpt: 'A signal-first view of leadership changes and what they tend to precede.',
    author: 'BioIntel Research',
    date: 'Dec 12, 2025',
    readTime: '7 min read',
    content: [],
    popularity: 64,
    link: '/article/hiring-layoffs-operator-moves-signal-q1',
  },
  {
    slug: 'trial-design-pitfalls-false-confidence',
    category: 'Industry',
    categoryClass: 'category-industry',
    title: 'Trial Design Pitfalls That Inflate False Confidence',
    excerpt: 'Where endpoint choices, powering assumptions, and comparator selection quietly distort the signal.',
    author: 'BioIntel Research',
    date: 'Dec 11, 2025',
    readTime: '9 min read',
    content: [],
    popularity: 88,
    link: '/article/trial-design-pitfalls-false-confidence',
  },
  {
    slug: 'competitive-landscapes-best-in-class-not-investable',
    category: 'Industry',
    categoryClass: 'category-industry',
    title: 'Competitive Landscapes: When “Best-in-Class” Isn’t Investable',
    excerpt: 'A checklist to map differentiation, switching costs, and realistic share capture.',
    author: 'BioIntel Research',
    date: 'Dec 10, 2025',
    readTime: '8 min read',
    content: [],
    popularity: 61,
    link: '/article/competitive-landscapes-best-in-class-not-investable',
  },
  {
    slug: 'read-early-biomarker-data-without-overfitting',
    category: 'Industry',
    categoryClass: 'category-industry',
    title: 'How to Read Early Biomarker Data Without Overfitting',
    excerpt: 'Patterns that tend to break at Phase II/III—and how to stress test the narrative.',
    author: 'BioIntel Research',
    date: 'Dec 09, 2025',
    readTime: '7 min read',
    content: [],
    popularity: 57,
    link: '/article/read-early-biomarker-data-without-overfitting',
  },
  {
    slug: 'market-map-catalysts-oncology-rare-disease',
    category: 'Markets',
    categoryClass: 'category-markets',
    title: 'Market Map: Key Catalysts to Watch Across Oncology and Rare Disease',
    excerpt: 'A forward calendar of events that repeatedly move pricing, flows, and positioning.',
    author: 'BioIntel Research',
    date: 'Dec 08, 2025',
    readTime: '6 min read',
    deck:
      'A working calendar you can actually use—what tends to move prices, when positioning builds, and which catalysts are usually mispriced.',
    content: [
      {
        type: 'p',
        key: 'p-1',
        text: 'Catalysts are where biotech prices discover truth—often violently. The edge rarely comes from knowing “a readout is coming.” It comes from understanding how positioning accumulates, what the market expects, and which outcomes the tape can’t absorb.',
      },
      {
        type: 'h2',
        key: 'h2-1',
        text: 'Separate informational catalysts from mechanical ones',
      },
      {
        type: 'p',
        key: 'p-2',
        text: 'Topline data is informational. Financing, index events, and liquidity shocks are mechanical. A small-cap can move 30% on a quiet press release if it changes the funding runway—because the float is thin and forced buyers show up.',
      },
      {
        type: 'h2',
        key: 'h2-2',
        text: 'Watch expectation, not consensus',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'Consensus is a spreadsheet. Expectation is the price. Use recent volume, borrow availability, and chatter velocity to estimate how crowded the trade is going into the event.',
      },
      {
        type: 'h2',
        key: 'h2-3',
        text: 'Rare disease vs oncology: what changes',
      },
      {
        type: 'p',
        key: 'p-4',
        text: 'Rare disease catalysts hinge on phenotype clarity and durability. Oncology catalysts hinge on comparator choice, line-of-therapy, and whether the curve separates early. Different narratives, different failure modes.',
      },
    ],
    popularity: 79,
    link: '/article/market-map-catalysts-oncology-rare-disease',
  },
  {
    slug: 'microcap-biotech-liquidity-matters',
    category: 'Markets',
    categoryClass: 'category-markets',
    title: 'Why Microcap Biotech Liquidity Matters More Than the Thesis',
    excerpt: 'How float, holders, and financing terms reshape outcomes regardless of data.',
    author: 'BioIntel Research',
    date: 'Dec 07, 2025',
    readTime: '6 min read',
    content: [],
    popularity: 68,
    link: '/article/microcap-biotech-liquidity-matters',
  },
  {
    slug: 'capital-formation-terms-signal-strength-vs-distress',
    category: 'Markets',
    categoryClass: 'category-markets',
    title: 'Capital Formation: Terms That Signal Strength vs. Distress',
    excerpt: 'A practical guide to reading financing structures, covenants, and insider support.',
    author: 'BioIntel Research',
    date: 'Dec 06, 2025',
    readTime: '7 min read',
    content: [],
    popularity: 63,
    link: '/article/capital-formation-terms-signal-strength-vs-distress',
  },
  {
    slug: 'ai-native-biology-real-vs-demo-ware',
    category: 'AI & Science',
    categoryClass: 'category-ai',
    title: 'AI-Native Biology: What’s Real vs. Demo-Ware',
    excerpt: 'A framework for evaluating model validity, data moats, and clinical translation.',
    author: 'BioIntel Research',
    date: 'Dec 05, 2025',
    readTime: '8 min read',
    content: [],
    popularity: 74,
    link: '/article/ai-native-biology-real-vs-demo-ware',
  },
  {
    slug: 'platform-shifts-next-wave-screening-tech',
    category: 'AI & Science',
    categoryClass: 'category-ai',
    title: 'Platform Shifts: Signals from the Next Wave of Screening Tech',
    excerpt: 'Where throughput improvements actually translate to better molecules—and where they don’t.',
    author: 'BioIntel Research',
    date: 'Dec 04, 2025',
    readTime: '7 min read',
    content: [],
    popularity: 59,
    link: '/article/platform-shifts-next-wave-screening-tech',
  },
  {
    slug: 'reproducibility-model-risk-translational-datasets',
    category: 'AI & Science',
    categoryClass: 'category-ai',
    title: 'Reproducibility and Model Risk in Translational Datasets',
    excerpt: 'Common failure modes when training on curated biology and how to spot them early.',
    author: 'BioIntel Research',
    date: 'Dec 03, 2025',
    readTime: '9 min read',
    content: [],
    popularity: 66,
    link: '/article/reproducibility-model-risk-translational-datasets',
  },
];

export const getScopedArticles = (category?: PillarCategory) => {
  const all = [featuredArticle, ...recentArticles];
  if (!category) return all;
  return all.filter((a) => a.category === category);
};

export const getArticleBySlug = (slug: string) => {
  const all = [featuredArticle, ...recentArticles];
  return all.find((a) => a.slug === slug);
};
