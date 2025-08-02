import {
  FileText,
  BookOpen,
  NotebookPen,
  Languages,
  FileDown,
  SpellCheck,
  FileType2,
} from 'lucide-react';
import type { ProjectItem } from './project-item';

export const projectItems: ProjectItem[] = [
  {
    title: 'CV Mahasiswa Baru',
    description:
      'CV yang rapi, profesional, dan menarik untuk kebutuhan pengenalan diri saat PKKMB.',
    icon: <FileText className='text-primary w-8 h-8' />,
  },
  {
    title: 'Esai Motivasi',
    description:
      'Esai dengan bahasa akademik, sesuai tema, dan mencerminkan semangat mengikuti kegiatan.',
    icon: <BookOpen className='text-primary w-8 h-8' />,
  },
  {
    title: 'Jurnal Reflektif Harian',
    description:
      'Tulisan refleksi berdasarkan kegiatan sehari-hari selama masa orientasi kampus.',
    icon: <NotebookPen className='text-primary w-8 h-8' />,
  },
  {
    title: 'Terjemahan Bahasa Inggris',
    description:
      'Menerjemahkan tugas kuliah atau materi PKKMB dari/ke Bahasa Inggris secara akurat dan alami.',
    icon: <Languages className='text-primary w-8 h-8' />,
  },
  {
    title: 'Konversi File Tugas',
    description:
      'Mengubah format file ke PDF, Word, atau gambar sesuai permintaan pengumpulan.',
    icon: <FileDown className='text-primary w-8 h-8' />,
  },
  {
    title: 'Koreksi EYD & Tata Bahasa',
    description:
      'Pemeriksaan dan perbaikan ejaan, tanda baca, serta gaya bahasa formal yang tepat.',
    icon: <SpellCheck className='text-primary w-8 h-8' />,
  },
  {
    title: 'Penulisan Bahasa Formal',
    description:
      'Tugas ditulis dengan bahasa formal dan akademik, cocok untuk tugas pengantar atau laporan.',
    icon: <FileType2 className='text-primary w-8 h-8' />,
  },
];
