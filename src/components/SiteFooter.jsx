import { Link } from 'react-router-dom';

const EXPLORE = [
  { to: '/calculators', label: 'Calculators' },
  { to: '/blog', label: 'Blog' },
  { to: '/ledger', label: 'The Ledger' },
  { to: '/tools', label: 'Tools' },
  { to: '/faq', label: 'FAQ' },
  { to: '/subscribe', label: 'Subscribe' },
];

/**
 * Shared site footer — keep compact on mobile.
 * Affiliate disclosure stays visible because Tools uses referral links.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="max-w-sm">
            <Link to="/" className="font-bold text-emerald-700 hover:text-emerald-800 text-sm">
              Via Fidelitatis
            </Link>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Calculators and writing for Catholic households who want clearer money numbers without a secular FIRE playbook.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Explore</p>
            <nav className="flex flex-wrap gap-x-4 gap-y-2">
              {EXPLORE.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-gray-600 hover:text-emerald-700 font-medium"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-400">
          <p>© {year} Via Fidelitatis</p>
          <p className="sm:text-right max-w-md">
            Some tool links are affiliate referrals. If you use them, the site may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
