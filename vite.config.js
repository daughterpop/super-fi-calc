import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import essayMeta from "./scripts/essay-meta-plugin.mjs";

export default defineConfig({
  plugins: [react(), essayMeta()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
