import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Root-relative URLs (/assets/...) so JS/CSS load on any route and after refresh on Hostinger.
  // Relative base ('./') breaks when the document URL is not the site root.
  base: '/',
})