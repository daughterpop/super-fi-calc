import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';
import FurtherReading from '../components/FurtherReading';

export default function OrderYourLovesLessonsFromStAugustine() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Order Your Loves: Lessons from St. Augustine
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Hey everyone,
        </p>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          On the Memorial of St. Augustine, we remember a man whose heart was restless until it was ordered — and that is exactly how faithful money works, too.
        </p>

        <p className="mb-6">
          Augustine chased status, pleasure, and clever arguments for years. None of it held. A household that chases a bigger house, a safer pile, or a more impressive number — without first ordering love — will feel the same restlessness, just with better spreadsheets.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What he actually taught
        </h2>
        <p className="mb-6">
          In the Confessions he prays, “You have made us for yourself, O Lord, and our heart is restless until it rests in you.” That is not a mood. It is a diagnosis. If God is not first, money will try to be. It will never be enough, because it was never meant to be the rest.
        </p>

        <p className="mb-6">
          Augustine also gave a rule for surplus that still fits a family budget: find out how much God has given you, take from it what you need, and remember that the remainder is needed by others. Ordered love has a sequence. God. Honest needs. Then open hands.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How this lands in the household plan
        </h2>
        <p className="mb-6">
          Faithful FI is ordered love with a checking account. You name what is enough. You refuse to let lifestyle creep baptize every raise. You keep a buffer so fear does not run the home. You give first, not last. Then you put the true remainder to work — some for the vocation of the family, some for people who need it now.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Name “enough” in dollars so the heart has a boundary</li>
          <li>Tithe first so God stays first in the cash flow, not only in conversation</li>
          <li>Keep a cash buffer so restlessness does not disguise itself as prudence</li>
          <li>Split true surplus: invest for vocation, and give so the remainder actually reaches others</li>
        </ul>

        <p className="mb-6">
          When loves are ordered, the FI number stops being an idol and starts being a tool. You can save without clutching. You can give without panic. You can say no to a purchase because it is disordered, not because you are cheap.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One practical step this week
        </h2>
        <p className="mb-6">
          Sit down with last month’s numbers and ask Augustine’s question in order: Did God get the first fruits? Did the household take what it actually needed? Is there a remainder sitting idle that could serve someone else — or compound for the vocation — instead of leaking into nicer versions of the same life?
        </p>

        <p className="mb-4">
          If giving is the part that keeps slipping, make it as automatic as the mortgage. A simple donor-advised fund can hold the remainder so generosity is a plan, not a leftover mood.
        </p>

        <a
          href="https://www.daffy.org/dhimmer1/invite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg mb-6"
        >
          Put the remainder to work with Daffy →
        </a>

        <p className="mb-6">
          St. Augustine did not find peace by accumulating a better life. He found it when love was put back in order. Our part is smaller and still holy: order the household money the same way — God first, enough next, remainder given and invested — so the heart can rest.
        </p>

        <FurtherReading
          title="Confessions"
          note="the long road back to ordered love, written by a man who had already tried every cheaper rest."
        />

        <p className="text-lg font-medium text-gray-800 mt-10">
          Financial freedom really is for everyone — including your family.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
