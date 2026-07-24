const rawPosts = [
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
    title: 'Catholic Families Can Reach FI Together: AI, Prayer, and Smart Stewardship',
    date: 'June 17, 2026',
    dateSort: '2026-06-17',
    excerpt: 'How Catholic families are combining AI tools, prayer, and wise stewardship to reach financial independence together as a faith-filled team.',
    readTime: '4 min read',
    link: '/blog/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship',
    tags: ['AI Tools', 'Prayer', 'Stewardship'],
    featured: false
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
