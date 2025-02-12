import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/math-map-matthayom',
  plugins: [
    react(),
    tailwindcss()
  ],
  define: { "process.env.IS_PREACT": JSON.stringify("true") },
})
