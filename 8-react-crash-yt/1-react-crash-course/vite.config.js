import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000
  }
})

// this is for any configuration for you dev server
// we changed the port because by default it's set to 5173, I prefer to use 3000 for frontend stuff 
