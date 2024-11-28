import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['airtable']
  },
  server: {
    host: true,
    port: 5173,
  },
});