import { Gift, ExternalLink } from 'lucide-react';

/**
 * Soft gradient CTA card driven by a referral object from getReferral().
 */
export default function ReferralCard({ referral, className = '' }) {
  if (!referral) return null;

  return (
    <div
      className={`bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 ${className}`}
    >
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Gift className="text-emerald-600" size={18} />
          <span className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">
            {referral.cardEyebrow}
          </span>
        </div>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{referral.cardBody}</p>
      </div>
      <a
        href={referral.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors shrink-0 text-sm sm:text-base w-full sm:w-auto"
      >
        {referral.cardCta}
        <ExternalLink size={16} />
      </a>
    </div>
  );
}
