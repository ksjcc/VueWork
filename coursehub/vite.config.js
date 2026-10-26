import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Vite 开发服务器配置：固定端口 5173，允许局域网访问
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/VueWork/' : '/',
  plugins: [vue()],
  server: {
    port: 5173,
    host: true
  }
})
