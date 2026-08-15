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
  },
  {
    title: 'Is FIRE Compatible with Catholicism?',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'Financial independence for Catholic families means margin for vocation — Providence and prudence together, tithing in the plan, honest math for large households, and freedom for the mission rather than secular FIRE cosplay.',
    readTime: '6 min read',
    link: '/blog/is-fire-compatible-with-catholicism',
    tags: ['Stewardship', 'Tithing'],
    featured: true
  },
  {
    title: 'How to Budget as a Catholic Family (with Tithing First)',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'A practical budget that puts the tithe first, then housing, food, and the rest — so the household stays ordered toward generosity and freedom instead of anxiety.',
    readTime: '7 min read',
    link: '/blog/how-to-budget-as-a-catholic-family-with-tithing-first',
    tags: ['Stewardship', 'Tithing'],
    featured: true
  },
  {
    title: 'Building an Emergency Fund Without Neglecting the Tithe',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'How to build a real cash buffer while still giving consistently — the practical order that keeps both prudence and generosity intact.',
    readTime: '6 min read',
    link: '/blog/building-an-emergency-fund-without-neglecting-the-tithe',
    tags: ['Stewardship', 'Tithing'],
    featured: true
  },
  {
    title: 'Faith-Based Investing Basics for Catholic Households',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'What faith-aligned investing actually looks like for ordinary families — low costs, broad ownership, and clear boundaries without turning the portfolio into a full-time job.',
    readTime: '7 min read',
    link: '/blog/faith-based-investing-basics-for-catholic-households',
    tags: ['Stewardship', 'Legacy'],
    featured: true
  },
  {
    title: 'Build Margin for Catholic Families',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'The practical foundation of faithful FI: a deliberate gap between earning and spending that protects prayer, family, and generosity when life gets expensive.',
    readTime: '8 min read',
    link: '/blog/build-margin-for-catholic-families',
    tags: ['Stewardship'],
    featured: true
  },
  {
    title: 'Build Margin for Radical Love: Lessons from St. Maximilian Kolbe',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'On the Memorial of St. Maximilian Kolbe, Catholic families learn that real financial margin is the practical foundation that turns radical, self-giving love from a heroic stretch into an ordinary, joyful way of life.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-radical-love-lessons-from-st-maximilian-kolbe',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Fidelity in Lean Seasons: Lessons from Sts. Pontian and Hippolytus',
    date: 'August 13, 2026',
    dateSort: '2026-08-13',
    excerpt: 'On the Memorial of Saints Pontian and Hippolytus, Catholic families learn that real fidelity — staying the course when money pressure rises — is what turns a financial independence plan into lasting freedom rather than a fair-weather intention.',
    readTime: '4 min read',
    link: '/blog/fidelity-in-lean-seasons-lessons-from-sts-pontian-and-hippolytus',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin That Guards Your Peace: Lessons from St. Jane Frances de Chantal',
    date: 'August 12, 2026',
    dateSort: '2026-08-12',
    excerpt: 'On the Memorial of St. Jane Frances de Chantal, Catholic families learn that building real financial margin is the practical way to protect inward peace — so money anxiety never crowds out charity, family, or prayer.',
    readTime: '4 min read',
    link: '/blog/build-margin-that-guards-your-peace-lessons-from-st-jane-frances-de-chantal',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Live Light Like St. Clare: Lessons for Family Freedom',
    date: 'August 11, 2026',
    dateSort: '2026-08-11',
    excerpt: 'On the Memorial of St. Clare of Assisi, Catholic families learn that deliberately living light — fewer possessions, less lifestyle pressure — creates the practical margin that turns financial independence into everyday freedom for mission and family.',
    readTime: '4 min read',
    link: '/blog/live-light-like-st-clare-lessons-for-family-freedom',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Make Generosity Ordinary: Lessons from St. Lawrence',
    date: 'August 10, 2026',
    dateSort: '2026-08-10',
    excerpt: 'On the Feast of St. Lawrence, Catholic families learn that real financial margin turns generosity from a heroic stretch into an ordinary, joyful part of daily life — treating the poor as the true treasures of the Church.',
    readTime: '4 min read',
    link: '/blog/make-generosity-ordinary-lessons-from-st-lawrence',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin to Carry the Cross: Lessons from St. Edith Stein',
    date: 'August 9, 2026',
    dateSort: '2026-08-09',
    excerpt: 'On the Memorial of St. Teresa Benedicta of the Cross, Catholic families learn that seeking financial truth and building real margin prepares us to carry the ordinary crosses of family life with freedom rather than fear.',
    readTime: '4 min read',
    link: '/blog/build-margin-to-carry-the-cross-lessons-from-st-edith-stein',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin Through Gospel Poverty: Lessons from St. Dominic',
    date: 'August 8, 2026',
    dateSort: '2026-08-08',
    excerpt: 'On the Memorial of St. Dominic, Catholic families learn that embracing Gospel poverty — owning less and clinging less — creates the practical margin that turns financial independence into everyday freedom and joy.',
    readTime: '4 min read',
    link: '/blog/build-margin-through-gospel-poverty-lessons-from-st-dominic',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'How to Get Started on Your FI Path',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'A clear, practical starting path for Catholic households: know the number, protect the tithe, build the buffer, then put surplus to work.',
    readTime: '8 min read',
    link: '/blog/how-to-get-started-on-your-fi-path',
    tags: ['Stewardship'],
    featured: true
  },
  {
    title: 'Why FI for Catholics',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'Financial independence for Catholic families means margin for vocation — Providence and prudence together, tithing in the plan, honest math for large households, and freedom for the mission rather than secular FIRE cosplay.',
    readTime: '6 min read',
    link: '/blog/why-fi-for-catholics',
    tags: ['Stewardship'],
    featured: true
  },
  {
    title: 'Triple Savings on Online Purchases',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'Stack credit-card rewards, cashback portals, and checkout offers so everyday shopping funds the FI path — without debt and without turning thrift into a second full-time job.',
    readTime: '7 min read',
    link: '/blog/triple-savings-online-purchases',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Build Margin to Trust Providence: Lessons from St. Cajetan',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'On the Memorial of St. Cajetan, Catholic families learn that real financial margin is the practical foundation that lets trust in Providence replace anxiety — turning financial independence into everyday freedom to serve.',
    readTime: '4 min read',
    link: '/blog/build-margin-to-trust-providence-lessons-from-st-cajetan',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'See the Glory Ahead: Lessons from the Transfiguration',
    date: 'August 6, 2026',
    dateSort: '2026-08-06',
    excerpt: 'On the Feast of the Transfiguration, Catholic families learn that building real financial margin is the practical way to see the glory ahead — freedom to serve, rest, and raise children without constant money anxiety.',
    readTime: '4 min read',
    link: '/blog/see-the-glory-ahead-lessons-from-the-transfiguration',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build on Trust, Not Anxiety: Lessons from Our Lady of the Snows',
    date: 'August 5, 2026',
    dateSort: '2026-08-05',
    excerpt: 'On the Dedication of the Basilica of Saint Mary Major, Catholic families learn that trusting Providence — the same trust that marked the snow in summer — creates the practical margin that turns financial independence into everyday freedom from anxiety.',
    readTime: '4 min read',
    link: '/blog/build-on-trust-not-anxiety-lessons-from-our-lady-of-the-snows',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Simplicity Creates Real Margin: Lessons from St. John Vianney',
    date: 'August 4, 2026',
    dateSort: '2026-08-04',
    excerpt: 'On the Memorial of St. John Vianney, Catholic families learn that deliberate simplicity creates the practical margin that turns financial independence from a distant goal into everyday freedom.',
    readTime: '4 min read',
    link: '/blog/simplicity-creates-real-margin-lessons-from-st-john-vianney',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin for True Hospitality: Lessons from St. Lydia',
    date: 'August 3, 2026',
    dateSort: '2026-08-03',
    excerpt: 'On the Memorial of St. Lydia, Catholic families learn that financial independence creates the practical margin to open their homes and tables without anxiety — turning everyday hospitality into a living act of faith.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-true-hospitality-lessons-from-st-lydia',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'When Little Is Enough: Lessons from the Loaves and Fishes',
    date: 'August 2, 2026',
    dateSort: '2026-08-02',
    excerpt: 'When the disciples saw only scarcity, Jesus showed abundance. Catholic families learn that living as if little is enough creates the practical margin that turns financial independence into freedom to give.',
    readTime: '4 min read',
    link: '/blog/when-little-is-enough-lessons-from-the-loaves-and-fishes',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Detachment Creates Real Freedom: Lessons from St. Alphonsus Liguori',
    date: 'August 1, 2026',
    dateSort: '2026-08-01',
    excerpt: 'On the Memorial of St. Alphonsus Liguori, Catholic families learn that true financial freedom begins with detachment from status and anxiety — and that FI is one practical way to create the margin that makes that freedom possible.',
    readTime: '4 min read',
    link: '/blog/detachment-creates-real-freedom-lessons-from-st-alphonsus-liguori',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Serve Without the Anxiety: Lessons from Martha, Mary, and Lazarus',
    date: 'July 29, 2026',
    dateSort: '2026-07-29',
    excerpt: 'Martha was anxious and troubled about many things. Catholic families learn that building financial margin is one practical way to serve without the anxiety that crowds out the better part.',
    readTime: '4 min read',
    link: '/blog/serve-without-the-anxiety-lessons-from-martha-mary-and-lazarus',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build a Money Sabbath into Your Week',
    date: 'July 28, 2026',
    dateSort: '2026-07-28',
    excerpt: 'A practical weekly pause from money decisions so the household can rest, pray, and remember that provision is from the Lord — not from constant optimization.',
    readTime: '5 min read',
    link: '/blog/build-a-money-sabbath-into-your-week',
    tags: ['Stewardship', 'Prayer'],
    featured: false
  },
  {
    title: 'Build Margin to Give Freely: Lessons from St. Pantaleon',
    date: 'July 27, 2026',
    dateSort: '2026-07-27',
    excerpt: 'On the feast of St. Pantaleon, the unmercenary physician, Catholic families learn that financial independence creates the practical freedom to serve and give without calculating the return.',
    readTime: '4 min read',
    link: '/blog/build-margin-to-give-freely-lessons-from-st-pantaleon',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
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
