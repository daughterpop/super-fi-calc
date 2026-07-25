import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Heart, Users, Target, Sparkles, Gift, ChevronLeft, ChevronRight, BookOpen, Share2 } from 'lucide-react';

export default function Home() {
  const [inspiration, setInspiration] = useState(null);
  const [monthlySave, setMonthlySave] = useState(500);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(8);

  const [tithePercent, setTithePercent] = useState(10);
  const [monthlyIncome, setMonthlyIncome] = useState(8000);
  const [currentStory, setCurrentStory] = useState(0);
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
    { quote: 'True wealth begins with faith and family. Financial independence lets you invest in what matters most — your legacy.', source: 'Fidelitas' },
    { quote: 'Steward your resources today so your children can walk in freedom tomorrow. Generational wealth is built one faithful step at a time.', source: 'Proverbs-inspired' },
    { quote: 'FI isn\'t the destination — it\'s the freedom to live out your calling with generosity and joy for your family.', source: 'Fidelitas' },
    { quote: 'Plant seeds of financial wisdom today. Watch your family\'s harvest bless generations to come.', source: 'Fidelitas' },
    { quote: 'With God and a solid plan, no mountain is too high. Build the future your faith deserves.', source: 'Fidelitas' },
    { quote: 'Family first, freedom next. Use FI to create memories and margin that last forever.', source: 'Fidelitas' },
    { quote: 'Generational blessings start with small, consistent steps rooted in faith and wise stewardship.', source: 'Fidelitas' },
    { quote: 'Your family\'s story of abundance is written one faithful investment at a time.', source: 'Fidelitas' }
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
    const shareText = `Our Family Stewardship Pledge: ${generatedPledge.goal}\n${generatedPledge.prayer}\n${generatedPledge.scripture}\n\nJoined the Fidelitas journey on ${generatedPledge.date}. Build your legacy at https://super-fi-calculator.vercel.app/`;
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
          Welcome to <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Fidelitas</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          Faithful financial independence tools for Catholic families
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Calculator</h2>
            <p className="text-gray-600 mb-6">
              Run the numbers on your path to financial freedom.
            </p>
            <Link
              to="/calculators"
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

        <p className="mt-12 text-gray-500 text-sm">
          Made with love from Chicago • More tools coming soon!
        </p>
      </div>
    </div>
  );
}
