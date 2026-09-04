import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Home, GraduationCap, DollarSign, Sparkles, Share2, Heart, BookOpen, Wrench, Newspaper } from 'lucide-react';

/** Display-only compact money. Does not change projection math. */
function formatCompact(n) {
  if (!Number.isFinite(n)) return '—';
  const sign = n < 0 ? '-' : '';
  const v = Math.abs(n);
  if (v >= 1000000) {
    const m = v / 1000000;
    return `${sign}$${m >= 10 ? m.toFixed(1) : m.toFixed(2)}M`;
  }
  if (v >= 1000) return `${sign}$${Math.round(v / 1000).toLocaleString('en-US')}k`;
  return `${sign}$${Math.round(v).toLocaleString('en-US')}`;
}

/** Comma-grouped dollars in the field; numeric state is unchanged. */
function parseMoney(raw) {
  const cleaned = String(raw).replace(/[^0-9.]/g, '');
  if (cleaned === '' || cleaned === '.') return 0;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function formatMoneyInput(n) {
  if (!Number.isFinite(n)) return '';
  const [intPart, decPart] = String(n).split('.');
  const grouped = Number(intPart).toLocaleString('en-US');
  return decPart != null && decPart !== '' ? `${grouped}.${decPart}` : grouped;
}

function MoneyField({ value, onChange, className, id, ariaLabel }) {
  const [focused, setFocused] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const display = focused ? draft : formatMoneyInput(value);

  return (
    <input
      id={id}
      type="text"
      inputMode="decimal"
      autoComplete="off"
      enterKeyHint="done"
      aria-label={ariaLabel}
      value={display}
      onFocus={() => {
        setDraft(value === 0 ? '' : String(value));
        setFocused(true);
      }}
      onBlur={() => {
        onChange(parseMoney(draft));
        setFocused(false);
      }}
      onChange={(e) => {
        const next = e.target.value;
        setDraft(next);
        onChange(parseMoney(next));
      }}
      className={className}
    />
  );
}
