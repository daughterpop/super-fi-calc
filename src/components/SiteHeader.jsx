import { Link, useLocation } from 'react-router-dom';
import { Gift, ExternalLink } from 'lucide-react';
import { getReferral, ROBINHOOD_URL } from '../data/referrals';

export { ROBINHOOD_URL };

/** Top nav — Subscribe lives in footer + homepage CTAs (keeps mobile row short). */
const NAV = [
  { to: '/calculators', label: 'Calculators' },
  { to: '/blog', label: 'Blog' },
  { to: '/tools', label: 'Tools' },
];

function navActive(pathname, to) {
  if (to === '/') return pathname === '/';
  return pathname === to || pathname.startsWith(`${to}/`);
}

/**
 * Shared sticky nav + optional rotating referral strip.
 * Strip only shows on home and /tools (not FAQ, blog, calculators, subscribe).
 * @param {{ showReferralStrip?: boolean }} props
 */
export default function SiteHeader({ showReferralStrip = true }) {
  const { pathname } = useLocation();
  const referral = getReferral({ slot: 0, pool: 'banner' });
  const stripAllowed =
    showReferralStrip && (pathname === '/' || pathname === '/tools');

  return (
    <>
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 flex justify-between items-center gap-2 sm:gap-3">
          <Link
            to="/"
            className="font-bold text-emerald-600 hover:text-emerald-700 shrink-0 leading-tight inline-flex items-center gap-1.5 sm:gap-2 min-w-0"
          >
            <img
              src="/logo.svg"
              alt=""
              width={28}
              height={28}
              className="w-7 h-7 sm:w-8 sm:h-8 shrink-0"
            />
            <span className="text-sm sm:text-xl lg:text-2xl tracking-tight truncate">
              Via Fidelitatis
            </span>
          </Link>
          <div className="flex items-center gap-2.5 sm:gap-6 lg:gap-8 text-sm shrink-0">
            {NAV.map(({ to, label }) => {
              const active = navActive(pathname, to);
              return (
                <Link
                  key={to}
                  to={to}
                  className={
                    active
                      ? 'text-emerald-600 font-medium whitespace-nowrap'
                      : 'text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap'
                  }
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {stripAllowed && referral && (
        <div className="bg-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-sm sm:text-[15px]">
              <Gift size={16} className="shrink-0 text-emerald-200" />
              <span>
                <strong className="font-semibold">{referral.stripHeadline}</strong>
                <span className="text-emerald-100">{referral.stripSub}</span>
              </span>
            </div>
            <a
              href={referral.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-emerald-800 font-semibold text-sm rounded-lg hover:bg-emerald-50 transition-colors shrink-0"
            >
              {referral.stripCta}
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
