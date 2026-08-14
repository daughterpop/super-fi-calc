import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostByPath, allPosts } from '../data/posts';
import { ALL_CALCULATORS, CALCULATOR_BY_SLUG } from '../data/calculators';

const SITE = 'https://www.viafidelitatis.com';
const SITE_NAME = 'Via Fidelitatis';
const DEFAULT_OG = `${SITE}/IMG_3729.jpeg`;
const AUTHOR = 'Dustin Himmerich';

const STATIC = {
  '/': {
    title: 'Via Fidelitatis — Faithful FI Tools for Catholic Families',
    description:
      'Practical financial independence tools for Catholic families. FI calculator for college, mortgage, and family expenses — plus faith-filled stewardship resources.',
    type: 'website',
  },
  '/calculators': {
    title: 'FI & Family Calculators for Catholic Households | Via Fidelitatis',
    description:
      'Free calculators for Catholic families: FI path, savings rate, college/529 with state tax lookup, vehicle TCO, debt payoff, tithing surplus, employer match, and more.',
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
  '/faq': {
    title: 'FAQ — Catholic Financial Independence Questions | Via Fidelitatis',
    description:
      'What Via Fidelitatis is, who it is for, and how Catholic families can pursue FI without losing the plot — tithing, Providence, 4% rule, and more.',
    type: 'website',
  },
};

function absoluteUrl(path) {
  if (!path || path === '/') return `${SITE}/`;
  return `${SITE}${path.startsWith('/') ? path : `/${path}`}`;
}

function calculatorSlugFromPath(pathname) {
  if (!pathname.startsWith('/calculators/')) return null;
  const slug = pathname.slice('/calculators/'.length).replace(/\/$/, '');
  return slug || null;
}

function buildBreadcrumbs(pathname, post, calcTool) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE,
    },
  ];

  if (pathname === '/calculators' || calcTool) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Calculators',
      item: absoluteUrl('/calculators'),
    });
    if (calcTool) {
      items.push({
        '@type': 'ListItem',
        position: 3,
        name: calcTool.label,
        item: absoluteUrl(`/calculators/${calcTool.slug}`),
      });
    }
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
  } else if (pathname === '/faq') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'FAQ',
      item: absoluteUrl('/faq'),
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

function buildBlogItemList() {
  const recent = allPosts.slice(0, 12);
  return {
    '@type': 'ItemList',
    name: `${SITE_NAME} Blog — Recent Posts`,
    numberOfItems: recent.length,
    itemListElement: recent.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(post.link),
      name: post.title,
    })),
  };
}

const CALCULATOR_HOWTO = {
  '@type': 'HowTo',
  name: "How to Calculate Your Family's Path to Financial Independence",
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
      url: `${SITE}/calculators/fi-path`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Set annual spending and surplus',
      text: 'Enter your current annual household spending and the monthly surplus available after tithing and essential expenses.',
      url: `${SITE}/calculators/fi-path`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Model major family expenses',
      text: 'Add college costs for each child, remaining mortgage, future vehicle replacements, and other large planned expenses with realistic inflation.',
      url: `${SITE}/calculators/fi-path`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Review your years-to-FI projection',
      text: 'See how many years until your investments can support your family’s lifestyle — including continued generosity and faith formation.',
      url: `${SITE}/calculators/fi-path`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Take the next faithful steps',
      text: 'Adjust inputs with your spouse, put surplus to work through disciplined investing, and protect the margin that frees time for prayer, presence, and service.',
      url: `${SITE}/calculators/fi-path`,
    },
  ],
};

