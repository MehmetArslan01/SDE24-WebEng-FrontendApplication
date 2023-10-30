import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for static assets (e.g., CSS, images)
    assetsInlineLimit: 4096, // Inline assets smaller than this size (in bytes)
    minify: true, // Minify the output
    sourcemap: false, // Generate source maps
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js', // Output format for entry files
        chunkFileNames: 'js/[name]-[hash].js', // Output format for chunk files
        assetFileNames: 'assets/[name]-[hash][extname]', // Output format for asset files
      },
    },
  },
});
