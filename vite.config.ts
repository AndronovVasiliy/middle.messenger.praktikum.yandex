import { defineConfig, Plugin } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@Icons': path.resolve(__dirname, './src/Icons'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    handlebars() as Plugin,
  ],
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
  },
});