const CALCULATOR_FAQ = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Via Fidelitatis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Via Fidelitatis means “the way of fidelity.” It is a small set of practical tools and writing for Catholic families who want financial independence so money serves the mission — Mass, kids, generosity, and vocation — instead of the other way around.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is this for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Catholic households (and other Christian families of goodwill) who are juggling real costs — tuition, mortgage, vehicles, tithing — and want clearer numbers without adopting a secular FIRE lifestyle. Large families, dual-income couples, and single-income homes are all welcome.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is financial independence the same as early retirement or FIRE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not exactly. Classic FIRE often aims to stop working as early as possible. Here, FI means freedom to live your vocation: more margin for prayer, presence, parish, and the work God actually called you to — whether or not that includes paid work. The number is a tool for margin, not an idol of leisure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does pursuing FI conflict with trusting Providence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Scripture and the saints repeatedly pair wise planning with radical trust. Building margin is one practical way to reduce the anxiety that crowds out prayer and generosity — so you can trust more, not less.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should tithing and charitable giving be part of an FI plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many Catholic families treat giving as a non-negotiable expense, not an afterthought. Planning for it keeps generosity alive after the paycheck stops and turns surplus into fuel for parish, missions, and hospitality.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should a large Catholic family think about the 4% rule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treat 4% as a starting point, not gospel. Larger households often have higher ongoing costs and may prefer a more conservative withdrawal rate or a floor of guaranteed income. Stress-test your real spending, not a single-person spreadsheet.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should we prioritize: emergency fund, retirement, 529s, or Catholic school tuition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A common order is: capture any employer match, build a real emergency fund, cover the next few years of known tuition if cash-flow is tight, then balance long-term retirement and education savings. Clarity on years-to-FI usually reveals the right next dollar better than a rigid rule.',
      },
    },
    {
      '@type': 'Question',
      name: 'What will I find on this site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A free FI calculator built for family realities, a blog of faith-filled stewardship essays, practical tools and referral perks that free up cash, and this FAQ. Everything is aimed at margin for vocation, not lifestyle inflation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is anything for sale? Are the referral links affiliate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The calculator and articles are free. Some tool recommendations include referral links; if you use them, the site may earn a small commission at no extra cost to you. Those offers are chosen because they can help a household free up cash or simplify money management on the path to FI.',
      },
    },
    {
      '@type': 'Question',
      name: 'What calculators are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Via Fidelitatis offers a suite of free tools: FI path, savings rate and runway, emergency fund, compound growth, employer match, college/529 with state tax benefit lookup, vehicle total cost of ownership, rent vs buy, loan payment, debt payoff (snowball/avalanche), refinance break-even, tithing and surplus, and credit card or bank bonus value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are state 529 tax benefits exact?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The state lookup is illustrative for planning. Deduction and credit caps, tax parity, income phaseouts, and in-state plan rules change by year — confirm with your 529 plan and tax professional before filing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where should we start if we feel overwhelmed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with the calculator and rough numbers — they do not need to be perfect. One clear years-to-FI figure usually makes the next step obvious. Then read a post or two that matches your season of life.',
      },
    },
  ],
};

const CALCULATOR_ITEM_LIST = {
  '@type': 'ItemList',
  name: 'Via Fidelitatis Calculators',
  numberOfItems: ALL_CALCULATORS.length,
  itemListElement: ALL_CALCULATORS.map((c, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: c.label,
    url: `${SITE}/calculators/${c.slug}`,
  })),
};

export default function RouteSeo() {
  const { pathname } = useLocation();
  const post = getPostByPath(pathname);
  const calcSlug = calculatorSlugFromPath(pathname);
  const calcTool = calcSlug ? CALCULATOR_BY_SLUG[calcSlug] : null;
  const staticMeta = STATIC[pathname];

  let title;
  let description;
  let type = 'website';
  let datePublished;
  let jsonLd = null;

  const breadcrumbs = buildBreadcrumbs(pathname, post, calcTool);

  if (calcTool) {
    title = `${calcTool.title} | ${SITE_NAME}`;
    description = calcTool.description;
    type = 'website';

    const graph = [
      {
        '@type': 'WebApplication',
        name: calcTool.title,
        url: absoluteUrl(`/calculators/${calcTool.slug}`),
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: calcTool.description,
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
  } else if (post) {
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
            url: `${SITE}/calculators/fi-path`,
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
            logo: {
              '@type': 'ImageObject',
              url: `${SITE}/logo.svg`,
            },
          },
        },
        buildBlogItemList(),
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
          name: `${SITE_NAME} Calculator Suite`,
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
        CALCULATOR_FAQ,
        CALCULATOR_ITEM_LIST,
      ];
      if (breadcrumbs) graph.push(breadcrumbs);
      jsonLd = {
        '@context': 'https://schema.org',
        '@graph': graph,
      };
    } else if (pathname === '/faq') {
      const graph = [CALCULATOR_FAQ];
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
