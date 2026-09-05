import { copyFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function githubPagesDocs() {
  return {
    name: 'github-pages-docs',
    closeBundle() {
      const outDir = resolve('docs')
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
      writeFileSync(resolve(outDir, '.nojekyll'), '')
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), githubPagesDocs()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  server: {
    watch: {
      ignored: ['**/stich_workspace/**', '**/trash/**'],
    },
  },
})
