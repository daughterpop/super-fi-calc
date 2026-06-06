// Updated with import and route

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CatholicFamiliesCanReachFiTogetherAiPrayerAndSmartStewardship from './pages/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship';

// other imports

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/blog/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship" element={<CatholicFamiliesCanReachFiTogetherAiPrayerAndSmartStewardship />} />
        // other routes
      </Routes>
    </Router>
  </React.StrictMode>
);
