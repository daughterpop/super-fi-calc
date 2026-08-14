import { Link, useLocation } from 'react-router-dom';
import SiteFooter from './SiteFooter';
import ReferralCard from './ReferralCard';
import { getReferral } from '../data/referrals';
import { getRelatedPosts, PILLAR_LINKS, getPostByPath } from '../data/posts';

/**
 * End-of-post CTA with strong internal linking:
 * - Related posts (tag overlap)
 * - Always-visible pillar guides (Why FI / Get Started / Build Margin)
 * - Calculator CTA
 * - Soft referral + subscribe + back to blog
 */
export default function BlogPostFooter() {
  const { pathname } = useLocation();
  const current = getPostByPath(pathname);
  const related = getRelatedPosts(pathname, 3);
  // Slot 7 so it usually differs from homepage header (slot 0) and home card (slot 1)
  const postReferral = getReferral({ slot: 7, pool: 'all' });

  // Don't re-list the current page in pillars
  const pillars = PILLAR_LINKS.filter((p) => p.to !== pathname);

  return (
    <>
      <div className="mt-12 pt-8 border-t border-gray-200 not-prose space-y-10">
        {/* Related posts — primary internal linking signal */}
        {related.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">
              Keep reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {related.map((post) => (
                <Link
                  key={post.link}
                  to={post.link}
                  className="group block rounded-xl border border-gray-100 bg-white p-4 hover:border-emerald-200 hover:shadow-sm transition-all"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 mb-1.5">
                    {(post.tags || []).slice(0, 1).join('') || 'Stewardship'}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 leading-snug line-clamp-2">
                    {post.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Pillar guides + calculator — hub pages */}
        <div className="rounded-2xl bg-emerald-50/80 border border-emerald-100 p-5 sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-800 mb-3">
            Core guides
          </h3>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 mb-4">
            {pillars.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="inline-flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 px-4 py-2.5 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 text-left transition-colors"
              >
                <span className="text-sm font-semibold text-emerald-800">{p.label}</span>
                <span className="text-xs text-gray-500 hidden sm:inline">· {p.blurb}</span>
              </Link>
            ))}
          </div>
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
          >
            Find your FI number →
          </Link>
        </div>

        {postReferral && <ReferralCard referral={postReferral} />}

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Want more faith-filled FI tips for your family?{' '}
          <Link
            to="/subscribe"
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Join the list →
          </Link>
        </p>
        <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 font-medium">
          ← Back to Blog
        </Link>
      </div>
      <div className="not-prose -mx-4 sm:mx-0 mt-10">
        <SiteFooter />
      </div>
    </>
  );
}
