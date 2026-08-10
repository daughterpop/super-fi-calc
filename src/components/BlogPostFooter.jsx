import { Link } from 'react-router-dom';
import SiteFooter from './SiteFooter';
import ReferralCard from './ReferralCard';
import { getReferral } from '../data/referrals';

/**
 * Light end-of-post CTA: soft rotating referral + subscribe + back to blog, then site footer.
 * Keeps affiliate presence non-obtrusive and consistent across every post that uses this footer.
 */
export default function BlogPostFooter() {
  // Slot 7 so it usually differs from homepage header (slot 0) and home card (slot 1)
  const postReferral = getReferral({ slot: 7, pool: 'all' });

  return (
    <>
      <div className="mt-12 pt-8 border-t border-gray-200 not-prose space-y-6">
        {postReferral && (
          <ReferralCard referral={postReferral} />
        )}

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
