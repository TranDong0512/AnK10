import { defineConfig } from 'vite';
import { resolve } from 'path';
import vercel from 'vite-plugin-vercel';
export default defineConfig({
  build: {
    outDir: 'dist',   // Đặt thư mục đầu ra là 'dist' ở thư mục gốc
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        category: resolve(__dirname, 'src/category.html'),
        product_detail: resolve(__dirname, 'src/product_detail.html')
      }
    }
  },
  server: {
    host: 'localhost',
    port: 8080
  },
  plugins: [vercel()]
});