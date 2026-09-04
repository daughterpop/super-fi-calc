const SITE = 'https://www.viafidelitatis.com';

export function buildOgImageUrl({ title, kicker, kind = 'site' }) {
  const params = new URLSearchParams();
  if (title) params.set('title', String(title).slice(0, 140));
  if (kicker) params.set('kicker', String(kicker).slice(0, 48));
  if (kind) params.set('kind', kind);
  return `${SITE}/api/og?${params.toString()}`;
}

export function defaultOgImage() {
  return `${SITE}/api/og?kind=home&title=Via%20Fidelitatis`;
}

export { SITE };
