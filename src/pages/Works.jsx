import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function Works() {
  useDocumentTitle("作品集 / Jackson")

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

  return (
    <>
      <div className="flex flex-col w-full">
      {/* Exhibition Space Header / Statement */}
      <section className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop pt-space-xl pb-space-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
      <div className="space-y-space-xs max-w-2xl">
      <div className="flex items-center gap-space-xs">
      <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>
      <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Archived Works · 2022—2025</p>
      </div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">策展与档案空间</h1>
      <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs leading-relaxed">
                以“一般老百姓”的敏锐视角凝视日常边界。结合纪实温情与先锋纯粹的形式探索，将城市瞬影、几何秩序与生活残章编织入当代视觉语境。
              </p>
      </div>
      {/* Quick Index Indicator */}
      <div className="flex items-baseline gap-space-sm font-label-md text-label-md text-on-surface-variant self-start md:self-auto bg-surface-container-low px-space-md py-space-xs rounded-full">
      <span className="text-primary-container font-medium">TOTAL 06 PIECES</span>
      <span>/</span>
      <span className="tracking-widest">GALLERY VIEW</span>
      </div>
      </div>
      {/* Filter Pills Section */}
      <div className="mt-space-xl flex flex-wrap items-center gap-space-xs md:gap-space-sm" id="filter-container">
      <button className="filter-btn font-label-md text-label-md px-space-md py-space-xs rounded-full transition-all duration-300 bg-primary-container text-on-primary shadow-sm hover:opacity-95 flex items-center gap-space-xs cursor-pointer" data-filter="all">
      <span>全部</span>
      <span className="font-label-sm text-label-sm opacity-75">(06)</span>
      </button>
      <button className="filter-btn font-label-md text-label-md px-space-md py-space-xs rounded-full transition-all duration-300 bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-space-xs cursor-pointer" data-filter="doc">
      <span>纪实摄影</span>
      <span className="font-label-sm text-label-sm opacity-60">(02)</span>
      </button>
      <button className="filter-btn font-label-md text-label-md px-space-md py-space-xs rounded-full transition-all duration-300 bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-space-xs cursor-pointer" data-filter="art">
      <span>视觉艺术</span>
      <span className="font-label-sm text-label-sm opacity-60">(02)</span>
      </button>
      <button className="filter-btn font-label-md text-label-md px-space-md py-space-xs rounded-full transition-all duration-300 bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-space-xs cursor-pointer" data-filter="concept">
      <span>概念设计</span>
      <span className="font-label-sm text-label-sm opacity-60">(02)</span>
      </button>
      </div>
      </section>
      {/* Curated Masonry / Asymmetric Gallery Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-space-lg">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg md:gap-x-space-lg md:gap-y-space-2xl" id="gallery-grid">
      {/* Item 01: 市井微澜 (Doc Photo) - Span 7 cols */}
      <article className="gallery-card group md:col-span-7 flex flex-col transition-all duration-500" data-category="doc">
      <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="aspect-[16/10] overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" alt="Monochrome street documentary photography capturing a narrow wet alley in an ancient Asian metropolis, subtle reflections of rain puddles, high contrast chiaroscuro lighting, an elderly artisan quietly crafting by an ambient incandescent lantern, minimalist white-cube museum grading, sharp focus and fine cinematic film grain" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80" />
      </div>
      {/* Corner Blueprint Tag */}
      <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-on-surface shadow-sm flex items-center gap-1.5">
      <span className="text-primary-container font-semibold">[01]</span>
      <span className="text-on-surface-variant uppercase">DOCUMENTARY</span>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-container text-on-primary rounded-full p-2 flex items-center justify-center">
      <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
      </div>
      <div className="pt-space-md flex flex-col space-y-space-xxs">
      <div className="flex items-baseline justify-between">
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">市井微澜</h3>
      <span className="font-label-sm text-label-sm text-on-surface-variant">2024 · 35mm 胶片 / 艺术微喷</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  城市急促演进中的细碎波纹。记录老城旧巷深处烟火与水汽交织的无声片刻，留存普通个体与空间搏动的生活原色。
                </p>
      </div>
      </article>
      {/* Item 02: 蓝色构想 (Visual Art) - Span 5 cols */}
      <article className="gallery-card group md:col-span-5 flex flex-col transition-all duration-500 md:mt-space-2xl" data-category="art">
      <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="aspect-[4/5] overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" alt="Contemporary abstract geometric art, vivid International Klein Blue acrylic paint textured relief juxtaposed with crisp chalk-white planes, modern Swiss minimalist composition, sharp graphic forms with subtle matte canvas texture and cast ambient shadows" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80" />
      </div>
      <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-on-surface shadow-sm flex items-center gap-1.5">
      <span className="text-primary-container font-semibold">[02]</span>
      <span className="text-on-surface-variant uppercase">CANVAS ART</span>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-container text-on-primary rounded-full p-2 flex items-center justify-center">
      <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
      </div>
      <div className="pt-space-md flex flex-col space-y-space-xxs">
      <div className="flex items-baseline justify-between">
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">蓝色构想</h3>
      <span className="font-label-sm text-label-sm text-on-surface-variant">2024 · 纯丙烯综合媒介</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  现代主义抽象几何色块的严苛研究，通过克莱因蓝与留白的比例交锋，探求视觉张力与沉思静默的极限平衡点。
                </p>
      </div>
      </article>
      {/* Item 03: 老百姓的肖像日志 (Doc Photo) - Span 5 cols */}
      <article className="gallery-card group md:col-span-5 flex flex-col transition-all duration-500" data-category="doc">
      <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="aspect-[4/5] overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" alt="Warm documentary portrait of a local street tailor in a sunlit corner workshop, expressive weathered hands holding brass measuring instruments, soft natural morning window light, honest human gaze, muted neutral room tones, gallery curated aesthetic" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80" />
      </div>
      <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-on-surface shadow-sm flex items-center gap-1.5">
      <span className="text-primary-container font-semibold">[03]</span>
      <span className="text-on-surface-variant uppercase">INTERVIEW</span>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-container text-on-primary rounded-full p-2 flex items-center justify-center">
      <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
      </div>
      <div className="pt-space-md flex flex-col space-y-space-xxs">
      <div className="flex items-baseline justify-between">
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">老百姓的肖像日志</h3>
      <span className="font-label-sm text-label-sm text-on-surface-variant">2023 · 中画幅数码 / 访谈录音</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  历时18个月的街头人物图景档案。以真实无修饰的目光，重塑普通劳动者的容颜尊严与日常叙事厚度。
                </p>
      </div>
      </article>
      {/* Item 04: 空间切片 (Concept Design) - Span 7 cols */}
      <article className="gallery-card group md:col-span-7 flex flex-col transition-all duration-500 md:-mt-space-lg" data-category="concept">
      <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="aspect-[16/10] overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" alt="Brutalist architectural spatial analysis rendering, stark geometric raw concrete pillars intersected by precise golden hour sunlight shafts, high contrast shadow patterns, minimalist composition with Klein Blue accent graphics subtly floating in space" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80" />
      </div>
      <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-on-surface shadow-sm flex items-center gap-1.5">
      <span className="text-primary-container font-semibold">[04]</span>
      <span className="text-on-surface-variant uppercase">SPATIAL</span>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-container text-on-primary rounded-full p-2 flex items-center justify-center">
      <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
      </div>
      <div className="pt-space-md flex flex-col space-y-space-xxs">
      <div className="flex items-baseline justify-between">
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">空间切片</h3>
      <span className="font-label-sm text-label-sm text-on-surface-variant">2024 · 3D空间结构 / 光影建模</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  建筑体量与漫射自然光的数学重构。剥离建筑物的功能附庸，只保留纯粹的混凝土截面与时空光切。
                </p>
      </div>
      </article>
      {/* Item 05: 无声之物 (Visual Art) - Span 6 cols */}
      <article className="gallery-card group md:col-span-6 flex flex-col transition-all duration-500" data-category="art">
      <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="aspect-[1/1] overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" alt="Art gallery still life installation featuring an oxidized copper kettle resting gently on polished travertine stone plinth, ambient directional gallery spotlighting, clean neutral backdrop with subtle Klein Blue thread suspended across the scene, meditative tranquil aura" src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80" />
      </div>
      <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-on-surface shadow-sm flex items-center gap-1.5">
      <span className="text-primary-container font-semibold">[05]</span>
      <span className="text-on-surface-variant uppercase">INSTALLATION</span>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-container text-on-primary rounded-full p-2 flex items-center justify-center">
      <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
      </div>
      <div className="pt-space-md flex flex-col space-y-space-xxs">
      <div className="flex items-baseline justify-between">
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">无声之物</h3>
      <span className="font-label-sm text-label-sm text-on-surface-variant">2023 · 当代装置 / 现成品重塑</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  剥离日用品的使用预设，将其置入空寂展台。器物的磨损、锈迹与静默在此被视作承载人类生活时间的化石。
                </p>
      </div>
      </article>
      {/* Item 06: 数码日常 (Concept Design) - Span 6 cols */}
      <article className="gallery-card group md:col-span-6 flex flex-col transition-all duration-500" data-category="concept">
      <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="aspect-[1/1] overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" alt="Futuristic yet minimalist digital user interface experimental wireframe display on high-grade OLED glass monitor, vivid Klein Blue interactive typography elements, clean typography data matrices, sleek contemporary museum exhibition setup" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80" />
      </div>
      <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-on-surface shadow-sm flex items-center gap-1.5">
      <span className="text-primary-container font-semibold">[06]</span>
      <span className="text-on-surface-variant uppercase">INTERACTIVE</span>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-container text-on-primary rounded-full p-2 flex items-center justify-center">
      <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
      </div>
      <div className="pt-space-md flex flex-col space-y-space-xxs">
      <div className="flex items-baseline justify-between">
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">数码日常</h3>
      <span className="font-label-sm text-label-sm text-on-surface-variant">2025 · 交互代码 / 动态屏幕系统</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  探讨移动设备与人类知觉系统的共生。通过生成式交互设计与极简字体排印，反思屏幕界面对日常生活心理的重塑。
                </p>
      </div>
      </article>
      </div>
      </section>
      {/* Curatorial Colophon & Dialogue Bar */}
      <section className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-space-2xl">
      <div className="bg-surface-container-low p-space-lg md:p-space-xl rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
      <div className="space-y-space-xxs max-w-xl">
      <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest font-semibold">Exhibition Inquiries</span>
      <h4 className="font-headline-md text-headline-md text-on-surface">需要原作巡展或艺术项目合作？</h4>
      <p className="font-body-md text-body-md text-on-surface-variant">
                作品提供限量版画定制输出，亦承接特定场域的纪实调研与视觉艺术委托。欢迎交流策展理念与灵感。
              </p>
      </div>
      <Link to="/contact" className="inline-flex items-center gap-space-xs bg-primary-container text-on-primary px-space-lg py-space-sm rounded-full font-label-md text-label-md tracking-wider hover:opacity-95 transition-opacity shadow-sm whitespace-nowrap">
      <span>发起联络</span>
      <span className="material-symbols-outlined text-base">arrow_forward</span>
      </Link>
      </div>
      </section>
      </div>
    </>
  )
}
