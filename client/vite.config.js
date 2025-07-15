import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import dotenv from 'dotenv'
dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/math-map-matthayom',
  plugins: [
    react(),
    tailwindcss()
  ],
  define: { "process.env.IS_PREACT": JSON.stringify("true") },
})
