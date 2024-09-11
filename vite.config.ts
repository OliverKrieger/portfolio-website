import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',
  css: {
    postcss: './postcss.config.js', // Ensure PostCSS config is loaded
  },
})
