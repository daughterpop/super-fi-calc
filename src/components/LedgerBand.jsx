import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { formatIssue, latestEdition, laneLabel } from '../data/ledger';

/**
 * Compact “this week’s Ledger” card — home, blog index, subscribe thank-you.
 */
export default function LedgerBand({ compact = false }) {
  const latest = latestEdition();
  if (!latest) return null;

  return (
    <div className="bg-white rounded-2xl border border-emerald-100 p-5 sm:p-6 shadow-sm">
      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[1.5px] text-emerald-700 mb-2">
        The Ledger · {formatIssue(latest)} · Sundays
      </p>
      <p className="text-xs text-gray-400 mb-2">{latest.sundayLabel}</p>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-snug">
        {latest.title}
      </h2>
      {!compact && (
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
          {latest.lede}
        </p>
      )}
      <ul className="space-y-2 mb-5">
        {latest.lanes.map((lane) => (
          <li key={lane.lane} className="flex items-start gap-2 text-sm text-gray-800">
            <span className="mt-0.5 shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
              {laneLabel(lane.lane)}
            </span>
            <span className="leading-snug">{lane.title}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Link
          to={`/ledger/${latest.slug}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors"
        >
          Read this week <ArrowRight size={16} />
        </Link>
        <Link
          to="/subscribe"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl text-sm transition-colors"
        >
          Get it on Sunday
        </Link>
      </div>
    </div>
  );
}
