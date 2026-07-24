# Redeploy trigger - July 23 2026 full fix FINAL (synced to main)

Root cause: CJS/ESM mismatch in Tailwind config under "type": "module". Fixed with pure ESM config + explicit Vite settings in vercel.json + cleaned CSS. Calculator and blog should load fully after this deploy.
