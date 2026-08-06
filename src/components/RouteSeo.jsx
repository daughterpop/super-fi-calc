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

/** Build a BreadcrumbList for the current path. */
function buildBreadcrumbs(pathname, post) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE,
    },
  ];

  if (pathname === '/calculators') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'FI Calculator',
      item: absoluteUrl('/calculators'),
    });
  } else if (pathname === '/blog') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: absoluteUrl('/blog'),
    });
  } else if (pathname === '/tools') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Tools',
      item: absoluteUrl('/tools'),
    });
  } else if (pathname === '/subscribe') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Subscribe',
      item: absoluteUrl('/subscribe'),
    });
  } else if (post) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: absoluteUrl('/blog'),
    });
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: post.title,
      item: absoluteUrl(post.link),
    });
  }

  if (items.length < 2) return null;

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

/** HowTo schema describing the FI calculator flow. */
const CALCULATOR_HOWTO = {
  '@type': 'HowTo',
  name: 'How to Calculate Your Family\'s Path to Financial Independence',
  description:
    'Use the free Via Fidelitatis FI calculator to model college, mortgage, vehicles, and real household expenses — including tithing — and see years to financial independence for Catholic families.',
  image: DEFAULT_OG,
  totalTime: 'PT10M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
  },
  tool: {
    '@type': 'HowToTool',
    name: 'Via Fidelitatis FI Calculator',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Enter current finances',
      text: 'Input your current investable assets (retirement accounts, taxable investments, cash) and any outstanding debts.',
      url: `${SITE}/calculators`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Set annual spending and surplus',
      text: 'Enter your current annual household spending and the monthly surplus available after tithing and essential expenses.',
      url: `${SITE}/calculators`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Model major family expenses',
      text: 'Add college costs for each child, remaining mortgage, future vehicle replacements, and other large planned expenses with realistic inflation.',
      url: `${SITE}/calculators`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Review your years-to-FI projection',
      text: 'See how many years until your investments can support your family’s lifestyle — including continued generosity and faith formation.',
      url: `${SITE}/calculators`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Take the next faithful steps',
      text: 'Adjust inputs with your spouse, put surplus to work through disciplined investing, and protect the margin that frees time for prayer, presence, and service.',
      url: `${SITE}/calculators`,
    },
  ],
};

/**
 * Single route-level SEO layer: unique title/description/canonical + JSON-LD
 * for Organization, WebSite, Blog, Article, HowTo, and BreadcrumbList.
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

  const breadcrumbs = buildBreadcrumbs(pathname, post);

  if (post) {
    title = `${post.title} | ${SITE_NAME}`;
    description = post.excerpt;
    type = 'article';
    datePublished = post.dateSort;

    const graph = [
      {
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
      },
    ];

    if (breadcrumbs) graph.push(breadcrumbs);

    jsonLd = {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  } else if (staticMeta) {
    title = staticMeta.title;
    description = staticMeta.description;
    type = staticMeta.type;

    if (pathname === '/') {
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
      const graph = [
        {
          '@type': 'Blog',
          name: `${SITE_NAME} Blog`,
          url: absoluteUrl('/blog'),
          description: staticMeta.description,
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE,
          },
        },
      ];
      if (breadcrumbs) graph.push(breadcrumbs);
      jsonLd = {
        '@context': 'https://schema.org',
        '@graph': graph,
      };
    } else if (pathname === '/calculators') {
      const graph = [
        {
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
        },
        CALCULATOR_HOWTO,
      ];
      if (breadcrumbs) graph.push(breadcrumbs);
      jsonLd = {
        '@context': 'https://schema.org',
        '@graph': graph,
      };
    } else if (pathname === '/tools' || pathname === '/subscribe') {
      if (breadcrumbs) {
        jsonLd = {
          '@context': 'https://schema.org',
          '@graph': [breadcrumbs],
        };
      }
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
