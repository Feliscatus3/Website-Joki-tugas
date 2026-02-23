import {
  FileText,
  BookOpen,
  NotebookPen,
  Languages,
  FileDown,
  SpellCheck,
  FileSignature,
} from 'lucide-react';

import type { ProjectItem } from './project-item';

export const projectItems: ProjectItem[] = [
  {
    title: 'Jurnal',
    description:
      'Penulisan jurnal refleksi harian atau laporan kegiatan dengan format yang rapi.',
    icon: <NotebookPen className='text-primary w-8 h-8' />,
  },
  {
    title: 'Artikel',
    description:
      'Penulisan artikel ilmiah atau artikel umum sesuai kebutuhan akademik.',
    icon: <BookOpen className='text-primary w-8 h-8' />,
  },
  {
    title: 'Parafrase',
    description:
      'Penulisan ulang teks dengan gaya dan struktur kalimat yang berbeda namun tetap mempertahankan makna.',
    icon: <SpellCheck className='text-primary w-8 h-8' />,
  },
  {
    title: 'Essay',
    description:
      'Penulisan esai akademik atau esai bebas sesuai tema yang diinginkan.',
    icon: <FileSignature className='text-primary w-8 h-8' />,
  },
  {
    title: 'Resume',
    description:
      'Pembuatan resume atau ringkasan dokumen yang rapi dan profesional.',
    icon: <FileText className='text-primary w-8 h-8' />,
  },
  {
    title: 'Translate',
    description:
      'Penerjemahan tugas dari/ke Bahasa Inggris secara akurat dan alami.',
    icon: <Languages className='text-primary w-8 h-8' />,
  },
  {
    title: 'CV',
    description:
      'Pembuatan CV rapi dan menarik untuk kebutuhan akademik dan melamar kerja.',
    icon: <FileDown className='text-primary w-8 h-8' />,
  },
];
