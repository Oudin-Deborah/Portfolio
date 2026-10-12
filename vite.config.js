import { copyFileSync, mkdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Pages du site (routes de App.jsx) à rendre accessibles par leur adresse directe.
// À compléter à chaque nouvelle route. Les fiches projet (/projets/:id) sont ajoutées
// automatiquement à partir de projects.json.
const projects = JSON.parse(readFileSync('./src/data/projects.json', 'utf-8'))
const SPA_PAGES = ['about', 'contact', ...projects.map((p) => `projets/${p.id}`)]

// GitHub Pages répond « 404 » aux adresses sans fichier correspondant : à la fin du build,
// index.html est copié sous le nom de chaque page (about.html est servi pour /about)
function spaPages() {
  let outDir

  return {
    name: 'spa-pages',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      mkdirSync(resolve(outDir, 'projets'), { recursive: true })
      for (const page of SPA_PAGES) {
        copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, `${page}.html`))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base:'/Portfolio/',
  plugins: [react(), spaPages()],
})
