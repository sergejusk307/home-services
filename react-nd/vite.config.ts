import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const rootAlias = new URL('./src/', import.meta.url).pathname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': rootAlias,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    alias: {
      '@/': rootAlias,
    },
  },
});
