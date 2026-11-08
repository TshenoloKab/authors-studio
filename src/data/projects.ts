export type ProjectVariant =
  | 'traxena'
  | 'kgetsi'
  | 'lenclean'
  | 'naledi'
  | 'amara'
  | 'setho'
  | 'thato'
  | 'syntrix'

export type Project = {
  slug: string
  name: string
  category: string
  description: string
  variant: ProjectVariant
  conceptLabel?: string
  href?: string
  previewImage?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'traxena-digital',
    name: 'Traxena Digital Website',
    category: 'Corporate Website',
    description: 'Our own digital platform, showcasing our brand, services and digital capabilities.',
    variant: 'traxena',
    conceptLabel: 'Website Concept',
    href: '/',
    featured: true,
    previewImage: '/work/placeholders/traxena-digital.svg',
  },
  {
    slug: 'kgetsi-style',
    name: 'Kgetsi Style',
    category: 'Fashion & E-commerce',
    description: 'A modern online shopping experience for a fashion and accessories brand.',
    variant: 'kgetsi',
    conceptLabel: 'Website Concept',
    previewImage: '/work/placeholders/kgetsi-style.svg',
  },
  {
    slug: 'lenclean',
    name: 'LenClean',
    category: 'Cleaning Services',
    description: 'A professional online presence for a cleaning business, showcasing its services and making enquiries easier.',
    variant: 'lenclean',
    conceptLabel: 'Website Concept',
    previewImage: '/work/placeholders/lenclean.svg',
  },
  {
    slug: 'naledi-motsamai',
    name: 'Naledi Motsamai',
    category: 'Author & Speaker',
    description: 'A personal brand website for an author and motivational speaker, featuring books, speaking engagements and event enquiries.',
    variant: 'naledi',
    conceptLabel: 'Website Concept',
    previewImage: '/work/placeholders/naledi-motsamai.svg',
  },
  {
    slug: 'amara-dube',
    name: 'Amara Dube',
    category: 'Corporate Training',
    description: 'A professional platform showcasing corporate training programmes, workshops and facilitator services.',
    variant: 'amara',
    conceptLabel: 'Website Concept',
    previewImage: '/work/placeholders/amara-dube.svg',
  },
  {
    slug: 'setho-kitchen',
    name: 'Setho Kitchen',
    category: 'Food & Catering',
    description: 'A food business website showcasing Botswana traditional cuisine, catering services and food offerings.',
    variant: 'setho',
    conceptLabel: 'Website Concept',
    previewImage: '/work/placeholders/setho-kitchen.svg',
  },
  {
    slug: 'thato-kgosi',
    name: 'Thato Kgosi',
    category: 'Consulting & Coaching',
    description: 'A professional personal brand website showcasing consulting, coaching and advisory services.',
    variant: 'thato',
    conceptLabel: 'Website Concept',
    previewImage: '/work/placeholders/thato-kgosi.svg',
  },
  {
    slug: 'syntrix-ai',
    name: 'Syntrix AI',
    category: 'Technology & SaaS',
    description: 'A modern technology product concept featuring an AI-powered productivity platform and dashboard.',
    variant: 'syntrix',
    conceptLabel: 'Product Concept',
    previewImage: '/work/placeholders/syntrix-ai.svg',
  },
]
