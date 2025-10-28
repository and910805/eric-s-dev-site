import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When deploying to GitHub Pages the site is served from
// https://<user>.github.io/<repo>/, so we need to prepend the repository
// name as the base path. Locally we still want root-relative paths. This
// helper checks for an explicit VITE_BASE environment variable and falls
// back to the repository folder name to keep Pages releases from 404-ing.
const repoBase = '/eric-s-dev-site/';
const runtimeBase =
  process.env.VITE_BASE ?? (process.env.NODE_ENV === 'production' ? repoBase : '/');

export default defineConfig({
  base: runtimeBase,
  plugins: [react()],
  server: {
    port: 5173,
  },
})
