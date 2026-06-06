import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import BlogIndex from './pages/BlogIndex';
import CatholicFamiliesCanReachFiTogetherAiPrayerAndSmartStewardship from './pages/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship';
// other imports

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship" element={<CatholicFamiliesCanReachFiTogetherAiPrayerAndSmartStewardship />} />
        // other routes
      </Routes>
    </Router>
  );
}
