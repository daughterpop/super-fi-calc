import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Super FI</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          Tools and insights to help you achieve Financial Independence and Retire Early (@MAHAGirlDad)
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Calculators</h2>
            <p className="text-gray-600 mb-6">
              Run the numbers on your path to FI.
            </p>
            <Link
              to="/calculators/fi-calc"
              className="inline-block px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-lg"
            >
              Try FI Calculator →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Blog & Resources</h2>
            <p className="text-gray-600 mb-6">
              Articles, tips, and stories on FIRE lifestyle.
            </p>
            <Link
              to="/blog/first-post"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-lg"
            >
              Read Latest Post →
            </Link>
          </div>
        </div>

        <p className="mt-12 text-gray-500 text-sm">
          Built with love in Detroit • More tools coming soon!
        </p>
      </div>
    </div>
  );
}
