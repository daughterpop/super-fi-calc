import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Calculators from './pages/Calculators.jsx';
import CalculatorTool from './pages/CalculatorTool.jsx';
import BlogIndex from './pages/BlogIndex.jsx';
import Tools from './pages/Tools.jsx';
import Subscribe from './pages/Subscribe.jsx';
import Faq from './pages/Faq.jsx';
import LedgerIndex from './pages/LedgerIndex.jsx';
import LedgerEdition from './pages/LedgerEdition.jsx';
import BlogSlug from './BlogSlug.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/calculators" element={<Calculators />} />
      <Route path="/calculators/:slug" element={<CalculatorTool />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogSlug />} />
      <Route path="/ledger" element={<LedgerIndex />} />
      <Route path="/ledger/:slug" element={<LedgerEdition />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<App />} />
    </Routes>
  );
}
