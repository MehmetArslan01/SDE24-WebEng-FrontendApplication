// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/SDE24-WebEng-FrontendApplication/', // Set your deployment base path

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        form: resolve(__dirname, 'pages/form.html'),
        favorites: resolve(__dirname, 'pages/favorites.html'),
      },
    },
  },
});
