// /contact: a short note to Dustin. Delivered the same way as the Ledger
// signup: formsubmit emails it to dhimmer1@gmail.com (see SubscribeForm.jsx).
// The fetch sends an origin-only referrer so it uses the form already
// activated for https://www.viafidelitatis.com/ (no new activation).
import { useEffect, useId, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { FORMSUBMIT_AJAX, FORMSUBMIT_POST } from '../components/SubscribeForm';
import { SITE } from '../lib/seoData';

const SUBJECT = 'New Via Fidelitatis contact message';

export default function Contact() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honey, setHoney] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  // No-JS fallback returns here with ?sent=1. Read after mount so the
  // prerendered HTML and the first client render match.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (new URLSearchParams(window.location.search).get('sent') === '1') setSent(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@') || !message.trim() || loading) return;
    if (honey) {
      setSent(true);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(FORMSUBMIT_AJAX, {
        method: 'POST',
        referrerPolicy: 'strict-origin-when-cross-origin', // see SubscribeForm
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          page: `${SITE}/contact`,
          _replyto: email,
          _subject: SUBJECT,
          _template: 'table',
          _captcha: 'false',
          _honey: honey,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && (data.success === true || data.success === 'true')) {
        setSent(true);
      } else {
        throw new Error(data.message || `Send failed (${response.status})`);
      }
    } catch (err) {
      console.error(err);
      setError('Sorry, that didn’t go through. Please try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden flex flex-col">
      <SiteHeader showReferralStrip={false} />

      <div className="bg-white border-b">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Write to me</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Questions, corrections, or a story from your own household. I read every note.
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-8 sm:py-10 flex-1">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-8">
          {sent ? (
            <div role="status" className="text-center" data-contact="sent">
              <p className="text-emerald-700 text-xl font-semibold mb-2">Thank you. Your note is on its way.</p>
              <p className="text-sm text-gray-600 mb-5">I’ll write back to the email you gave, usually within a few days.</p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold"
              >
                Back to the blog <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <form
              action={FORMSUBMIT_POST}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
              data-contact-form="contact"
            >
              <input type="hidden" name="page" value={`${SITE}/contact`} />
              <input type="hidden" name="_subject" value={SUBJECT} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${SITE}/contact?sent=1`} />
              {/* JS sends _replyto explicitly; without JS formsubmit uses the "email" field as reply-to. */}
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
              <div>
                <label htmlFor={nameId} className={labelClass}>
                  Name <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  id={nameId}
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor={emailId} className={labelClass}>Email</label>
                <input
                  id={emailId}
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor={messageId} className={labelClass}>Message</label>
                <textarea
                  id={messageId}
                  name="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                  className={`${inputClass} resize-y`}
                />
              </div>
              {error && (
                <p className="text-red-600 text-sm" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold"
              >
                {loading ? 'Sending…' : 'Send'} <ArrowRight size={16} />
              </button>
              <p className="text-xs text-gray-500">Your email is only used to reply to you.</p>
            </form>
          )}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
