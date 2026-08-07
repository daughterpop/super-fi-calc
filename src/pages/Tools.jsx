import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  ArrowRight,
  Gift,
  Shield,
  Sparkles,
  ExternalLink,
  Landmark,
  BarChart3,
  Wallet,
  Bitcoin,
  Send,
  Banknote,
  HeartHandshake,
  ShoppingBag,
  Gem,
  Tag,
  UtensilsCrossed,
  Building2,
  Camera,
  Percent,
  MapPin,
  SlidersHorizontal,
  ArrowUpDown,
  Search,
  Smartphone,
  Lock,
  Calendar,
} from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const tools = [
  {
    id: 'robinhood',
    name: 'Robinhood',
    category: 'Investing',
    badge: 'Up to $200 free stock',
    headline: 'Open an account and get free stock after your first investment',
    description:
      'Commission-free stock and ETF trading in a simple app — built for long-term investing, not day-trading noise. Use this link so new accounts can receive free stock worth up to $200 after funding and making a first investment.',
    perks: [
      'Free stock(s) worth up to $200 after you fund and invest (new accounts via this link)',
      'Zero commissions on U.S. stocks and ETFs',
      'Clean mobile app that’s easy for beginners',
      'Solid starting point for dollar-cost averaging toward FI',
    ],
    cta: 'Claim Free Stock on Robinhood',
    href: 'https://join.robinhood.com/dustinh-1bff5a',
    accent: 'emerald',
    icon: 'trending',
    valueScore: 200,
  },
];

export default function Tools() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader showReferralStrip={false} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <p className="text-red-600">Temporary placeholder — restoring full Tools content…</p>
      </div>
      <SiteFooter />
    </div>
  );
}
