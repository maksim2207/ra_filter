import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ra_filter/', // это критично: имя репозитория
  build: {
    sourcemap: true,
  },
})
