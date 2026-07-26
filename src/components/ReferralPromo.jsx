import { ArrowRight, TrendingUp } from 'lucide-react';
import { getReferral } from '../data/referrals';

/**
 * Compact green promo used inside the calculator wizard / results.
 * Defaults to investing pool so offers stay on-theme next to FI math.
 */
export default function ReferralPromo({ slot = 4, pool = 'investing' }) {
  const referral = getReferral({ slot, pool });

  return (
    <div className="w-full max-w-2xl mb-6 sm:mb-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 shadow-sm border border-green-100">
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-green-500 rounded-xl flex items-center justify-center">
          <TrendingUp className="text-white" size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{referral.cardEyebrow}</h3>
          <p className="text-sm text-gray-600 mb-3 sm:mb-4">{referral.cardBody}</p>
          <a
            href={referral.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            {referral.cardCta}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
