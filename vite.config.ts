import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  base: '/portfolio-website/',
  css: {
    postcss: './postcss.config.js', // Ensure PostCSS config is loaded
  },
})
