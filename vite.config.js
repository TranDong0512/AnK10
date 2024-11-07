import { defineConfig } from 'vite';
import { resolve } from 'path';
import vercel from 'vite-plugin-vercel';
export default defineConfig({
  root: 'src',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        category: resolve(__dirname, 'src/category.html'),
        product_detail: resolve(__dirname, 'src/product_detail.html')
      }
    }
  },
  plugins: [vercel()],
});