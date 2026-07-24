import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import BlogIndex from './pages/BlogIndex.jsx';
import WhyFIForEveryone from './pages/WhyFIForEveryone.jsx';
import CatholicFamiliesLeverageAiForPrayerfulFinancialFreedomAndLastingLegacy from './pages/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/why-fi-for-everyone" element={<WhyFIForEveryone />} />
        <Route path="/blog/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy" element={<CatholicFamiliesLeverageAiForPrayerfulFinancialFreedomAndLastingLegacy />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
