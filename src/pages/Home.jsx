import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Heart, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Super FI</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          Tools and insights to help you achieve financial independence
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Calculator</h2>
            <p className="text-gray-600 mb-6">
              Run the numbers on your path to financial freedom.
            </p>
            <Link
              to="/calculator"
              className="inline-block px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-lg"
            >
              Try FI Calculator →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Blog & Resources</h2>
            <p className="text-gray-600 mb-6">
              Articles, tips, and insights on building wealth.
            </p>
            <Link
              to="/blog"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-lg"
            >
              Browse All Posts →
            </Link>
          </div>
        </div>

        {/* Enhanced Robinhood Promo - moved higher, more prominent, faith/family focused */}
        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-10 shadow-xl border border-emerald-100">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
              <TrendingUp className="text-white" size={36} />
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="text-rose-500" size={20} />
                <Users className="text-emerald-600" size={20} />
                <span className="text-emerald-700 font-medium text-sm uppercase tracking-widest">Steward Your Family's Future</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to Grow Your Investments with Faith & Wisdom?
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                Open a Robinhood account today and get free stocks worth up to $200. Start building generational wealth for your family while honoring your values.
              </p>
              <a
                href="https://join.robinhood.com/dustinh-1bff5a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl text-xl w-full md:w-auto justify-center"
              >
                Claim Your Free Stocks Now
                <ArrowRight size={24} />
              </a>
              <p className="text-sm text-emerald-700 mt-5 font-medium">
                ✓ Commission-free • ✓ Easy app • ✓ Beginner-friendly • Trusted by millions building their legacy
              </p>
            </div>
          </div>
        </div>

        <p className="mt-12 text-gray-500 text-sm">
          Made with love from Chicago • More tools coming soon!
        </p>
      </div>
    </div>
  );
}
