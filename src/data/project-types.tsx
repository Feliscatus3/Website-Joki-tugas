import type { ProjectTypeCard } from './project-type';

import {
  FileText,
  BookOpen,
  NotebookPen,
  Languages,
  FileDown,
  SpellCheck,
  FileType2,
} from 'lucide-react';

export type ProjectTypeCard = {
  type: string;
  title: string;
  description: string;
  icon: JSX.Element;
};

export const projectTypeCards: ProjectTypeCard[] = [
  {
    type: 'cv',
    title: 'Curriculum Vitae (CV)',
    description: 'Pembuatan CV mahasiswa baru yang rapi dan menarik',
    icon: <FileText className='w-10 h-10 text-primary' />,
  },
  {
    type: 'essay',
    title: 'Esai Motivasi / Resume Materi',
    description: 'Penulisan esai motivasi atau ringkasan materi PKKMB',
    icon: <BookOpen className='w-10 h-10 text-primary' />,
  },
  {
    type: 'journal',
    title: 'Jurnal Reflektif / Laporan Kegiatan',
    description: 'Penulisan jurnal refleksi atau laporan kegiatan harian',
    icon: <NotebookPen className='w-10 h-10 text-primary' />,
  },
  {
    type: 'translation',
    title: 'Terjemahan Tugas',
    description: 'Menerjemahkan tugas kuliah dari/ke Bahasa Inggris secara akurat',
    icon: <Languages className='w-10 h-10 text-primary' />,
  },
  {
    type: 'conversion',
    title: 'Konversi File (PDF / Word / Foto)',
    description: 'Mengubah tugas ke format pengumpulan yang diinginkan',
    icon: <FileDown className='w-10 h-10 text-primary' />,
  },
  {
    type: 'proofread',
    title: 'Koreksi EYD & Tata Bahasa',
    description: 'Pemeriksaan ejaan, tanda baca, dan tata bahasa akademik',
    icon: <SpellCheck className='w-10 h-10 text-primary' />,
  },
  {
    type: 'formal-writing',
    title: 'Penulisan Formal',
    description: 'Menyusun kalimat akademik dan bahasa formal sesuai standar',
    icon: <FileType2 className='w-10 h-10 text-primary' />,
  },
];

