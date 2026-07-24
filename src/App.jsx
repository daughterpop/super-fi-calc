import "./App.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Home, Heart, ArrowRight } from 'lucide-react';
import SubscribeForm from './components/SubscribeForm';
import SuperFiCalculator from './Super-Fi-Calculator.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('quick');

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-3">
          <Link to="/" className="text-lg sm:text-2xl font-bold text-emerald-600 hover:text-emerald-700 shrink-0">
            Super FI Calculator
          </Link>
          <div className="flex items-center gap-4 sm:gap-8 text-sm">
            <Link
              to="/"
              className="text-emerald-600 font-medium whitespace-nowrap"
            >
              Calculator
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap"
            >
              Blog
            </Link>
            <a href="#" className="hidden sm:inline text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap">Resources</a>
          </div>
        </div>
      </nav>

      {/* Who This Is For — Trust & Relevance Strip */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-[1.5px] mb-3 sm:mb-4">
              FAITH • FAMILY • GENERATIONAL WEALTH
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Built for Catholic Families Who Steward with Purpose
            </h2>
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

          <div className="mt-6 sm:mt-8 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm group"
            >
              Explore family stories &amp; faith-based FI insights
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Tabs */}
        <div className="flex border-b mb-6 sm:mb-8 bg-white rounded-t-lg overflow-hidden">
          <button
            onClick={() => setActiveTab('quick')}
            className={`flex-1 px-3 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-lg transition-colors text-center ${activeTab === 'quick' ? 'border-b-4 border-emerald-600 text-emerald-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Quick Calculator
          </button>
          <button
            onClick={() => setActiveTab('advanced')}
            className={`flex-1 px-3 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-lg transition-colors text-center ${activeTab === 'advanced' ? 'border-b-4 border-emerald-600 text-emerald-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Advanced Calculator
          </button>
        </div>

        {activeTab === 'quick' ? (
          <SuperFiCalculator />
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-12 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Advanced FI Calculator</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Coming soon — more detailed scenario modeling, Monte Carlo, and tax-aware projections.</p>
            <p className="text-sm text-gray-500">For now, the Quick Calculator covers mortgage, college, vehicles, and large expenses with full projections.</p>
          </div>
        )}
      </div>

      <div className="px-4 sm:px-6 pb-10">
        <SubscribeForm />
      </div>
    </div>
  );
}

export default App;
