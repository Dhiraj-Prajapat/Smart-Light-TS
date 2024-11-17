
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets', // Specify where to put assets
    rollupOptions: {
      input: './index.html', // Make sure this includes all necessary files
    },
  },
});
