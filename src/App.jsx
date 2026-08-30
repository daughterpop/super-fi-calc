import "./App.css";
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Wrench,
} from 'lucide-react';
import SubscribeForm from './components/SubscribeForm';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import ReferralCard from './components/ReferralCard';
import MiniCalculatorCard from './components/MiniCalculatorCard';
import LedgerBand from './components/LedgerBand';
import { allPosts } from './data/posts';
import { latestEdition } from './data/ledger';
import { getReferral } from './data/referrals';

function App() {
  // Slot 1 so homepage card usually differs from header strip the same day
  const homeReferral = getReferral({ slot: 1, pool: 'all' });
  const recentPosts = allPosts.slice(0, 3);
  const latestLedger = latestEdition();

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader />

      {/* Hero — lead with why */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <p className="text-sm text-emerald-700 font-medium mb-3">
            For Catholic families building financial independence
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Freedom to live your vocation
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-3">
            <span className="font-semibold text-gray-800">Via Fidelitatis</span> means “the way of fidelity.”
            These tools and essays help households get clear numbers so money stops crowding out Mass, kids, and generosity.
          </p>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Start with the calculator. One honest figure is usually enough to see the next step.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/calculators"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
            >
              <Calculator size={18} />
              Find your FI number
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
            >
              <BookOpen size={18} />
              Read the Blog
            </Link>
          </div>
          <p className="mt-5 text-sm text-gray-500">
            New here?{' '}
            <Link to="/faq" className="text-emerald-700 hover:text-emerald-800 font-medium underline-offset-2 hover:underline">
              Common questions
            </Link>
            {latestLedger ? (
              <>
                {' · '}
                <Link
                  to={`/ledger/${latestLedger.slug}`}
                  className="text-emerald-700 hover:text-emerald-800 font-medium underline-offset-2 hover:underline"
                >
                  This Sunday’s Ledger
                </Link>
              </>
            ) : null}
          </p>
        </div>
      </div>

      {/* Clear path: Calculate → Understand → Act */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">Three places to start</h2>
        <p className="text-gray-600 text-sm sm:text-base text-center max-w-xl mx-auto mb-8">
          Run the numbers, read something useful, then use tools that actually free up cash — built for tuition, tithing, and a full house, not a one-person FIRE spreadsheet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Interactive Calculate card */}
          <MiniCalculatorCard />

          <Link
            to="/blog"
            className="group relative bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all hover:shadow-md"
          >
            <div className="absolute -top-3 left-6 w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">
              2
            </div>
            <div className="w-11 h-11 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center mb-4 mt-1 transition-colors">
              <BookOpen className="text-emerald-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Understand</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Essays on tithing, parenting, and keeping money from running the household.
            </p>
            <span className="text-emerald-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
              Read the blog <ArrowRight size={14} />
            </span>
          </Link>

          <Link
            to="/tools"
            className="group relative bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all hover:shadow-md"
          >
            <div className="absolute -top-3 left-6 w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">
              3
            </div>
            <div className="w-11 h-11 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center mb-4 mt-1 transition-colors">
              <Wrench className="text-emerald-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Act</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Apps and platforms we use — investing, budgets, privacy, and everyday savings — with clear referral perks.
            </p>
            <span className="text-emerald-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
              Browse tools <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>

      {/* Sunday Ledger — own section, not a blog post */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-4 sm:pb-6">
        <LedgerBand />
      </div>

      {/* Recent blog posts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 border-t border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">From the Blog</h2>
          <Link
            to="/blog"
            className="text-emerald-600 hover:text-emerald-700 font-medium text-sm inline-flex items-center gap-1"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recentPosts.map((post, idx) => (
            <Link
              key={idx}
              to={post.link}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all p-5 flex flex-col"
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2 text-[15px]">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
              <div className="mt-3 pt-3 border-t border-gray-50 text-xs text-gray-400 flex justify-between">
                <span>{post.date}</span>
                <span className="text-emerald-600 font-medium">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Rotating soft referral CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
        <ReferralCard referral={homeReferral} />
      </div>

      <div className="px-4 sm:px-6 pb-10">
        <SubscribeForm />
      </div>
      <SiteFooter />
    </div>
  );
}

export default App;
