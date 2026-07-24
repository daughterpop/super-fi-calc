# Redeploy trigger - July 23 2026 full fix v2

- Converted tailwind.config.js from CJS (module.exports) to ESM (export default) to match package.json "type": "module". This was almost certainly causing the Vite/Tailwind build to fail silently or produce a broken production bundle.
- Cleaned leading whitespace from @tailwind directives in src/index.css.
- Explicitly set buildCommand, outputDirectory, and framework in vercel.json for reliable Vite SPA builds on Vercel.
- Content paths in Tailwind updated for accuracy.

All source double-checked. Site should now build and serve the React app correctly with no blank page.
