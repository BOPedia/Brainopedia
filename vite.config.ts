import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // We specifically target PNGs here
      png: {
        // 100 means no quality loss, but it still strips out heavy metadata
        // You can drop this to 80-90 if you want even smaller files and the text stays sharp!
        quality: 90, 
      },
      // If you ever decide to mix in WebP or JPG, it will handle those too!
      jpeg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
});