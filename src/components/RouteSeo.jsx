import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostByPath } from '../data/posts';

const SITE = 'https://viafidelitatis.com';
const SITE_NAME = 'Via Fidelitatis';
const DEFAULT_OG = `${SITE}/og-image.png`;
const AUTHOR = 'Dustin Himmerich';

const STATIC = {
  '/': {
    title: 'Via Fidelitatis — Faithful FI Tools for Catholic Families',
    description:
      'Practical financial independence tools for Catholic families. FI calculator for college, mortgage, and family expenses — plus faith-filled stewardship resources.',
    type: 'website',
  },
  '/calculators': {
    title: 'FI Calculator for Catholic Families | Via Fidelitatis',
    description:
      'Model college, mortgage, vehicles, and real family expenses. See years to financial independence with a faith-aligned FI calculator.',
    type: 'website',
  },
  '/blog': {
    title: 'Blog — Faith, Family & Financial Independence | Via Fidelitatis',
    description:
      'Faith-filled insights on financial independence, family stewardship, tithing, and building generational legacy for Catholic households.',
    type: 'website',
  },
  '/tools': {
    title: 'Stewardship Tools & Referral Perks | Via Fidelitatis',
    description:
      'Investing, budgeting, privacy, and household tools Catholic families use on the path to FI — with clear referral perks.',
    type: 'website',
  },
  '/subscribe': {
    title: 'Subscribe — Via Fidelitatis List | Faithful FI Updates',
    description:
      'Join the Via Fidelitatis list for tips, tools, and stewardship ideas for Catholic families on the path to financial independence.',
    type: 'website',
  },
};

function absoluteUrl(path) {
  if (!path || path === '/') return `${SITE}/`;
  return `${SITE}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Single route-level SEO layer: unique title/description/canonical + Article JSON-LD
 * for blog posts. No visual UI; runs on every navigation.
 */
export default function RouteSeo() {
  const { pathname } = useLocation();
  const post = getPostByPath(pathname);
  const staticMeta = STATIC[pathname];

  let title;
  let description;
  let type = 'website';
  let datePublished;
  let jsonLd = null;

  if (post) {
    title = `${post.title} | ${SITE_NAME}`;
    description = post.excerpt;
    type = 'article';
    datePublished = post.dateSort;

    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.dateSort,
      dateModified: post.dateSort,
      author: {
        '@type': 'Person',
        name: AUTHOR,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': absoluteUrl(post.link),
      },
      keywords: (post.tags || []).join(', '),
    };
  } else if (staticMeta) {
    title = staticMeta.title;
    description = staticMeta.description;
    type = staticMeta.type;

    if (pathname === '/') {
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: SITE_NAME,
        url: SITE,
        description: staticMeta.description,
        applicationCategory: 'FinanceApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      };
    } else if (pathname === '/blog') {
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: `${SITE_NAME} Blog`,
        url: absoluteUrl('/blog'),
        description: staticMeta.description,
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE,
        },
      };
    }
  } else {
    title = `${SITE_NAME} — Faithful FI for Catholic Families`;
    description =
      'Practical financial independence tools and stewardship resources for Catholic families.';
  }

  const canonical = absoluteUrl(pathname === '/' ? '/' : pathname);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={DEFAULT_OG} />
      {datePublished && <meta property="article:published_time" content={datePublished} />}
      {datePublished && <meta property="article:modified_time" content={datePublished} />}
      {post && <meta property="article:author" content={AUTHOR} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
