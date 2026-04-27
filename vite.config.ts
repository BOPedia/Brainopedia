import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/brainopedia-clean/',
  build: {
    chunkSizeWarningLimit: 1000, // Suppress chunk size warnings for large app
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor libraries into separate chunk
          if (id.includes('node_modules/react') || id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
        }
      }
    }
  }
});
