// src/components/SubscribeForm.jsx
//
// The one email signup on the site ("Get The Ledger on Sunday"). It is used on
// the home page, /blog, /calculators, every /calculators/:slug tool, /ledger,
// every /ledger/:slug edition and /subscribe. Essays link to /subscribe.
//
// Delivery: every signup is emailed to Dustin (dhimmer1@gmail.com) through
// formsubmit.co. Activation is per referring URL; browsers send only the
// origin cross-origin, and https://www.viafidelitatis.com/ is activated. There is
// no mailing-list service behind it (no MailerLite) for now. Any new signup
// point should reuse FORMSUBMIT_AJAX / FORMSUBMIT_POST below, not a new address.
//
// With JavaScript the form posts to formsubmit's AJAX endpoint and shows the
// thank-you panel in place. Without JavaScript the plain <form> posts to the
// same address and formsubmit redirects back here with ?subscribed=1, which
// shows the same thank-you panel.
import { useEffect, useId, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { formatIssue, latestEdition } from '../data/ledger';
import { SITE } from '../lib/seoData';

const FORMSUBMIT_TARGET = 'dhimmer1@gmail.com';
export const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${FORMSUBMIT_TARGET}`;
export const FORMSUBMIT_POST = `https://formsubmit.co/${FORMSUBMIT_TARGET}`;

// Names the page a signup came from, for the email subject line.
function sourceLabel(pathname) {
  if (pathname === '/' || pathname === '') return 'Home page';
  if (pathname === '/subscribe') return 'Subscribe page';
  if (pathname === '/blog') return 'Blog index';
  if (pathname === '/calculators') return 'Calculators index';
  const calc = pathname.match(/^\/calculators\/([^/]+)/);
  if (calc) return `Calculator ${calc[1]}`;
  if (pathname === '/ledger') return 'Ledger archive';
  const edition = pathname.match(/^\/ledger\/([^/]+)/);
  if (edition) return `Ledger edition ${edition[1]}`;
  return pathname;
}

export default function SubscribeForm() {
  const { pathname } = useLocation();
  const emailId = useId();
  const [email, setEmail] = useState('');
  const [honey, setHoney] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const latest = latestEdition();

  const source = sourceLabel(pathname);
  const subject = `New Via Fidelitatis subscriber (Ledger form, ${source})`;
  const pageUrl = `${SITE}${pathname === '/' ? '/' : pathname}`;
  const nextUrl = `${pageUrl}?subscribed=1`;

  // No-JS fallback lands back here with ?subscribed=1. Read it after mount so
  // prerendered HTML and the first client render match.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (new URLSearchParams(window.location.search).get('subscribed') === '1') {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@') || loading) return;

    // Honeypot filled in: almost certainly a bot. Act as if it worked.
    if (honey) {
      setSubmitted(true);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(FORMSUBMIT_AJAX, {
        method: 'POST',
        // formsubmit activates per referring URL. Sending only the origin
        // keeps every page on the one activated form (https://www.viafidelitatis.com/).
        referrerPolicy: 'strict-origin-when-cross-origin',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          form: 'Get The Ledger on Sunday',
          page: pageUrl,
          _subject: subject,
          _template: 'table',
          _captcha: 'false',
          _honey: honey,
        }),
      });

      const data = await response.json().catch(() => ({}));
      // formsubmit answers 200 even when it did not deliver (for example an
      // unactivated address), so trust its "success" flag, not just the status.
      if (response.ok && (data.success === true || data.success === 'true')) {
        setSubmitted(true);
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

  return (
    <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-white rounded-2xl shadow-md max-w-md mx-auto text-center w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Get The Ledger on Sunday</h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        One email on Sunday. The current issue is waiting after you join.
      </p>

      {!submitted ? (
        <form
          action={FORMSUBMIT_POST}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-4"
          data-signup-form="ledger"
        >
          <input type="hidden" name="form" value="Get The Ledger on Sunday" />
          <input type="hidden" name="page" value={pageUrl} />
          <input type="hidden" name="_subject" value={subject} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={nextUrl} />
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
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 text-base"
            disabled={loading}
          />
          {error && (
            <p className="text-red-500 text-sm" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white rounded-2xl disabled:opacity-50 hover:bg-emerald-700 text-base sm:text-lg"
          >
            {loading ? 'Sending…' : 'Subscribe'} <ArrowRight size={20} />
          </button>
          <p className="text-xs text-gray-500">Unsubscribe anytime. No spam.</p>
        </form>
      ) : (
        <div className="text-left" role="status">
          <p className="text-emerald-700 text-lg sm:text-xl font-semibold text-center mb-4">
            You’re on the list.
          </p>
          {latest && (
            <>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                Welcome gift · {formatIssue(latest)}
              </p>
              <p className="font-semibold text-gray-900 mb-2">{latest.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{latest.lede}</p>
              <Link
                to={`/ledger/${latest.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm"
              >
                Read this week <ArrowRight size={16} />
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
