import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';

export default function StandWithTheLegionLessonsFromStMaurice() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Stand with the Legion: Lessons from St. Maurice
        </h1>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          When the emperor ordered the Theban Legion to sacrifice to the gods, Maurice and six thousand Christian soldiers refused. They stood as one body and died rather than bend.
        </p>

        <p className="mb-6">
          The legion had already proven its courage in battle. What it would not do was pour out wine and grain before idols. Decimation came first—every tenth man killed—then another round, then the whole unit. Maurice answered for them all.
        </p>

        <p className="mb-6 italic">
          “We are your soldiers, O emperor, but God’s servants... We owe military service to you, but just living to Him... We will obey Him rather than you.”
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The quiet orders that still claim the surplus
        </h2>
        <p className="mb-6">
          Few of us face an emperor’s altar. We face quieter orders: keep the lifestyle that signals success, protect the raise that funds the next upgrade, never risk the income stream even when it requires a small compromise of conscience or vocation. Over time the ledger fills with fixed claims. When a clearer call arrives—a job that would cost status, a move that would serve the family, a refusal that would slow the climb—the numbers already say no.
        </p>

        <p className="mb-6">
          Faithful financial independence is the practice of keeping some ground free before the order comes. Name “enough” for the ordinary goods of the household so that surplus remains unclaimed. The gap between income and spending stays visible. The hand stays open for the next fidelity rather than already closed around the next fixed payment.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>List the three largest discretionary claims that exist mainly to protect image or comfort rather than real need</li>
          <li>Calculate their annual cost and move a clear share into the buffer or the giving line this month</li>
          <li>Before accepting any lifestyle increase, ask whether it would make a necessary refusal or a quieter vocation harder two years from now</li>
          <li>Treat every windfall as already available for the next act of fidelity rather than as permanent expansion of the monthly burn rate</li>
        </ul>

        <p className="mb-6">
          Maurice did not negotiate a partial sacrifice. He and the legion kept the first loyalty clear. Our quieter version is the same: keep the ledger light enough that the next good refusal or obedience can be received instead of deferred until the numbers somehow improve.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One practical step this week
        </h2>
        <p className="mb-6">
          Look at the three largest discretionary payments that are not housing, food, or basic insurance. Ask which of them would still feel necessary if the family had to answer a clear call of duty or conscience within six months. If one would not, reduce or cancel it and park the monthly amount where it actually protects freedom—the emergency fund or the giving line.
        </p>

        <p className="mb-4">
          The calculators exist for that single honest look: see the runway, protect the margin, and keep the hands free when the next word arrives.
        </p>

        <a
          href="/calculators"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg mb-6"
        >
          See the numbers →
        </a>

        <p className="mb-6">
          Maurice and the legion stood firm because their first loyalty was already settled. The same freedom is available to any household willing to leave a little room on the ledger for the next call of fidelity.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Keep the first loyalty clear. Keep the surplus free. Stand when the quiet order comes.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
