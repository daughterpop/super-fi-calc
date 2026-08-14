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
