import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ВАЖНО: Замените 'your-repo-name' на имя вашего репозитория на GitHub.
  // Например, если URL вашего репозитория https://github.com/user/my-cool-app,
  // то здесь должно быть base: '/my-cool-app/'
  base: '/your-repo-name/'
})
