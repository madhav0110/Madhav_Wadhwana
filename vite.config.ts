import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative asset paths let the same build work on user pages, project pages,
  // and custom domains without hardcoding the repository name.
  base: './',
  plugins: [react()],
})
