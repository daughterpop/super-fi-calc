import { useLayoutEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import SiteFooter from './SiteFooter';
import ReferralCard from './ReferralCard';
import { BlogArticleHeader } from './SiteHeader';
import { getReferral } from '../data/referrals';
import { allPosts, getPostByPath } from '../data/posts';
import { GUIDE_LINKS, isGuideLink } from '../data/guides';

function BlogNavPortal() {
  const [el, setEl] = useState(null);
  useLayoutEffect(() => {
    const node = document.createElement('div');
    node.id = 'vf-blog-article-header';
    document.body.prepend(node);
    setEl(node);
    return () => node.remove();
  }, []);
  if (!el) return null;
  return createPortal(<BlogArticleHeader />, el);
}

function normalize(path) {
  if (!path) return '';
  return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
}

function guideScore(guide, current) {
  if (!current) return 0;
  const tags = new Set(current.tags || []);
  let score = (guide.tags || []).filter((t) => tags.has(t)).length;
  const hay = `${current.title} ${current.excerpt} ${(current.tags || []).join(' ')}`.toLowerCase();
  if (hay.includes('tithe') || hay.includes('giving') || hay.includes('generos')) {
    if (guide.link.includes('budget') || guide.link.includes('emergency') || guide.link.includes('margin')) score += 2;
  }
  if (hay.includes('invest') || hay.includes('surplus') || hay.includes('windfall')) {
    if (guide.link.includes('investing') || guide.link.includes('margin')) score += 2;
  }
  if (hay.includes('prayer') || hay.includes('book') || hay.includes('child') || hay.includes('parent')) {
    if (guide.link.includes('books') || guide.link.includes('get-started')) score += 2;
  }
  if (hay.includes('fire') || hay.includes('vocation') || hay.includes('retire')) {
    if (guide.link.includes('fire') || guide.link.includes('get-started') || guide.link.includes('margin')) score += 2;
  }
  return score;
}

function previousInFeed(currentPath) {
  const ordered = [...allPosts].sort((a, b) => (b.dateSort || '').localeCompare(a.dateSort || ''));
  const index = ordered.findIndex((p) => p.link === currentPath);
  if (index === -1) return ordered[0] || null;
  // Next card down the Latest list (older than the one you just read).
  return ordered[index + 1] || ordered[index - 1] || null;
}

function pickKeepReading(pathname) {
  const currentPath = normalize(pathname);
  const current = getPostByPath(currentPath);
  const others = allPosts.filter((p) => p.link !== currentPath);
  const neighbor = previousInFeed(currentPath);
  const guides = GUIDE_LINKS.map((link) => others.find((p) => p.link === link)).filter(Boolean);
  const rankedGuides = [...guides].sort((a, b) => guideScore(b, current) - guideScore(a, current));

  const picks = [];
  if (neighbor) {
    picks.push({
      post: neighbor,
      kind: isGuideLink(neighbor.link) ? 'guide' : 'previous',
    });
  }
  for (const g of rankedGuides) {
    if (picks.length >= 3) break;
    if (picks.some((x) => x.post.link === g.link)) continue;
    picks.push({ post: g, kind: 'guide' });
  }
  if (picks.length < 3) {
    for (const p of others) {
      if (picks.length >= 3) break;
      if (picks.some((x) => x.post.link === p.link)) continue;
      picks.push({ post: p, kind: isGuideLink(p.link) ? 'guide' : 'previous' });
    }
  }
  return picks.slice(0, 3);
}

export default function BlogPostFooter() {
  const { pathname } = useLocation();
  const picks = pickKeepReading(pathname);
  const postReferral = getReferral({ slot: 7, pool: 'all' });

  return (
    <>
      <BlogNavPortal />
      <div className="mt-12 pt-8 border-t border-gray-200 not-prose space-y-10">
        {picks.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">
              Keep reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {picks.map(({ post, kind }) => (
                <Link
                  key={post.link}
                  to={post.link}
                  className="group block rounded-xl border border-gray-100 bg-white p-4 hover:border-emerald-200 hover:shadow-sm transition-all"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 mb-1.5">
                    {kind === 'guide' ? 'Evergreen guide' : 'Previous'}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 leading-snug line-clamp-2">
                    {post.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link
          to="/calculators"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
        >
          Find your FI number →
        </Link>

        {postReferral && <ReferralCard referral={postReferral} />}

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Prefer email?{' '}
          <Link
            to="/subscribe"
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Subscribe for occasional notes →
          </Link>
        </p>
        <Link to="/blog" className="text-emerald-600 hover:text-emerald-800 font-medium">
          ← Back to Blog
        </Link>
      </div>
      <div className="not-prose -mx-4 sm:mx-0 mt-10">
        <SiteFooter />
      </div>
    </>
  );
}
