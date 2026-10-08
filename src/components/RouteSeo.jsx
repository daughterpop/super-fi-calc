import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import essayMeta from 'virtual:essay-meta';
import { getPostByPath, allPosts } from '../data/posts';
import { CALCULATOR_BY_SLUG } from '../data/calculators';
import { getEdition } from '../data/ledger';
import { buildOgImageUrl, defaultOgImage } from '../lib/ogUrl';
import {
  SITE,
  SITE_NAME,
  AUTHOR,
  STATIC,
  CALCULATOR_HOWTO,
  CALCULATOR_FAQ,
  CALCULATOR_ITEM_LIST,
} from '../lib/seoData';

function absoluteUrl(path) {
  if (!path || path === '/') return `${SITE}/`;
  return `${SITE}${path.startsWith('/') ? path : `/${path}`}`;
}

function slugAfter(pathname, prefix) {
  if (!pathname.startsWith(prefix)) return null;
  const slug = pathname.slice(prefix.length).replace(/\/$/, '');
  return slug || null;
}

// ---- JSON-LD building blocks (schema.org) ----
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;

const ORGANIZATION = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/logo.svg` },
  sameAs: ['https://x.com/viafidelitatis'],
};

const WEBSITE = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  url: `${SITE}/`,
  description: STATIC['/'].description,
  inLanguage: 'en-US',
  publisher: { '@id': ORG_ID },
};

const AUTHOR_PERSON = { '@type': 'Person', name: AUTHOR, url: `${SITE}/` };

function breadcrumbs(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}

function graph(...nodes) {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) };
}

export default function RouteSeo() {
  const { pathname: rawPathname } = useLocation();
  const pathname = rawPathname.length > 1 ? rawPathname.replace(/\/$/, '') : rawPathname;
  const post = getPostByPath(pathname);
  const blogSlug = slugAfter(pathname, '/blog/');
  // Older essays that are live but not listed in posts.js (build-time map).
  const legacy = !post && blogSlug ? essayMeta[blogSlug] || null : null;
  const calcTool = CALCULATOR_BY_SLUG[slugAfter(pathname, '/calculators/') || ''] || null;
  const edition = getEdition(slugAfter(pathname, '/ledger/') || '') || null;
  const staticMeta = STATIC[pathname];

  let title;
  let description;
  let type = 'website';
  let datePublished;
  let jsonLd = null;

  if (calcTool) {
    title = `${calcTool.title} | ${SITE_NAME}`;
    description = calcTool.description;
  } else if (post) {
    title = `${post.title} | ${SITE_NAME}`;
    description = post.excerpt;
    type = 'article';
    datePublished = post.dateSort;
  } else if (legacy) {
    title = `${legacy.title} | ${SITE_NAME}`;
    description = legacy.excerpt || STATIC['/blog'].description;
    type = 'article';
  } else if (edition) {
    title = `${edition.title} | The Ledger | ${SITE_NAME}`;
    description = edition.lede;
    type = 'article';
    datePublished = edition.date;
  } else if (staticMeta) {
    title = staticMeta.title;
    description = staticMeta.description;
    type = staticMeta.type;
  } else {
    title = `${SITE_NAME} — Faithful FI for Catholic Families`;
    description = 'Practical financial independence tools and stewardship resources for Catholic families.';
  }

  // Social cards: drop the trailing site name (the OG image already shows it).
  const socialTitle = title.replace(new RegExp(` \\| ${SITE_NAME}$`), '');
  const canonical = absoluteUrl(pathname === '/' ? '/' : pathname);

  let ogImage = defaultOgImage();
  if (calcTool) {
    ogImage = buildOgImageUrl({ title: calcTool.label || calcTool.title, kicker: 'Calculator', kind: 'calculator' });
  } else if (post || legacy) {
    ogImage = buildOgImageUrl({ title: (post || legacy).title, kicker: 'Essay', kind: 'blog' });
  } else if (edition) {
    ogImage = buildOgImageUrl({ title: edition.title, kicker: edition.sundayLabel || 'The Ledger', kind: 'ledger' });
  } else if (pathname === '/') {
    ogImage = buildOgImageUrl({ title: 'Via Fidelitatis', kind: 'home' });
  } else if (pathname === '/faq') {
    ogImage = buildOgImageUrl({ title: 'Catholic Financial Independence Questions', kicker: 'FAQ', kind: 'site' });
  } else if (pathname === '/calculators') {
    ogImage = buildOgImageUrl({ title: 'FI & Family Calculators', kicker: 'Calculator', kind: 'calculator' });
  } else if (pathname === '/blog') {
    ogImage = buildOgImageUrl({ title: 'Faith, Family & Financial Independence', kicker: 'Essay', kind: 'blog' });
  } else if (pathname === '/tools') {
    ogImage = buildOgImageUrl({ title: 'Stewardship Tools & Referral Perks', kicker: 'Tools', kind: 'tools' });
  } else if (pathname === '/subscribe') {
    ogImage = buildOgImageUrl({ title: 'Get The Ledger on Sunday', kicker: 'The Ledger', kind: 'ledger' });
  } else if (pathname === '/ledger') {
    ogImage = buildOgImageUrl({ title: 'Sunday Surplus for Catholic Households', kicker: 'The Ledger', kind: 'ledger' });
  }

  if (pathname === '/') {
    jsonLd = graph(ORGANIZATION, WEBSITE);
  } else if (pathname === '/faq') {
    jsonLd = graph(CALCULATOR_FAQ, breadcrumbs([['Home', '/'], ['FAQ', '/faq']]));
  } else if (pathname === '/calculators') {
    // FAQPage lives on /faq only (Google wants the Q&A visible on the page).
    jsonLd = graph(CALCULATOR_HOWTO, CALCULATOR_ITEM_LIST, breadcrumbs([['Home', '/'], ['Calculators', '/calculators']]));
  } else if (calcTool) {
    jsonLd = graph(
      {
        '@type': 'WebApplication',
        name: calcTool.title,
        description,
        url: canonical,
        image: ogImage,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any (runs in a web browser)',
        browserRequirements: 'Requires JavaScript.',
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        publisher: { '@id': ORG_ID },
      },
      ORGANIZATION,
      breadcrumbs([['Home', '/'], ['Calculators', '/calculators'], [calcTool.label || calcTool.title, pathname]])
    );
  } else if (pathname === '/blog') {
    jsonLd = graph(
      { '@type': 'Blog', name: `${SITE_NAME} Blog`, url: absoluteUrl('/blog'), description, publisher: { '@id': ORG_ID } },
      {
        '@type': 'ItemList',
        name: `${SITE_NAME} Blog — Recent Posts`,
        numberOfItems: Math.min(12, allPosts.length),
        itemListElement: allPosts.slice(0, 12).map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: absoluteUrl(item.link),
          name: item.title,
        })),
      },
      ORGANIZATION,
      breadcrumbs([['Home', '/'], ['Blog', '/blog']])
    );
  } else if (post || legacy || edition) {
    const headline = (post || legacy || edition).title;
    const article = {
      '@type': edition ? 'Article' : 'BlogPosting',
      headline,
      description,
      url: canonical,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      image: ogImage,
      author: AUTHOR_PERSON,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    };
    if (datePublished) article.datePublished = datePublished;
    if (!edition) article.isPartOf = { '@type': 'Blog', name: `${SITE_NAME} Blog`, url: absoluteUrl('/blog') };
    jsonLd = graph(
      article,
      ORGANIZATION,
      edition
        ? breadcrumbs([['Home', '/'], ['The Ledger', '/ledger'], [headline, pathname]])
        : breadcrumbs([['Home', '/'], ['Blog', '/blog'], [headline, pathname]])
    );
  } else if (staticMeta) {
    const label = { '/tools': 'Tools', '/subscribe': 'Subscribe', '/ledger': 'The Ledger' }[pathname];
    if (label) jsonLd = graph(breadcrumbs([['Home', '/'], [label, pathname]]));
  }

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      {datePublished && <meta property="article:published_time" content={datePublished} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
