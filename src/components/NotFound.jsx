import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

/** In-app fallback for unknown paths. Real visits get public/404.html from Vercel. */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Page not found | Via Fidelitatis</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <SiteHeader showReferralStrip={false} />
      <main className="flex-1 px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-600 mb-6">The page may have moved, or the link may be mistyped.</p>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="text-emerald-700 font-medium hover:underline">Home</Link>
          <Link to="/blog" className="text-emerald-700 font-medium hover:underline">Read the blog</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
