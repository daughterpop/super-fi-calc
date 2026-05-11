import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Heart, Users, Target, Sparkles } from 'lucide-react';

export default function Home() {
  const [kidsGoal, setKidsGoal] = useState(2);
  const [dreamFund, setDreamFund] = useState(50000);
  const [legacyMessage, setLegacyMessage] = useState('');
  const [shared, setShared] = useState(false);

  const buildLegacyVision = () => {
    const messages = [
      `Your vision for ${kidsGoal} children with a $${dreamFund.toLocaleString()} dream fund is a beautiful act of stewardship. Investing wisely today plants seeds for generational blessings.`,
      `Faith-filled families like yours are building legacies that echo eternity. Start small, stay consistent — your ${kidsGoal} kids will thank you.`,
      `Imagine the joy of funding family adventures and passing on wisdom. With $${dreamFund.toLocaleString()} as your target, you're on the path to true abundance.`
    ];
    setLegacyMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  const shareVision = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Super FI Family Legacy Vision',
        text: legacyMessage,
        url: 'https://super-fi-calculator.vercel.app/'
      });
    } else {
      alert('Share this vision with your family: ' + legacyMessage);
    }
    setShared(true);
  };

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

        {/* New: Family Legacy Vision Builder - delightful, interactive, faith-family focused to boost engagement and shares */}
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-indigo-100">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="text-indigo-600" size={32} />
            <Sparkles className="text-amber-500" size={28} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Build Your Family Legacy Vision</h3>
          <p className="text-gray-600 mb-8 text-lg">Dream big with faith — interactive goals for generational impact.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Number of Children to Steward</label>
              <input
                type="range"
                min="1"
                max="6"
                value={kidsGoal}
                onChange={(e) => setKidsGoal(parseInt(e.target.value))}
                className="w-full accent-indigo-600"
              />
              <div className="text-center text-2xl font-semibold text-indigo-700 mt-2">{kidsGoal}</div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Dream Family Fund Target ($)</label>
              <input
                type="number"
                value={dreamFund}
                onChange={(e) => setDreamFund(parseInt(e.target.value) || 50000)}
                className="w-full px-6 py-4 text-xl border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            onClick={buildLegacyVision}
            className="w-full mb-6 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-blue-700 transition-all text-lg flex items-center justify-center gap-3"
          >
            Inspire My Legacy Vision <Sparkles size={20} />
          </button>

          {legacyMessage && (
            <div className="bg-gradient-to-br from-amber-50 to-indigo-50 p-8 rounded-2xl border border-amber-100 mb-6 text-left">
              <p className="text-lg italic text-gray-800 leading-relaxed">“{legacyMessage}”</p>
              <button
                onClick={shareVision}
                className="mt-6 w-full py-3 bg-white border border-indigo-200 text-indigo-700 rounded-xl hover:bg-indigo-50 font-medium"
              >
                Share This Faith-Filled Vision
              </button>
            </div>
          )}
        </div>

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
