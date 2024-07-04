import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/goit-js-hw-09/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        gallery: resolve(__dirname, 'public/1-gallery.html'),
        form: resolve(__dirname, 'public/2-form.html'),
      },
    },
  },
})
