import { Link, Navigate, useParams } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import SubscribeForm from '../components/SubscribeForm';
import {
  adjacentEditions,
  formatIssue,
  getEdition,
  laneLabel,
} from '../data/ledger';

const VERDICT_CLASS = {
  'Take it': 'bg-emerald-50 text-emerald-800 border-emerald-200',
  'Only if': 'bg-amber-50 text-amber-900 border-amber-200',
  Skip: 'bg-gray-100 text-gray-800 border-gray-200',
};

export default function LedgerEdition() {
  const { slug } = useParams();
  const edition = getEdition(slug);
  if (!edition) return <Navigate to="/ledger" replace />;

  const { newer, older } = adjacentEditions(slug);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader showReferralStrip={false} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <Link to="/ledger" className="text-emerald-700 hover:underline font-medium text-sm">
          ← All Ledger issues
        </Link>
        <p className="mt-6 text-[10px] sm:text-xs font-semibold uppercase tracking-[1.5px] text-emerald-700">
          {formatIssue(edition)} · {edition.sundayLabel}
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {edition.title}
        </h1>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed">{edition.lede}</p>

        <div className="mt-10 space-y-10">
          {edition.lanes.map((lane) => (
            <section
              key={lane.lane}
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-7"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                  {laneLabel(lane.lane)}
                </span>
                <span className="text-xs text-gray-400">{lane.kicker}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                {lane.title}
              </h2>
              <p className="text-gray-700 font-medium leading-relaxed mb-4">{lane.lede}</p>
              {lane.body.map((para) => (
                <p key={para.slice(0, 40)} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                  {para}
                </p>
              ))}
              {lane.verdict && (
                <div
                  className={`mt-5 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
                    VERDICT_CLASS[lane.verdict.label] || VERDICT_CLASS.Skip
                  }`}
                >
                  <span className="font-semibold">{lane.verdict.label}.</span>{' '}
                  {lane.verdict.note}
                </div>
              )}
              {lane.tool && (
                <Link
                  to={lane.tool.href}
                  className="mt-5 inline-flex text-sm font-medium text-emerald-700 hover:underline"
                >
                  {lane.tool.label} →
                </Link>
              )}
            </section>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500 leading-relaxed">
          Monday through Saturday the saint essays stay on the{' '}
          <Link to="/blog" className="text-emerald-700 hover:underline font-medium">
            blog
          </Link>
          . Sunday is The Ledger.
        </p>

        <nav className="mt-10 flex flex-col sm:flex-row sm:justify-between gap-3 text-sm">
          {older ? (
            <Link to={`/ledger/${older.slug}`} className="text-gray-600 hover:text-emerald-700">
              ← {older.title}
            </Link>
          ) : (
            <span />
          )}
          {newer ? (
            <Link
              to={`/ledger/${newer.slug}`}
              className="text-gray-600 hover:text-emerald-700 sm:text-right"
            >
              {newer.title} →
            </Link>
          ) : null}
        </nav>

        <div className="pt-8">
          <SubscribeForm />
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
