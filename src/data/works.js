export const workFilters = [
  { id: 'all', label: '全部' },
  { id: 'doc', label: '纪实摄影' },
  { id: 'art', label: '视觉艺术' },
  { id: 'concept', label: '概念设计' },
]

export const works = [
  {
    id: '01',
    category: 'doc',
    tag: 'DOCUMENTARY',
    title: '市井微澜',
    meta: '2024 · 35mm 胶片 / 艺术微喷',
    description:
      '城市急促演进中的细碎波纹。记录老城旧巷深处烟火与水汽交织的无声片刻，留存普通个体与空间搏动的生活原色。',
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    offset: '',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80',
    alt: '雨巷纪实摄影，老城窄巷与灯火',
  },
  {
    id: '02',
    category: 'art',
    tag: 'CANVAS ART',
    title: '蓝色构想',
    meta: '2024 · 纯丙烯综合媒介',
    description:
      '现代主义抽象几何色块的严苛研究，通过克莱因蓝与留白的比例交锋，探求视觉张力与沉思静默的极限平衡点。',
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    offset: 'md:mt-space-2xl',
    image:
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=80',
    alt: '克莱因蓝抽象几何绘画',
  },
  {
    id: '03',
    category: 'doc',
    tag: 'INTERVIEW',
    title: '老百姓的肖像日志',
    meta: '2023 · 中画幅数码 / 访谈录音',
    description:
      '历时18个月的街头人物图景档案。以真实无修饰的目光，重塑普通劳动者的容颜尊严与日常叙事厚度。',
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    offset: '',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    alt: '街头裁缝肖像纪实',
  },
  {
    id: '04',
    category: 'concept',
    tag: 'SPATIAL',
    title: '空间切片',
    meta: '2024 · 3D空间结构 / 光影建模',
    description:
      '建筑体量与漫射自然光的数学重构。剥离建筑物的功能附庸，只保留纯粹的混凝土截面与时空光切。',
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    offset: 'md:-mt-space-lg',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80',
    alt: '混凝土空间与光影切片',
  },
  {
    id: '05',
    category: 'art',
    tag: 'INSTALLATION',
    title: '无声之物',
    meta: '2023 · 当代装置 / 现成品重塑',
    description:
      '剥离日用品的使用预设，将其置入空寂展台。器物的磨损、锈迹与静默在此被视作承载人类生活时间的化石。',
    aspect: 'aspect-[1/1]',
    col: 'md:col-span-6',
    offset: '',
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
    alt: '静物装置：铜壶与石台',
  },
  {
    id: '06',
    category: 'concept',
    tag: 'INTERACTIVE',
    title: '数码日常',
    meta: '2025 · 交互代码 / 动态屏幕系统',
    description:
      '探讨移动设备与人类知觉系统的共生。通过生成式交互设计与极简字体排印，反思屏幕界面对日常生活心理的重塑。',
    aspect: 'aspect-[1/1]',
    col: 'md:col-span-6',
    offset: '',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80',
    alt: '极简数字界面实验',
  },
]
