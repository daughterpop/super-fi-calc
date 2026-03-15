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
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Join for FI Tips</h2>
      <p className="text-gray-600 mb-4">
        No big deal—subscribe for free tips, tricks, and tools on your path to financial independence (no more than 1 email per week).
      </p>

      {!submitted ? (
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone (optional, for occasional SMS tips)"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-600">Yes, send me FI updates (email + optional SMS).</span>
          </label>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex gap-4">
            <button
              onClick={handleSubscribe}
              disabled={!consent || !email.includes('@')}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md disabled:opacity-50"
            >
              Subscribe <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setSubmitted(true)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            >
              Skip
            </button>
          </div>
        </div>
      ) : (
        <p className="text-green-600">Thanks! You're subscribed for FI insights.</p>
      )}
    </div>
  );
}
