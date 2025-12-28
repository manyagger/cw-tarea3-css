import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  base: "https://manyagger.github.io/cw-tarea3-css",
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        location: resolve(__dirname, 'location.html')      }
    }
  }
});