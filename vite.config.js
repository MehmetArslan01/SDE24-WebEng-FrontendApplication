const path = require('path');
export default {
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'pages/about.html'),
        form: path.resolve(__dirname, 'pages/form.html'),
        favorites: path.resolve(__dirname, 'pages/favorites.html')
      },
    },
  },
};
