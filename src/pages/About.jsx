import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function About() {
  useDocumentTitle("关于我 / Jackson")

  return (
    <>
      <div className="flex flex-col w-full">
      {/* Top Curatorial Lead & Title Area */}
      <section className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop pt-space-xl pb-space-2xl">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-2xl">
      <div className="max-w-2xl">
      <div className="inline-flex items-center gap-space-xs text-primary-container font-label-sm text-label-sm uppercase tracking-widest mb-space-sm">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
      <span>CURATORIAL ESSAY / 策展自述</span>
      </div>
      <h1 className="font-display-xl text-display-xl tracking-tight text-on-surface">
                关于我<span className="text-primary-container">.</span>
      </h1>
      <p className="font-headline-md text-headline-md text-secondary mt-space-xs font-light">
                一般老百姓 (Everyday Individual)
              </p>
      </div>
      <div className="flex flex-col items-start lg:items-end font-label-sm text-label-sm text-outline gap-space-xxs">
      <span>ARCHIVE REF: NO. 2025-JK</span>
      <span>MEDIUM: HUMAN EXPERIENCE / DIGITAL VISUALS</span>
      <span>LOCATION: GUANGZHOU & SHANGHAI</span>
      </div>
      </div>
      {/* Monumental Quote Section */}
      <div className="relative bg-surface-container-lowest p-space-xl md:p-space-2xl rounded-xl shadow-sm overflow-hidden">
      <div className="absolute -right-12 -top-12 opacity-[0.03] select-none pointer-events-none">
      <span className="font-display-xl text-[200px] leading-none font-bold">01</span>
      </div>
      <div className="max-w-4xl relative z-10">
      <span className="font-label-md text-label-md text-primary-container tracking-widest uppercase block mb-space-md">
                / PROLOGUE
              </span>
      <blockquote className="font-headline-lg text-headline-lg font-medium text-on-surface leading-tight tracking-tight">
                “生活在市井中，思考在画幅外。一个普通人<span className="text-secondary font-normal">（一般老百姓）</span>的眼睛与记录。”
              </blockquote>
      <p className="font-body-lg text-body-lg text-secondary mt-space-lg max-w-2xl">
                脱离崇高叙事的修辞迷障，回到早点铺的蒸汽、天桥上的风以及屏幕冷光下的指尖。艺术并非特权的标尺，而是老百姓确认自身存在时的灵光闪现。
              </p>
      </div>
      </div>
      </section>
      {/* Split Portrait & Core Identity Banner */}
      <section className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
      {/* Portrait Card */}
      <div className="lg:col-span-5 relative group">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-container-high shadow-md">
      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Monochrome close-up portrait of a thoughtful contemporary male creator looking slightly off-camera in natural morning window light, high contrast art gallery style with deep crisp shadows and pure highlights, 35mm documentary aesthetic" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80" />
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent"></div>
      <div className="absolute bottom-space-lg left-space-lg text-inverse-on-surface">
      <span className="font-label-sm text-label-sm uppercase tracking-widest opacity-80">FIELD OBSERVATION</span>
      <h3 className="font-headline-md text-headline-md text-white mt-space-xxs">JACKSON / 贾克森</h3>
      </div>
      </div>
      {/* Offset Accent Tag */}
      <div className="absolute -bottom-space-md -right-space-sm bg-primary-container text-on-primary px-space-md py-space-xs rounded-lg shadow-md font-label-sm text-label-sm uppercase tracking-widest hidden sm:block">
                NOT A PROPHET. JUST A WITNESS.
              </div>
      </div>
      {/* Quick Metrics & Narrative Contrast */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-space-lg">
      <div className="flex items-center gap-space-sm">
      <span className="font-label-md text-label-md text-primary font-semibold">IDENTITY DOSSIER</span>
      <span className="h-px bg-surface-variant flex-1"></span>
      </div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
                拒绝被宏大观念绑架，<br />
      <span className="text-primary-container">把镜头沉入地表十厘米。</span>
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                外界习惯用“视觉艺术家”或“界面架构者”等华丽词藻进行职业定性，但我更习惯在派出所表格或邻里闲谈里写下“自由职业”或干脆自认“一般老百姓”。
                这种身份认同并非自谦，而是一种审慎的距离感：它让我永远保留作为街头行人的好奇心，以及随时走入嘈杂菜市场淘洗美感的自由。
              </p>
      {/* Gallery Metric Panels */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md pt-space-sm">
      <div className="bg-surface-container-low p-space-md rounded-lg">
      <span className="font-label-sm text-label-sm text-outline block mb-space-xxs">FIELD ESSAYS</span>
      <span className="font-headline-md text-headline-md text-on-surface font-semibold">140+</span>
      <span className="font-label-sm text-label-sm text-secondary block mt-space-xxs">街头日常切片</span>
      </div>
      <div className="bg-surface-container-low p-space-md rounded-lg">
      <span className="font-label-sm text-label-sm text-outline block mb-space-xxs">CANVAS / UI</span>
      <span className="font-headline-md text-headline-md text-on-surface font-semibold">32</span>
      <span className="font-label-sm text-label-sm text-secondary block mt-space-xxs">独立视觉系统</span>
      </div>
      <div className="bg-surface-container-low p-space-md rounded-lg col-span-2 sm:col-span-1">
      <span className="font-label-sm text-label-sm text-outline block mb-space-xxs">LIVING YEARS</span>
      <span className="font-headline-md text-headline-md text-primary-container font-semibold">10+</span>
      <span className="font-label-sm text-label-sm text-secondary block mt-space-xxs">城市行者阅历</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Curatorial Essays: 01 & 02 */}
      <section className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-space-3xl">
      <div className="space-y-space-3xl">
      {/* Chapter 01: 真实与市井 */}
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
      <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-space-sm">
      <div className="flex items-center gap-space-xs font-label-md text-label-md text-primary-container font-medium">
      <span>CHAPTER</span>
      <span className="px-space-xs py-0.5 bg-secondary-container text-on-secondary-container rounded">01</span>
      </div>
      <h3 className="font-headline-lg text-headline-lg text-on-surface">
                  真实与市井
                </h3>
      <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                  AUTHENTICITY & CIVIC TEXTURE
                </p>
      </div>
      <div className="lg:col-span-8 space-y-space-lg">
      <div className="p-space-xl bg-surface-container-lowest rounded-xl shadow-sm space-y-space-md">
      <h4 className="font-headline-md text-headline-md text-on-surface">
                    平地起的烟火，比悬空的白盒子更沉重
                  </h4>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    很多人问我，为何一个热衷极简主义与当代抽象构图的人，总把镜头对着菜市口滴水的生鲜案板、老旧小区的防盗网铁锈，或是晚高峰地铁里疲惫而倔强的眼睛？
                  </p>
      <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    答案极其简单：因为我是他们之中的一员。
                    “一般老百姓”不是一个谦词，而是我创作全部血肉的供养源。没有清晨六点煎饼摊前腾起的热气，没有跨越几个城区挤压在车厢里的沉闷叹息，那些在电脑屏幕前调配出的克莱因蓝与冷峻网格，就会沦为毫无温度的无病呻吟。
                  </p>
      <div className="pt-space-sm flex flex-col sm:flex-row gap-space-md">
      <div className="flex-1 bg-surface-container-low p-space-md rounded-lg">
      <span className="font-label-sm text-label-sm text-primary-container block font-medium">原则一 / GROUNDED</span>
      <p className="font-body-md text-body-md text-on-surface mt-space-xs">
                        不站在虚构的高处俯视生活，与被记录的客体保持同一视平线。
                      </p>
      </div>
      <div className="flex-1 bg-surface-container-low p-space-md rounded-lg">
      <span className="font-label-sm text-label-sm text-primary-container block font-medium">原则二 / TACTILE</span>
      <p className="font-body-md text-body-md text-on-surface mt-space-xs">
                        记录带有磨损痕迹的日常物，尊重每一个粗糙而真实的细节。
                      </p>
      </div>
      </div>
      </div>
      {/* Visual Narrative Inset */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-surface-container shadow-sm">
      <img className="w-full h-full object-cover" alt="Black and white street photography shot of a bustling morning wet market, soft cinematic natural mist, elderly vendor arranging crisp greens, documentary realism, clean framing" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80" />
      </div>
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-surface-container shadow-sm">
      <img className="w-full h-full object-cover" alt="Close up architectural detail of vintage residential windows with green foliage plants hanging over iron grilles, late afternoon warm shadow contrast, editorial minimalism" src="https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1200&q=80" />
      </div>
      </div>
      </div>
      </article>
      {/* Chapter 02: 视觉实践与哲学 */}
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start pt-space-xl">
      <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-space-sm">
      <div className="flex items-center gap-space-xs font-label-md text-label-md text-primary-container font-medium">
      <span>CHAPTER</span>
      <span className="px-space-xs py-0.5 bg-secondary-container text-on-secondary-container rounded">02</span>
      </div>
      <h3 className="font-headline-lg text-headline-lg text-on-surface">
                  视觉实践与哲学
                </h3>
      <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                  PRAXIS & TRANSCENDENCE
                </p>
      </div>
      <div className="lg:col-span-8 space-y-space-lg">
      <div className="p-space-xl bg-surface-container-lowest rounded-xl shadow-sm space-y-space-md">
      <h4 className="font-headline-md text-headline-md text-on-surface">
                    用严肃的画廊语言，为无名之辈作注
                  </h4>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    坚持画廊级的艺术排版与当代视觉准则，并非为了标榜格调，而是为了反向赋予日常物应有的庄重感。
                  </p>
      <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    当我们将一块生锈的路牌、一次无目的的黄昏漫游，用瑞士网格与克莱因蓝的精确度重新装裱时，我们实际上是在行使某种对抗遗忘的抵抗权利。
                    在这个算法廉价投喂情绪的时代，克制、冷静而深沉的黑白对比与大面积留白，提供了一处难得的静默呼吸舱。
                  </p>
      {/* Curatorial Vector Chart Accent */}
      <div className="my-space-md p-space-lg bg-surface-container-high rounded-xl">
      <div className="flex items-center justify-between mb-space-sm font-label-sm text-label-sm text-on-surface-variant">
      <span>OBSERVATIONAL SPECTRUM / 观察光谱分配</span>
      <span className="text-primary-container font-medium">100% RAW REALITY</span>
      </div>
      <div className="w-full h-3 bg-surface-container-lowest rounded-full overflow-hidden flex gap-1 p-0.5">
      <div className="h-full bg-primary-container rounded-full" style={{width: '45%'}} title="市井纪实 45%"></div>
      <div className="h-full bg-secondary rounded-full" style={{width: '30%'}} title="网格重构 30%"></div>
      <div className="h-full bg-outline rounded-full" style={{width: '25%'}} title="文本注记 25%"></div>
      </div>
      <div className="flex justify-between items-center text-outline font-label-sm text-label-sm mt-space-xs">
      <span>45% 市井切片</span>
      <span>30% 架构重组</span>
      <span>25% 哲学注记</span>
      </div>
      </div>
      </div>
      </div>
      </article>
      </div>
      </section>
      {/* Chapter 03: 极简履历与展览日志 (Timeline) */}
      <section className="w-full bg-surface-container-lowest py-space-3xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-sm">
      <div>
      <div className="flex items-center gap-space-xs font-label-md text-label-md text-primary-container font-medium mb-space-xs">
      <span>CHAPTER</span>
      <span className="px-space-xs py-0.5 bg-secondary-container text-on-secondary-container rounded">03</span>
      </div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  轨迹与日志 (2021 — 2025)
                </h2>
      </div>
      <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                CHRONOLOGICAL DIARY & VISUAL FOOTPRINTS
              </p>
      </div>
      {/* Museum Log Grid */}
      <div className="space-y-space-md">
      {/* Timeline Item 2025 */}
      <div className="group p-space-lg bg-surface hover:bg-surface-container-low transition-colors duration-200 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
      <div className="flex items-start md:items-center gap-space-lg">
      <span className="font-headline-md text-headline-md text-primary-container font-bold w-20">2025</span>
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                      《街巷回声：普通人的当代视觉档案》
                    </h3>
      <p className="font-body-md text-body-md text-secondary mt-space-xxs">
                      个人摄影与界面实验独立出版物 / 实体册页设计与线上流媒体策展
                    </p>
      </div>
      </div>
      <div className="flex items-center gap-space-md font-label-sm text-label-sm text-outline self-end md:self-center">
      <span className="px-space-xs py-1 bg-surface-container-highest rounded text-on-surface-variant uppercase">DOCUMENTARY</span>
      <span>SHANGHAI</span>
      </div>
      </div>
      {/* Timeline Item 2024 */}
      <div className="group p-space-lg bg-surface hover:bg-surface-container-low transition-colors duration-200 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
      <div className="flex items-start md:items-center gap-space-lg">
      <span className="font-headline-md text-headline-md text-on-surface font-bold w-20">2024</span>
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                      《生鲜案板与冷色网格》微型摄影个展
                    </h3>
      <p className="font-body-md text-body-md text-secondary mt-space-xxs">
                      聚焦广州老城区菜市场工匠手势与光影秩序，探索市井劳作的几何纯度
                    </p>
      </div>
      </div>
      <div className="flex items-center gap-space-md font-label-sm text-label-sm text-outline self-end md:self-center">
      <span className="px-space-xs py-1 bg-surface-container-highest rounded text-on-surface-variant uppercase">SOLO EXHIBIT</span>
      <span>GUANGZHOU</span>
      </div>
      </div>
      {/* Timeline Item 2023 */}
      <div className="group p-space-lg bg-surface hover:bg-surface-container-low transition-colors duration-200 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
      <div className="flex items-start md:items-center gap-space-lg">
      <span className="font-headline-md text-headline-md text-on-surface font-bold w-20">2023</span>
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                      开源设计系统「平凡体 (EVERYDAY UI)」
                    </h3>
      <p className="font-body-md text-body-md text-secondary mt-space-xxs">
                      面向独立创作者的纯文本高可读性框架，推崇克制审美与零冗余信息交互
                    </p>
      </div>
      </div>
      <div className="flex items-center gap-space-md font-label-sm text-label-sm text-outline self-end md:self-center">
      <span className="px-space-xs py-1 bg-surface-container-highest rounded text-on-surface-variant uppercase">OPEN SYSTEM</span>
      <span>DIGITAL</span>
      </div>
      </div>
      {/* Timeline Item 2021-2022 */}
      <div className="group p-space-lg bg-surface hover:bg-surface-container-low transition-colors duration-200 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
      <div className="flex items-start md:items-center gap-space-lg">
      <span className="font-headline-md text-headline-md text-secondary font-bold w-20">21-22</span>
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                      《夜巡者：无名街道的光化学反应》
                    </h3>
      <p className="font-body-md text-body-md text-secondary mt-space-xxs">
                      连续365天深夜散步摄影实验，建立近千张匿名夜晚城市档案
                    </p>
      </div>
      </div>
      <div className="flex items-center gap-space-md font-label-sm text-label-sm text-outline self-end md:self-center">
      <span className="px-space-xs py-1 bg-surface-container-highest rounded text-on-surface-variant uppercase">ARCHIVE</span>
      <span>MULTIPLE</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive Colloquy & Gallery Footer Note */}
      <section className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-space-3xl">
      <div className="bg-surface-container-low rounded-xl p-space-xl md:p-space-2xl flex flex-col md:flex-row items-center justify-between gap-space-xl">
      <div className="space-y-space-xs max-w-xl">
      <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold">
                NEXT STEP / 漫游邀请
              </span>
      <h3 className="font-headline-lg text-headline-lg text-on-surface">
                渴望与每一个真实的灵魂相遇
              </h3>
      <p className="font-body-md text-body-md text-secondary">
                无论是关于某张相片的交流、艺术展览的合作邀约，亦或是普通人在生活裂隙里的闲聊，我都乐意倾听。
              </p>
      </div>
      <div className="flex flex-wrap items-center gap-space-md">
      <Link to="/works" className="px-space-lg py-space-md bg-inverse-surface text-inverse-on-surface rounded-lg font-label-md text-label-md tracking-wider hover:bg-primary transition-colors shadow-sm inline-flex items-center gap-space-xs">
      <span>阅览作品集</span>
      <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
      <Link to="/contact" className="px-space-lg py-space-md bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md tracking-wider hover:text-primary transition-colors shadow-sm inline-flex items-center gap-space-xs">
      <span>与我联络</span>
      <span className="material-symbols-outlined text-sm">mail</span>
      </Link>
      </div>
      </div>
      </section>
      </div>
    </>
  )
}
