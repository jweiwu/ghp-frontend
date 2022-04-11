import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: process.env.NODE_ENV === 'production' ? '/ghp-frontend' : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    scss: {
      additionalData: '@import "./src/assets/scss/var.scss";'
    }
  }
})
