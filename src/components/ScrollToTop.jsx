import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router keeps the previous window scroll position on client-side
 * navigations. This resets to the top on every pathname change (and when
 * the hash is empty so in-page anchors can still work).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow hash links like /faq#section to scroll to the target
      const id = hash.replace('#', '');
      // Defer so the new page content is in the DOM
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
