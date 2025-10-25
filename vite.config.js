import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 4300,
    allowedHosts: [
      'texevo.org',
      'www.texevo.org',
      'localhost',
      '127.0.0.1'
    ]
  }
})

