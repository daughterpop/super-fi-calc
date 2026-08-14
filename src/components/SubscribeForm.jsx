// src/components/SubscribeForm.jsx
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Get the occasional email</h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        When there's a new calculator, a useful post, or a tool we actually use — not a weekly pep talk.
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
        <p className="text-green-600 text-lg sm:text-xl">You're on the list. Thanks for joining.</p>
      )}
    </div>
  );
}
