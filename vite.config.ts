import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // penting supaya relative path cocok di Firebase Hosting
  plugins: [react()]
})