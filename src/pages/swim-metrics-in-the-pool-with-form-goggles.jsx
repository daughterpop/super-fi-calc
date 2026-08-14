import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function SwimMetricsInThePoolWithFormGoggles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Health tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Swim Metrics in the Pool with FORM Goggles
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Real-time pace, distance, and stroke data in your field of view — useful for triathlon swim work when technique and consistency matter more than guessing.
        </p>

        <p className="mb-6">Hey everyone,</p>

        <p className="mb-6">
          For age-group triathletes balancing training with family and work, the pool is often the weakest and least measured leg. FORM smart swim goggles put basic metrics where you can see them without stopping at the wall every length.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What they offer</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Pace, distance, stroke rate, and related metrics displayed in-goggle.</li>
          <li>Useful feedback loop for technique work and steady aerobic sets.</li>
          <li>Referral campaigns periodically add rewards for new buyers — confirm current offer at checkout.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why it belongs on a tools page for this site</h2>
        <p className="mb-6">
          Sustainable training is part of stewarding health so the long FI horizon remains realistic. Better swim data can shorten the learning curve and reduce wasted pool time — time that belongs to family and prayer as much as to sport. It is a niche tool: buy it if you are already committed to swim improvement, not as a gadget for its own sake.
        </p>

        <p className="not-prose mb-8">
          <a
            href="https://www.formswim.com/cart/40479402065991:1?attributes[referrerUserId]=019cf7d0-367d-7dd4-ac63-df4fbd8b42a3&attributes[referralCampaign]=one-month-reward"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Shop FORM goggles →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you purchase through it, the site may earn a commission at no extra cost to you. Campaigns and pricing change; confirm on FORM's site.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">Train with feedback. Protect the rest of life.</p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>
        <BlogPostFooter />
      </div>
    </div>
  );
}
