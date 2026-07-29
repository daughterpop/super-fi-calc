import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';

export default function WhyFIForEveryone() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Why Financial Independence Is for Everyone
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Hey everyone,
        </p>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          Financial independence isn’t just for tech bros, doctors, or people making six figures.
        </p>

        <p className="mb-6">
          It’s for regular people — teachers, nurses, truck drivers, parents, young folks just starting out, and even those playing catch-up later in life. The math doesn’t care what your job title is. It only cares about two things: how much you keep and how consistently you invest it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The simple truth
        </h2>
        <p className="mb-6">
          You don’t need a huge salary to reach FI. You need a gap between what you earn and what you spend — and the discipline to put that gap to work in low-cost index funds over time. Compound interest does the heavy lifting.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Even saving $200–$500 a month adds up faster than most people think</li>
          <li>Cutting unnecessary expenses (without living like a monk) creates breathing room</li>
          <li>Starting small today beats waiting for the “perfect” income</li>
          <li>Every extra year you let your money grow is massive</li>
        </ul>

        <p className="mb-6">
          I built the Fidelitatis calculator because I believe this path should be accessible to anyone willing to run the numbers and take consistent action. No gatekeeping. No fancy degrees required.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Quick investing tip
        </h2>
        <p className="mb-4">
          If you’re ready to start putting money to work, I use Robinhood myself. Open an account through my link and you can get free stocks (up to $200 value) when you fund it — perfect for buying broad index funds like VTI:
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
          Financial freedom really is for everyone — including you.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
