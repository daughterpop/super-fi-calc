import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import SuperFiCalculator from './Super-Fi-Calculator.jsx';  // ← no pages/ folder
import BlogPost from './pages/BlogPost';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculators/fi-calc" element={<FICalculator />} />
        <Route path="/blog/first-post" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
