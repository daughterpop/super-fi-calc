// src/components/SubscribeForm.jsx
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!consent || !email.includes('@')) return;

    setLoading(true);
    setError(null);

    try {
      // Sends the submission straight to your email via formsubmit.co
      // (first time you get a one-time confirmation email from them)
      const response = await fetch('https://formsubmit.co/ajax/dustin.himmerich@protonmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          phone: phone || 'not provided',
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
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Join the Via Fidelitatis List</h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        Free tips, tools, and stewardship ideas for Catholic families on the path to financial independence.
        Unsubscribe anytime.
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
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone (optional for SMS)"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 text-base"
            disabled={loading}
          />
          <label className="flex items-start sm:items-center justify-center gap-2 text-left">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="h-5 w-5 mt-0.5 sm:mt-0 shrink-0 text-emerald-600 border-gray-300 rounded"
              disabled={loading}
            />
            <span className="text-sm text-gray-600">Yes, send me FI updates</span>
          </label>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={handleSubscribe}
              disabled={!consent || !email.includes('@') || loading}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white rounded-2xl disabled:opacity-50 hover:bg-emerald-700 text-base sm:text-lg"
            >
              {loading ? 'Sending…' : 'Subscribe Free'} <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setSubmitted(true)}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 text-base sm:text-lg"
              disabled={loading}
            >
              Maybe Later
            </button>
          </div>
        </div>
      ) : (
        <p className="text-green-600 text-lg sm:text-xl">✅ You're in! Welcome to Via Fidelitatis.</p>
      )}
    </div>
  );
}
