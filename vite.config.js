import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',  // Đầu ra cho thư mục `dist`
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),  // Tệp HTML chính
        category: resolve(__dirname, 'src/category.html'), // Thêm các tệp HTML khác
        product_detail: resolve(__dirname, 'src/product_detail.html')
      }
    }
  }
})
