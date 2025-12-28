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
    slug: 'foundation-models-for-chemistry-what-matters',
    category: 'AI in Drug Discovery',
    categoryClass: 'category-ai-drug-discovery',
    title: 'Foundation Models for Chemistry: What Actually Matters in Production',
    excerpt: 'A practitioner checklist for data provenance, evaluation, and translation beyond leaderboard wins.',
    author: 'BioIntel Research',
    date: 'Dec 20, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'If a model can’t survive dataset shift and wet-lab constraints, it’s not a platform. Here is how to pressure-test claims before you build a roadmap around them.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'The biggest failure mode in AI-drug discovery is not accuracy—it is translation. Production-grade systems must handle provenance, dataset shift, and decision-making under uncertainty.',
      },
      { type: 'h2', key: 'h2-2', text: 'What to measure' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Track performance by decision impact: hit rate uplift, cycle-time reduction, and false-positive cost in real assays. Benchmarks are useful only if they map to the lab constraints you actually have.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'Insist on stress tests: scaffold splits, time splits, and target-family splits. If a model collapses when chemistry changes slightly, you do not have a durable capability.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.nature.com/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 20, 2025' },
    ],
    popularity: 72,
    link: '/article/foundation-models-for-chemistry-what-matters',
  },
  {
    slug: 'wet-lab-automation-signals-vs-hype',
    category: 'AI in Drug Discovery',
    categoryClass: 'category-ai-drug-discovery',
    title: 'Wet-Lab Automation: Signals vs. Hype in “Self-Driving” Biology',
    excerpt: 'Where closed-loop systems truly compound—and where they plateau due to biology, not software.',
    author: 'BioIntel Research',
    date: 'Dec 18, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Closed-loop biology works when measurement, controls, and objectives are aligned. Most teams fail by optimizing proxies that do not translate into better molecules.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Automation compounds only if it reduces uncertainty in the decision-making loop. If the assay is noisy, the loop converges to noise faster—not truth.',
      },
      { type: 'h2', key: 'h2-2', text: 'Key insights' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Look for three signals: reliable measurements, actionable knobs, and a clear objective. If any one is missing, the system becomes a demo instead of a machine for learning.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'The best near-term ROI is often operational: fewer failed runs, faster iteration, and higher reproducibility. Those wins are boring—but they are real.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.science.org/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 18, 2025' },
    ],
    popularity: 64,
    link: '/article/wet-lab-automation-signals-vs-hype',
  },
  {
    slug: 'data-moats-in-drug-discovery-are-fragile',
    category: 'AI in Drug Discovery',
    categoryClass: 'category-ai-drug-discovery',
    title: 'Data Moats in Drug Discovery Are Fragile: How to Tell if Yours Is Real',
    excerpt: 'Why “more data” is not enough—and what makes a dataset defensible over time.',
    author: 'BioIntel Research',
    date: 'Dec 16, 2025',
    readTime: '8 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1581092919535-7146f6c9f1b9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Defensibility comes from feedback loops, not static corpora. If you can’t refresh labels faster than the world changes, your moat decays.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'In biology, distribution shift is guaranteed. The moat is the process that continuously produces reliable labels and decisions—under real-world constraints.',
      },
      { type: 'h2', key: 'h2-2', text: 'Checklist' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Ask: can competitors reproduce your measurements? Are the labels tied to proprietary assays? Do you own the feedback loop that improves the dataset with each cycle?',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'If the dataset is “exclusive” only because it is messy, it is not a moat—it is debt. Cleanliness and provenance are the compounding assets.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.nature.com/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 16, 2025' },
    ],
    popularity: 69,
    link: '/article/data-moats-in-drug-discovery-are-fragile',
  },

  {
    slug: 'trial-readouts-how-to-avoid-narrative-traps',
    category: 'Biopharmaceutical Industry',
    categoryClass: 'category-biopharma-industry',
    title: 'Trial Readouts: How to Avoid Narrative Traps in Topline Data',
    excerpt: 'A quick framework to separate true probability updates from headline-driven momentum.',
    author: 'BioIntel Research',
    date: 'Dec 19, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Before you react to a press release, write down what had to be true for the program to work—and what the topline actually proves.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Topline data is often incomplete. The right move is to map which uncertainties were reduced (or not) and how that changes the timeline and financing runway.',
      },
      { type: 'h2', key: 'h2-2', text: 'Key questions' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Which endpoint moved? Was it pre-specified? What is the comparator context? Are the curves separating early or are we seeing regression to the mean?',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'If the readout “wins” on a soft endpoint but fails to de-risk durability or safety margin, the thesis is still fragile—regardless of price action.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://clinicaltrials.gov/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 19, 2025' },
    ],
    popularity: 73,
    link: '/article/trial-readouts-how-to-avoid-narrative-traps',
  },
  {
    slug: 'cmc-risk-the-hidden-killer-of-timelines',
    category: 'Biopharmaceutical Industry',
    categoryClass: 'category-biopharma-industry',
    title: 'CMC Risk Is the Hidden Killer of Timelines',
    excerpt: 'Manufacturing, assays, and comparability: the operational details that quietly break “great biology.”',
    author: 'BioIntel Research',
    date: 'Dec 17, 2025',
    readTime: '8 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'The market tends to price biology first, but the FDA and the factory price CMC. Learn to spot the “unforced errors” before they become a hold.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'CMC issues often appear late and force painful delays. The best defense is early rigor: potency assays, batch consistency, and comparability planning.',
      },
      { type: 'h2', key: 'h2-2', text: 'What to look for' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Watch for vendor concentration, unclear release specs, and sudden process changes. If the story depends on “we can scale later,” timelines are already at risk.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'A strong signal is boring execution: stable yields, transparent validation plans, and a realistic view of manufacturing constraints.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.fda.gov/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 17, 2025' },
    ],
    popularity: 67,
    link: '/article/cmc-risk-the-hidden-killer-of-timelines',
  },
  {
    slug: 'commercial-uptake-why-good-data-still-fails',
    category: 'Biopharmaceutical Industry',
    categoryClass: 'category-biopharma-industry',
    title: 'Commercial Uptake: Why Good Data Still Fails in the Real World',
    excerpt: 'Access, guidelines, and workflow: the frictions that determine whether “efficacy” becomes revenue.',
    author: 'BioIntel Research',
    date: 'Dec 13, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Clinical success is necessary, not sufficient. The market is shaped by reimbursement rules, prescribing behavior, and the “last mile” of operations.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Many launches disappoint not because the drug fails, but because access is slower than expected. Map payer logic and workflow friction before projecting curves.',
      },
      { type: 'h2', key: 'h2-2', text: 'Practical read' },
      {
        type: 'p',
        key: 'p-2',
        text: 'If the drug requires complex diagnostics, prior auth, or site-of-care changes, adoption will lag. The question is “how fast can clinicians actually use it?”',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'Guideline inclusion and real-world evidence are often the true catalysts. Build expectations around those milestones, not just FDA approval.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.nejm.org/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 13, 2025' },
    ],
    popularity: 61,
    link: '/article/commercial-uptake-why-good-data-still-fails',
  },

  {
    slug: 'crispr-second-wave-delivery-is-still-the-bottleneck',
    category: 'Biotech Innovation',
    categoryClass: 'category-biotech-innovation',
    title: 'CRISPR Second Wave: Delivery Is Still the Bottleneck',
    excerpt: 'Base editors and prime editors improve precision, but delivery physics still sets the ceiling on impact.',
    author: 'BioIntel Research',
    date: 'Dec 21, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'In gene editing, the best editor is irrelevant if it can’t get to the right tissue safely. Here’s how teams are trying to break that constraint.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Editing tools have improved rapidly, but delivery remains the gating factor. The investable edge often lies in vectors, targeting, and manufacturability.',
      },
      { type: 'h2', key: 'h2-2', text: 'Signals' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Look for tissue specificity, repeat dosing potential, and clean safety margins at realistic doses. “Works in mice” is not the bar—durability and scalability are.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'The strongest programs also de-risk CMC early: stable yields, validated assays, and comparability plans that survive process changes.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.nature.com/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 21, 2025' },
    ],
    popularity: 70,
    link: '/article/crispr-second-wave-delivery-is-still-the-bottleneck',
  },
  {
    slug: 'synthetic-biology-unit-economics-checklist',
    category: 'Biotech Innovation',
    categoryClass: 'category-biotech-innovation',
    title: 'Synthetic Biology: A Unit Economics Checklist (Not a Platform Pitch)',
    excerpt: 'Throughput is not a business model. Yield, robustness, and QA are the compounding metrics.',
    author: 'BioIntel Research',
    date: 'Dec 15, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1559757175-5700dde67548?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'If you can’t ship consistent product at consistent cost, you don’t have a platform—you have a lab. This checklist keeps the evaluation grounded.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Synthetic biology stories often over-index on “design.” The real constraints are yield, stability, QC, and repeatable manufacturing across batches.',
      },
      { type: 'h2', key: 'h2-2', text: 'Checklist' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Ask for: yield at scale, batch-to-batch variance, cost per gram, and failure rates. If these are missing, the platform claim is premature.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'The winning teams treat manufacturing and QA as core product features, not downstream chores. That is where reliability compounds.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.cell.com/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 15, 2025' },
    ],
    popularity: 62,
    link: '/article/synthetic-biology-unit-economics-checklist',
  },
  {
    slug: 'protein-engineering-why-screening-still-wins',
    category: 'Biotech Innovation',
    categoryClass: 'category-biotech-innovation',
    title: 'Protein Engineering: Why Screening Still Wins (Even With Better Models)',
    excerpt: 'Models narrow the search space, but high-quality screening is still the engine of real progress.',
    author: 'BioIntel Research',
    date: 'Dec 11, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'The best teams pair modeling with disciplined screening design. If you can’t measure reliably, you can’t optimize reliably.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Protein engineering is still an empirical science. Modeling is useful, but the real edge comes from measurement quality and iteration velocity.',
      },
      { type: 'h2', key: 'h2-2', text: 'Key insights' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Design screens around failure modes: stability, off-target binding, and manufacturability. Optimize what breaks programs, not what looks good on a slide.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'If your assay is noisy, your model will learn noise faster than signal. Invest in assay reliability first—then scale compute.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.nature.com/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 11, 2025' },
    ],
    popularity: 58,
    link: '/article/protein-engineering-why-screening-still-wins',
  },

  {
    slug: 'term-sheets-how-to-read-structured-financings',
    category: 'Healthcare Investment',
    categoryClass: 'category-healthcare-investment',
    title: 'Term Sheets: How to Read Structured Financings Without Getting Fooled',
    excerpt: 'Covenants, tranches, and insider participation—what signals strength vs. distress.',
    author: 'BioIntel Research',
    date: 'Dec 22, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Not all capital is equal. Terms can tell you whether a company is buying time efficiently—or mortgaging its future.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Structured deals can extend runway, but they can also embed forced dilution and operational constraints. Reading the fine print is part of underwriting the thesis.',
      },
      { type: 'h2', key: 'h2-2', text: 'What to scan' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Focus on: draw conditions, covenants, reset clauses, and who is funding. Insider support can be a signal, but only if terms are not punitive.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'If the deal forces near-term catalysts to unlock tranches, you may be underwriting a clock—not a biology outcome.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.sec.gov/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 22, 2025' },
    ],
    popularity: 71,
    link: '/article/term-sheets-how-to-read-structured-financings',
  },
  {
    slug: 'liquidity-is-a-catalyst-in-microcap-biotech',
    category: 'Healthcare Investment',
    categoryClass: 'category-healthcare-investment',
    title: 'Liquidity Is a Catalyst in Microcap Biotech (Whether You Like It or Not)',
    excerpt: 'Why float, holder base, and financing mechanics can dominate outcomes even with decent data.',
    author: 'BioIntel Research',
    date: 'Dec 12, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Microcap biotech is often a market-structure game. If you ignore liquidity, you misprice timelines and the cost of capital.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'In thin floats, the “catalyst” can be a financing, an index rebalance, or a holder rotation. These mechanics change outcomes independent of the science.',
      },
      { type: 'h2', key: 'h2-2', text: 'Practical take' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Map the holder base, average daily volume, and likely financing windows. Then stress test: what happens if data is good but cash is low?',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'When liquidity is the constraint, runway becomes the thesis. Price action starts to follow the balance sheet more than the pipeline.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.sec.gov/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 12, 2025' },
    ],
    popularity: 60,
    link: '/article/liquidity-is-a-catalyst-in-microcap-biotech',
  },
  {
    slug: 'deal-structures-what-partnerships-reveal',
    category: 'Healthcare Investment',
    categoryClass: 'category-healthcare-investment',
    title: 'Deal Structures: What Partnerships Reveal About Real Conviction',
    excerpt: 'Milestones, regional rights, and options can reveal who is underwriting the biology—and who is hedging.',
    author: 'BioIntel Research',
    date: 'Dec 08, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Partnership terms are signals. Learn to read whether the counterparty is buying the upside—or buying an option to wait.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Deals are often priced around uncertainty. The structure tells you what risks the buyer is willing to take now versus later.',
      },
      { type: 'h2', key: 'h2-2', text: 'How to read it' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Options and back-ended milestones suggest the buyer wants time. Large up-fronts and co-funding suggest higher conviction in translation and execution.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'Always link terms back to timelines: what needs to be proven to unlock value, and who controls the clock to produce that evidence?',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.sec.gov/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 08, 2025' },
    ],
    popularity: 63,
    link: '/article/deal-structures-what-partnerships-reveal',
  },

  {
    slug: 'remote-monitoring-what-actually-drives-adoption',
    category: 'Medical Technology',
    categoryClass: 'category-medical-technology',
    title: 'Remote Monitoring: What Actually Drives Adoption (Hint: It’s Not the Dashboard)',
    excerpt: 'Workflow fit, billing codes, and clinician time are the true constraints on digital health scale.',
    author: 'BioIntel Research',
    date: 'Dec 23, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Digital health succeeds when it reduces friction in clinical workflows and maps cleanly to reimbursement. Everything else is ornament.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Adoption is constrained by clinician time and reimbursement clarity. If the workflow adds steps without billing support, it stalls—no matter how good the UI looks.',
      },
      { type: 'h2', key: 'h2-2', text: 'Key insights' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Prioritize integration, alert fatigue management, and clear escalation protocols. The product must fit the clinic, not the other way around.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'The best signal is retention at the clinician level. If clinicians keep using it, reimbursement and scale can follow.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.cdc.gov/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 23, 2025' },
    ],
    popularity: 66,
    link: '/article/remote-monitoring-what-actually-drives-adoption',
  },
  {
    slug: 'diagnostics-utility-beats-accuracy',
    category: 'Medical Technology',
    categoryClass: 'category-medical-technology',
    title: 'Diagnostics: Clinical Utility Beats Accuracy (And Payers Prove It)',
    excerpt: 'Sensitivity and specificity matter—but utility and workflow determine reimbursement and scale.',
    author: 'BioIntel Research',
    date: 'Dec 10, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1580281658628-47a1e45f5b6d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'A diagnostic is valuable only if it changes decisions and outcomes. This framework helps you evaluate claims in the way payers and guidelines do.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Accuracy metrics are necessary but not sufficient. Clinical utility—how the test changes treatment—is what drives reimbursement and standard-of-care adoption.',
      },
      { type: 'h2', key: 'h2-2', text: 'Practical lens' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Ask what decision the test informs, how fast results arrive, and whether it reduces downstream costs. If the answer is unclear, utility is unproven.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'Look for prospective studies tied to clinical pathways. Retrospective AUC charts rarely move payer policy on their own.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.nejm.org/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 10, 2025' },
    ],
    popularity: 59,
    link: '/article/diagnostics-utility-beats-accuracy',
  },
  {
    slug: 'medtech-evidence-bar-post-market-signals',
    category: 'Medical Technology',
    categoryClass: 'category-medical-technology',
    title: 'MedTech Evidence Bar: Post‑Market Signals Investors Underweight',
    excerpt: 'Usability, training burden, and surveillance data often determine whether devices thrive or quietly disappear.',
    author: 'BioIntel Research',
    date: 'Dec 06, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Device stories are won and lost after launch. Post-market reality—training, complaints, and failure rates—can reprice the thesis faster than trials.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Clinical trials can clear regulators, but adoption depends on usability and reliability at scale. Post-market data is where the truth shows up.',
      },
      { type: 'h2', key: 'h2-2', text: 'What to track' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Watch complaint rates, training time, and service burden. If sites struggle operationally, utilization drops even if efficacy is fine.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'Treat surveillance signals as probability updates. Small increases in failure rates can cascade into guideline and payer pushback.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.fda.gov/medical-devices' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 06, 2025' },
    ],
    popularity: 56,
    link: '/article/medtech-evidence-bar-post-market-signals',
  },

  {
    slug: 'regulatory-intel-reading-fda-letters-like-signal',
    category: 'Regulatory & Policy',
    categoryClass: 'category-regulatory-policy',
    title: 'Regulatory Intel: Reading FDA Letters Like Signal (Not Drama)',
    excerpt: 'How to interpret CRLs, clinical holds, and meeting minutes as timeline and evidence updates.',
    author: 'BioIntel Research',
    date: 'Dec 24, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Regulatory events are probabilistic updates. Translate each one into “what changed in timelines, evidence requirements, and failure modes.”',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'The headline is rarely the point. The real information is what the agency is asking for and who controls the remediation timeline.',
      },
      { type: 'h2', key: 'h2-2', text: 'How to translate' },
      {
        type: 'p',
        key: 'p-2',
        text: 'CRLs usually mean a missing piece: CMC, inspection, or evidence. A clinical hold is timeline risk; the key is whether it touches mechanism risk or execution risk.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'Write the new timeline distribution and identify what evidence would tighten it. That prevents overreaction to narrative-driven volatility.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.fda.gov/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 24, 2025' },
    ],
    popularity: 74,
    link: '/article/regulatory-intel-reading-fda-letters-like-signal',
  },
  {
    slug: 'fast-track-breakthrough-what-changes',
    category: 'Regulatory & Policy',
    categoryClass: 'category-regulatory-policy',
    title: 'Fast Track vs. Breakthrough: What Changes (and What Doesn’t)',
    excerpt: 'Designations can change cadence and sentiment, but they do not replace evidence. Here’s the practical read.',
    author: 'BioIntel Research',
    date: 'Dec 09, 2025',
    readTime: '6 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Treat designations as process signals. The investable question is whether evidence quality improved—not whether the label sounds impressive.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'Fast Track can increase interaction cadence; Breakthrough can elevate urgency. Neither guarantees approval. Both should be translated into timeline updates.',
      },
      { type: 'h2', key: 'h2-2', text: 'What to do with it' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Map the next decision points: meeting windows, data packages, and potential rolling submissions. Then ask: what evidence is still missing?',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'If designation is the only “news,” it is often an attention catalyst, not a value catalyst. Don’t confuse the two.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.fda.gov/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 09, 2025' },
    ],
    popularity: 60,
    link: '/article/fast-track-breakthrough-what-changes',
  },
  {
    slug: 'gxp-data-integrity-for-ml-teams',
    category: 'Regulatory & Policy',
    categoryClass: 'category-regulatory-policy',
    title: 'GxP + Data Integrity for ML Teams: A Minimal Practical Guide',
    excerpt: 'Provenance, audit trails, and validation steps that keep teams out of trouble when models touch patient decisions.',
    author: 'BioIntel Research',
    date: 'Dec 05, 2025',
    readTime: '7 min read',
    imageUrl:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    deck:
      'Compliance does not require bureaucracy—it requires traceability. This guide covers the minimum practices that survive audits and scale safely.',
    hasImage: true,
    content: [
      { type: 'h2', key: 'h2-1', text: 'Summary' },
      {
        type: 'p',
        key: 'p-1',
        text: 'When models influence patient decisions, regulators care about traceability: what data was used, how it changed, and how outputs are controlled.',
      },
      { type: 'h2', key: 'h2-2', text: 'Minimum practices' },
      {
        type: 'p',
        key: 'p-2',
        text: 'Maintain provenance, immutable logs, and versioned pipelines. Validate inputs/outputs and document model changes in a way an auditor can follow.',
      },
      {
        type: 'p',
        key: 'p-3',
        text: 'The goal is not paperwork—it is control. If you can’t reproduce a result and explain it, you can’t defend it.',
      },
      { type: 'h2', key: 'h2-3', text: 'Source' },
      { type: 'link', key: 'link-1', text: 'View original source', href: 'https://www.fda.gov/' },
      { type: 'h2', key: 'h2-4', text: 'Published' },
      { type: 'p', key: 'p-4', text: 'Dec 05, 2025' },
    ],
    popularity: 58,
    link: '/article/gxp-data-integrity-for-ml-teams',
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
