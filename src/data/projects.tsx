import React from 'react';
import {
  FileText,
  Languages,
  Pencil,
  ClipboardCheck,
  BookOpen,
  PenTool,
  Text,
  Repeat,
} from 'lucide-react';
import type { Project } from './project';

export const projects: Project[] = [
  {
    id: 'cv',
    title: 'Pembuatan CV & Portofolio',
    description:
      'Desain CV modern, ATS-friendly, dan portofolio profesional untuk lamaran kerja atau beasiswa.',
    icon: <ClipboardCheck className='h-5 w-5 text-blue-500' />,
    technologies: ['Canva', 'Figma', 'Word', 'PDF'],
    features: [
      'Desain formal & kreatif',
      'Bisa pilih template atau custom',
      'Optimasi untuk ATS',
      'Format PDF & Word',
    ],
    price: 'Mulai dari Rp 20.000',
    category: 'Dokumen',
    popular: true,
  },
  {
    id: 'essay',
    title: 'Esai Motivasi / Beasiswa',
    description:
      'Penulisan esai yang kuat, personal, dan menyentuh untuk kebutuhan beasiswa, organisasi, dan lomba.',
    icon: <PenTool className='h-5 w-5 text-rose-500' />,
    technologies: ['Google Docs', 'Grammarly', 'ChatGPT'],
    features: [
      'Gaya bahasa formal & naratif',
      'Bebas plagiarisme',
      'Revisi sampai cocok',
      'Terjemahan bilingual jika dibutuhkan',
    ],
    price: 'Mulai dari Rp 30.000',
    category: 'Akademik',
  },
  {
    id: 'jurnal-reflektif',
    title: 'Jurnal Reflektif / PKKMB',
    description:
      'Jurnal kegiatan yang ringkas, personal, dan sesuai pedoman kampus untuk PKKMB, KKN, PPL, dan lainnya.',
    icon: <BookOpen className='h-5 w-5 text-amber-500' />,
    technologies: ['Word', 'PDF', 'Notion'],
    features: [
      'Bahasa sesuai gaya pribadi',
      'Sesuai struktur & penilaian',
      'Dapat berbentuk narasi harian atau mingguan',
      'Bebas plagiarisme',
    ],
    price: 'Mulai dari Rp 15.000',
    category: 'Akademik',
  },
  {
    id: 'translate',
    title: 'Terjemahan Tugas / Artikel',
    description:
      'Terjemahan profesional dari Bahasa Inggris ke Indonesia (dan sebaliknya), cocok untuk jurnal, tugas, atau esai.',
    icon: <Languages className='h-5 w-5 text-sky-500' />,
    technologies: ['DeepL', 'Google Translate', 'Manual Editing'],
    features: [
      'Manual + AI + proofreading',
      'Gaya akademik atau santai',
      'Tersedia ringkasan jika diminta',
      'Revisi jika kurang pas',
    ],
    price: 'Mulai dari Rp 10.000 / 100 kata',
    category: 'Bahasa',
    popular: true,
  },
  {
    id: 'koreksi-eyd',
    title: 'Koreksi EYD & Grammar',
    description:
      'Pemeriksaan tata bahasa, tanda baca, dan struktur kalimat dalam dokumen akademik atau non-formal.',
    icon: <Text className='h-5 w-5 text-emerald-500' />,
    technologies: ['Grammarly', 'PUEBI', 'Google Docs'],
    features: [
      'Tandai perbaikan langsung di file',
      'Versi asli + versi editan',
      'Komentar saran per bagian',
      'Tersedia dalam Word atau PDF',
    ],
    price: 'Mulai dari Rp 7.000 / halaman',
    category: 'Bahasa',
  },
  {
    id: 'penulisan-formal',
    title: 'Tugas Penulisan Formal',
    description:
      'Penulisan tugas kuliah seperti resume jurnal, makalah singkat, opini ilmiah, atau ulasan buku.',
    icon: <FileText className='h-5 w-5 text-indigo-500' />,
    technologies: ['Word', 'Zotero', 'Google Scholar'],
    features: [
      'Format sesuai permintaan',
      'Referensi minimal 3 sumber',
      'Struktur lengkap (cover, isi, daftar pustaka)',
      'Cek plagiarisme',
    ],
    price: 'Mulai dari Rp 25.000',
    category: 'Akademik',
  },
  {
    id: 'konversi-file',
    title: 'Konversi Format File',
    description:
      'Jasa mengubah format file dokumen, gambar, atau presentasi sesuai kebutuhan tugas atau pengumpulan.',
    icon: <Repeat className='h-5 w-5 text-gray-500' />,
    technologies: ['SmallPDF', 'Adobe Acrobat', 'PowerPoint'],
    features: [
      'PDF ke Word, JPG, PPT, dll.',
      'Merge & split file',
      'Kompres ukuran file',
      'Tanpa watermark',
    ],
    price: 'Mulai dari Rp 5.000',
    category: 'Dokumen',
  },
  {
    id: 'tugas-presentasi',
    title: 'Desain Slide Presentasi',
    description:
      'Pembuatan slide presentasi untuk tugas, sidang, atau seminar dengan desain profesional dan struktur jelas.',
    icon: <Pencil className='h-5 w-5 text-pink-500' />,
    technologies: ['Canva', 'PowerPoint', 'Google Slides'],
    features: [
      'Desain menarik & komunikatif',
      'Animasi ringan',
      'Struktur isi logis',
      'Bisa request template',
    ],
    price: 'Mulai dari Rp 30.000',
    category: 'Dokumen',
  },
];
