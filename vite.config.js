import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The base MUST match your exact GitHub repo name including capitals and dashes.
// Your repo is: DINGO-NEW-VERSION-
// So base is:  /DINGO-NEW-VERSION-/
// With HashRouter, all page routing happens after the # symbol so GitHub Pages
// never needs to serve anything other than the root index.html
export default defineConfig({
  plugins: [react()],
  base: '/DINGO-NEW-VERSION-/',
})
