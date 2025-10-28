import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/eric-s-dev-site/',
  plugins: [react()],
  server: {
    port: 5173,
  },
})
