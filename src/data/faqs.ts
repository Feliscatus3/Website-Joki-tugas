import type { FAQItem } from './faq';

export const faqItems: FAQItem[] = [
  {
    question: 'Apa itu Joki Go Fast?',
    answer:
      'Joki Go Fast adalah layanan cepat bantu tugas kuliah, termasuk esai PKKMB, jurnal, CV maba, hingga tugas-tugas awal semester. Cocok untuk mahasiswa baru yang butuh bantuan instan dan rapi.',
    category: 'Umum',
  },
  {
    question: 'Layanan apa saja yang disediakan?',
    answer:
      'Kami melayani pembuatan CV, esai, joki debat PKKMB, jurnal, konversi file PDF/Word, koreksi EYD, hingga penulisan ilmiah ringan. Tinggal kirim brief, kami kerjakan!',
    category: 'Layanan',
  },
  {
    question: 'Berapa biaya jasa Joki Go Fast?',
    answer:
      'Mulai dari Rp 5.000 per tugas. Biaya tergantung jenis tugas, panjang tulisan, dan deadline. Tugas mendesak atau kompleks tentu beda harga. Kami akan beri estimasi sebelum pengerjaan.',
    category: 'Biaya',
  },
  {
    question: 'Seberapa cepat pengerjaan tugas saya?',
    answer:
      'Rata-rata 1–12 jam untuk tugas ringan. Bisa lebih cepat jika Anda memilih layanan ekspres. Tugas esai pendek bisa selesai dalam waktu 1 jam setelah DP.',
    category: 'Proses',
  },
  {
    question: 'Apakah tugas saya akan dikerjakan dengan baik?',
    answer:
      'Kami mengutamakan kualitas, orisinalitas, dan gaya bahasa yang sesuai mahasiswa. Anda bisa request gaya formal santai, khas jurusan, atau sesuai template kampus.',
    category: 'Layanan',
  },
  {
    question: 'Bagaimana cara order jasa joki?',
    answer:
      'Cukup kirim tugas via WhatsApp, sebutkan deadline dan detailnya. Kami akan kasih estimasi harga. Jika setuju, Anda bisa bayar DP dan kami langsung kerjakan.',
    category: 'Proses',
  },
  {
    question: 'Apakah revisi tersedia jika hasil belum sesuai?',
    answer:
      'Bisa. Revisi gratis maksimal 3x untuk tugas ringan (contoh: esai, CV, jurnal). Kirim feedback Anda, kami akan sesuaikan secepat mungkin.',
    category: 'Layanan',
  },
  {
    question: 'Apakah hasil tugas bersifat rahasia?',
    answer:
      'Tentu. Semua informasi tugas, nama Anda, dan data lainnya kami jaga kerahasiaannya. Kami tidak menyimpan atau menyebarkan file Anda ke pihak mana pun.',
    category: 'Keamanan',
  },
  {
    question: 'Bisakah saya minta file Word atau PDF?',
    answer:
      'Bisa! Anda bebas memilih output akhir: Word, PDF, atau keduanya. Kami juga bisa bantu layout biar terlihat lebih rapi dan profesional.',
    category: 'Teknis',
  },
  {
    question: 'Apa yang membedakan Joki Go Fast dari joki lainnya?',
    answer:
      'Respons super cepat <10 menit, pengerjaan dalam hitungan jam, hasil rapi dan bisa custom sesuai format kampus. Kami juga berpengalaman menangani ratusan maba.',
    category: 'Umum',
  },
  {
    question: 'Bagaimana sistem pembayaran?',
    answer:
      'DP 50% di awal, pelunasan saat tugas selesai. Pembayaran via e-wallet, transfer bank. Simpel dan aman.',
    category: 'Biaya',
  },
  {
    question: 'Apakah tersedia refund?',
    answer:
      'Maaf, DP tidak bisa direfund karena langsung digunakan untuk mulai pengerjaan. Tapi Anda tetap bisa revisi jika ada kekurangan.',
    category: 'Biaya',
  },
];

export const faqCategories = Array.from(
  new Set(faqItems.map((item) => item.category || 'Lainnya')),
);
