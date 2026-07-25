import "./App.css";
import { Link } from 'react-router-dom';
import { GraduationCap, Home as HomeIcon, Heart, ArrowRight, BookOpen, Gift, ExternalLink, Calculator, Wrench } from 'lucide-react';
import SubscribeForm from './components/SubscribeForm';
import { featuredPosts } from './data/posts';

const ROBINHOOD_URL = 'https://join.robinhood.com/dustinh-1bff5a';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Sticky Nav */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 flex justify-between items-center gap-2">
          <Link to="/" className="font-bold text-emerald-600 hover:text-emerald-700 shrink-0 leading-tight">
            <span className="sm:hidden text-base">Fidelitas</span>
            <span className="hidden sm:inline text-2xl">Fidelitas</span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-8 text-sm">
            <Link to="/" className="text-emerald-600 font-medium whitespace-nowrap">Home</Link>
            <Link to="/calculators" className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap">Calculators</Link>
            <Link to="/blog" className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap">Blog</Link>
            <Link to="/tools" className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap">Tools</Link>
          </div>
        </div>
      </nav>

      {/* Top referral strip */}
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

      {/* Hero */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-[1.5px] mb-4">
            FAITH • FAMILY • GENERATIONAL WEALTH
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Fidelitas
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
            Faithful financial independence for Catholic families.
          </p>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Practical tools, faith-filled insights, and trusted resources to build freedom with purpose — for your household and the next generation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/calculators"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base"
            >
              <Calculator size={18} />
              Open FI Calculator
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

      {/* What you’ll find here */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8">What you’ll find here</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link to="/calculators" className="group bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all hover:shadow-md">
            <div className="w-11 h-11 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
              <Calculator className="text-emerald-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">FI Calculators</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Model college, mortgage, vehicles, and real family expenses. See your timeline to financial independence.
            </p>
          </Link>

          <Link to="/blog" className="group bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all hover:shadow-md">
            <div className="w-11 h-11 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
              <BookOpen className="text-emerald-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Faith + FI Blog</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Practical articles on stewardship, AI tools, parenting, and building a faith-filled legacy.
            </p>
          </Link>

          <Link to="/tools" className="group bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all hover:shadow-md">
            <div className="w-11 h-11 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
              <Wrench className="text-emerald-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Recommended Tools</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hand-picked apps and platforms (with referral perks) that help free up cash and invest toward FI.
            </p>
          </Link>
        </div>
      </div>

      {/* Who it’s for */}
      <div className="bg-white border-y">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8">Built for Catholic families</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-emerald-600" size={18} />
                </div>
                <h3 className="font-semibold text-gray-900">College & kids</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Plan tuition and family priorities without losing sight of faith formation.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <HomeIcon className="text-emerald-600" size={18} />
                </div>
                <h3 className="font-semibold text-gray-900">Mortgage & debt</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Model becoming debt-free while still investing and tithing generously.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Heart className="text-emerald-600" size={18} />
                </div>
                <h3 className="font-semibold text-gray-900">Legacy builders</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Align your numbers with stewardship, generosity, and the next generation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured blog posts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">From the Blog</h2>
          <Link to="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm inline-flex items-center gap-1">
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
                {post.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
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
              <span className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">Start investing</span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Open a Robinhood account and get <strong>free stocks worth up to $200</strong> when you fund it. A simple way to put your FI plan into action.
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
