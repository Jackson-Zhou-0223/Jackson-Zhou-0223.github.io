import { readFileSync, writeFileSync, mkdirSync } from 'fs'

const html = readFileSync(
  'stich_workspace/stitch_personal_website_wireframe_design/stitch_personal_website_wireframe_design/jackson_4/code.html',
  'utf8',
)

const urls = [...html.matchAll(/src="(https:[^"]+)"/g)].map((m) => m[1])
mkdirSync('scripts', { recursive: true })
writeFileSync('scripts/extracted-urls.json', JSON.stringify(urls, null, 2))
console.log(urls.map((u, i) => `${i} ${u.slice(0, 80)} ... ${u.length}`).join('\n'))
