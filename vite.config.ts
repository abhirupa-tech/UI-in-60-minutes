import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),   // ✅ Vite plugin (correct place)

    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler'], // ✅ stays inside babel
        ],
      },
    }),
  ],
})
