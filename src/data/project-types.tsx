import {
  FileText,
  BookOpen,
  NotebookPen,
  Languages,
  FileDown,
  SpellCheck,
  FileSignature,
  MoreHorizontal,
} from 'lucide-react';

import type { ProjectTypeCard } from './project-type';

export const projectTypeCards: ProjectTypeCard[] = [
  {
    type: 'jurnal',
    title: 'Jurnal',
    description: 'Penulisan jurnal refleksi harian atau laporan kegiatan',
    icon: <NotebookPen className='w-10 h-10 text-primary' />,
  },
  {
    type: 'artikel',
    title: 'Artikel',
    description: 'Penulisan artikel ilmiah atau artikel umum sesuai kebutuhan',
    icon: <BookOpen className='w-10 h-10 text-primary' />,
  },
  {
    type: 'parafrase',
    title: 'Parafrase',
    description: 'Penulisan ulang teks dengan gaya dan struktur kalimat yang berbeda',
    icon: <SpellCheck className='w-10 h-10 text-primary' />,
  },
  {
    type: 'essay',
    title: 'Essay',
    description: 'Penulisan esai akademik atau esai bebas sesuai tema',
    icon: <FileSignature className='w-10 h-10 text-primary' />,
  },
  {
    type: 'resume',
    title: 'Resume',
    description: 'Pembuatan resume atau ringkasan dokumen yang rapi',
    icon: <FileText className='w-10 h-10 text-primary' />,
  },
  {
    type: 'translate',
    title: 'Translate',
    description: 'Penerjemahan tugas dari/ke Bahasa Inggris dengan akurat',
    icon: <Languages className='w-10 h-10 text-primary' />,
  },
  {
    type: 'cv',
    title: 'CV',
    description: 'Pembuatan CV rapi dan menarik untuk kebutuhan akademik dan kerja',
    icon: <FileDown className='w-10 h-10 text-primary' />,
  },
  {
    type: 'lainnya',
    title: 'Lainnya',
    description: 'Jenis tugas lain yang tidak terdaftar di atas',
    icon: <MoreHorizontal className='w-10 h-10 text-primary' />,
  },
];
