import { useEffect } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function Contact() {
  useDocumentTitle('联系我 / Jackson')

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
    const form = event.currentTarget
    const btn = document.getElementById('submitBtn')
    const prompt = document.getElementById('successPrompt')
    btn.disabled = true
    btn.innerHTML =
      '<span class="material-symbols-outlined animate-spin text-base">progress_activity</span><span>递送中...</span>'
    window.setTimeout(() => {
      btn.innerHTML =
        '<span>已成功寄出</span><span class="material-symbols-outlined text-base">check_circle</span>'
      btn.classList.remove('bg-primary-container')
      btn.classList.add('bg-tertiary-container')
      prompt.classList.remove('hidden')
      form.reset()
    }, 800)
  }

  return (
    <>
      <div className="flex flex-col w-full">
      <div className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-space-xl md:py-space-2xl">
      {/* Editorial Header Kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg gap-space-sm">
      <div className="flex flex-col">
      <div className="flex items-center gap-space-xs">
      <span className="inline-block w-2 h-2 rounded-full bg-primary-container"></span>
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">Index 04 / Communication</span>
      </div>
      <h1 className="font-display-xl text-display-xl text-on-surface tracking-tight mt-space-xxs">
                与我联络<span className="text-primary-container">.</span>
      </h1>
      </div>
      <div className="max-w-md">
      <p className="font-body-md text-body-md text-secondary leading-relaxed">
                无论是展览邀约、当代视觉艺术共创、跨界合作，或只是在漫长岁月里交换一次对生活的观察。常驻上海与互联网。
              </p>
      </div>
      </div>
      {/* Main Asymmetric Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl items-start">
      {/* Left Column: Gallery-framed Portrait Card */}
      <div className="lg:col-span-5 flex flex-col gap-space-md lg:sticky lg:top-28">
      <div className="bg-surface-container-lowest p-space-md shadow-md rounded-xl group transition-all duration-300 hover:shadow-xl">
      {/* Museum style artwork mount with delicate shadow */}
      <div className="relative overflow-hidden rounded-lg bg-surface-container aspect-square">
      <img alt="Artistic and thoughtful black and white portrait photograph of a young creative Asian man named Jackson with glasses" className="w-full h-full object-cover grayscale contrast-105 transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" />
      <div className="absolute top-space-sm left-space-sm bg-inverse-surface/85 backdrop-blur-md px-space-xs py-1 rounded">
      <span className="font-label-sm text-label-sm text-surface tracking-wider uppercase">Portrait / 2025</span>
      </div>
      <div className="absolute bottom-space-sm right-space-sm bg-primary-container text-on-primary px-space-sm py-0.5 rounded-full font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-surface animate-ping"></span>
                    在线接洽中
                  </div>
      </div>
      {/* Captions / Narrative */}
      <div className="pt-space-md flex flex-col">
      <div className="flex items-baseline justify-between">
      <span className="font-headline-md text-headline-md text-on-surface">Jackson</span>
      <span className="font-label-md text-label-md text-secondary">Shanghai • CN</span>
      </div>
      <div className="mt-space-xs inline-flex items-center gap-space-xs">
      <span className="bg-secondary-container text-on-secondary-container px-space-xs py-0.5 rounded text-label-sm font-label-sm font-semibold">一般老百姓</span>
      <span className="text-outline-variant text-label-sm">/</span>
      <span className="text-secondary font-label-sm text-label-sm">当代视觉观察者 & 创作者</span>
      </div>
      <p className="font-body-md text-body-md text-secondary mt-space-sm">
                    记录日常褶皱里被忽略的诗性。深居城市，保持敏感、踏实与坦诚。用镜头、色彩与纯粹字句重构生活现场。
                  </p>
      <div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-base text-primary-container">location_on</span>
      <span>静安区常德路工作室</span>
      </div>
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-base text-primary-container">schedule</span>
      <span>GMT+8 10:00 - 20:00</span>
      </div>
      </div>
      </div>
      </div>
      {/* Mini Visual Stat Counter */}
      <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-around text-center">
      <div>
      <div className="font-headline-md text-headline-md text-on-surface font-bold">120k+</div>
      <div className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">小红书互动</div>
      </div>
      <div className="w-px h-8 bg-outline-variant/30"></div>
      <div>
      <div className="font-headline-md text-headline-md text-primary-container font-bold">34</div>
      <div className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">共创展览/项目</div>
      </div>
      <div className="w-px h-8 bg-outline-variant/30"></div>
      <div>
      <div className="font-headline-md text-headline-md text-on-surface font-bold">&lt; 24h</div>
      <div className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">平均回复时长</div>
      </div>
      </div>
      </div>
      {/* Right Column: Interactive Contact Modules & RED Showcase */}
      <div className="lg:col-span-7 flex flex-col gap-space-lg">
      {/* Primary Showcase: RED (小红书) Featured Hero Module */}
      <div className="bg-gradient-to-br from-surface-container-lowest via-surface-container-lowest to-secondary-container/20 p-space-lg rounded-xl shadow-md relative overflow-hidden group">
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary-fixed-dim/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex items-start justify-between">
      <div className="flex items-center gap-space-sm">
      <div className="w-12 h-12 rounded-xl bg-error-container text-error flex items-center justify-center font-bold text-xl shadow-sm">
                      RED
                    </div>
      <div>
      <div className="flex items-center gap-space-xs">
      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">小红书专区</h3>
      <span className="bg-error/10 text-error text-[10px] font-bold px-2 py-0.5 rounded-full">主理阵地</span>
      </div>
      <p className="font-label-md text-label-md text-secondary">日常灵感、摄影笔记与创作絮语首发站</p>
      </div>
      </div>
      <a className="hidden sm:inline-flex items-center gap-1 bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-space-xs rounded-full hover:bg-primary transition-colors shadow-sm" href="https://www.xiaohongshu.com" rel="noopener noreferrer" target="_blank">
      <span>立即关注</span>
      <span className="material-symbols-outlined text-sm">north_east</span>
      </a>
      </div>
      <div className="mt-space-md bg-surface-container-low/70 backdrop-blur-sm p-space-md rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
      <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-inner bg-surface-container">
      <img alt="Jackson RED Profile Avatar" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" />
      </div>
      <div className="flex flex-col">
      <div className="flex items-center gap-space-xs">
      <span className="font-headline-md text-headline-md text-on-surface">Jackson_LifeArt</span>
      <span className="material-symbols-outlined text-primary-container text-base" title="认证创作者">verified</span>
      </div>
      <span className="font-label-sm text-label-sm text-secondary">小红书号：892014792 • 创作标签：#艺术展览 #老百姓日记</span>
      </div>
      </div>
      {/* Mini QR Mock & Action */}
      <div className="flex items-center gap-space-sm bg-surface-container-lowest px-space-sm py-space-xs rounded-lg shadow-sm">
      <div className="w-10 h-10 bg-surface-container-high rounded p-1 flex items-center justify-center">
      {/* Inline SVG QR Icon representation */}
      <svg className="w-full h-full text-on-surface" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm0 4h2v2h-2v-2zm-4-4h2v6h-2v-6zm6-6h2v4h-2v-4zm-4 2h2v2h-2v-2zm-6-6h2v2h-2V6zm2 4h2v2h-2v-2z"></path>
      </svg>
      </div>
      <div className="text-left">
      <div className="font-label-sm text-label-sm font-bold text-on-surface">扫码直达</div>
      <div className="text-[10px] text-secondary">或客户端搜 ID</div>
      </div>
      </div>
      </div>
      {/* Featured Note Pill/Snippet */}
      <div className="mt-space-sm grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs font-label-sm text-label-sm">
      <div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-lg hover:bg-secondary-container/40 transition-colors cursor-pointer">
      <span className="truncate text-on-surface flex items-center gap-1">
      <span className="material-symbols-outlined text-sm text-primary-container">article</span>
                      《在菜市场寻找塞尚的静物光线》
                    </span>
      <span className="text-primary font-bold">2.4k赞</span>
      </div>
      <div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-lg hover:bg-secondary-container/40 transition-colors cursor-pointer">
      <span className="truncate text-on-surface flex items-center gap-1">
      <span className="material-symbols-outlined text-sm text-primary-container">article</span>
                      《一般老百姓的黑白胶片随笔 (Vol.09)》
                    </span>
      <span className="text-primary font-bold">4.1k赞</span>
      </div>
      </div>
      </div>
      {/* Secondary Channels (Horizontal Trio) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
      {/* Email Card */}
      <a className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between" href="mailto:contact@jackson-art.me">
      <div className="flex items-center justify-between">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined text-xl">mail</span>
      </div>
      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-container transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">arrow_outward</span>
      </div>
      <div className="mt-space-md">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">商务与合作邮箱</span>
      <div className="font-body-md text-body-md font-semibold text-on-surface truncate mt-0.5">contact@jackson-art.me</div>
      </div>
      </a>
      {/* WeChat Official Card */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between relative" id="wechatBtn">
      <div className="flex items-center justify-between">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-[#07C160] group-hover:bg-[#07C160] group-hover:text-white transition-colors">
      <span className="material-symbols-outlined text-xl">chat</span>
      </div>
      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">公众号</span>
      </div>
      <div className="mt-space-md">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">微信公众号</span>
      <div className="font-body-md text-body-md font-semibold text-on-surface truncate mt-0.5">Jackson的老百姓档案</div>
      </div>
      </div>
      {/* Instagram Card */}
      <a className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
      <div className="flex items-center justify-between">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary group-hover:bg-inverse-surface group-hover:text-surface transition-colors">
      <span className="material-symbols-outlined text-xl">photo_camera</span>
      </div>
      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-container transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">arrow_outward</span>
      </div>
      <div className="mt-space-md">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">全球影像归档</span>
      <div className="font-body-md text-body-md font-semibold text-on-surface truncate mt-0.5">@jackson.contemporary</div>
      </div>
      </a>
      </div>
      {/* Direct Contact Form Section */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
      <div className="flex items-baseline justify-between mb-space-md">
      <div>
      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">快速留言 / 意向交流</h2>
      <p className="font-body-md text-body-md text-secondary mt-1">请留下您的想法，我将在24小时内亲自查阅并回信。</p>
      </div>
      <span className="hidden sm:inline-block font-label-sm text-label-sm text-outline uppercase tracking-wider">Encrypted Channel</span>
      </div>
      <form className="flex flex-col gap-space-md" id="contactForm" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      {/* Name */}
      <div className="flex flex-col gap-space-xxs">
      <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold" htmlFor="senderName">您的姓名 / 称呼 *</label>
      <input className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline/70 px-space-md py-space-sm rounded-lg font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary-container transition-all" id="senderName" placeholder="例如：林展 / 策展人" required type="text" />
      </div>
      {/* Email */}
      <div className="flex flex-col gap-space-xxs">
      <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold" htmlFor="senderEmail">回信邮箱 *</label>
      <input className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline/70 px-space-md py-space-sm rounded-lg font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary-container transition-all" id="senderEmail" placeholder="name@example.com" required type="email" />
      </div>
      </div>
      {/* Intent selection chips */}
      <div className="flex flex-col gap-space-xxs">
      <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">联络事由 / 合作类别</label>
      <div className="flex flex-wrap gap-space-xs" id="intentChips">
      <button className="intent-btn active bg-primary-container text-on-primary px-space-md py-1.5 rounded-full font-label-sm text-label-sm transition-all" type="button">当代艺术共创</button>
      <button className="intent-btn bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container px-space-md py-1.5 rounded-full font-label-sm text-label-sm transition-all" type="button">商业影像视觉</button>
      <button className="intent-btn bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container px-space-md py-1.5 rounded-full font-label-sm text-label-sm transition-all" type="button">展览与沙龙受邀</button>
      <button className="intent-btn bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container px-space-md py-1.5 rounded-full font-label-sm text-label-sm transition-all" type="button">小红书品牌联动</button>
      <button className="intent-btn bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container px-space-md py-1.5 rounded-full font-label-sm text-label-sm transition-all" type="button">随笔与闲聊</button>
      </div>
      </div>
      {/* Message content */}
      <div className="flex flex-col gap-space-xxs">
      <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold" htmlFor="messageBody">留言详情 *</label>
      <textarea className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline/70 p-space-md rounded-lg font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary-container transition-all resize-none" id="messageBody" placeholder="简述您的项目构想、展览安排或想探讨的主题..." required rows="4"></textarea>
      </div>
      {/* Submit action */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-space-xs gap-space-sm">
      <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-base text-primary">verified_user</span>
      <span>隐私承诺：信息仅作为直联用途，绝不向第三方透露</span>
      </div>
      <button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary px-space-xl py-space-sm rounded-lg font-label-md text-label-md hover:bg-primary transition-all shadow-md active:scale-98" id="submitBtn" type="submit">
      <span>投递信件</span>
      <span className="material-symbols-outlined text-base">send</span>
      </button>
      </div>
      <div className="hidden bg-secondary-container text-on-secondary-container p-space-md rounded-lg text-center font-label-md text-label-md transition-all" id="successPrompt">
                    ✨ 留言已送达 Jackson 的私信收件箱。感谢您的真诚，期待与您对话！
                  </div>
      </form>
      </div>
      </div>
      </div>
      </div>

      </div>
    </>
  )
}
