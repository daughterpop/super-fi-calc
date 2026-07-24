# Redeploy trigger - July 23 2026 full fix FINAL

**Root cause of blank site:** package.json declares "type": "module" while tailwind.config.js used CommonJS `module.exports`. Vite + Tailwind config loading failed during production build, resulting in either a failed deployment or a broken/empty JS+CSS bundle → blank page at https://super-fi-calculator.vercel.app/

**Fixes applied (no shortcuts):**
1. Converted tailwind.config.js to pure ESM with `import tailwindcssAnimate from "tailwindcss-animate"` + `export default`.
2. Cleaned all leading whitespace from @tailwind / @layer in src/index.css so directives are valid.
3. Updated vercel.json with explicit:
   - "framework": "vite"
   - "buildCommand": "npm run build"
   - "outputDirectory": "dist"
   - SPA rewrite preserving /api/ and /assets/
4. Tightened Tailwind content paths to index.html + src/**
5. Verified core entry points (index.html → main.jsx → App.jsx → Super-Fi-Calculator.jsx), routes, SubscribeForm, BlogIndex, and the two published posts. No missing imports, no syntax errors, no unresolved aliases.

This commit triggers a clean rebuild. After Vercel finishes deploying the Fixed branch the calculator + blog should be fully functional again.
