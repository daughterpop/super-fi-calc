import "./App.css";
import { useState } from 'react';
import SubscribeForm from './components/SubscribeForm';
import SuperFiCalculator from './Super-Fi-Calculator.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('quick');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-600">Super FI Calculator</div>
          <div className="flex gap-8 text-sm">
            <a href="/" className="text-gray-700 hover:text-emerald-600 font-medium">Calculator</a>
            <a href="/blog" className="text-gray-700 hover:text-emerald-600 font-medium">Blog</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">Resources</a>
          </div>
        </div>
      </nav>

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
            <p className="text-gray-600 mb-8">More detailed version with age, inflation, multiple income streams, etc. coming soon.</p>
            <button 
              onClick={() => setActiveTab('quick')}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              Back to Quick Calculator
            </button>
          </div>
        )}
      </div>

      <SubscribeForm />
    </div>
  );
}

export default App;
