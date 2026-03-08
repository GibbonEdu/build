import { defineConfig } from "vite";
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite";
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "../"),
    },
  },

  root: '../../',

  build: {
    outDir: resolve(__dirname, '../assets/build'),
    assetsDir: '/',
    emptyOutDir: false,
    manifest: true,
    rollupOptions: {
      input: {
        app: resolve(__dirname, '../assets/js/core.js'),
        core: resolve(__dirname, '../assets/css/core.css'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      },
      watch: {
        exclude: ['../assets/build/**'],
      }
    },
  },
  
  plugins: [
    tailwindcss(),
    // htmlPurge({
    //     content: [
    //         "../../*.php",
    //         "../../src/**/*.php",
    //         "../../modules/**/*.{php,html}",
    //         "../templates/**/*.html",
    //         "../../resources/templates/**/*.html",
    //         "../../resources/assets/js/*.js",
    //         "../../themes/**/*.twig.html",
    //     ], 
    //     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    //     css: ['../assets/build/core.css'],
    //     // Add dynamic class names to the safelist to prevent them from being purged
    //     safelist: [
    //       /popover/,
    //       'is-changing',
    //       'is-animating',
    //       /.*:.*/, // Regex for Tailwind utility classes (e.g., 'md:px-2')
    //       /.*\[.*/, // Regex for arbitrary values in Tailwind (e.g., 'bg-[#EFEBE7]')
    //     ],
    //   }),
  ],
});
