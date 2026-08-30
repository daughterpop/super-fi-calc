// src/components/SubscribeForm.jsx
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatIssue, latestEdition } from '../data/ledger';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const latest = latestEdition();

  const handleSubscribe = async () => {
    if (!email.includes('@')) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/dustin.himmerich@protonmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          _subject: 'New Via Fidelitatis subscriber',
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Subscription failed');
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
        One email a week: household, deal, fidelity. Saint essays stay on the blog, Monday through Saturday.
      </p>

      {!submitted ? (
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 text-base"
            disabled={loading}
            onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleSubscribe}
            disabled={!email.includes('@') || loading}
            className="flex items-center justify-center gap-2 w-full px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white rounded-2xl disabled:opacity-50 hover:bg-emerald-700 text-base sm:text-lg"
          >
            {loading ? 'Sending…' : 'Subscribe'} <ArrowRight size={20} />
          </button>
          <p className="text-xs text-gray-500">Unsubscribe anytime. No spam.</p>
        </div>
      ) : (
        <div className="text-left">
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
