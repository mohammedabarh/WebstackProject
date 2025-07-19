import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Make sure this base path matches your GitHub Pages homepage in package.json
  // From your package.json, your homepage is "https://mohammedabarh.github.io/Project/",
  // so the base should be '/Project/'
  base: mode === 'production' ? '/WebstackProject/' : '/', // <-- Make sure this matches your GitHub repo name!

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ADD THIS BUILD CONFIGURATION BLOCK
  build: {
    outDir: 'build', // <--- This line tells Vite to output to the 'build' directory
  },
}));
