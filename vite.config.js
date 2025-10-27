import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryBase = '/eric-s-dev-site/'

export default defineConfig({
  plugins: [react()],
  base: repositoryBase,
  server: {
    port: 5173,
  },
})
