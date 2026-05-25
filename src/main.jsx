import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import BlogIndex from './pages/BlogIndex.jsx';
import HowCatholicCouplesUseAiToBuildFiAndStrongerMarriages from './pages/how-catholic-couples-use-ai-to-build-fi-and-stronger-marriages.jsx';
import CatholicFamiliesAiForTithingAndFiWithoutTheStress from './pages/catholic-families-ai-for-tithing-and-fi-without-the-stress.jsx';
import HowAiHelpsCatholicParentsBuildFiAndRaiseGenerousKids from './pages/how-ai-helps-catholic-parents-build-fi-and-raise-generous-kids.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/how-catholic-couples-use-ai-to-build-fi-and-stronger-marriages" element={<HowCatholicCouplesUseAiToBuildFiAndStrongerMarriages />} />
        <Route path="/blog/catholic-families-ai-for-tithing-and-fi-without-the-stress" element={<CatholicFamiliesAiForTithingAndFiWithoutTheStress />} />
        <Route path="/blog/how-ai-helps-catholic-parents-build-fi-and-raise-generous-kids" element={<HowAiHelpsCatholicParentsBuildFiAndRaiseGenerousKids />} />
        {/* Add other post routes as needed for full functionality */}
      </Routes>
    </Router>
  </React.StrictMode>
);
