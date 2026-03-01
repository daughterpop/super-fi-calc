import React from 'react';
import { Link } from 'react-router-dom'; // optional - for the back link

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Financial Independence Is a Superpower – And I Want You to Have It Too
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Hey everyone,
        </p>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          Financial independence is a literal superpower.
        </p>

        <p className="mb-6">
          Once you reach it, you control your time, your choices, and your future. You stop trading hours for money you don’t need. That freedom hits different — and it’s achievable for regular people.
        </p>

        <p className="mb-6">
          I built this site because I want more people to feel that shift.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why I made this calculator
        </h2>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Simple tool: plug in your real numbers (expenses, savings, returns, mortgage, kids, big plans)</li>
          <li>Shows you exactly when FI could be in reach — no BS, just clear math</li>
          <li>Helps you see the path and move faster</li>
        </ul>

        <p className="mb-6">
          FI isn’t just for the ultra-rich. It’s math + action. Whether you’re starting out, paying off debt, or already building momentum, this is for you.
        </p>

        <p className="mb-6 font-medium">
          I’m rooting for every one of you to get there.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Quick investing tip
        </h2>

        <p className="mb-4">
          If you’re ready to put your savings to work, I use Robinhood myself. Open an account through my link and get free stocks (up to $200 value) when you fund it — great for buying VTI or other low-cost index whole-stock-market ETFs (more on that later):
        </p>

        <a
          href="https://join.robinhood.com/dustinh-1bff5a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg mb-6"
        >
          Get Your Free Stocks on Robinhood →
        </a>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Let’s build that superpower together.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
