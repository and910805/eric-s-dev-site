import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ 使用自訂網域要這樣設
  plugins: [react()],
  server: {
    port: 5173,
  },
})
