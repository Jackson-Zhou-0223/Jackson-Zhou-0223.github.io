import { readFileSync, writeFileSync } from 'fs'

function htmlToJsx(html) {
  let out = html
  out = out.replace(/<!--([\s\S]*?)-->/g, (_m, c) => `{/*${c.replace(/\*\//g, '* /')}*/}`)
  out = out.replace(/\sclass="/g, ' className="')
  out = out.replace(/\sfor="/g, ' htmlFor="')
  out = out.replace(/\sviewbox="/gi, ' viewBox="')
  out = out.replace(/\sclip-path="/g, ' clipPath="')
  out = out.replace(/\sfill-rule="/g, ' fillRule="')
  out = out.replace(/\sstroke-width="/g, ' strokeWidth="')
  out = out.replace(/\sstroke-linecap="/g, ' strokeLinecap="')
  out = out.replace(/\sstroke-linejoin="/g, ' strokeLinejoin="')
  out = out.replace(/\stabindex="/g, ' tabIndex="')
  out = out.replace(/\sautocomplete="/g, ' autoComplete="')
  out = out.replace(/<(img|input|br|hr|source|col|wbr)([^>]*?)\/?>/gi, '<$1$2 />')
  out = out.replace(/\/ \/>/g, ' />')
  out = out.replace(/ required=""/g, ' required')
  out = out.replace(/ hidden=""/g, ' hidden')
  out = out.replace(/&amp;/g, '&')
  out = out.replace(/\sstyle="([^"]*)"/g, (_m, style) => {
    const obj = style
      .split(';')
      .filter(Boolean)
      .map((pair) => {
        const [k, ...rest] = pair.split(':')
        const key = k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase())
        return `${key}: '${rest.join(':').trim()}'`
      })
      .join(', ')
    return ` style={{${obj}}}`
  })
  out = out.replace(
    /<a([^>]*?)\sdata-path="(home|about|works|contact)"([^>]*)>([\s\S]*?)<\/a>/g,
    (_m, pre, path, post, children) => {
      const attrs = `${pre}${post}`.replace(/\shref="[^"]*"/g, '')
      const to = path === 'home' ? '/' : `/${path}`
      return `<Link to="${to}"${attrs}>${children}</Link>`
    },
  )
  return out
}

const imageMap = {
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCc6iWgJp6Lb4GwLDmkyAcEiOQOd4d7CupweYVVRMQlwNNLX1H5J8kXWEe4qKfHvEeMmvPNv6oLWeNmY1f5mWcWAnPuigOWFDOCfRv0tgjv-pXUqZGrTYsFGZeVLYmiH8uOqtUjhi-jvjzEZ9CFYmN-5EjHgmfqNz2zUl5qT0s_npJCRo9bnUZAizJeQl_Jx_kmpayQeYbtrcKrYuMJZoYXNcOQ43hxMzMC2DTeGcrAzS10ccZ2yWgytw':
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1400&q=80',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC8y8E-RMRmaEazvJpgZqCgmc01pKgDRTzMZDuo88ucPO_uyxHtEuontVxggQCJrDoh2NLtAXUVwcYD4myR3GQMgfsSF3-xvSCMH31f49OrafSkdAF-qUzqEEgtUYnepb3XkO9_kgOJSpOq6G89SLVxmdoWHCgJGrEJHFp0M5VISRS02FLa4B5MMtVmyaAP9g4IEcsvGyL4JSXqcf1d2wtqv5w50zuTFk_LJxy5ec1kwgAOSpqtknRffQ':
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD_UaXDnwERN9IJIawcoQAihevKKmhjPb_cEGCayZcPNal6_WqjxTNPyCTVfMgboPbO9Q78Qg56JIBTH4C_vIUhBleq1Ut8UEj8up_nKLzlT1To6HMIyUHvedLK_USgXXlb1NG3xK9g4UJ47f2mrVoo1oP59UZHDlpLsbGhB_gTR372m9zu-IHaYpbH2CmyQWzh1OmeYgzL3pjSzg5oHkz8JdPuM-S34o8ci7XkdQe0_cR1vb9PXnWbxQ':
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBsO4HnRAw-JkLZjRjhugabg_6yka3UyNY-3jmCadon5xWf7acMX-t1RB7oo7CkXTQ-j7ATJR2jokqi-ULtTJjGm_e_OQAqrEVH2IbyphksSUKu5MBEibKf6uhaxypdMq5q6465QvMVUTmJz6IxLEmA13MhpxnZDFg5vVcjiWFiT43vAy-nNXULjkVeng8HOnGCLlrcRDnQUwvueApEhfF4sk_YKMtzjUfTHWucWP6rKD8emrOjlPJGag':
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAIS-5q0RBSgjSMb5ZFU2-vZ3fmemw2AzaR9L3p4lxJBvEAXAF628H6mtIPVMuXLagYLsozmQ21jO0L-iA_uNjcEdqGUrimS8Y921z99jrbqjLqvXuvDvaI7GRdqw8Gt1m3U4I9Ov7MgVRW3e1qsovtMrHQhY_M3x6nlIcMmnzFQwA-hTLdijpq8kvoJrkDmP5YgDercd7bHAPnt6SgYuIUGnrDvqfwcr55lbn8nL9Yk-UZww3BKjw-0A':
    'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1200&q=80',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA3dKESgubVHS_FNY330KUf3XsDEynBAbNND9tlC8veWJ9EPhD6ZjbVcrYlVo_GaQDcfL-3a4CqEbqovdRw0p-Yi0bAB2qg_IPuZdhm5qJUgi8RERTqqcbR1zFGpsr74EJ_W6reEXwVZc8NRwdMN03Hn2qKAYc95Y2YoeXEA4zoKdVpFeUwOCo-a3AIb0iR1QErLAsKUmhYZOCrkukyDJDQvHAHrDmeS1jqjA7YJ8MnRRGIx-9Z5UF4Ig':
    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB9MS_p3m2KIePU1vrNJpiyfhiGPst9t_nK6C0WyCPTHa-bnGlpNqf4CPeo1M2N_rE2D_kWeCc1k9DnDWBhyrm84WN4II2_gxs60-21hKXfuh-bTqrR_Bo2dAWca9lJBmAWx9YWohjR_G7_SXlejZgg4zfv23EOvECSLSw9Tog9igWuz-hD23Do-z831H0oqplbXRAogSLKMRyB2KmSzG_yi85ie3cx8azzBmgAiZHIt1rdaxtPEIQhag':
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCBhzDvepQNaYkDbe3aTlWY3GQ6marUldI7u06Q9B1azHu_M_qL6BpkEwItkRDpfd_P9b7Z0nQHo-BbrruMhsnTuFE5gOtmiLS3YjuT8OgCM94ZnGnFTRMvIoHN4l5M1wmFrQiboqPremZ9ZkX3ALfD0HNmdXsiNthhDRg3rZxPG6XUTLQuiXLMfg4U8sHh-2y5zRwZNQ5C303chWBU800ApzcVUjArgfbuoO9OOdUsVSN25JNCxFejUg':
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDa6qtv4blk9rn8mKXM9GyALW-uXTvMDKf9iPSg2nRrH91ufDdfTAwAl6MqoXliSMbaq5GfL1k8ztOTS0e6C3gqDAtxMD0H4EP1-nx95_Gg_S8g3KvEmz-fAXwzKu3DZh5Jk92LoIyklFtvOdAgL67tShZtuUsH4lt38KmF8GC0buAyt9IiDDEe_5P8dzuTAnU-rUl3zsQ4CdM9ITqCaC4mje-93u3wZsRo44ajU-axAuLAozIwNE5wJQ':
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDzA-_LZFaMyZRVyhd7ZwMOIAGIwdEn6nUEK5SkWaGliYms4IiKhfpOHCSKo0Hxmscs50Zf4jdZ1dEf8NjODHYjgNl7KuZ3v4fNvp2Yp4riq0-3V04FUdTFeAuu8ico5KsBIXbgE1xDnGUICQKkwv0gyfpAj4LwrTG5boSVbpjtVO07eIoSFBXcYq0miw1LFHHFyBJXWX-9cipUMU3l_WGXB9P0rrT8nUdXjEIpvsFmctx36xSen_vc2w':
    'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZlnIrfzNW_rYIOa0eL5n2HgfY6ZknCoYiVmhcqLJNyg_SyQTDn0rcEogR51-SUBx7JZ1q0z6vOxDsHtfjt1hUIQdcGXY_KWrynk7iusOCRNwSbxLIGuz4YURfh6K1KMyFBF4iejMKYXntfDllfoGDTk6bwHVcaYXNMG11-V4JNCd69Ja2j7NNCm-CwAfyxueSiWZuXjZQxMeSgiNa1ao7zk10yE-f5ltMkoBNsCh3IFiOtCq5pJz7w':
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80',
}

function replaceImages(html) {
  let out = html
  for (const [from, to] of Object.entries(imageMap)) {
    out = out.split(from).join(to)
  }
  return out
}
function extractMain(file) {
  const html = readFileSync(file, 'utf8')
  const main = html.match(/<main[\s\S]*?<\/main>/)[0]
  const inner = main
    .replace(/^<main[^>]*>/, '')
    .replace(/<\/main>$/, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
  return inner.trim()
}

const pages = {
  home: 'stich_workspace/stitch_personal_website_wireframe_design/stitch_personal_website_wireframe_design/jackson_4/code.html',
  about:
    'stich_workspace/stitch_personal_website_wireframe_design/stitch_personal_website_wireframe_design/jackson_3/code.html',
  works:
    'stich_workspace/stitch_personal_website_wireframe_design/stitch_personal_website_wireframe_design/jackson_1/code.html',
  contact:
    'stich_workspace/stitch_personal_website_wireframe_design/stitch_personal_website_wireframe_design/jackson_2/code.html',
}

for (const [name, file] of Object.entries(pages)) {
  const jsx = htmlToJsx(replaceImages(extractMain(file)))
  writeFileSync(`scripts/${name}.fragment.jsx`, jsx)
  console.log(name, jsx.length)
}
