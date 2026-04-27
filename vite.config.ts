import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/brainopedia-clean/', // Must match your folder name exactly
  // ... rest of config
});
