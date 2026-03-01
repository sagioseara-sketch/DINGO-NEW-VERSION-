import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using base: './' makes ALL asset paths relative.
// This means the built index.html will reference its JS/CSS as
// ./assets/index-abc123.js instead of /DINGO-NEW-VERSION-/assets/...
// Relative paths work on GitHub Pages regardless of repo name or subfolder.
export default defineConfig({
  plugins: [react()],
  base: './',
})
