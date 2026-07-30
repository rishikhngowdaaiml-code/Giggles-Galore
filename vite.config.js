import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'C:/Users/1185r/OneDrive/Desktop/giggles-galore',
        'C:/Users/1185r/.gemini/antigravity/scratch/giggles-galore',
        'C:/Users/1185r/.gemini/antigravity/brain',
        'C:/Users/1185r/.gemini/antigravity-ide/brain'
      ]
    }
  }
})
