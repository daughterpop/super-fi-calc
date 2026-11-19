// src/components/SubscribeForm.jsx
//
// The email signup on the site ("Get the free Tithe-First Budget Worksheet").
// It is used on the home page, /blog, /calculators, every /calculators/:slug
// tool, /ledger, every /ledger/:slug edition, /subscribe, and the six
// experiment-#1 guides (via BlogPostFooter).
//
// Delivery: posts to Kit's public form endpoint (see src/data/kit.js).
// With JavaScript the form fetch()es that endpoint with Accept: application/json
// and shows the thank-you panel in place. If fetch fails (for example CORS),
// or if JavaScript is off, the plain <form> POSTs to the same URL.
//
// The calculator email capture and the /contact form still use formsubmit
// (exported below) and email dhimmer1@gmail.com. Do not point those at Kit.
import { useEffect, useId, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { KIT_SUBSCRIBE_URL, isKitFormConfigured } from '../data/kit';

const FORMSUBMIT_TARGET = 'dhimmer1@gmail.com';
export const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${FORMSUBMIT_TARGET}`;
export const FORMSUBMIT_POST = `https://formsubmit.co/${FORMSUBMIT_TARGET}`;

const SUCCESS_MESSAGE = 'Check your email to confirm, and the worksheet will be on its way.';

function kitAccepted(response, data) {
  if (!response.ok) return false;
  if (data.status === 'success') return true;
  if (data.subscription || data.subscriber) return true;
  if (data.error || data.errors || data.message) return false;
  // Kit sometimes returns a sparse 200/201 with no status field.
  return true;
}

export default function SubscribeForm() {
  const emailId = useId();
  const nameId = useId();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [honey, setHoney] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const configured = isKitFormConfigured();

  // No-JS / CORS fallback can land back here with ?subscribed=1 if Kit is
  // later set to redirect here. Read it after mount so prerendered HTML and
  // the first client render match.
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

    if (!configured) {
      setError('Signup is not available yet. Please try again soon.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const body = new FormData();
      body.set('email_address', email.trim());
      if (firstName.trim()) body.set('first_name', firstName.trim());

      const response = await fetch(KIT_SUBSCRIBE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      });

      const data = await response.json().catch(() => ({}));
      if (kitAccepted(response, data)) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || data.error || `Subscription failed (${response.status})`);
      }
    } catch (err) {
      // A TypeError from fetch usually means a network or CORS failure.
      // Fall back to a native form POST to the same Kit endpoint.
      if (configured && err instanceof TypeError) {
        e.target.submit();
        return;
      }
      console.error(err);
      setError('Oops, something went wrong. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-white rounded-2xl shadow-md max-w-md mx-auto text-center w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Get the free Tithe-First Budget Worksheet</h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        A one-page plan that puts first fruits first. You’ll also get The Ledger on Sunday.
      </p>

      {!submitted ? (
        <form
          action={configured ? KIT_SUBSCRIBE_URL : undefined}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-4"
          data-signup-form="worksheet"
        >
          <input
            type="text"
            name="website"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: 'none' }}
          />
          <label htmlFor={nameId} className="sr-only">
            First name
          </label>
          <input
            id={nameId}
            type="text"
            name="first_name"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 text-base"
            disabled={loading}
          />
          <label htmlFor={emailId} className="sr-only">
            Your email
          </label>
          <input
            id={emailId}
            type="email"
            name="email_address"
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
            {loading ? 'Sending…' : 'Get the worksheet'} <ArrowRight size={20} />
          </button>
          <p className="text-xs text-gray-500">Unsubscribe anytime. No spam.</p>
        </form>
      ) : (
        <div role="status">
          <p className="text-emerald-700 text-lg sm:text-xl font-semibold">
            {SUCCESS_MESSAGE}
          </p>
        </div>
      )}
    </div>
  );
}
