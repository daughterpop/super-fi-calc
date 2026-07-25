import { Link, useLocation } from 'react-router-dom';
import { Gift, ExternalLink } from 'lucide-react';

export const ROBINHOOD_URL = 'https://join.robinhood.com/dustinh-1bff5a';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/calculators', label: 'Calculators' },
  { to: '/blog', label: 'Blog' },
  { to: '/tools', label: 'Tools' },
];

function navActive(pathname, to) {
  if (to === '/') return pathname === '/';
  return pathname === to || pathname.startsWith(`${to}/`);
}

/**
 * Shared sticky nav + optional Robinhood referral strip.
 * @param {{ showReferralStrip?: boolean }} props
 */
export default function SiteHeader({ showReferralStrip = true }) {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 flex justify-between items-center gap-2">
          <Link
            to="/"
            className="font-bold text-emerald-600 hover:text-emerald-700 shrink-0 leading-tight"
          >
            <span className="sm:hidden text-base">Fidelitas</span>
            <span className="hidden sm:inline text-2xl">Fidelitas</span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-8 text-sm">
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

      {showReferralStrip && (
        <div className="bg-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-sm sm:text-[15px]">
              <Gift size={16} className="shrink-0 text-emerald-200" />
              <span>
                <strong className="font-semibold">Free stocks up to $200</strong>
                <span className="text-emerald-100"> — start investing your surplus toward FI</span>
              </span>
            </div>
            <a
              href={ROBINHOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-emerald-800 font-semibold text-sm rounded-lg hover:bg-emerald-50 transition-colors shrink-0"
            >
              Claim free stock
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
