import { readFileSync, writeFileSync } from 'fs'

function wrap(name, title, extraImports, extraHooks, body) {
  body = body
    .replace(
      'onclick="window.scrollTo({top: window.innerHeight, behavior: \'smooth\'})"',
      'onClick={() => window.scrollTo({ top: window.innerHeight, behavior: \'smooth\' })}',
    )
    .replace(
      'onsubmit="event.preventDefault(); window.handleSubmitMessage(this);"',
      'onSubmit={handleSubmit}',
    )
    .replace(/ data-alt="/g, ' alt="')

  return `import { Link } from 'react-router-dom'
${extraImports}import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function ${name}() {
  useDocumentTitle(${JSON.stringify(title)})
${extraHooks}
  return (
    <>
${body
  .split('\n')
  .map((line) => (line ? `      ${line}` : ''))
  .join('\n')}
    </>
  )
}
`
}

const worksHooks = `
  useEffect(() => {
    const filterButtons = document.querySelectorAll('#filter-container .filter-btn')
    const cards = document.querySelectorAll('#gallery-grid .gallery-card')

    const onClick = (event) => {
      const btn = event.currentTarget
      const targetCategory = btn.getAttribute('data-filter')
      filterButtons.forEach((item) => {
        item.classList.remove('bg-primary-container', 'text-on-primary', 'shadow-sm')
        item.classList.add('bg-surface-container-low', 'text-on-surface-variant')
      })
      btn.classList.remove('bg-surface-container-low', 'text-on-surface-variant')
      btn.classList.add('bg-primary-container', 'text-on-primary', 'shadow-sm')
      cards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category')
        if (targetCategory === 'all' || cardCategory === targetCategory) {
          card.style.display = 'flex'
          window.setTimeout(() => {
            card.style.opacity = '1'
            card.style.transform = 'translateY(0)'
          }, 30)
        } else {
          card.style.opacity = '0'
          card.style.transform = 'translateY(12px)'
          window.setTimeout(() => {
            card.style.display = 'none'
          }, 300)
        }
      })
    }

    filterButtons.forEach((btn) => btn.addEventListener('click', onClick))
    return () => filterButtons.forEach((btn) => btn.removeEventListener('click', onClick))
  }, [])
`

const contactHooks = `
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const chips = document.querySelectorAll('.intent-btn')
    const onClick = (event) => {
      chips.forEach((chip) => {
        chip.classList.remove('bg-primary-container', 'text-on-primary')
        chip.classList.add('bg-surface-container-high', 'text-on-surface-variant')
      })
      event.currentTarget.classList.remove('bg-surface-container-high', 'text-on-surface-variant')
      event.currentTarget.classList.add('bg-primary-container', 'text-on-primary')
    }
    chips.forEach((chip) => chip.addEventListener('click', onClick))
    return () => chips.forEach((chip) => chip.removeEventListener('click', onClick))
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    const btn = document.getElementById('submitBtn')
    const prompt = document.getElementById('successPrompt')
    setStatus('sending')
    btn.disabled = true
    btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-base">progress_activity</span><span>递送中...</span>'
    window.setTimeout(() => {
      btn.innerHTML = '<span>已成功寄出</span><span class="material-symbols-outlined text-base">check_circle</span>'
      btn.classList.remove('bg-primary-container')
      btn.classList.add('bg-tertiary-container')
      prompt.classList.remove('hidden')
      event.target.reset()
      setStatus('sent')
    }, 800)
  }
`

writeFileSync(
  'src/pages/Home.jsx',
  wrap('Home', 'Jackson / 切片与观察', '', '', readFileSync('scripts/home.fragment.jsx', 'utf8')),
)
writeFileSync(
  'src/pages/About.jsx',
  wrap('About', '关于我 / Jackson', '', '', readFileSync('scripts/about.fragment.jsx', 'utf8')),
)
writeFileSync(
  'src/pages/Works.jsx',
  wrap(
    'Works',
    '作品集 / Jackson',
    "import { useEffect } from 'react'\n",
    worksHooks,
    readFileSync('scripts/works.fragment.jsx', 'utf8'),
  ),
)
writeFileSync(
  'src/pages/Contact.jsx',
  wrap(
    'Contact',
    '联系我 / Jackson',
    "import { useEffect, useState } from 'react'\n",
    contactHooks,
    readFileSync('scripts/contact.fragment.jsx', 'utf8'),
  ),
)

console.log('pages written')
