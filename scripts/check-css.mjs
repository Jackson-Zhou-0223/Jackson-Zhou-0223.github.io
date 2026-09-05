import { readFileSync } from 'fs'
const c = readFileSync('dist/assets/index-Cb3XZZTX.css', 'utf8')
const keys = ['font-display-xl', 'font-headline-lg', 'px-margin-desktop', 'bg-primary-container', 'text-display-xl', 'font-body-md', 'gap-space-lg']
for (const s of keys) {
  console.log(s, c.includes('.' + s))
}
