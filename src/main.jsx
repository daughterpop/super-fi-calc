import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Analytics } from '@vercel/analytics/react';  // Add this

import Home from './pages/Home.jsx';  // or './Home.jsx' if not in pages/
import SuperFiCalculator from './Super-Fi-Calculator.jsx';  // direct from src/
import BlogPost from './pages/BlogPost.jsx';  // or adjust path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  {/* This must be first */}
        <Route path="/calculator" element={<SuperFiCalculator />} />
        <Route path="/blog/first-post" element={<BlogPost />} />
        <Route path="*" element={<div className="p-10 text-center text-xl">Page not found — <a href="/" className="text-indigo-600 underline">Go Home</a></div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
