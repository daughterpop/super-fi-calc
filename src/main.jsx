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

ReactDOM.createRoot(document.getElementById('root')).render(
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
