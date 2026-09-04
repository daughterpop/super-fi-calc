import "./App.css";
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';
import SubscribeForm from './components/SubscribeForm';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import ReferralCard from './components/ReferralCard';
import LedgerBand from './components/LedgerBand';
import { allPosts } from './data/posts';
import { getReferral } from './data/referrals';
import { pathForCalculator } from './data/calculators';

const SEQUENCE = [
  { to: '/blog/is-fire-compatible-with-catholicism', label: 'Is FIRE Compatible' },
  { to: '/blog/build-margin-for-catholic-families', label: 'Build Margin' },
  { to: '/blog/how-to-budget-as-a-catholic-family-with-tithing-first', label: 'Budget with the tithe first' },
];

function App() {
  const homeReferral = getReferral({ slot: 1, pool: 'all' });
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader />

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <p className="text-sm text-emerald-700 font-medium mb-3">
            For Catholic families building financial independence
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Freedom to live your vocation
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            <span className="font-semibold text-gray-800">Via Fidelitatis</span> means “the way of fidelity.”
            Tools and writing so money stops crowding out Mass, kids, and generosity.
          </p>

          <Link
            to={pathForCalculator('fi-path')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            <Calculator size={18} />
            Find your FI number
          </Link>
          <p className="mt-5 text-sm text-gray-500">
            <Link to="/faq" className="text-emerald-700 hover:text-emerald-800 font-medium underline-offset-2 hover:underline">
              Common questions
            </Link>
            <span className="text-gray-300"> · </span>
            <Link to="/blog" className="text-emerald-700 hover:text-emerald-800 font-medium underline-offset-2 hover:underline">
              Blog
            </Link>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">A simple path</h2>

        <Link
          to={pathForCalculator('fi-path')}
          className="group relative block bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all hover:shadow-md"
        >
          <div className="absolute -top-3 left-6 w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">
            1
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-2 mt-1">Run the number</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            College, mortgage, tithing, a full house. One years-to-FI figure is usually enough to see the next step.
          </p>
          <span className="text-emerald-600 text-sm font-medium inline-flex items-center gap-1">
            Open the calculator <ArrowRight size={14} />
          </span>
        </Link>

        <div className="relative bg-white border border-gray-100 rounded-2xl p-6">
          <div className="absolute -top-3 left-6 w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">
            2
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-2 mt-1">Read the sequence</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            How we treat faith and money when you want more than today’s saint note.
          </p>
          <Link
            to="/blog/how-to-get-started-on-your-fi-path"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold text-sm mb-3"
          >
            How to Get Started <ArrowRight size={14} />
          </Link>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-600">
            {SEQUENCE.map((item, i) => (
              <span key={item.to} className="inline-flex items-center gap-3">
                {i > 0 && <span className="text-gray-300">·</span>}
                <Link to={item.to} className="text-emerald-700 hover:underline">
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
        </div>

        <div className="relative pt-3">
          <div className="absolute -top-0 left-6 w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center shadow-sm z-10">
            3
          </div>
          <LedgerBand compact />
        </div>
      </div>

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
          {recentPosts.map((post) => (
            <Link
              key={post.link}
              to={post.link}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all p-5 flex flex-col"
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                {(post.tags || []).slice(0, 2).map((tag) => (
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
