import {
  FileText,
  BookOpen,
  NotebookPen,
  Languages,
  FileDown,
  SpellCheck,
  FileSignature,
} from 'lucide-react';

import type { ProjectTypeCard } from './project-type';

export const projectTypeCards: ProjectTypeCard[] = [
  {
    type: 'cv',
    title: 'CV Mahasiswa',
    description: 'Pembuatan CV rapi dan menarik untuk kebutuhan PKKMB dan beasiswa',
    icon: <FileText className='w-10 h-10 text-primary' />,
  },
  {
    type: 'motivational-essay',
    title: 'Esai / Resume',
    description: 'Penulisan esai motivasi atau rangkuman materi PKKMB',
    icon: <BookOpen className='w-10 h-10 text-primary' />,
  },
  {
    type: 'reflective-journal',
    title: 'Jurnal',
    description: 'Penulisan jurnal refleksi harian atau laporan kegiatan',
    icon: <NotebookPen className='w-10 h-10 text-primary' />,
  },
  {
    type: 'translation',
    title: 'Terjemahan Tugas',
    description: 'Penerjemahan tugas dari/ke Bahasa Inggris dengan akurat',
    icon: <Languages className='w-10 h-10 text-primary' />,
  },
  {
    type: 'file-conversion',
    title: 'Konversi File',
    description: 'Mengubah tugas ke format PDF, Word, atau gambar sesuai kebutuhan',
    icon: <FileDown className='w-10 h-10 text-primary' />,
  },
  {
    type: 'proofreading',
    title: 'Koreksi EYD',
    description: 'Pemeriksaan tata bahasa, ejaan, dan struktur kalimat',
    icon: <SpellCheck className='w-10 h-10 text-primary' />,
  },
  {
    type: 'formal-writing',
    title: 'Penulisan Formal',
    description: 'Penyusunan kalimat formal dan akademik sesuai standar',
    icon: <FileSignature className='w-10 h-10 text-primary' />,
  },
];
