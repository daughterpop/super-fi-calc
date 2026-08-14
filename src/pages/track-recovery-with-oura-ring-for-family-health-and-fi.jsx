import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function TrackRecoveryWithOuraRingForFamilyHealthAndFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Health tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Track Recovery with Oura Ring for Family Health and FI
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Sleep and recovery data that helps busy parents train and work sustainably — because burnout is expensive for the household and the mission.
        </p>

        <p className="mb-6">Hey everyone,</p>

        <p className="mb-6">
          Financial independence assumes you can keep earning, parenting, and serving for years. Chronic sleep debt and ignored recovery quietly undermine that capacity. A simple wearable will not fix habits, but it can make the cost of late nights and overtraining visible.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Oura can help</h2>
        <p className="mb-6">
          The Oura Ring tracks sleep stages, resting heart rate, HRV, and readiness in a form factor many people actually wear at night. For parents balancing work, kids, and training (including triathlon prep), the daily readiness signal is a practical check against “push through everything.”
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Sleep and recovery trends over weeks, not one noisy night.</li>
          <li>Comfortable enough for continuous wear compared with many wrist devices.</li>
          <li>Referral discount lowers the entry cost when you were already considering a ring.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How it connects to FI</h2>
        <p className="mb-6">
          Health is part of stewardship of the body and of the household's earning capacity. Fewer preventable sick days, better training recovery, and clearer limits on overwork all support the long horizon of{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">building margin</Link>.
          The ring is optional. The underlying habits — consistent sleep, reasonable training load, and rest as a duty of state of life — are not.
        </p>

        <p className="not-prose mb-8">
          <a
            href="https://ouraring.com/discount/b79278c3ad?utm_source=user&utm_medium=iac_raf&utm_type=alwayson-cvr&utm_campaign=2026RAF&utm_variant=2026_raf_may"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Get 10% off Oura Ring →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you purchase through it, the site may earn a commission at no extra cost to you. Pricing and membership terms change; confirm on Oura's site. Not medical advice.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">Steward the body. Protect the capacity to serve.</p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>
        <BlogPostFooter />
      </div>
    </div>
  );
}
