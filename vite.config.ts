import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'lodash-es', replacement: 'lodash' },
    ],
  },
  plugins: [react()],
  server: {
    port: 8030,
    host: true,
  },
});
