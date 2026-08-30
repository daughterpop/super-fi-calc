import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Newspaper } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import SubscribeForm from '../components/SubscribeForm';

export default function Subscribe() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader />

      <div className="bg-white border-b">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-[1.5px] mb-4">
            FAITH • FAMILY • STEWARDSHIP
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Get The Ledger on Sunday
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            One email a week — household, deal, fidelity. Not this issue as a one-shot.
            The welcome gift is this week’s edition; every Sunday after that is the next one.
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-2 sm:py-4">
        <SubscribeForm />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-12 pt-4">
        <p className="text-center text-sm text-gray-500 mb-6">While you're here</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            to="/calculators"
            className="flex items-center gap-2 justify-center px-4 py-3 bg-white border border-gray-100 hover:border-emerald-200 rounded-xl text-sm font-medium text-gray-800 hover:text-emerald-700 transition-colors"
          >
            <Calculator size={16} className="text-emerald-600" />
            Calculators
          </Link>
          <Link
            to="/blog"
            className="flex items-center gap-2 justify-center px-4 py-3 bg-white border border-gray-100 hover:border-emerald-200 rounded-xl text-sm font-medium text-gray-800 hover:text-emerald-700 transition-colors"
          >
            <BookOpen size={16} className="text-emerald-600" />
            Blog
          </Link>
          <Link
            to="/ledger"
            className="flex items-center gap-2 justify-center px-4 py-3 bg-white border border-gray-100 hover:border-emerald-200 rounded-xl text-sm font-medium text-gray-800 hover:text-emerald-700 transition-colors"
          >
            <Newspaper size={16} className="text-emerald-600" />
            The Ledger
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
