# Redeploy trigger - July 23 2026 full fix v3

Root cause: package.json has "type": "module" but tailwind.config.js used CommonJS module.exports. This breaks Tailwind/Vite config loading on build, resulting in no CSS and/or failed production bundle → blank page on Vercel.

Fixes applied:
1. Removed the broken tailwind.config.js
2. Added proper tailwind.config.cjs (CommonJS, standard for configs in type:module projects)
3. Cleaned src/index.css (removed leading whitespace on @tailwind)
4. Strengthened vercel.json with explicit buildCommand, outputDirectory=dist, framework=vite + SPA rewrite
5. Updated content paths for Tailwind accuracy

This should produce a clean Vite production build. Double-checked all core files (main.jsx, App.jsx, Super-Fi-Calculator.jsx, index.html, routes). No other syntax/import issues found.
