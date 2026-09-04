import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

export default function RouteSeo() {
  const { pathname } = useLocation();
  const post = getPostByPath(pathname);
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

  const canonical = absoluteUrl(pathname === '/' ? '/' : pathname);

  let ogImage = defaultOgImage();
  if (calcTool) {
    ogImage = buildOgImageUrl({ title: calcTool.label || calcTool.title, kicker: 'Calculator', kind: 'calculator' });
  } else if (post) {
    ogImage = buildOgImageUrl({ title: post.title, kicker: 'Essay', kind: 'blog' });
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

  if (pathname === '/faq' || pathname === '/calculators') {
    jsonLd = { '@context': 'https://schema.org', '@graph': pathname === '/faq' ? [CALCULATOR_FAQ] : [CALCULATOR_HOWTO, CALCULATOR_FAQ, CALCULATOR_ITEM_LIST] };
  } else if (pathname === '/blog') {
    jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Blog', name: `${SITE_NAME} Blog`, url: absoluteUrl('/blog'), description },
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
      ],
    };
  } else if (post || edition) {
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': post ? 'BlogPosting' : 'Article',
      headline: post ? post.title : edition.title,
      description,
      datePublished,
      author: { '@type': 'Person', name: AUTHOR },
      image: ogImage,
      mainEntityOfPage: canonical,
    };
  }

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
      <meta property="og:image" content={ogImage} />
      {datePublished && <meta property="article:published_time" content={datePublished} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
