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
 * Single route-level SEO layer: unique title/description/canonical + JSON-LD
 * for Organization, WebSite, Blog, and Article.
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
      '@type': 'BlogPosting',
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
        logo: {
          '@type': 'ImageObject',
          url: `${SITE}/logo.svg`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': absoluteUrl(post.link),
      },
      keywords: (post.tags || []).join(', '),
      image: DEFAULT_OG,
    };
  } else if (staticMeta) {
    title = staticMeta.title;
    description = staticMeta.description;
    type = staticMeta.type;

    if (pathname === '/') {
      // Full Organization + WebSite graph for the homepage
      jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${SITE}/#organization`,
            name: SITE_NAME,
            url: SITE,
            logo: {
              '@type': 'ImageObject',
              url: `${SITE}/logo.svg`,
            },
            description:
              'Helps Catholic families build financial independence so money serves the mission, not the other way around.',
            founder: {
              '@type': 'Person',
              name: AUTHOR,
            },
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE}/#website`,
            url: SITE,
            name: SITE_NAME,
            description: staticMeta.description,
            publisher: {
              '@id': `${SITE}/#organization`,
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE}/blog?q={search_term_string}`,
              },
              'query-input': 'required name=search_term_string',
            },
          },
          {
            '@type': 'WebApplication',
            name: `${SITE_NAME} FI Calculator`,
            url: `${SITE}/calculators`,
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            description:
              'Free FI calculator designed for Catholic families modeling college, mortgage, tithing, and real household expenses.',
          },
        ],
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
    } else if (pathname === '/calculators') {
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: `${SITE_NAME} FI Calculator`,
        url: absoluteUrl('/calculators'),
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
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
