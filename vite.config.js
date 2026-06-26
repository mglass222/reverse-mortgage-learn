import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://mglass222.github.io/reverse-mortgage-learn/ in production,
// so assets need the repo-name base path. Dev/test stay at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/reverse-mortgage-learn/' : '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
}))
