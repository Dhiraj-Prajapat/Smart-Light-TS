<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======

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
>>>>>>> a559dd53e30a15eb347f0b9ebf49b01babc183d3
