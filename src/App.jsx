import "./App.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Home, Heart, ArrowRight } from 'lucide-react';
import SubscribeForm from './components/SubscribeForm';
import SuperFiCalculator from './Super-Fi-Calculator.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('quick');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-emerald-600 hover:text-emerald-700">
            Super FI Calculator
          </Link>
          <div className="flex gap-8 text-sm">
            <Link 
              to="/"
              className="text-emerald-600 font-medium"
            >
              Calculator
            </Link>
            <Link 
              to="/blog"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Blog
            </Link>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">Resources</a>
          </div>
        </div>
      </nav>

      {/* Who This Is For — Trust & Relevance Strip (additive UI enhancement for engagement, trust & cross-links) */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-[1.5px] mb-4">
              FAITH • FAMILY • GENERATIONAL WEALTH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Catholic Families Who Steward with Purpose</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This calculator helps parents and couples model real-life expenses like college, vehicles, and mortgages — while keeping faith, generosity, and legacy at the center of every decision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center transition-colors">
                  <GraduationCap className="text-emerald-600" size={20} />
                </div>
                <h3 className="font-semibold text-xl text-gray-900">College &amp; Kid-Focused Families</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">See the real impact of tuition inflation and multiple kids on your FI timeline. Plan with margin for faith formation and family experiences that matter most.</p>
            </div>

            <div className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center transition-colors">
                  <Home className="text-emerald-600" size={20} />
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Mortgage-Paying Stewards</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Model paying down your home while investing. Understand how becoming debt-free faster creates more room for tithing, hospitality, and Kingdom work.</p>
            </div>

            <div className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center transition-colors">
                  <Heart className="text-emerald-600" size={20} />
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Legacy &amp; Faith-Driven Builders</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Whether you're just starting or fine-tuning, align your numbers with Catholic principles of stewardship, generosity, and providing for future generations.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
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

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex border-b mb-8 bg-white rounded-t-lg">
          <button
            onClick={() => setActiveTab('quick')}
            className={`px-8 py-4 font-medium text-lg transition-colors ${activeTab === 'quick' ? 'border-b-4 border-emerald-600 text-emerald-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Quick Calculator
          </button>
          <button
            onClick={() => setActiveTab('advanced')}
            className={`px-8 py-4 font-medium text-lg transition-colors ${activeTab === 'advanced' ? 'border-b-4 border-emerald-600 text-emerald-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Advanced Calculator
          </button>
        </div>

        {activeTab === 'quick' ? (
          <SuperFiCalculator />
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Advanced FI Calculator</h2>
            <p className="text-gray-600 mb-8">Coming soon — more detailed scenario modeling, Monte Carlo, and tax-aware projections.</p>
            <p className="text-sm text-gray-500">For now, the Quick Calculator covers mortgage, college, vehicles, and large expenses with full projections.</p>
          </div>
        )}
      </div>

      <SubscribeForm />
    </div>
  );
}

export default App;
