import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Heart, Users, Target, Sparkles, Gift, ChevronLeft, ChevronRight, BookOpen, Share2 } from 'lucide-react';

export default function Home() {
  const [inspiration, setInspiration] = useState(null);
  const [monthlySave, setMonthlySave] = useState(500);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(8);

  // Tithing Simulator states
  const [tithePercent, setTithePercent] = useState(10);
  const [monthlyIncome, setMonthlyIncome] = useState(8000);

  // New Carousel State
  const [currentStory, setCurrentStory] = useState(0);

  // Legacy Commitment Wall states
  const [pledgeGoal, setPledgeGoal] = useState('');
  const [pledgePrayer, setPledgePrayer] = useState('');
  const [generatedPledge, setGeneratedPledge] = useState(null);

  const stories = [
    {
      title: "The Rodriguez Family",
      before: "Living paycheck to paycheck with little time for faith or kids",
      after: "Debt-free, tithing generously, and leading family prayer nights",
      legacy: "Building a Catholic homeschool fund and mission trips",
      faith: "Matthew 6:33 - Seeking first the Kingdom"
    },
    {
      title: "The Thompson Family",
      before: "High stress, minimal savings, worried about kids' future",
      after: "FI in sight, more family dinners, volunteering at parish",
      legacy: "Generational wealth for grandkids' education and service",
      faith: "Proverbs 13:22 - A good man leaves an inheritance"
    },
    {
      title: "The Patel Family",
      before: "Busy careers, little margin for spiritual growth",
      after: "Part-time work, strong family bond, regular adoration",
      legacy: "Supporting local Catholic charities and family vocations",
      faith: "Psalm 127 - Unless the Lord builds the house"
    }
  ];

  const nextStory = () => setCurrentStory((prev) => (prev + 1) % stories.length);
  const prevStory = () => setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);

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

  // Legacy Pledge Generator
  const generatePledge = () => {
    if (!pledgeGoal.trim()) {
      alert('Please enter a family goal to create your pledge!');
      return;
    }
    const scriptures = [
      "Proverbs 13:22 - A good man leaves an inheritance to his children's children.",
      "Matthew 6:33 - But seek first the kingdom of God and his righteousness.",
      "Psalm 127:1 - Unless the Lord builds the house, those who build it labor in vain.",
      "2 Corinthians 9:7 - God loves a cheerful giver.",
      "Deuteronomy 6:7 - Impress them on your children."
    ];
    const randomScripture = scriptures[Math.floor(Math.random() * scriptures.length)];
    const newPledge = {
      goal: pledgeGoal,
      prayer: pledgePrayer || "Lord, guide our steps to steward Your gifts faithfully for our family's future.",
      scripture: randomScripture,
      date: new Date().toLocaleDateString()
    };
    setGeneratedPledge(newPledge);
  };

  const sharePledge = () => {
    if (!generatedPledge) return;
    const shareText = `Our Family Stewardship Pledge: ${generatedPledge.goal}\n${generatedPledge.prayer}\n${generatedPledge.scripture}\n\nJoined the Super FI journey on ${generatedPledge.date}. Build your legacy at https://super-fi-calculator.vercel.app/`;
    if (navigator.share) {
      navigator.share({
        title: 'Our Family Stewardship Pledge',
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Pledge copied! Share this beautiful commitment with your family and friends.');
      });
    }
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

        {/* Legacy Commitment Wall - NEW SECTION */}
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-rose-100">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="text-rose-500" size={32} />
            <Heart className="text-indigo-600" size={32} />
            <Users className="text-amber-500" size={32} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Legacy Commitment Wall</h3>
          <p className="text-gray-600 mb-8 text-lg">Create a personal Stewardship Pledge for your family's faith-filled financial journey. Make it shareable and inspiring!</p>

          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Family Goal (e.g., Homeschool fund, Mission trips, Debt-free by 2035)</label>
              <input
                type="text"
                value={pledgeGoal}
                onChange={(e) => setPledgeGoal(e.target.value)}
                placeholder="Build a generous Catholic education fund for our kids"
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-rose-300 text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">A short family prayer or intention (optional)</label>
              <textarea
                value={pledgePrayer}
                onChange={(e) => setPledgePrayer(e.target.value)}
                placeholder="Lord, bless our efforts to steward Your gifts for generations to come."
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-rose-300 h-24 resize-y text-lg"
              />
            </div>
          </div>

          <button
            onClick={generatePledge}
            className="w-full mb-6 px-8 py-4 bg-gradient-to-r from-rose-500 to-indigo-600 text-white font-semibold rounded-2xl hover:from-rose-600 hover:to-indigo-700 transition-all text-lg flex items-center justify-center gap-3"
          >
            Generate My Stewardship Pledge Card <Sparkles size={20} />
          </button>

          {generatedPledge && (
            <div className="bg-gradient-to-br from-rose-50 via-amber-50 to-indigo-50 p-10 rounded-3xl border-2 border-rose-200 text-left shadow-inner">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow mb-4">
                  <Heart className="text-rose-500" size={32} />
                </div>
                <div className="text-rose-700 font-semibold tracking-widest text-sm">FAMILY STEWARDSHIP PLEDGE</div>
                <div className="text-xs text-gray-500 mt-1">{generatedPledge.date}</div>
              </div>

              <div className="text-2xl font-bold text-gray-900 mb-6 leading-tight text-center">“{generatedPledge.goal}”</div>

              <div className="italic text-gray-700 text-lg mb-8 border-l-4 border-rose-300 pl-6">
                {generatedPledge.prayer}
              </div>

              <div className="text-sm text-indigo-700 font-medium text-center mb-8">
                {generatedPledge.scripture}
              </div>

              <button
                onClick={sharePledge}
                className="w-full py-4 bg-white border-2 border-rose-200 text-rose-700 rounded-2xl hover:bg-rose-50 font-semibold flex items-center justify-center gap-3 text-lg"
              >
                Share This Pledge Card with Family & Friends
                <Share2 size={20} />
              </button>
              <p className="text-center text-xs text-gray-500 mt-6">A visible reminder of your commitment to faith, family, and generational wealth.</p>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Turn this pledge into action with our FI Calculator <ArrowRight size={16} />
            </Link>
            <a
              href="https://join.robinhood.com/dustinh-1bff5a"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-sm text-emerald-600 hover:text-emerald-700"
            >
              Start investing today with Robinhood to live out your legacy →
            </a>
          </div>
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

        {/* NEW: Catholic Family Legacy Stories Carousel */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="text-rose-500" size={32} />
              <Users className="text-indigo-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Catholic Family Legacy Stories</h3>
            <p className="text-gray-600 max-w-md mx-auto">Real-inspired journeys of faith-filled families building generational wealth and legacy.</p>
          </div>

          <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-rose-100 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <button onClick={prevStory} className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                <ChevronLeft size={28} />
              </button>
              <div className="text-sm font-medium text-rose-600 tracking-widest">STORY {currentStory + 1} OF {stories.length}</div>
              <button onClick={nextStory} className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                <ChevronRight size={28} />
              </button>
            </div>

            <div className="min-h-[320px] flex flex-col items-center text-center px-4">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Users size={40} className="text-rose-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{stories[currentStory].title}</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-8">
                <div className="bg-amber-50 p-6 rounded-2xl">
                  <div className="uppercase text-amber-600 text-xs tracking-widest mb-2">Before</div>
                  <p className="text-gray-700">{stories[currentStory].before}</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl">
                  <div className="uppercase text-emerald-600 text-xs tracking-widest mb-2">After</div>
                  <p className="text-gray-700">{stories[currentStory].after}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl mb-6 w-full max-w-2xl">
                <p className="italic text-gray-700">“{stories[currentStory].legacy}”</p>
                <p className="text-xs text-indigo-600 mt-3 font-medium">— {stories[currentStory].faith}</p>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStory(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === currentStory ? 'bg-rose-600 scale-125' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Read more inspiring stories in our blog <ArrowRight size={16} />
            </Link>
          </div>
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
