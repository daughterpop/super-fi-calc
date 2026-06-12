import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import WhyFIForEveryone from './pages/WhyFIForEveryone';
import RaisingFaithFilledKidsWhileBuildingFinancialFreedom from './pages/RaisingFaithFilledKidsWhileBuildingFinancialFreedom';
import CatholicFamiliesCanReachFiTogetherAiPrayerAndSmartStewardship from './pages/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship';
import CatholicFamiliesUnlockingFiFasterWithAiAndPrayerfulPlanning from './pages/catholic-families-unlocking-fi-faster-with-ai-and-prayerful-planning';
// other post imports...

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/why-fi-for-everyone" element={<WhyFIForEveryone />} />
        <Route path="/blog/raising-faith-filled-kids-while-building-financial-freedom" element={<RaisingFaithFilledKidsWhileBuildingFinancialFreedom />} />
        <Route path="/blog/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship" element={<CatholicFamiliesCanReachFiTogetherAiPrayerAndSmartStewardship />} />
        <Route path="/blog/catholic-families-unlocking-fi-faster-with-ai-and-prayerful-planning" element={<CatholicFamiliesUnlockingFiFasterWithAiAndPrayerfulPlanning />} />
        {/* other routes */}
      </Routes>
    </Router>
  </React.StrictMode>
);
