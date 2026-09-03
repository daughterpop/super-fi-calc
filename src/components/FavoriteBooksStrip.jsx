import { BookOpen } from 'lucide-react';
import { FAVORITE_BOOKS, TAN_AFFILIATE_URL } from '../data/tanBooks';

/** Household library strip — blog index and post footer only. Not on Tools. */
export default function FavoriteBooksStrip({ className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-emerald-100 bg-white p-5 sm:p-6 ${className}`}
    >
      <div className="flex items-center gap-2 mb-1">
        <BookOpen className="text-emerald-600" size={18} />
        <span className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">
          Books we keep in the house
        </span>
      </div>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
        A short shelf we actually reread — saints, the home, and staying small enough for God.
        Same TAN prices; the link supports the site.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {FAVORITE_BOOKS.map((book) => (
          <a
            key={book.title}
            href={TAN_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-100 transition-colors"
          >
            {book.title}
          </a>
        ))}
      </div>
      <a
        href={TAN_AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-900"
      >
        Browse TAN Books →
      </a>
    </div>
  );
}
