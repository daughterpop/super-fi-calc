import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';

export default function StewardingYourFamilysFuture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Stewarding Your Family's Future: Building Generational Wealth Through Faith and FI
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Hey everyone,
        </p>

        <p className="mb-6">
          Raising kids while chasing Financial Independence isn't just possible — it's one of the most meaningful ways to live out your faith. It's about stewarding money, time, and legacy with intention.
        </p>

        <p className="mb-6">
          Too many families chase the next raise or bigger house while missing the chance to build real freedom. FI gives you margin — to be present with your kids, teach them faith and money habits, and break cycles of financial stress.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Practical steps for faith-filled families</h2>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Live on less than you make and automate investments — create breathing room for family dinners and Sunday Mass</li>
          <li>Involve your kids in age-appropriate money talks rooted in Proverbs and stewardship</li>
          <li>Build an emergency fund and then a "legacy fund" for education, missions, or helping extended family</li>
          <li>Choose experiences and faith formation over constant consumption</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Faith + Finance Quick Tip</h2>
        <p className="mb-6">
          Remember the Parable of the Talents? God entrusts us with resources to multiply them. One couple I know pays off debt aggressively while tithing first and teaching their kids to save 50% of any gift money. They're on track for FI in their 40s with peace of mind.
        </p>

        <p className="mb-6">
          If you're ready to start investing for your family's future:
        </p>

        <a
          href="https://join.robinhood.com/dustinh-1bff5a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg mb-8"
        >
          Get Your Free Stocks on Robinhood →
        </a>

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
