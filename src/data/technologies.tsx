<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  integrity="sha512-papGkRgKOzoWFFwO+XKk3ZoFz3O+M3v+PoYfR3oY9J+HXH53JytDfHcqz2dB8b2YxH4E3I1KxjaDrkN8J1I1wQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

import React from 'react';

const technologies = [
  {
    name: 'Curriculum Vitae (CV)',
    description: 'Pembuatan CV mahasiswa baru yang rapi dan menarik',
    icon: '<i class="fas fa-file-alt text-white text-2xl"></i>',
  },
  {
    name: 'Esai',
    description: 'Penulisan esai',
    icon: '<i class="fas fa-pen-fancy text-white text-2xl"></i>',
  },
  {
    name: 'Resume Materi',
    description: 'Meringkas materi PKKMB dengan format sistematis',
    icon: '<i class="fas fa-book-open text-white text-2xl"></i>',
  },
  {
    name: 'Video Perkenalan',
    description: 'Skrip dan narasi untuk video perkenalan diri',
    icon: '<i class="fas fa-video text-white text-2xl"></i>',
  },
  {
    name: 'Laporan Kegiatan',
    description: 'Penulisan laporan harian selama PKKMB',
    icon: '<i class="fas fa-clipboard-list text-white text-2xl"></i>',
  },
  {
    name: 'Jurnal',
    description: 'Penulisan jurnal refleksi pengalaman selama orientasi',
    icon: '<i class="fas fa-book text-white text-2xl"></i>',
  },
  {
    name: 'Terjemahan Tugas',
    description: 'Menerjemahkan tugas dari Indonesia ke Bahasa Inggris secara akurat',
    icon: '<i class="fas fa-language text-white text-2xl"></i>',
  },
  {
    name: 'Word ke PDF, PDF ke Word, Foto ke PDF',
    description: 'Mengubah tugas format untuk pengumpulan',
    icon: '<i class="fas fa-file-pdf text-white text-2xl"></i>',
  },
  {
    name: 'Koreksi EYD & Tata Bahasa',
    description: 'Pemeriksaan ejaan, tanda baca, dan tata bahasa tugas',
    icon: '<i class="fas fa-spell-check text-white text-2xl"></i>',
  },
  {
    name: 'Penulisan Formal',
    description: 'Membantu menyusun kalimat akademik & bahasa formal',
    icon: '<i class="fas fa-file-signature text-white text-2xl"></i>',
  },
];

const Technologies = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Layanan Joki PKKMB</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-900 p-5 rounded-xl flex gap-4 items-start shadow-lg hover:bg-gray-800 transition"
          >
            <div
              className="bg-blue-600 p-3 rounded-lg"
              dangerouslySetInnerHTML={{ __html: tech.icon }}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
              <p className="text-sm text-gray-300">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
