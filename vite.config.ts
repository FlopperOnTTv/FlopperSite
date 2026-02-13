import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // fix for that shitty mistake i did
  base: '/FlopperSite/',

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
