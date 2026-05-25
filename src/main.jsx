import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import BlogIndex from './pages/BlogIndex.jsx';
import TitheMoreRetireEarlierAiForCatholicFamilyFi from './pages/tithe-more-retire-earlier-ai-for-catholic-family-fi.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/tithe-more-retire-earlier-ai-for-catholic-family-fi" element={<TitheMoreRetireEarlierAiForCatholicFamilyFi />} />
        {/* Previous broken routes and imports removed to fix deployment and 404 errors */}
      </Routes>
    </Router>
  </React.StrictMode>
);
