import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function AiTriathlonCoachingWithTransitionForBusyParents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Health tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Triathlon Coaching with Transition for Busy Parents
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Adaptive swim, bike, and run plans when you do not have a full-time coach — structured enough to progress, flexible enough for family life.
        </p>

        <p className="mb-6">Hey everyone,</p>

        <p className="mb-6">
          Age-group triathlon for parents is a logistics problem as much as a fitness problem. Missed sessions, random intensity, and guilt about time away from kids are common. An adaptive plan that adjusts when life intervenes is more realistic than a rigid PDF from a generic template.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Transition offers</h2>
        <p className="mb-6">
          Transition is an AI triathlon training app with plans across swim, bike, and run that respond to your completion and load. For busy age-groupers it aims to keep structure without requiring a human coach's weekly fee. Referral codes periodically unlock a free trial month — use code TRANSITIONVTRTF4 when offered.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Fit with stewardship</h2>
        <p className="mb-6">
          Training is not the FI plan. Sustainable health and stress management support the capacity to work, parent, and give over decades. Keep sport in its place: scheduled, bounded, and subordinate to family and prayer. If an app helps you avoid injury and random overreaching, it can be worth a trial.
        </p>

        <p className="not-prose mb-8">
          <a
            href="https://www.transition.fun?ref=TRANSITIONVTRTF4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Try Transition free →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. Trial length and pricing change; confirm current terms on Transition's site. Not medical advice.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">Train with a plan. Leave room for the rest of life.</p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>
        <BlogPostFooter />
      </div>
    </div>
  );
}
