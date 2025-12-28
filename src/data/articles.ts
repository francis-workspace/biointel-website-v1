export type PillarCategory =
  | 'AI in Drug Discovery'
  | 'Biopharmaceutical Industry'
  | 'Biotech Innovation'
  | 'Healthcare Investment'
  | 'Medical Technology'
  | 'Regulatory & Policy';

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
    }
  | {
      type: 'link';
      key: string;
      text: string;
      href: string;
    };

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
  date: string;
  readTime: string;
  deck?: string;
  imageUrl?: string;
  content: ArticleContentBlock[];
  link: string;
  popularity?: number;
  hasImage?: boolean;
};

export const featuredArticle: Article = {
  slug: 'decoding-risk-asymmetric-catalysts',
  category: 'Biopharmaceutical Industry',
  categoryClass: 'category-biopharma-industry',
  title: 'Decoding Risk Across the Most Asymmetric Biotech Catalysts',
  excerpt:
    'A compact framework for evaluating signal vs noise across trial design, endpoints, financing terms, and competitive landscapes—so you can separate momentum from durable signal.',
  author: 'BioIntel Research',
  date: 'Dec 15, 2025',
  readTime: '8 min read',
  imageUrl:
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
  deck:
    'A signal-first checklist for sizing asymmetric biotech setups—what to measure, what to ignore, and how to avoid getting trapped by narrative.',
  content: [
    {
      type: 'h2',
      key: 'h2-1',
      text: 'Summary',
    },
    {
      type: 'p',
      key: 'p-2',
      text: 'Asymmetric biotech setups can deliver outsized returns, but only if you separate durable signal from narrative momentum. This guide lays out a practical way to evaluate risk across biology, trial design, and financing so you can size conviction with fewer blind spots.',
    },
    {
      type: 'h2',
      key: 'h2-2',
      text: 'Key insights',
    },
    {
      type: 'p',
      key: 'p-4',
      text: 'Asymmetry is the reason biotech exists as an asset class—and the reason it punishes sloppy thinking. The same program can look “obvious” on a deck and still be fragile once you stress test what must be true. Start by writing the thesis as a single falsifiable claim (target engagement translates to an endpoint; durability is sufficient; safety margin holds at real-world dosing). Then list the minimum evidence you need to believe it. If you can’t write this down, you don’t have a thesis—you have a story.',
    },
    {
      type: 'p',
      key: 'p-5',
      text: 'Next, treat trial design as a risk trade, not a formality. Powering assumptions, comparator choice, endpoint hierarchy, and enrichment can manufacture confidence. Ask where the trial can “win” without proving the core claim (surrogate endpoints, permissive populations) and where it can “lose” even if the biology works (noisy endpoints, weak comparators, underpowered subgroups). The goal is to map how data could be misread and how that would affect timelines and financing.',
    },
    {
      type: 'p',
      key: 'p-6',
      text: 'Finally, read the balance sheet like it’s part of the clinical package. Structured financings, non-dilutive capital, royalty deals, and insider participation don’t guarantee upside—but they reveal who is willing to underwrite the clock. In many “asymmetric” stories, the real catalyst is runway: if a company can survive to the next inflection without punitive dilution, the probability-weighted value changes. Conversely, even great data can get trapped if liquidity is thin and capital is scarce.',
    },
    {
      type: 'p',
      key: 'p-7',
      text: 'Use this framework to make your decision explicit: what is the highest-impact uncertainty, what evidence would reduce it, and what is the cost of waiting? When you can answer those questions, you’re no longer buying a narrative—you’re underwriting a timeline with defined failure modes.',
    },
    {
      type: 'h2',
      key: 'h2-3',
      text: 'Source',
    },
    {
      type: 'link',
      key: 'link-1',
      text: 'View original source',
      href: 'https://www.nature.com/',
    },
    {
      type: 'h2',
      key: 'h2-4',
      text: 'Published',
    },
    {
      type: 'p',
      key: 'p-8',
      text: 'Dec 28, 2025',
    },
  ],
  link: '/article/decoding-risk-asymmetric-catalysts',
};

