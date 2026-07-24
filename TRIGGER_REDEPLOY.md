# Redeploy trigger - July 23 2026 Tailwind fix

Vercel build was failing with:
- "The content option in your Tailwind CSS configuration is missing or empty"
- "The `border-border` class does not exist"

Cause: Tailwind config not loading correctly under "type": "module".

Fix: Full working config now lives in tailwind.config.cjs (CommonJS + require). This is the most reliable pattern for Vite + Tailwind v3 + type:module projects. Content paths and theme colors (including border) are correctly defined so @apply border-border works.

This commit should produce a successful vite build.
