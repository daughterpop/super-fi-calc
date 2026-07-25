import "./App.css";
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Home as HomeIcon,
  Heart,
  ArrowRight,
  BookOpen,
  Gift,
  ExternalLink,
  Calculator,
  Wrench,
} from 'lucide-react';
import SubscribeForm from './components/SubscribeForm';
import SiteHeader, { ROBINHOOD_URL } from './components/SiteHeader';
import { featuredPosts } from './data/posts';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader />

      {/* Hero — lead with why */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-[1.5px] mb-4">
            FAITH • FAMILY • GENERATIONAL WEALTH
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Freedom to live your vocation
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-3">
            <span className="font-semibold text-gray-800">Fidelitas</span> helps Catholic families build financial
            independence so money serves the mission — not the other way around.
          </p>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
            More margin for Mass, kids, generosity, and the next generation. Start by knowing your number.
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
        </div>
      </div>

      {/* Clear path: Calculate → Understand → Act */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">A simple path</h2>
        <p className="text-gray-600 text-sm sm:text-base text-center max-w-xl mx-auto mb-8">
          Know the number. See the plan. Put surplus to work — without losing sight of faith and family.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <Link
            to="/calculators"
            className="group relative bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all hover:shadow-md"
          >
            <div className="absolute -top-3 left-6 w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">
              1
            </div>
            <div className="w-11 h-11 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center mb-4 mt-1 transition-colors">
              <Calculator className="text-emerald-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Calculate</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Model college, mortgage, vehicles, and real family expenses. See years to FI and your progress.
            </p>
            <span className="text-emerald-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
              Open calculator <ArrowRight size={14} />
            </span>
          </Link>

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
              Stewardship, tithing with FI, parenting money habits, and building a faith-filled legacy.
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
              Investing, budgeting, privacy, and everyday savings — tools with referral perks that free up cash for FI.
            </p>
            <span className="text-emerald-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
              Browse tools <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>

      {/* Who it’s for */}
      <div className="bg-white border-y">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">Built for Catholic families</h2>
          <p className="text-gray-600 text-sm sm:text-base text-center max-w-xl mx-auto mb-8">
            FI here isn’t escape from responsibility — it’s capacity for presence, generosity, and formation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-emerald-600" size={18} />
                </div>
                <h3 className="font-semibold text-gray-900">College & kids</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Plan tuition and family priorities without squeezing out faith formation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <HomeIcon className="text-emerald-600" size={18} />
                </div>
                <h3 className="font-semibold text-gray-900">Mortgage & debt</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Model becoming debt-free while still investing and tithing generously.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Heart className="text-emerald-600" size={18} />
                </div>
                <h3 className="font-semibold text-gray-900">Legacy builders</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Align your numbers with stewardship, generosity, and the next generation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured blog posts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
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
          {featuredPosts.slice(0, 3).map((post, idx) => (
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

      {/* Soft Robinhood CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Gift className="text-emerald-600" size={18} />
              <span className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">
                Put the plan to work
              </span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Once you know your surplus, invest it. Open a Robinhood account and get{' '}
              <strong>free stocks worth up to $200</strong> when you fund it.
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

      <div className="px-4 sm:px-6 pb-10">
        <SubscribeForm />
      </div>
    </div>
  );
}

export default App;
