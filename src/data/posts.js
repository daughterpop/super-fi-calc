const rawPosts = [
  {
    title: 'Invest Your Surplus with Robinhood for Catholic FI',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Once the household has an emergency fund and is giving consistently, put the surplus to work. How Robinhood fits a faith-aligned path to financial independence.',
    readTime: '5 min read',
    link: '/blog/invest-your-surplus-with-robinhood-for-catholic-fi',
    tags: ['Stewardship', 'Tools', 'Legacy'],
    featured: true
  },
  {
    title: 'Automate Investing and Cash with Wealthfront for Catholic Families',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Automated investing and a high-yield cash account in one place — a practical way for busy Catholic households to put surplus to work without turning money management into a second job.',
    readTime: '5 min read',
    link: '/blog/automate-investing-and-cash-with-wealthfront-for-catholic-families',
    tags: ['Stewardship', 'Tools', 'Legacy'],
    featured: true
  },
  {
    title: 'See Every Dollar with Monarch Money for Catholic Households',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Shared visibility for budgets, net worth, and investments — so spouses can steward the household together without spreadsheets becoming a second job.',
    readTime: '5 min read',
    link: '/blog/see-every-dollar-with-monarch-money-for-catholic-households',
    tags: ['Stewardship', 'Tools', 'Couples'],
    featured: true
  },
  {
    title: 'Build Generosity into Your FI Plan with Daffy',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'A modern donor-advised fund for everyday families — so giving stays a first claim on the path to financial independence instead of an afterthought when cash is tight.',
    readTime: '5 min read',
    link: '/blog/build-generosity-into-your-fi-plan-with-daffy',
    tags: ['Stewardship', 'Tithing', 'Tools'],
    featured: true
  },
  {
    title: 'Stretch the Grocery Budget with Thrive Market for Catholic FI',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Organic and pantry staples at membership pricing — one practical way large Catholic families can free real dollars from the grocery line without turning thrift into a full-time job.',
    readTime: '5 min read',
    link: '/blog/stretch-the-grocery-budget-with-thrive-market-for-catholic-fi',
    tags: ['Stewardship', 'Tools', 'Parenting'],
    featured: true
  },
  {
    title: 'Cut the Phone Bill with Mint Mobile for Catholic FI',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Lower the monthly phone bill without losing coverage — one of the easiest ways to free cash for the FI plan in a large household.',
    readTime: '5 min read',
    link: '/blog/cut-the-phone-bill-with-mint-mobile-for-catholic-fi',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Sell Clutter and Buy Used with Mercari for Catholic FI',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Turn unused items into cash and buy what you need second-hand — practical margin for Catholic families who want less stuff and more freedom.',
    readTime: '5 min read',
    link: '/blog/sell-clutter-and-buy-used-with-mercari-for-catholic-fi',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Side Income from a Spare Space with Airbnb Hosting',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'If you have a spare room or ADU, hosting can create real extra income for the FI path — with clear guardrails for family life and values.',
    readTime: '5 min read',
    link: '/blog/side-income-from-a-spare-space-with-airbnb-hosting',
    tags: ['Stewardship', 'Tools', 'Legacy'],
    featured: true
  },
  {
    title: 'Smarter Hotel Booking with Gondola for Family Travel',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Find better hotel rates for family trips without the usual booking headaches — one practical way to keep travel costs from derailing the savings plan.',
    readTime: '5 min read',
    link: '/blog/smarter-hotel-booking-with-gondola-for-family-travel',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Marriott Bonvoy Travel Rewards for Catholic Families',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Hotel points that can actually help with family travel — a straightforward look at whether the Marriott program fits a large Catholic household.',
    readTime: '5 min read',
    link: '/blog/marriott-bonvoy-travel-rewards-for-catholic-families',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Event Contracts on Kalshi: Curiosity with Guardrails',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Prediction markets for the curious — with clear limits so they stay a small curiosity rather than a risk to the household FI plan.',
    readTime: '5 min read',
    link: '/blog/event-contracts-on-kalshi-curiosity-with-guardrails',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Track Recovery with Oura Ring for Family Health and FI',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Better recovery data for parents who train and work — practical health margin that supports the long game of financial independence.',
    readTime: '5 min read',
    link: '/blog/track-recovery-with-oura-ring-for-family-health-and-fi',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Swim Metrics in the Pool with FORM Goggles',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Real-time feedback in the water for parents (and kids) who swim — one more tool that makes consistent training easier in a full household.',
    readTime: '5 min read',
    link: '/blog/swim-metrics-in-the-pool-with-form-goggles',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'AI Triathlon Coaching with Transition for Busy Parents',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Adaptive training plans that fit around work and kids — useful if you are building fitness while also building the FI plan.',
    readTime: '5 min read',
    link: '/blog/ai-triathlon-coaching-with-transition-for-busy-parents',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Private Mail and VPN with Proton for Catholic Families',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Email, VPN, and private storage from a privacy-focused company — practical digital stewardship for households that want less surveillance.',
    readTime: '5 min read',
    link: '/blog/private-mail-and-vpn-with-proton-for-catholic-families',
    tags: ['Stewardship', 'Privacy', 'Tools'],
    featured: true
  }
];

const seen = new Set();
export const allPosts = rawPosts.filter((post) => {
  if (seen.has(post.link)) return false;
  seen.add(post.link);
  return true;
});

export const allTags = [
  'AI Tools',
  'Parenting',
  'Prayer',
  'Legacy',
  'Stewardship',
  'Tithing',
  'Couples',
  'Seasonal',
  'Privacy',
  'Tools'
];

export const featuredPosts = allPosts.filter((p) => p.featured);

export const PILLAR_LINKS = [
  {
    to: '/blog/why-fi-for-catholics',
    label: 'Why FI for Catholics',
    blurb: 'Margin for vocation, not secular FIRE'
  },
  {
    to: '/blog/how-to-get-started-on-your-fi-path',
    label: 'How to Get Started',
    blurb: 'One clear path for Catholic households'
  },
  {
    to: '/blog/build-margin-for-catholic-families',
    label: 'Build Margin',
    blurb: 'The practical foundation of faithful FI'
  }
];

export function getPostByPath(pathname) {
  if (!pathname) return null;
  const normalized = pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;
  return allPosts.find((p) => p.link === normalized) || null;
}

export function getRelatedPosts(currentLink, limit = 3) {
  if (!currentLink) return allPosts.filter((p) => p.featured).slice(0, limit);

  const normalized = currentLink.endsWith('/') && currentLink.length > 1
    ? currentLink.slice(0, -1)
    : currentLink;
  const current = allPosts.find((p) => p.link === normalized);
  if (!current) return allPosts.filter((p) => p.featured).slice(0, limit);

  const currentTags = new Set(current.tags || []);

  const scored = allPosts
    .filter((p) => p.link !== normalized)
    .map((p) => {
      const shared = (p.tags || []).filter((t) => currentTags.has(t)).length;
      const featuredBoost = p.featured ? 1.5 : 0;
      return { post: p, score: shared + featuredBoost };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.post.dateSort.localeCompare(a.post.dateSort));

  const related = scored.slice(0, limit).map((x) => x.post);
  if (related.length >= limit) return related;

  const used = new Set([normalized, ...related.map((p) => p.link)]);
  for (const p of allPosts) {
    if (related.length >= limit) break;
    if (!used.has(p.link) && p.featured) {
      related.push(p);
      used.add(p.link);
    }
  }
  return related;
}
