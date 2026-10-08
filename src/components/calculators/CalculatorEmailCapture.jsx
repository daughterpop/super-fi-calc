// Post-calculator email capture (option a: results stay on the page).
//
// Shown on /calculators/:slug only after the visitor changes an input, so they
// have seen their own numbers. Signups go to the same formsubmit address as the
// Ledger form (emailed to Dustin, no mailing-list service). Nothing is emailed
// to the visitor; the success state shows their numbers right here.
import { useId, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FORMSUBMIT_AJAX, FORMSUBMIT_POST } from '../SubscribeForm';
import { formatIssue, latestEdition } from '../../data/ledger';
import { SITE } from '../../lib/seoData';

// Set to the tithe-first budget sheet once Dustin picks its format (Google
// Sheet "make a copy" link or a PDF). Until then the copy leaves it out.
export const BUDGET_SHEET_URL = '';

// Reads up to `max` result tiles ("Label" above a big bold number) from the
// rendered calculator. Every calculator uses that pattern; if one changes, the
// signup still works and simply carries fewer numbers.
export function readCalculatorResults(root, max = 3) {
  if (!root) return [];
  const out = [];
  const values = root.querySelectorAll('.font-bold.text-2xl, .font-bold.text-3xl');
  for (const el of values) {
    if (/^H[1-6]$/.test(el.tagName)) continue;
    const label = el.previousElementSibling?.textContent?.trim();
    const value = el.textContent?.trim();
    if (!label || !value || label.length > 60 || value.length > 40) continue;
    out.push({ label, value });
    if (out.length >= max) break;
  }
  return out;
}

export default function CalculatorEmailCapture({ tool, getResults, onDismiss }) {
  const emailId = useId();
  const [email, setEmail] = useState('');
  const [honey, setHoney] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(null); // results snapshot after success
  const latest = latestEdition();

  const pageUrl = `${SITE}/calculators/${tool.slug}`;
  const subject = `New Via Fidelitatis subscriber (Calculator results, ${tool.label})`;
  const sheet = BUDGET_SHEET_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@') || loading) return;
    const results = (getResults?.() || []).slice(0, 3);

    if (honey) {
      setSaved(results);
      return;
    }

    setLoading(true);
    setError(null);
    const resultFields = Object.fromEntries(
      results.map((r, i) => [`calc_result_${i + 1}`, `${r.label}: ${r.value}`]),
    );

    try {
      const response = await fetch(FORMSUBMIT_AJAX, {
        method: 'POST',
        referrerPolicy: 'strict-origin-when-cross-origin', // see SubscribeForm
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          form: 'Calculator results',
          page: pageUrl,
          calc_name: tool.label,
          ...resultFields,
          _subject: subject,
          _template: 'table',
          _captcha: 'false',
          _honey: honey,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && (data.success === true || data.success === 'true')) {
        setSaved(results);
      } else {
        throw new Error(data.message || `Subscription failed (${response.status})`);
      }
    } catch (err) {
      console.error(err);
      setError('Oops, something went wrong. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (saved) {
    return (
      <div
        className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 sm:p-5"
        role="status"
        data-calc-capture="success"
      >
        <p className="font-semibold text-emerald-800">
          You’re on the list.{' '}
          <span className="font-normal text-gray-700">
            {sheet
              ? 'Here are your numbers and the budget sheet, plus this week’s Ledger.'
              : 'Here are your numbers, plus this week’s Ledger.'}
          </span>
        </p>
        {saved.length > 0 && (
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
            {saved.map((r) => (
              <li key={r.label} className="rounded-lg bg-white border border-emerald-100 px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">{r.label}</p>
                <p className="text-base font-bold text-gray-900">{r.value}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {latest && (
            <Link
              to={`/ledger/${latest.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold"
            >
              This week’s Ledger <ArrowRight size={14} />
            </Link>
          )}
          {sheet && (
            <a
              href={sheet}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-emerald-700 font-medium underline-offset-2 hover:underline"
            >
              Tithe-first budget sheet
            </a>
          )}
          {latest && <span className="text-xs text-gray-500">{formatIssue(latest)} · {latest.title}</span>}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 sm:p-5"
      data-calc-capture="form"
    >
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-gray-600 rounded-lg"
          aria-label="No thanks, hide this"
        >
          <X size={16} />
        </button>
      )}
      <p className="font-semibold text-gray-900 pr-6">Want these numbers kept handy?</p>
      <p className="text-sm text-gray-600 mt-1 mb-3">
        {sheet
          ? 'Get The Ledger on Sundays, and grab a simple tithe-first budget sheet now: give first, then plan the rest.'
          : 'Get The Ledger on Sundays: one email for Catholic households.'}
      </p>
      <form
        action={FORMSUBMIT_POST}
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2"
        data-signup-form="calculator"
      >
        <input type="hidden" name="form" value="Calculator results" />
        <input type="hidden" name="page" value={pageUrl} />
        <input type="hidden" name="calc_name" value={tool.label} />
        <input type="hidden" name="_subject" value={subject} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={`${pageUrl}?subscribed=1`} />
        <input
          type="text"
          name="_honey"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ display: 'none' }}
        />
        <label htmlFor={emailId} className="sr-only">
          Your email
        </label>
        <input
          id={emailId}
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          disabled={loading}
          className="flex-1 min-w-0 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-1.5 shrink-0 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-sm font-semibold"
        >
          {loading ? 'Sending…' : 'Send it'} <ArrowRight size={14} />
        </button>
      </form>
      {error && (
        <p className="text-red-600 text-sm mt-2" role="alert">
          {error}
        </p>
      )}
      <p className="text-[11px] text-gray-500 mt-2">
        Just your email. I won’t sell it or spam you. Unsubscribe anytime by replying.
      </p>
    </div>
  );
}
