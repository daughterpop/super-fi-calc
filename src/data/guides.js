/** Standing map — shared by /blog Guides and article Keep reading. */
export const GUIDE_LINKS = [
  '/blog/how-to-get-started-on-your-fi-path',
  '/blog/is-fire-compatible-with-catholicism',
  '/blog/build-margin-for-catholic-families',
  '/blog/how-to-budget-as-a-catholic-family-with-tithing-first',
  '/blog/building-an-emergency-fund-without-neglecting-the-tithe',
  '/blog/faith-based-investing-basics-for-catholic-households',
  '/blog/books-we-keep-in-the-house',
];

export function isGuideLink(link) {
  if (!link) return false;
  const normalized = link.endsWith('/') && link.length > 1 ? link.slice(0, -1) : link;
  return GUIDE_LINKS.includes(normalized);
}
