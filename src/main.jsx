import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import BlogIndex from './pages/BlogIndex.jsx';
import CatholicFamiliesAiForTithingAndFiWithoutTheStress from './pages/catholic-families-ai-for-tithing-and-fi-without-the-stress.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/catholic-families-ai-for-tithing-and-fi-without-the-stress" element={<CatholicFamiliesAiForTithingAndFiWithoutTheStress />} />
        {/* Add other post routes as needed for full functionality */}
      </Routes>
    </Router>
  </React.StrictMode>
);
