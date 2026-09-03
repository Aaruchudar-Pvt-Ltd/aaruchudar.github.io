import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react(), tailwindcss()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "src"),
      "next/link": path.resolve(rootDir, "src/shims/next-link.tsx"),
      "next/image": path.resolve(rootDir, "src/shims/next-image.tsx"),
      "next/navigation": path.resolve(rootDir, "src/shims/next-navigation.ts"),
      "next/dynamic": path.resolve(rootDir, "src/shims/next-dynamic.tsx"),
    },
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});
