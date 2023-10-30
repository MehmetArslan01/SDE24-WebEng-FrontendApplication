import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser';

export default ({ command }) => {
  const production = command === 'build';

  const base = production ? '/FrontendJavascriptApplication/' : '/';

  const plugins = production ? [terser()] : [];

  return defineConfig({
    root: './src',
    base, // Set base path conditionally
    build: {
      outDir: 'dist',
      minify: production,
      rollupOptions: {
        input: {
          index: '/index.html',
          about: '/pages/about.html',
          favorites: '/pages/favorites.html',
          user: '/pages/user.html',
        },
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
        plugins,
      },
    },
    server: {
      port: 3000,
    },
    plugins: [],
  });
};
