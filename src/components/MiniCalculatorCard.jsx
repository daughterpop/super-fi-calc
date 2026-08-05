import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

/**
 * Interactive Calculate card for the homepage.
 * Default: looks like the other path cards.
 * On hover (desktop) or click (mobile): expands to a quick mini-form
 * that can pre-fill the full calculator.
 */
export default function MiniCalculatorCard() {
  const [expanded, setExpanded] = useState(false);
  const [assets, setAssets] = useState('');
  const [surplus, setSurplus] = useState('');
  const navigate = useNavigate();

  const handleOpenFull = () => {
    const params = new URLSearchParams();
    if (assets) params.set('assets', assets);
    if (surplus) params.set('surplus', surplus);
    const qs = params.toString();
    navigate(`/calculators${qs ? `?${qs}` : ''}`);
  };

  // Very rough illustrative estimate (not the real calculator logic)
  const roughYears =
    assets && surplus && Number(surplus) > 0
      ? Math.max(
          1,
          Math.round(
            (Number(assets) * 25 - Number(assets)) /
              (Number(surplus) * 12) +
              5
          )
        )
      : null;

  return (
    <div
      className="group relative bg-white border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all hover:shadow-md min-h-[220px]"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => {
        // Mobile / touch: toggle
        if (window.matchMedia('(hover: none)').matches) {
          setExpanded((prev) => !prev);
        }
      }}
    >
      <div className="absolute -top-3 left-6 w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center shadow-sm z-10">
        1
      </div>

      {/* Default card content */}
      <div
        className={`transition-opacity duration-200 ${
          expanded ? 'opacity-0 pointer-events-none absolute inset-6' : 'opacity-100'
        }`}
      >
        <div className="w-11 h-11 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center mb-4 mt-1 transition-colors">
          <Calculator className="text-emerald-600" size={22} />
        </div>
        <h3 className="font-semibold text-lg text-gray-900 mb-2">Calculate</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          Model college, mortgage, vehicles, and real family expenses. See years to FI and your progress.
        </p>
        <span className="text-emerald-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
          Open calculator <ArrowRight size={14} />
        </span>
      </div>

      {/* Expanded mini form */}
      <div
        className={`transition-opacity duration-200 ${
          expanded ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-6'
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <Calculator className="text-emerald-600" size={18} />
          <h3 className="font-semibold text-gray-900 text-base">Quick start</h3>
        </div>

        <div className="space-y-2.5">
          <Input
            type="number"
            placeholder="Current investable assets ($)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            className="h-9 text-sm"
            onClick={(e) => e.stopPropagation()}
          />
          <Input
            type="number"
            placeholder="Monthly surplus after tithing ($)"
            value={surplus}
            onChange={(e) => setSurplus(e.target.value)}
            className="h-9 text-sm"
            onClick={(e) => e.stopPropagation()}
          />

          {roughYears !== null && (
            <p className="text-xs text-emerald-700 font-medium">
              Rough path: ~{roughYears} years (illustrative)
            </p>
          )}

          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleOpenFull();
            }}
            className="w-full h-9 bg-emerald-600 hover:bg-emerald-700 text-white text-sm"
          >
            Open full calculator →
          </Button>

          <Link
            to="/calculators"
            className="block text-center text-xs text-gray-500 hover:text-emerald-600"
            onClick={(e) => e.stopPropagation()}
          >
            or go straight to the full tool
          </Link>
        </div>
      </div>
    </div>
  );
}
