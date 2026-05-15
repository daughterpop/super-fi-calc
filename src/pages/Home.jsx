import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Heart, Users, Target, Sparkles, Gift } from 'lucide-react';

export default function Home() {
  const [inspiration, setInspiration] = useState(null);
  const [monthlySave, setMonthlySave] = useState(500);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(8);

  // Tithing Simulator states
  const [tithePercent, setTithePercent] = useState(10);
  const [monthlyIncome, setMonthlyIncome] = useState(8000);

  const quotes = [
    { quote: 'True wealth begins with faith and family. Financial independence lets you invest in what matters most — your legacy.', source: 'Super FI' },
    { quote: 'Steward your resources today so your children can walk in freedom tomorrow. Generational wealth is built one faithful step at a time.', source: 'Proverbs-inspired' },
    { quote: 'FI isn\'t the destination — it\'s the freedom to live out your calling with generosity and joy for your family.', source: 'Super FI' },
    { quote: 'Plant seeds of financial wisdom today. Watch your family\'s harvest bless generations to come.', source: 'Super FI' },
    { quote: 'With God and a solid plan, no mountain is too high. Build the future your faith deserves.', source: 'Super FI' },
    { quote: 'Family first, freedom next. Use FI to create memories and margin that last forever.', source: 'Super FI' },
    { quote: 'Generational blessings start with small, consistent steps rooted in faith and wise stewardship.', source: 'Super FI' },
    { quote: 'Your family\'s story of abundance is written one faithful investment at a time.', source: 'Super FI' }
  ];

  const generateInspiration = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setInspiration(randomQuote);
  };

  const shareInspiration = () => {
    if (!inspiration) return;
    const shareText = `${inspiration.quote} — ${inspiration.source}\n\nDiscover tools for your own faith-filled financial freedom journey at https://super-fi-calculator.vercel.app/`;
    if (navigator.share) {
      navigator.share({
        title: 'Faith & Family FI Inspiration',
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Inspiration copied to clipboard — share it with your loved ones!');
      });
    }
  };

  const calculateLegacy = () => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    let fv = 0;
    if (monthlyRate === 0) {
      fv = monthlySave * numPayments;
    } else {
      fv = monthlySave * ((Math.pow(1 + monthlyRate, numPayments) - 1) / monthlyRate);
    }
    return Math.round(fv);
  };

  const calculateLegacyWithSavings = (savings) => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    let fv = 0;
    if (monthlyRate === 0) {
      fv = savings * numPayments;
    } else {
      fv = savings * ((Math.pow(1 + monthlyRate, numPayments) - 1) / monthlyRate);
    }
    return Math.round(fv);
  };

  const tithingImpact = (() => {
    const monthlyTithe = Math.round(monthlyIncome * (tithePercent / 100) / 12);
    const titheAdjustedSavings = Math.max(100, monthlySave - monthlyTithe);
    const legacyWithout = calculateLegacyWithSavings(monthlySave);
    const legacyWith = calculateLegacyWithSavings(titheAdjustedSavings);
    return {
      monthlyTithe,
      legacyWithout,
      legacyWith,
      difference: legacyWithout - legacyWith
    };
  })();

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

        {/* Faith & Family FI Inspiration Generator */}
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-amber-100">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-amber-500" size={32} />
            <Heart className="text-rose-500" size={32} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Faith & Family FI Inspiration</h3>
          <p className="text-gray-600 mb-8 text-lg">Uplifting wisdom to fuel your journey toward generational wealth and a faith-filled legacy.</p>

          <button
            onClick={generateInspiration}
            className="w-full mb-6 px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold rounded-2xl hover:from-amber-600 hover:to-rose-600 transition-all text-lg flex items-center justify-center gap-3"
          >
            Get Today's Inspiration <Sparkles size={20} />
          </button>

          {inspiration && (
            <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-8 rounded-2xl border border-amber-100 mb-6 text-left">
              <p className="text-lg italic text-gray-800 leading-relaxed">“{inspiration.quote}”</p>
              <p className="text-sm text-amber-700 mt-4 font-medium">— {inspiration.source}</p>
              <button
                onClick={shareInspiration}
                className="mt-6 w-full py-3 bg-white border border-amber-200 text-amber-700 rounded-xl hover:bg-amber-50 font-medium flex items-center justify-center gap-2"
              >
                Share This Inspiration with Family
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Legacy Grow Teaser */}
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-blue-100">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="text-blue-500" size={32} />
            <TrendingUp className="text-emerald-500" size={32} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Watch Your Family Legacy Grow</h3>
          <p className="text-gray-600 mb-8 text-lg">See how small, faithful steps today build generational abundance for your loved ones.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Savings</label>
              <input 
                type="range" 
                min="100" 
                max="2000" 
                step="50"
                value={monthlySave}
                onChange={(e) => setMonthlySave(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="text-center font-mono text-2xl font-bold text-blue-700 mt-1">${monthlySave}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Years to Grow</label>
              <input 
                type="range" 
                min="5" 
                max="40" 
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="text-center font-mono text-2xl font-bold text-blue-700 mt-1">{years} yrs</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Est. Annual Return</label>
              <input 
                type="range" 
                min="4" 
                max="12" 
                step="0.5"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="text-center font-mono text-2xl font-bold text-blue-700 mt-1">{rate}%</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 text-center">
            <div className="text-blue-600 text-sm font-semibold tracking-widest mb-1">YOUR PROJECTED FAMILY LEGACY</div>
            <div className="text-6xl font-bold text-gray-900 mb-2">${calculateLegacy().toLocaleString()}</div>
            <p className="text-emerald-700 italic">“A faithful steward who invests wisely leaves blessings that echo through generations.”</p>
            <p className="text-xs text-gray-500 mt-6">This is the freedom FI brings — for faith, family, and future impact.</p>
          </div>

          <Link
            to="/calculator"
            className="mt-8 w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all text-lg flex items-center justify-center gap-3"
          >
            Build Your Full Plan in the FI Calculator <ArrowRight size={20} />
          </Link>
        </div>

        {/* Tithing Impact Simulator */}
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-purple-100">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gift className="text-purple-500" size={32} />
            <Heart className="text-rose-500" size={32} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Tithing Impact Simulator</h3>
          <p className="text-gray-600 mb-8 text-lg">See how faithful giving (tithing) pairs with smart investing to multiply blessings and legacy — God honors the cheerful giver (2 Cor 9:7).</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Household Income</label>
              <input 
                type="range" 
                min="3000" 
                max="20000" 
                step="100"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full accent-purple-600 cursor-pointer"
              />
              <div className="text-center font-mono text-2xl font-bold text-purple-700 mt-1">${monthlyIncome.toLocaleString()}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tithe Percentage</label>
              <input 
                type="range" 
                min="5" 
                max="15" 
                step="1"
                value={tithePercent}
                onChange={(e) => setTithePercent(Number(e.target.value))}
                className="w-full accent-purple-600 cursor-pointer"
              />
              <div className="text-center font-mono text-2xl font-bold text-purple-700 mt-1">{tithePercent}%</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-200 text-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-purple-600 mb-1">Monthly Tithe</div>
                <div className="text-4xl font-bold text-purple-900">${tithingImpact.monthlyTithe}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-emerald-600 mb-1">Legacy w/ Tithe</div>
                <div className="text-4xl font-bold text-emerald-700">${tithingImpact.legacyWith.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-amber-600 mb-1">Legacy w/o Tithe</div>
                <div className="text-4xl font-bold text-amber-700">${tithingImpact.legacyWithout.toLocaleString()}</div>
              </div>
            </div>
            <p className="mt-6 text-purple-700 italic text-sm">Even with giving, your legacy remains strong — and faith-multiplied. Start investing the rest wisely!</p>
          </div>

          <Link
            to="/calculator"
            className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition-all text-lg flex items-center justify-center gap-3"
          >
            Model Full Tithing + FI Strategy in Calculator <ArrowRight size={20} />
          </Link>
          <a
            href="https://join.robinhood.com/dustinh-1bff5a"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-sm text-purple-600 hover:text-purple-700 underline"
          >
            Invest your stewardship savings with Robinhood →
          </a>
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
