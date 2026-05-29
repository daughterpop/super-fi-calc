import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import BlogIndex from './pages/BlogIndex.jsx';
import CatholicFamiliesAIForRaisingDebtFreeKidsAndReachingFITogether from './pages/catholic-families-ai-for-raising-debt-free-kids-and-reaching-fi-together.jsx';
import AiStewardshipCatholicFamiliesTithingBoldlyFi from './pages/ai-stewardship-catholic-families-tithing-boldly-fi.jsx';
import TitheMoreRetireEarlierAiForCatholicFamilyFi from './pages/tithe-more-retire-earlier-ai-for-catholic-family-fi.jsx';
import MakeTithingEasyAiToolsForCatholicFamiliesChasingFi from './pages/make-tithing-easy-ai-tools-for-catholic-families-chasing-fi.jsx';
import HowAiHelpsCatholicParentsRaiseFiSmartFaithFilledKids from './pages/how-ai-helps-catholic-parents-raise-fi-smart-faith-filled-kids.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/catholic-families-ai-for-raising-debt-free-kids-and-reaching-fi-together" element={<CatholicFamiliesAIForRaisingDebtFreeKidsAndReachingFITogether />} />
        <Route path="/blog/ai-stewardship-catholic-families-tithing-boldly-fi" element={<AiStewardshipCatholicFamiliesTithingBoldlyFi />} />
        <Route path="/blog/tithe-more-retire-earlier-ai-for-catholic-family-fi" element={<TitheMoreRetireEarlierAiForCatholicFamilyFi />} />
        <Route path="/blog/make-tithing-easy-ai-tools-for-catholic-families-chasing-fi" element={<MakeTithingEasyAiToolsForCatholicFamiliesChasingFi />} />
        <Route path="/blog/how-ai-helps-catholic-parents-raise-fi-smart-faith-filled-kids" element={<HowAiHelpsCatholicParentsRaiseFiSmartFaithFilledKids />} />
        {/* Previous broken routes and imports removed to fix deployment and 404 errors */}
      </Routes>
    </Router>
  </React.StrictMode>
);
