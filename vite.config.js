import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuración para Vercel - No necesita base path
  // Vercel sirve desde la raíz del dominio automáticamente
})
