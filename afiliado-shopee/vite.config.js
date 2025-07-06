import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Usa caminhos relativos
  build: {
    outDir: 'dist',
    assetsDir: '.', // Coloca os assets na raiz
    rollupOptions: {
      output: {
        entryFileNames: 'js/main.js',
        assetFileNames: '[name][extname]'
      }
    }
  },
  server: {
    open: true
  }
})
