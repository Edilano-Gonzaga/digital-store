import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // libera pra abrir em qualquer navegador / celular na mesma rede
    port: 5173,
    open: true, // abre automático no navegador padrão
  },
})