export const recentArticles: Article[] = [
  {
    slug: 'fda-week-clinical-holds-fast-tracks-label-updates',
    category: 'Regulatory & Policy',
    categoryClass: 'category-regulatory-policy',
    title: 'FDA Week: Signals From Clinical Holds, Fast Tracks, and Label Updates',
    excerpt: 'A quick readout of regulatory moves that matter for near-term catalysts and sentiment.',
    author: 'BioIntel Research',
    date: 'Dec 14, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1753001111844-2fe96e896995?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'A practical scan of what changed at the FDA this week—and how to think about second-order implications for timelines and probability-weighted value.',
    content: [
      {
        type: 'h2',
        key: 'h2-1',
        text: 'Summary',
      },
      {
        type: 'p',
        key: 'p-2',
        text: 'Most FDA updates are noise, but a few categories repeatedly change timelines and probability of success. This recap explains how to interpret holds, fast track designations, and label language so you can separate attention catalysts from true value change.',
      },
      {
        type: 'h2',
        key: 'h2-2',
        text: 'Key insights',
      },
      {
        type: 'p',
        key: 'p-4',
        text: 'Clinical holds should be treated as timeline risk first, not a binary “good/bad” verdict on the biology. The key questions are practical: what exactly has to be remediated (CMC deficiencies, tox signals, protocol changes), what evidence will satisfy the FDA, and who controls the clock (the sponsor, a manufacturing partner, or an external CRO)? A hold that is operationally fixable can be a delay; a hold that touches mechanism risk can be a thesis break. Your job is to distinguish the two quickly.',
      },
      {
        type: 'p',
        key: 'p-5',
        text: 'Fast Track is often an attention catalyst because it compresses perceived risk and increases the cadence of regulatory interactions. But it is not proof of differentiation. Use it to map upcoming meeting cadence, potential rolling submissions, and the decision points that could move timelines. Then ask the harder question: did the evidence quality improve, or did the label of “fast track” simply make the market more willing to believe?',
      },
      {
        type: 'p',
        key: 'p-6',
        text: 'Label updates are the quietest—and sometimes most powerful—competitive signal. Language around line of therapy, biomarker requirements, contraindications, and combination rules can shift market share more than an efficacy curve. Read labels like legal documents: what patient populations are included, which are excluded, and what will payers or guidelines likely do with the new language? Small wording changes can alter pricing power and the practical addressable market.',
      },
      {
        type: 'p',
        key: 'p-7',
        text: 'The takeaway: treat regulatory signals as probabilistic updates. Holds change timeline distributions. Designations change attention and process speed. Labels change the market definition. When you translate each update into “what changes in timelines, evidence requirements, and market access,” you get clarity—without overreacting to headlines.',
      },
      {
        type: 'h2',
        key: 'h2-3',
        text: 'Source',
      },
      {
        type: 'link',
        key: 'link-1',
        text: 'View original source',
        href: 'https://www.fda.gov/',
      },
      {
        type: 'h2',
        key: 'h2-4',
        text: 'Published',
      },
      {
        type: 'p',
        key: 'p-8',
        text: 'Dec 28, 2025',
      },
    ],
    popularity: 72,
    link: '/article/fda-week-clinical-holds-fast-tracks-label-updates',
  },
  {
    slug: 'deal-watch-partnership-structures-back-2024',
    category: 'Healthcare Investment',
    categoryClass: 'category-healthcare-investment',
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
    category: 'Biopharmaceutical Industry',
    categoryClass: 'category-biopharma-industry',
    title: 'Hiring & Layoffs: What Operator Moves Signal Into Q1',
    excerpt: 'A signal-first view of leadership changes and what they tend to precede.',
    author: 'BioIntel Research',
    date: 'Dec 12, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1758210784345-96fc36926234?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 64,
    link: '/article/hiring-layoffs-operator-moves-signal-q1',
  },
  {
    slug: 'trial-design-pitfalls-false-confidence',
    category: 'Biopharmaceutical Industry',
    categoryClass: 'category-biopharma-industry',
    title: 'Trial Design Pitfalls That Inflate False Confidence',
    excerpt: 'Where endpoint choices, powering assumptions, and comparator selection quietly distort the signal.',
    author: 'BioIntel Research',
    date: 'Dec 11, 2025',
    readTime: '9 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 88,
    link: '/article/trial-design-pitfalls-false-confidence',
  },
  {
    slug: 'competitive-landscapes-best-in-class-not-investable',
    category: 'Healthcare Investment',
    categoryClass: 'category-healthcare-investment',
    title: 'Competitive Landscapes: When “Best-in-Class” Isn’t Investable',
    excerpt: 'A checklist to map differentiation, switching costs, and realistic share capture.',
    author: 'BioIntel Research',
    date: 'Dec 10, 2025',
    readTime: '8 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1753001111844-2fe96e896995?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 61,
    link: '/article/competitive-landscapes-best-in-class-not-investable',
  },
  {
    slug: 'read-early-biomarker-data-without-overfitting',
    category: 'Biopharmaceutical Industry',
    categoryClass: 'category-biopharma-industry',
    title: 'How to Read Early Biomarker Data Without Overfitting',
    excerpt: 'Patterns that tend to break at Phase II/III—and how to stress test the narrative.',
    author: 'BioIntel Research',
    date: 'Dec 09, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 57,
    link: '/article/read-early-biomarker-data-without-overfitting',
  },
  {
    slug: 'market-map-catalysts-oncology-rare-disease',
    category: 'Healthcare Investment',
    categoryClass: 'category-healthcare-investment',
    title: 'Market Map: Key Catalysts to Watch Across Oncology and Rare Disease',
    excerpt: 'A forward calendar of events that repeatedly move pricing, flows, and positioning.',
    author: 'BioIntel Research',
    date: 'Dec 08, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1742076553114-cfd4f27de46f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'A working calendar you can actually use—what tends to move prices, when positioning builds, and which catalysts are usually mispriced.',
    content: [
      {
        type: 'h2',
        key: 'h2-1',
        text: 'Summary',
      },
      {
        type: 'p',
        key: 'p-2',
        text: 'Biotech catalysts move prices because they change what the market believes about timelines, probability, and financing risk. This map outlines how to categorize catalysts (informational vs mechanical), how expectation forms, and why oncology and rare disease events behave differently.',
      },
      {
        type: 'h2',
        key: 'h2-2',
        text: 'Key insights',
      },
      {
        type: 'p',
        key: 'p-4',
        text: 'Catalysts are where biotech prices discover truth—often violently. The edge rarely comes from knowing “a readout is coming.” It comes from understanding how positioning accumulates, what the market expects, and which outcomes the tape can’t absorb. Start by separating informational catalysts (topline data, endpoint readouts, FDA decisions) from mechanical catalysts (financing, index inclusion, liquidity shocks). Mechanical events can move a small-cap 20–30% on a quiet press release simply because the runway changes and forced buyers show up.',
      },
      {
        type: 'p',
        key: 'p-5',
        text: 'Next, watch expectation—not consensus. Consensus is a spreadsheet; expectation is the price. Use volume trends, borrow availability, and the velocity of investor chatter to estimate how crowded positioning is going into an event. When a trade is crowded, “good” outcomes can be fully priced while “slightly less good” outcomes can crash the stock. Your job is to frame outcomes relative to expectation, not relative to the best-case narrative.',
      },
      {
        type: 'p',
        key: 'p-6',
        text: 'Finally, treat oncology and rare disease differently. Rare disease catalysts hinge on phenotype clarity, functional endpoints, and durability; a small n can still be persuasive if the effect is obvious and sustained. Oncology catalysts hinge on comparator choice, line-of-therapy, and whether curves separate early—and competition can reprice the story overnight. Different narratives, different failure modes. When you map catalysts by “what changes the probability-weighted timeline and financing runway,” you get a calendar you can actually trade and invest against.',
      },
      {
        type: 'h2',
        key: 'h2-3',
        text: 'Source',
      },
      {
        type: 'link',
        key: 'link-1',
        text: 'View original source',
        href: 'https://www.nature.com/',
      },
      {
        type: 'h2',
        key: 'h2-4',
        text: 'Published',
      },
      {
        type: 'p',
        key: 'p-7',
        text: 'Dec 28, 2025',
      },
    ],
    popularity: 79,
    link: '/article/market-map-catalysts-oncology-rare-disease',
  },
  {
    slug: 'microcap-biotech-liquidity-matters',
    category: 'Healthcare Investment',
    categoryClass: 'category-healthcare-investment',
    title: 'Why Microcap Biotech Liquidity Matters More Than the Thesis',
    excerpt: 'How float, holders, and financing terms reshape outcomes regardless of data.',
    author: 'BioIntel Research',
    date: 'Dec 07, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1742076553114-cfd4f27de46f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 68,
    link: '/article/microcap-biotech-liquidity-matters',
  },
  {
    slug: 'capital-formation-terms-signal-strength-vs-distress',
    category: 'Healthcare Investment',
    categoryClass: 'category-healthcare-investment',
    title: 'Capital Formation: Terms That Signal Strength vs. Distress',
    excerpt: 'A practical guide to reading financing structures, covenants, and insider support.',
    author: 'BioIntel Research',
    date: 'Dec 06, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1753001111844-2fe96e896995?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 63,
    link: '/article/capital-formation-terms-signal-strength-vs-distress',
  },
  {
    slug: 'ai-native-biology-real-vs-demo-ware',
    category: 'AI in Drug Discovery',
    categoryClass: 'category-ai-drug-discovery',
    title: 'AI-Native Biology: What’s Real vs. Demo-Ware',
    excerpt: 'A framework for evaluating model validity, data moats, and clinical translation.',
    author: 'BioIntel Research',
    date: 'Dec 05, 2025',
    readTime: '8 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1664447990726-355422d41054?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 74,
    link: '/article/ai-native-biology-real-vs-demo-ware',
  },
  {
    slug: 'platform-shifts-next-wave-screening-tech',
    category: 'AI in Drug Discovery',
    categoryClass: 'category-ai-drug-discovery',
    title: 'Platform Shifts: Signals from the Next Wave of Screening Tech',
    excerpt: 'Where throughput improvements actually translate to better molecules—and where they don’t.',
    author: 'BioIntel Research',
    date: 'Dec 04, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 59,
    link: '/article/platform-shifts-next-wave-screening-tech',
  },
  {
    slug: 'reproducibility-model-risk-translational-datasets',
    category: 'AI in Drug Discovery',
    categoryClass: 'category-ai-drug-discovery',
    title: 'Reproducibility and Model Risk in Translational Datasets',
    excerpt: 'Common failure modes when training on curated biology and how to spot them early.',
    author: 'BioIntel Research',
    date: 'Dec 03, 2025',
    readTime: '9 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1664447990726-355422d41054?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 66,
    link: '/article/reproducibility-model-risk-translational-datasets',
  },
  {
    slug: 'fda-approval-watch-breakthrough-therapy-accelerated-approval',
    category: 'Regulatory & Policy',
    categoryClass: 'category-regulatory-policy',
    title: 'FDA Approval Watch: Breakthrough Therapy vs. Accelerated Approval (What Actually Changes)',
    excerpt: 'A practical guide to what each pathway signals about evidence quality, timelines, and post-marketing risk.',
    author: 'BioIntel Research',
    date: 'Dec 02, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1753001111844-2fe96e896995?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 58,
    link: '/article/fda-approval-watch-breakthrough-therapy-accelerated-approval',
  },
  {
    slug: 'compliance-basics-gxp-data-integrity-for-ai-and-diagnostics',
    category: 'Regulatory & Policy',
    categoryClass: 'category-regulatory-policy',
    title: 'Compliance Basics: GxP + Data Integrity for AI and Diagnostics Teams',
    excerpt: 'Where teams slip: provenance, audit trails, validation, and what regulators expect when models touch patient decisions.',
    author: 'BioIntel Research',
    date: 'Dec 01, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1758210784345-96fc36926234?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 55,
    link: '/article/compliance-basics-gxp-data-integrity-for-ai-and-diagnostics',
  },
  {
    slug: 'crispr-editing-second-gen-delivery-bottleneck',
    category: 'Biotech Innovation',
    categoryClass: 'category-biotech-innovation',
    title: 'CRISPR Is Maturing. Delivery Still Determines the Winner.',
    excerpt: 'Why second-gen editors and better targeting matter—but delivery physics still sets the ceiling on what’s investable.',
    author: 'BioIntel Research',
    date: 'Nov 30, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 62,
    link: '/article/crispr-editing-second-gen-delivery-bottleneck',
  },
  {
    slug: 'synthetic-biology-from-platform-to-product-metrics',
    category: 'Biotech Innovation',
    categoryClass: 'category-biotech-innovation',
    title: 'Synthetic Biology: The Metrics That Separate Platforms from Products',
    excerpt: 'A checklist for evaluating throughput, yield, robustness, and whether “platform” translates into repeatable revenue.',
    author: 'BioIntel Research',
    date: 'Nov 29, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 60,
    link: '/article/synthetic-biology-from-platform-to-product-metrics',
  },
  {
    slug: 'gene-therapy-manufacturing-cmc-risk-is-the-thesis',
    category: 'Biotech Innovation',
    categoryClass: 'category-biotech-innovation',
    title: 'Gene Therapy Reality Check: CMC Risk Is the Thesis',
    excerpt: 'Vectors, potency assays, batch consistency—why manufacturing is often the true gating factor for timelines and valuation.',
    author: 'BioIntel Research',
    date: 'Nov 28, 2025',
    readTime: '8 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 65,
    link: '/article/gene-therapy-manufacturing-cmc-risk-is-the-thesis',
  },
  {
    slug: 'digital-health-adoption-reimbursement-and-workflow',
    category: 'Medical Technology',
    categoryClass: 'category-medical-technology',
    title: 'Digital Health Isn’t a Feature. It’s a Workflow + Reimbursement Problem.',
    excerpt: 'How to evaluate implementation friction, clinician time cost, and reimbursement pathways before believing adoption curves.',
    author: 'BioIntel Research',
    date: 'Nov 27, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1758210784345-96fc36926234?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 52,
    link: '/article/digital-health-adoption-reimbursement-and-workflow',
  },
  {
    slug: 'diagnostics-signal-sensitivity-specificity-and-utility',
    category: 'Medical Technology',
    categoryClass: 'category-medical-technology',
    title: 'Diagnostics Signal: Sensitivity, Specificity, and Clinical Utility (In That Order)',
    excerpt: 'A quick framework for reading diagnostic claims and knowing what will matter for payers and guidelines.',
    author: 'BioIntel Research',
    date: 'Nov 26, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1753001111844-2fe96e896995?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 49,
    link: '/article/diagnostics-signal-sensitivity-specificity-and-utility',
  },
  {
    slug: 'medical-devices-evidence-bar-and-post-market-surveillance',
    category: 'Medical Technology',
    categoryClass: 'category-medical-technology',
    title: 'Medical Devices: The Evidence Bar and the Post‑Market Reality',
    excerpt: 'Where device claims break: endpoints, usability, and post-market surveillance signals that investors often ignore.',
    author: 'BioIntel Research',
    date: 'Nov 25, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
    content: [],
    popularity: 53,
    link: '/article/medical-devices-evidence-bar-and-post-market-surveillance',
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
