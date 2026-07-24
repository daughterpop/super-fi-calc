import "./App.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Home, Heart, ArrowRight, BookOpen, Gift, ExternalLink } from 'lucide-react';
import SubscribeForm from './components/SubscribeForm';
import SuperFiCalculator from './Super-Fi-Calculator.jsx';
import { featuredPosts } from './data/posts';

const ROBINHOOD_URL = 'https://join.robinhood.com/dustinh-1bff5a';

function App() {
  const [activeTab, setActiveTab] = useState('quick');

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Sticky Nav */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 flex justify-between items-center gap-2">
          <Link to="/" className="font-bold text-emerald-600 hover:text-emerald-700 shrink-0 leading-tight">
            <span className="sm:hidden text-base">Super FI</span>
            <span className="hidden sm:inline text-2xl">Super FI Calculator</span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-8 text-sm">
            <Link to="/" className="text-emerald-600 font-medium whitespace-nowrap">Calculator</Link>
            <Link to="/blog" className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap">Blog</Link>
            <Link to="/tools" className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap">Tools</Link>
          </div>
        </div>
      </nav>

      {/* TOP referral strip — high on page so it converts */}
      <div className="bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-sm sm:text-[15px]">
            <Gift size={16} className="shrink-0 text-emerald-200" />
            <span>
              <strong className="font-semibold">Free stocks up to $200</strong>
              <span className="text-emerald-100"> — start investing your surplus toward FI</span>
            </span>
          </div>
          <a
            href={ROBINHOOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-emerald-800 font-semibold text-sm rounded-lg hover:bg-emerald-50 transition-colors shrink-0"
          >
            Claim free stock
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Hero + Audience cards */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-[1.5px] mb-3 sm:mb-4">
              FAITH • FAMILY • GENERATIONAL WEALTH
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-1">
              Built for Catholic Families Who Steward with Purpose
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This calculator helps parents and couples model real-life expenses like college, vehicles, and mortgages — while keeping faith, generosity, and legacy at the center of every decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <div className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-5 sm:p-6 transition-all">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 shrink-0 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center transition-colors">
                  <GraduationCap className="text-emerald-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl text-gray-900 leading-snug">College &amp; Kid-Focused Families</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">See the real impact of tuition inflation and multiple kids on your FI timeline. Plan with margin for faith formation and family experiences that matter most.</p>
            </div>
            <div className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-5 sm:p-6 transition-all">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 shrink-0 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center transition-colors">
                  <Home className="text-emerald-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl text-gray-900 leading-snug">Mortgage-Paying Stewards</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Model paying down your home while investing. Understand how becoming debt-free faster creates more room for tithing, hospitality, and Kingdom work.</p>
            </div>
            <div className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-5 sm:p-6 transition-all">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 shrink-0 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center transition-colors">
                  <Heart className="text-emerald-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl text-gray-900 leading-snug">Legacy &amp; Faith-Driven Builders</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Whether you're just starting or fine-tuning, align your numbers with Catholic principles of stewardship, generosity, and providing for future generations.</p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <Link to="/blog" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm group">
              Explore family stories &amp; faith-based FI insights
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
            </Link>
            <Link to="/tools" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm group">
              See recommended tools &amp; perks
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* From the Blog — featured posts that link to individual articles */}
      <div className="bg-gradient-to-b from-white to-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                <BookOpen className="text-emerald-600" size={18} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">From the Blog</h2>
                <p className="text-sm text-gray-500 hidden sm:block">Latest faith + FI insights for Catholic families</p>
              </div>
            </div>
            <Link
              to="/blog"
              className="text-emerald-600 hover:text-emerald-700 font-medium text-sm inline-flex items-center gap-1 shrink-0"
            >
              View all posts
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredPosts.map((post, idx) => (
              <Link
                key={idx}
                to={post.link}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all p-5 flex flex-col"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 2).map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2 text-[15px] sm:text-base">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span className="text-emerald-600 font-medium group-hover:underline">Read post →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex border-b mb-6 sm:mb-8 bg-white rounded-t-lg overflow-hidden">
          <button
            onClick={() => setActiveTab('quick')}
            className={`flex-1 px-3 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-lg transition-colors text-center ${
              activeTab === 'quick'
                ? 'border-b-4 border-emerald-600 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Quick Calculator
          </button>
          <button
            onClick={() => setActiveTab('advanced')}
            className={`flex-1 px-3 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-lg transition-colors text-center ${
              activeTab === 'advanced'
                ? 'border-b-4 border-emerald-600 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Advanced Calculator
          </button>
        </div>
        {activeTab === 'quick' ? (
          <SuperFiCalculator />
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-12 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Advanced FI Calculator</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Coming soon — more detailed scenario modeling, Monte Carlo, and tax-aware projections.
            </p>
            <p className="text-sm text-gray-500">
              For now, the Quick Calculator covers mortgage, college, vehicles, and large expenses with full projections.
            </p>
          </div>
        )}
      </div>

      {/* Secondary Robinhood CTA after calculator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-6">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Gift className="text-emerald-600" size={18} />
              <span className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">Ready to invest the surplus?</span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Open a Robinhood account and get <strong>free stocks worth up to $200</strong> when you make your first investment. Commission-free and beginner-friendly.
            </p>
          </div>
          <a
            href={ROBINHOOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors shrink-0 text-sm sm:text-base w-full sm:w-auto"
          >
            Claim free stock
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Subscribe */}
      <div className="px-4 sm:px-6 pb-10">
        <SubscribeForm />
      </div>
    </div>
  );
}

export default App;
