// src/components/SubscribeForm.jsx
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubscribe = async () => {
    if (!consent || !email.includes('@')) return;

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone }),
      });

      if (response.ok) {
        setSubmitted(true);
        setError(null);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (err) {
      setError('Oops, something went wrong. Try again later.');
    }
  };

  return (
    <div className="mt-12 p-8 bg-white rounded-2xl shadow-md max-w-md mx-auto text-center">
      <h2 className="text-3xl font-bold mb-3">Join the Super FI List</h2>
      <p className="text-gray-600 mb-6">
        No big deal — free tips, tricks & tools to speed up your financial independence journey.<br />
        (Max 1 email per week. Unsubscribe anytime.)
      </p>

      {!submitted ? (
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone (optional for SMS)"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
          />
          <label className="flex items-center justify-center gap-2 text-left">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-600">Yes, send me FI updates</span>
          </label>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleSubscribe}
              disabled={!consent || !email.includes('@')}
              className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl disabled:opacity-50 hover:bg-indigo-700 text-lg"
            >
              Subscribe Free <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setSubmitted(true)}
              className="px-8 py-4 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 text-lg"
            >
              Maybe Later
            </button>
          </div>
        </div>
      ) : (
        <p className="text-green-600 text-xl">✅ You're in! Welcome to the club.</p>
      )}
    </div>
  );
}
