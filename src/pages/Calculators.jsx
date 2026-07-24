import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, ExternalLink } from 'lucide-react';
import SubscribeForm from '../components/SubscribeForm';
import SuperFiCalculator from '../Super-Fi-Calculator.jsx';

const ROBINHOOD_URL = 'https://join.robinhood.com/dustinh-1bff5a';

export default function Calculators() {
  const [activeTab, setActiveTab] = useState('quick');

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Sticky Nav */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 flex justify-between items-center gap-2">
          <Link to="/" className="font-bold text-emerald-600 hover:text-emerald-700 shrink-0 leading-tight">
            <span className="sm:hidden text-base">Super FI</span>
            <span className="hidden sm:inline text-2xl">Super FI</span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-8 text-sm">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap">Home</Link>
            <Link to="/calculators" className="text-emerald-600 font-medium whitespace-nowrap">Calculators</Link>
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

      {/* Page header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">FI Calculators</h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Model real family expenses — college, mortgage, vehicles — and see your path to financial independence.
          </p>
        </div>
      </div>

      {/* Calculator tabs + content */}
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

      {/* Secondary Robinhood CTA */}
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

      <div className="px-4 sm:px-6 pb-10">
        <SubscribeForm />
      </div>
    </div>
  );
}
