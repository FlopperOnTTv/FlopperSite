import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    modulePreload: true,
    target: 'esnext',
    minify: 'esbuild'
  },
  server: {
    headers: {
      'Content-Type': 'text/javascript',
    },
    fs: {
      strict: true
    }
  }
});
