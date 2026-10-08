import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './index.css';
import RouteSeo from './components/RouteSeo.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import AppRoutes from './AppRoutes.jsx';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <RouteSeo />
        <Analytics />
        <SpeedInsights />
        <AppRoutes />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);

// Prerendered routes (scripts/prerender.mjs) ship real HTML inside #root, so
// hydrate it. Anything else (e.g. an unknown /blog/:slug) renders fresh.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
