import React from 'react';

export const technologies = [
  {
    name: 'Curriculum Vitae (CV)',
    description: 'Pembuatan CV mahasiswa baru yang rapi dan menarik',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 16 16">
        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37c.66-1.143 1.81-1.87 3.157-1.87h4.622c1.347 0 2.497.727 3.157 1.87A7 7 0 0 0 8 1z"/>
      </svg>
    ),
  },
  {
    name: 'Esai / Resume',
    description: 'Penulisan esai motivasi atau ringkasan materi PKKMB',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 16 16">
        <path d="M8 0a2 2 0 0 0-2 2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4l-4-4H8zm0 1.5L11.5 5H8a.5.5 0 0 1-.5-.5V1.5zM3 7h6v1H3V7zm0 2h6v1H3V9z"/>
      </svg>
    ),
  },
  {
    name: 'Jurnal / Laporan',
    description: 'Penulisan jurnal refleksi atau laporan kegiatan harian',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 16 16">
        <path d="M1 2.828c.885-.37 2.154-.773 3.447-.773 1.28 0 2.053.385 2.553.778.497-.39 1.268-.778 2.55-.778 1.293 0 2.561.403 3.446.773V14c0 .55-.45 1-1 1H2a1 1 0 0 1-1-1V2.828z"/>
      </svg>
    ),
  },
  {
    name: 'Terjemahan Tugas',
    description: 'Menerjemahkan tugas kuliah dari/ke Bahasa Inggris secara akurat',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 16 16">
        <path d="M4.5 0a.5.5 0 0 0 0 1h3.086L4.207 4.379a.5.5 0 1 0 .707.707L8.293 1.707V4.5a.5.5 0 0 0 1 0v-4A.5.5 0 0 0 8.5 0h-4z"/>
        <path d="M0 2a2 2 0 0 1 2-2h5.293a.5.5 0 0 1 .354.854L3.207 5.293a1 1 0 0 0 0 1.414L7.647 11.5H2a2 2 0 0 1-2-2V2zm9.293 5.707a1 1 0 0 0 0 1.414L12.086 12H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.586l-2.793-2.793a1 1 0 0 0-1.414 0z"/>
      </svg>
    ),
  },
  {
    name: 'Konversi File (PDF / Word / Foto)',
    description: 'Mengubah tugas ke format pengumpulan yang diinginkan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 16 16">
        <path d="M4.5 9.5A.5.5 0 0 1 5 10h.5v1H5a.5.5 0 0 1-.5-.5v-1z"/>
        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM1 2a1 1 0 0 1 1-1h5.5v3a1 1 0 0 0 1 1H13v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2z"/>
      </svg>
    ),
  },
  {
    name: 'Koreksi EYD & Tata Bahasa',
    description: 'Pemeriksaan ejaan, tanda baca, dan tata bahasa akademik',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 16 16">
        <path d="M10.854 6.146a.5.5 0 0 0-.708 0L7.5 8.793 6.354 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708z"/>
        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5z"/>
      </svg>
    ),
  },
  {
    name: 'Penulisan Formal',
    description: 'Menyusun kalimat akademik dan bahasa formal sesuai standar',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 16 16">
        <path d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
        <path fillRule="evenodd" d="M4.5 8.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
      </svg>
    ),
  },
];

const TechnologyList = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {technologies.map((tech) => (
        <div key={tech.name} className="flex items-start gap-4 p-4 border rounded-lg shadow-sm">
          <div>{tech.icon}</div>
          <div>
            <h3 className="text-lg font-semibold">{tech.name}</h3>
            <p className="text-sm text-gray-600">{tech.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologyList;
