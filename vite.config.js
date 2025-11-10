
// https://vite.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'summitwebsite' with your actual repository name if different
export default defineConfig({
  base: '/Summit-Trail-/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
