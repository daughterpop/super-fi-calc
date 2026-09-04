import React from 'react';
import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

const KINDS = {
  blog: 'Essay',
  ledger: 'The Ledger',
  calculator: 'Calculator',
  tools: 'Tools',
  site: 'Via Fidelitatis',
};

function clamp(value, fallback, max) {
  const text = String(value || fallback || '').trim();
  return text.length > max ? `${text.slice(0, max - 1).trim()}…` : text;
}

function titleSize(title) {
  if (title.length > 88) return 46;
  if (title.length > 62) return 52;
  if (title.length > 42) return 58;
  return 64;
}

function h(type, props, ...children) {
  return React.createElement(type, props, ...children);
}

function Logo({ scale = 1 }) {
  return h(
    'svg',
    { width: Math.round(92 * scale), height: Math.round(64 * scale), viewBox: '0 0 64 64' },
    h('path', {
      d: 'M6 42 C18 42 22 30 32 22 C42 30 46 42 58 42',
      stroke: '#ecfdf5',
      strokeWidth: '3.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      fill: 'none',
    }),
    h('path', {
      d: 'M32 10 V26 M25 16 H39',
      stroke: '#ffffff',
      strokeWidth: '3',
      strokeLinecap: 'round',
      fill: 'none',
    }),
  );
}

export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const kind = (searchParams.get('kind') || 'site').toLowerCase();
  const title = clamp(searchParams.get('title'), 'Freedom to live your vocation', 140);
  const kicker = clamp(searchParams.get('kicker'), KINDS[kind] || KINDS.site, 48);
  const home = kind === 'home' || kind === 'brand';

  const wash = h('div', {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      background:
        'radial-gradient(circle at 18% 20%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 42%), radial-gradient(circle at 88% 80%, rgba(6, 78, 59, 0.45) 0%, rgba(6, 78, 59, 0) 46%)',
    },
  });

  const rail = h('div', {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 14,
      background: '#ecfdf5',
      opacity: 0.92,
      display: 'flex',
    },
  });

  const inner = home
    ? h(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '64px 80px',
            height: '100%',
            width: '100%',
          },
        },
        h(Logo),
        h('div', { style: { display: 'flex', fontSize: 72, letterSpacing: '-0.03em', marginTop: 28 } }, 'Via Fidelitatis'),
        h(
          'div',
          {
            style: {
              display: 'flex',
              fontFamily: 'system-ui, sans-serif',
              fontSize: 28,
              color: '#ecfdf5',
              marginTop: 16,
            },
          },
          'Freedom to live your vocation',
        ),
      )
    : h(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 72px 48px 72px',
            height: '100%',
            width: '100%',
          },
        },
        h(
          'div',
          {
            style: {
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          },
          h(Logo, { scale: 0.78 }),
          h(
            'div',
            {
              style: {
                display: 'flex',
                fontFamily: 'system-ui, sans-serif',
                fontSize: 20,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#d1fae5',
              },
            },
            kicker,
          ),
        ),
        h(
          'div',
          { style: { display: 'flex', flexDirection: 'column', maxWidth: 1040 } },
          h(
            'div',
            {
              style: {
                display: 'flex',
                fontSize: titleSize(title),
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
              },
            },
            title,
          ),
        ),
        h(
          'div',
          {
            style: {
              display: 'flex',
              flexDirection: 'column',
              borderTop: '1px solid rgba(236, 253, 245, 0.28)',
              paddingTop: 18,
              width: '100%',
            },
          },
          h('div', { style: { display: 'flex', fontSize: 28, letterSpacing: '-0.02em' } }, 'Via Fidelitatis'),
          h(
            'div',
            {
              style: {
                display: 'flex',
                fontFamily: 'system-ui, sans-serif',
                fontSize: 20,
                color: '#d1fae5',
                marginTop: 4,
              },
            },
            'Freedom to live your vocation',
          ),
        ),
      );

  return new ImageResponse(
    h(
      'div',
      {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #3d7a6a 0%, #1f6b63 46%, #0f5c58 100%)',
          color: '#ffffff',
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: 'relative',
        },
      },
      wash,
      rail,
      inner,
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
      },
    },
  );
}
