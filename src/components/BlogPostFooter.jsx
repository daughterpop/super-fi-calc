import { Link } from 'react-router-dom';

/**
 * Light end-of-post CTA: subscribe + back to blog.
 * Keep this minimal so posts stay readable.
 */
export default function BlogPostFooter() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 not-prose">
      <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
        Want more faith-filled FI tips for your family?{' '}
        <Link
          to="/subscribe"
          className="text-emerald-600 hover:text-emerald-700 font-semibold"
        >
          Join the list →
        </Link>
      </p>
      <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 font-medium">
        ← Back to Blog
      </Link>
    </div>
  );
}
