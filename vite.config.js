import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        category: resolve(__dirname, 'src/category.html'),
        productDetail: resolve(__dirname, 'src/productDetail.html')
      }
    }
  },
});