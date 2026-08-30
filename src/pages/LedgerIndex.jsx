import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import SubscribeForm from '../components/SubscribeForm';
import ReferralCard from '../components/ReferralCard';
import { editions, formatIssue, laneLabel, latestEdition } from '../data/ledger';
import { getReferral } from '../data/referrals';

export default function LedgerIndex() {
  const latest = latestEdition();
  const ordered = [...editions].sort((a, b) => b.date.localeCompare(a.date));
  const listReferral = getReferral({ slot: 9, pool: 'all' });

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader showReferralStrip={false} />

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-[1.5px] mb-4">
            SUNDAYS
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            The Ledger
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A short Sunday read for the household. What actually matters in the
            budget this week, whether a deal is worth it, and a note from the
            Mass readings — so money stays in its place.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {latest && (
          <Link
            to={`/ledger/${latest.slug}`}
            className="block bg-white rounded-2xl border border-emerald-200 hover:shadow-md transition-all p-6 sm:p-8 mb-8"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-emerald-700 mb-2">
              Latest · {formatIssue(latest)}
            </p>
            <p className="text-xs text-gray-400 mb-2">{latest.sundayLabel}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{latest.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-5">{latest.lede}</p>
            <ul className="space-y-2">
              {latest.lanes.map((lane) => (
                <li key={lane.lane} className="flex items-start gap-2 text-sm text-gray-800">
                  <span className="mt-0.5 shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                    {laneLabel(lane.lane)}
                  </span>
                  <span className="leading-snug">{lane.title}</span>
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-flex text-emerald-700 font-medium text-sm">
              Open the full edition →
            </span>
          </Link>
        )}

        {listReferral && (
          <div className="mb-8">
            <ReferralCard referral={listReferral} />
          </div>
        )}

        {ordered.length > 1 && (
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Earlier issues</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ordered
                .filter((e) => e.slug !== latest?.slug)
                .map((edition) => (
                  <Link
                    key={edition.slug}
                    to={`/ledger/${edition.slug}`}
                    className="group bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all p-5 flex flex-col"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      {formatIssue(edition)} · {edition.sundayLabel}
                    </p>
                    <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2">
                      {edition.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                      {edition.lede}
                    </p>
                  </Link>
                ))}
            </div>
          </>
        )}

        <SubscribeForm />
      </div>
      <SiteFooter />
    </div>
  );
}
