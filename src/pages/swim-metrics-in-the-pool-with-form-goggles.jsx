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

        <p className="mb-6">
          For the age-group triathlete juggling family and work, the pool is the weakest and least measured leg. FORM smart swim goggles put pace, distance, and stroke rate where you can see them — no stopping at the wall every length to guess how the set is going.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          When it earns its place
        </h2>
        <p className="mb-6">
          Real-time metrics give technique work an honest feedback loop: steady aerobic sets stop being guesswork, and wasted pool time shrinks — time that belongs to family and prayer as much as to sport. Sustainable training is part of stewarding health so the long FI horizon stays realistic. It is a niche tool, though: buy it if you are already committed to swim improvement, not as a gadget for its own sake. Referral campaigns periodically add rewards for new buyers — confirm the current offer at checkout.
        </p>

        <div className="not-prose border border-emerald-200 bg-emerald-50 rounded-2xl p-6 my-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-2">
            Where this lives now
          </p>
          <p className="text-gray-700 mb-4">
            Training tools moved to Via Salutis — the sibling site for fasting, sleep, and training.
          </p>
          <a
            href="https://www.via-salutis.com/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Training tools on Via Salutis →
          </a>
        </div>

        <p className="mb-6 text-sm text-gray-600">
          FORM belongs with the body, not the ledger. The live referral is on Via Salutis.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">Train with feedback. Protect the rest of life.</p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>
        <BlogPostFooter />
      </div>
    </div>
  );
}
