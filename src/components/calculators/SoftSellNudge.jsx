import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getReferral } from '../../data/referrals';

/**
 * Light, contextual affiliate CTA under a calculator.
 * pool: 'investing' | 'household' | 'all' (referrals.js categories)
 */
export default function SoftSellNudge({ pool = 'all', slot = 2, hint }) {
  const ref = getReferral({ slot, pool });
  if (!ref) return null;

  return (
    <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
        {ref.cardEyebrow || 'Put surplus to work'}
      </p>
      {hint && <p className="text-sm text-gray-600 mb-2">{hint}</p>}
      <p className="text-sm text-gray-700 mb-3">{ref.cardBody}</p>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={ref.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors"
        >
          {ref.cardCta}
          <ExternalLink size={14} />
        </a>
        <Link to="/tools" className="text-sm text-emerald-700 font-medium underline-offset-2 hover:underline">
          See all tools
        </Link>
      </div>
      <p className="text-[11px] text-gray-500 mt-3">
        Referral link — if you sign up, the site may earn a commission at no extra cost to you.
      </p>
    </div>
  );
}
