import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Analytics } from '@vercel/analytics/react';

import Home from './pages/Home.jsx';
import SuperFiCalculator from './Super-Fi-Calculator.jsx';
import BlogPost from './pages/BlogPost.jsx';
import WhyFIForEveryone from './pages/WhyFIForEveryone.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<SuperFiCalculator />} />
        <Route path="/blog/first-post" element={<BlogPost />} />
        <Route path="/blog/why-fi-for-everyone" element={<WhyFIForEveryone />} />
        <Route path="*" element={<div className="p-10 text-center text-xl">Page not found — <a href="/" className="text-indigo-600 underline">Go Home</a></div>} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
);
