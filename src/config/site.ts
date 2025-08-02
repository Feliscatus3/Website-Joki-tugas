const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jokigofast.vercel.app';

export const siteConfig = {
  title: 'JokiGoFast - Jasa Joki Tugas',
  description:
    'Jasa pengerjaan tugas pemrograman yang berkualitas tinggi dengan harga terjangkau. Solusi cepat dan hasil terbaik untuk semua kebutuhan tugas Anda.',
  keyword: [
    'joki tugas',
    'jasa tugas',
    'bantuan tugas',
    'tugas kuliah',
    'proyek kuliah',
    'jasa ospek',
    'joki tugas kuliah ospek',
  ],
  url: SITE_URL,
  openGraph: `${SITE_URL}/og.jpg`,
  locale: 'id_ID',
  type: 'website',
  themeColor: '#4f46e5',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JokiGoFast - Jasa Joki Tugas',
    description:
      'Jasa tugas yang berkualitas tinggi dengan harga terjangkau.',
    creator: '@side__id',
    images: [`${SITE_URL}/og.jpg`],
  },
  verification: {
    google:
      'google-site-verification=KlSMf5OruHZiqYYqzKeOUZVI6JmgxTg8uFr7FMxz0t0',
    yandex: '21570e3f60f3864b',
    other: {
      'msvalidate.01': 'D020E6CFC377DF8AE9FC6C64551CF068',
    },
  },
  links: {
    facebook: '#',
    discord: '#',
    instagram: 'https://www.instagram.com/jokigofast/',
    github: '#',
    whatsapp: 'https://wa.me/+62',
    telegram: '#',
    shopee: '#',
  },
};
