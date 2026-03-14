import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { spiceflowPlugin } from 'spiceflow/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  clearScreen: false,
  plugins: [
    tailwindcss(),
    react(),
    spiceflowPlugin({
      entry: './src/main.tsx',
    }),
  ],
})
