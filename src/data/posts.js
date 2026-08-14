const rawPosts = [
  {
    title: 'Build Margin for Radical Love: Lessons from St. Maximilian Kolbe',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'On the Memorial of St. Maximilian Kolbe, Catholic families learn that real financial margin is the practical foundation that turns radical, self-giving love from a heroic stretch into an ordinary, joyful way of life.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-radical-love-lessons-from-st-maximilian-kolbe',
    tags: ['Stewardship', 'Seasonal', 'Prayer', 'Legacy'],
    featured: false
  },
  {
    title: 'Fidelity in Lean Seasons: Lessons from Sts. Pontian and Hippolytus',
    date: 'August 13, 2026',
    dateSort: '2026-08-13',
    excerpt: 'On the Memorial of Saints Pontian and Hippolytus, Catholic families learn that real fidelity — staying the course when money pressure rises — is what turns a financial independence plan into lasting freedom rather than a fair-weather intention.',
    readTime: '4 min read',
    link: '/blog/fidelity-in-lean-seasons-lessons-from-sts-pontian-and-hippolytus',
    tags: ['Stewardship', 'Seasonal', 'Prayer', 'Legacy'],
    featured: false
  },
  {
    title: 'Build Margin That Guards Your Peace: Lessons from St. Jane Frances de Chantal',
    date: 'August 12, 2026',
    dateSort: '2026-08-12',
    excerpt: 'On the Memorial of St. Jane Frances de Chantal, Catholic families learn that building real financial margin is the practical way to protect inward peace — so money anxiety never crowds out charity, family, or prayer.',
    readTime: '4 min read',
    link: '/blog/build-margin-that-guards-your-peace-lessons-from-st-jane-frances-de-chantal',
    tags: ['Stewardship', 'Seasonal', 'Prayer', 'Legacy'],
    featured: false
  },
  {
    title: 'Live Light Like St. Clare: Lessons for Family Freedom',
    date: 'August 11, 2026',
    dateSort: '2026-08-11',
    excerpt: 'On the Memorial of St. Clare of Assisi, Catholic families learn that deliberately living light — fewer possessions, less lifestyle pressure — creates the practical margin that turns financial independence into everyday freedom for mission and family.',
    readTime: '4 min read',
    link: '/blog/live-light-like-st-clare-lessons-for-family-freedom',
    tags: ['Stewardship', 'Seasonal', 'Prayer', 'Legacy'],
    featured: false
  },
  {
    title: 'Make Generosity Ordinary: Lessons from St. Lawrence',
    date: 'August 10, 2026',
    dateSort: '2026-08-10',
    excerpt: 'On the Feast of St. Lawrence, Catholic families learn that real financial margin turns generosity from a heroic stretch into an ordinary, joyful part of daily life — treating the poor as the true treasures of the Church.',
    readTime: '4 min read',
    link: '/blog/make-generosity-ordinary-lessons-from-st-lawrence',
    tags: ['Stewardship', 'Seasonal', 'Tithing', 'Legacy'],
    featured: false
  },
  {
    title: 'Build Margin to Carry the Cross: Lessons from St. Edith Stein',
    date: 'August 9, 2026',
    dateSort: '2026-08-09',
    excerpt: 'On the Memorial of St. Teresa Benedicta of the Cross, Catholic families learn that seeking financial truth and building real margin prepares us to carry the ordinary crosses of family life with freedom rather than fear.',
    readTime: '4 min read',
    link: '/blog/build-margin-to-carry-the-cross-lessons-from-st-edith-stein',
    tags: ['Stewardship', 'Seasonal', 'Prayer', 'Legacy'],
    featured: false
  },
  {
    title: 'Build Margin Through Gospel Poverty: Lessons from St. Dominic',
    date: 'August 8, 2026',
    dateSort: '2026-08-08',
    excerpt: 'On the Memorial of St. Dominic, Catholic families learn that embracing Gospel poverty — owning less and clinging less — creates the practical margin that turns financial independence into everyday freedom and joy.',
    readTime: '4 min read',
    link: '/blog/build-margin-through-gospel-poverty-lessons-from-st-dominic',
    tags: ['Stewardship', 'Seasonal', 'Prayer', 'Legacy'],
    featured: false
  },
  {
    title: 'How to Get Started on Your FI Path',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'A simple, faith-aligned starting point for Catholic families: name the goal, get honest numbers, run the calculator once, and pick one lever this month — without turning money into an idol.',
    readTime: '6 min read',
    link: '/blog/how-to-get-started-on-your-fi-path',
    tags: ['Stewardship', 'Legacy', 'Couples'],
    featured: true
  },
  {
    title: 'Why FI for Catholics',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'Financial independence for Catholic families means margin for vocation — Providence and prudence together, tithing in the plan, honest math for large households, and freedom for the mission rather than secular FIRE cosplay.',
    readTime: '6 min read',
    link: '/blog/why-fi-for-catholics',
    tags: ['Stewardship', 'Prayer', 'Legacy', 'Tithing'],
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
    tags: ['Stewardship', 'Seasonal', 'Prayer', 'Legacy'],
    featured: false
  },
  {
    title: 'See the Glory Ahead: Lessons from the Transfiguration',
    date: 'August 6, 2026',
    dateSort: '2026-08-06',
    excerpt: 'On the Feast of the Transfiguration, Catholic families learn that building real financial margin is the practical way to see the glory ahead — freedom to serve, rest, and raise children without constant money anxiety.',
    readTime: '4 min read',
    link: '/blog/see-the-glory-ahead-lessons-from-the-transfiguration',
    tags: ['Stewardship', 'Seasonal', 'Prayer', 'Legacy'],
    featured: false
  },
  {
    title: 'Build on Trust, Not Anxiety: Lessons from Our Lady of the Snows',
    date: 'August 5, 2026',
    dateSort: '2026-08-05',
    excerpt: 'On the Dedication of the Basilica of Saint Mary Major, Catholic families learn that trusting Providence — the same trust that marked the snow in summer — creates the practical margin that turns financial independence into everyday freedom from anxiety.',
    readTime: '4 min read',
    link: '/blog/build-on-trust-not-anxiety-lessons-from-our-lady-of-the-snows',
    tags: ['Stewardship', 'Seasonal', 'Prayer', 'Legacy'],
    featured: false
  },
  {
    title: 'Simplicity Creates Real Margin: Lessons from St. John Vianney',
    date: 'August 4, 2026',
    dateSort: '2026-08-04',
    excerpt: 'On the Memorial of St. John Vianney, Catholic families learn that deliberate simplicity creates the practical margin that turns financial independence from a distant goal into everyday freedom.',
    readTime: '4 min read',
    link: '/blog/simplicity-creates-real-margin-lessons-from-st-john-vianney',
    tags: ['Stewardship', 'Seasonal', 'Legacy', 'Prayer'],
    featured: false
  },
  {
    title: 'Build Margin for True Hospitality: Lessons from St. Lydia',
    date: 'August 3, 2026',
    dateSort: '2026-08-03',
    excerpt: 'On the Memorial of St. Lydia, Catholic families learn that financial independence creates the practical margin to open their homes and tables without anxiety — turning everyday hospitality into a living act of faith.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-true-hospitality-lessons-from-st-lydia',
    tags: ['Stewardship', 'Seasonal', 'Parenting', 'Couples'],
    featured: false
  },
  {
    title: 'When Little Is Enough: Lessons from the Loaves and Fishes',
    date: 'August 2, 2026',
    dateSort: '2026-08-02',
    excerpt: 'On the Eighteenth Sunday in Ordinary Time, Catholic families learn from the multiplication of the loaves that trust and margin turn scarcity into generosity — and that financial independence is one practical way to live that Gospel freedom.',
    readTime: '4 min read',
    link: '/blog/when-little-is-enough-lessons-from-the-loaves-and-fishes',
    tags: ['Stewardship', 'Tithing', 'Seasonal', 'Legacy'],
    featured: false
  },
  {
    title: 'Detachment Creates Real Freedom: Lessons from St. Alphonsus Liguori',
    date: 'August 1, 2026',
    dateSort: '2026-08-01',
    excerpt: 'On the Memorial of St. Alphonsus Liguori, Catholic families learn that true financial freedom begins with detachment from status and anxiety — and that FI is one practical way to create the margin that makes that freedom possible.',
    readTime: '4 min read',
    link: '/blog/detachment-creates-real-freedom-lessons-from-st-alphonsus-liguori',
    tags: ['Stewardship', 'Seasonal', 'Prayer', 'Legacy'],
    featured: false
  },
  {
    title: 'Serve Without the Anxiety: Lessons from Martha, Mary, and Lazarus',
    date: 'July 29, 2026',
    dateSort: '2026-07-29',
    excerpt: 'On the Memorial of Saints Martha, Mary, and Lazarus, Catholic families learn how financial independence creates the margin to serve like Martha without the anxiety Jesus corrected — and to be present like Mary.',
    readTime: '4 min read',
    link: '/blog/serve-without-the-anxiety-lessons-from-martha-mary-and-lazarus',
    tags: ['Stewardship', 'Parenting', 'Seasonal', 'Couples'],
    featured: false
  },
  {
    title: 'Build a Money Sabbath into Your Week',
    date: 'July 28, 2026',
    dateSort: '2026-07-28',
    excerpt: 'A simple weekly habit that quiets money anxiety, protects family time, and helps Catholic households practice the detachment St. Augustine described — so financial independence can actually feel free.',
    readTime: '4 min read',
    link: '/blog/build-a-money-sabbath-into-your-week',
    tags: ['Stewardship', 'Prayer', 'Parenting', 'Couples'],
    featured: false
  },
  {
    title: 'Build Margin to Give Freely: Lessons from St. Pantaleon',
    date: 'July 27, 2026',
    dateSort: '2026-07-27',
    excerpt: 'On the feast of St. Pantaleon, the unmercenary physician, Catholic families learn that financial independence creates the practical freedom to serve and give without calculating the return.',
    readTime: '4 min read',
    link: '/blog/build-margin-to-give-freely-lessons-from-st-pantaleon',
    tags: ['Stewardship', 'Tithing', 'Seasonal', 'Legacy'],
    featured: false
  },
  {
    title: 'Lessons from Joachim and Anne for Building a Lasting Family Legacy',
    date: 'July 26, 2026',
    dateSort: '2026-07-26',
    excerpt: 'On the Feast of Saints Joachim and Anne, Catholic families can rediscover that the greatest inheritance is a child formed in faith and freedom — and that financial independence is one of the practical tools that makes this formation possible.',
    readTime: '4 min read',
    link: '/blog/lessons-from-joachim-and-anne-for-building-a-lasting-family-legacy',
    tags: ['Parenting', 'Legacy', 'Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Treat Your FI Journey Like a Pilgrimage: Lessons from St. James for Catholic Families',
    date: 'July 25, 2026',
    dateSort: '2026-07-25',
    excerpt: 'On the Feast of St. James, Catholic families can see the path to financial independence as a pilgrimage — one step, one prayer, one faithful decision at a time that builds lasting freedom and legacy.',
    readTime: '4 min read',
    link: '/blog/treat-your-fi-journey-like-a-pilgrimage-lessons-from-st-james-for-catholic-families',
    tags: ['Prayer', 'Legacy', 'Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'AI Meal Planning for Catholic Families: Stretch the Budget and Accelerate FI',
    date: 'July 24, 2026',
    dateSort: '2026-07-24',
    excerpt: 'Busy Catholic parents can use simple AI prompts to cut grocery waste, plan realistic family meals, and free up real cash that accelerates the path to financial independence.',
    readTime: '4 min read',
    link: '/blog/ai-meal-planning-for-catholic-families-stretch-the-budget-and-accelerate-fi',
    tags: ['AI Tools', 'Parenting', 'Stewardship'],
    featured: false
  },
  {
    title: 'Protect Your Family’s Digital Privacy: Stewardship Tools That Belong on the Path to FI',
    date: 'July 12, 2026',
    dateSort: '2026-07-12',
    excerpt: 'Identity theft and data brokers drain time, money, and peace. How Incogni and Surfshark help Catholic families protect their household as part of faithful financial independence.',
    readTime: '5 min read',
    link: '/blog/protect-your-familys-digital-privacy-stewardship-tools-for-catholic-fi',
    tags: ['Privacy', 'Stewardship', 'Tools'],
    featured: false
  },
  {
    title: 'Catholic Families: AI for Back-to-School Savings and Faith-Filled Financial Freedom',
    date: 'July 05, 2026',
    dateSort: '2026-07-05',
    excerpt: 'As back-to-school season hits, Catholic families can use AI to save on supplies, plan wisely, and stay on the fast track to FI while teaching kids stewardship and generosity.',
    readTime: '4 min read',
    link: '/blog/catholic-families-ai-for-back-to-school-savings-and-faith-filled-financial-freedom',
    tags: ['AI Tools', 'Seasonal', 'Parenting', 'Stewardship'],
    featured: false
  },
  {
    title: 'Catholic Families: Leverage AI for Prayerful Financial Freedom and Lasting Legacy',
    date: 'June 04, 2026',
    dateSort: '2026-06-04',
    excerpt: 'With the Pope’s new encyclical on AI, Catholic families can use smart tools alongside prayer to accelerate their path to financial independence and build a faith-filled legacy for their kids.',
    readTime: '4 min read',
    link: '/blog/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy',
    tags: ['AI Tools', 'Prayer', 'Legacy'],
    featured: true
  },
  {
    title: 'Catholic Parents Building FI Legacy with AI and Prayer',
    date: 'June 19, 2026',
    dateSort: '2026-06-19',
    excerpt: 'A practical guide for Catholic parents to integrate AI tools and daily prayer into their journey toward financial independence and family legacy.',
    readTime: '4 min read',
    link: '/blog/catholic-parents-building-fi-legacy-with-ai-and-prayer',
    tags: ['AI Tools', 'Prayer', 'Parenting', 'Legacy'],
    featured: true
  },
  {
    title: 'Catholic Moms & Dads Use AI to Build Debt-Free, Faith-Filled Family Legacy',
    date: 'June 18, 2026',
    dateSort: '2026-06-18',
    excerpt: 'Real strategies for Catholic parents to use AI for budgeting, debt payoff, and raising kids with faith and financial wisdom.',
    readTime: '4 min read',
    link: '/blog/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy',
    tags: ['AI Tools', 'Parenting', 'Legacy', 'Stewardship'],
    featured: true
  },
  {
    title: 'Catholic Families Harness AI for Prayerful FI and Generational Legacy',
    date: 'June 16, 2026',
    dateSort: '2026-06-16',
    excerpt: 'Learn how Catholic families are using AI alongside prayer to build lasting financial freedom and a legacy of faith for generations.',
    readTime: '4 min read',
    link: '/blog/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy',
    tags: ['AI Tools', 'Prayer', 'Legacy'],
    featured: false
  },
  {
    title: 'AI-Assisted Stewardship: How Catholic Families Leverage Smart Tools for FI and Faithful Living',
    date: 'June 15, 2026',
    dateSort: '2026-06-15',
    excerpt: 'Discover practical AI prompts and tools Catholic families are using to budget, plan, and live out faithful stewardship on the path to FI.',
    readTime: '4 min read',
    link: '/blog/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living',
    tags: ['AI Tools', 'Stewardship'],
    featured: false
  },
  {
    title: 'Raising Faith-Filled Kids While Building Financial Freedom',
    date: 'June 12, 2026',
    dateSort: '2026-06-12',
    excerpt: 'How to teach your children about money, faith, and stewardship for a strong generational legacy and debt-free future.',
    readTime: '4 min read',
    link: '/blog/raising-faith-filled-kids-while-building-financial-freedom',
    tags: ['Parenting', 'Legacy', 'Stewardship'],
    featured: false
  },
  {
    title: 'Catholic Dads Leading Family FI with AI and Faith',
    date: 'June 10, 2026',
    dateSort: '2026-06-10',
    excerpt: 'Practical ways Catholic dads are using AI tools to steward family finances while leading in faith and presence for their kids.',
    readTime: '4 min read',
    link: '/blog/catholic-dads-leading-family-fi-with-ai-and-faith',
    tags: ['AI Tools', 'Parenting', 'Stewardship'],
    featured: false
  },
  {
    title: 'Praying Your Way to Financial Freedom',
    date: 'June 22, 2026',
    dateSort: '2026-06-22',
    excerpt: 'A faith-first approach to FI: how prayer, generosity, and smart planning help Christian families build wealth and peace.',
    readTime: '4 min read',
    link: '/blog/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together',
    tags: ['Prayer', 'Stewardship'],
    featured: false
  },
  {
    title: 'How Christian Couples Unlock Financial Freedom Together',
    date: 'June 21, 2026',
    dateSort: '2026-06-21',
    excerpt: "Christian couples sharing practical steps to build FI as a team, rooted in faith, communication, and shared vision for their family's future.",
    readTime: '4 min read',
    link: '/blog/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for',
    tags: ['Couples', 'Legacy', 'Stewardship'],
    featured: false
  },
  {
    title: 'Faithful Parenting on the Path to FI',
    date: 'June 20, 2026',
    dateSort: '2026-06-20',
    excerpt: 'How faithful parenting and FI work together to create margin for faith, family time, and raising kids with strong values.',
    readTime: '4 min read',
    link: '/blog/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home',
    tags: ['Parenting', 'Stewardship'],
    featured: false
  },
  {
    title: 'Raising Generous, Grounded Kids: Faith, Family Budgeting & Shared Financial Freedom',
    date: 'May 22, 2026',
    dateSort: '2026-05-22',
    excerpt: 'Teach kids generosity early, model contentment, and build a household culture where money serves the mission instead of the other way around.',
    readTime: '3 min read',
    link: '/blog/raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom',
    tags: ['Parenting', 'Tithing', 'Stewardship'],
    featured: false
  },
  {
    title: 'Stewarding Your Family’s Future: Building Generational Wealth Through Faith and FI',
    date: 'May 20, 2026',
    dateSort: '2026-05-20',
    excerpt: 'Financial independence isn’t just about early retirement — it’s about creating a lasting legacy of faith, generosity, and wise stewardship for the next generation.',
    readTime: '4 min read',
    link: '/blog/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi',
    tags: ['Legacy', 'Stewardship'],
    featured: false
  },
  {
    title: 'Why Financial Independence Is for Everyone',
    date: 'May 18, 2026',
    dateSort: '2026-05-18',
    excerpt: 'Financial independence isn’t just for tech bros or high earners — it’s for regular families ready to build margin, faith, and freedom.',
    readTime: '4 min read',
    link: '/blog/why-fi-for-everyone',
    tags: ['Stewardship', 'Legacy'],
    featured: false
  }
];

// Dedupe by link so the same post can never appear twice in the list
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

/** Lookup post metadata by pathname (e.g. /blog/slug) for SEO. */
export function getPostByPath(pathname) {
  if (!pathname) return null;
  const normalized = pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;
  return allPosts.find((p) => p.link === normalized) || null;
}
