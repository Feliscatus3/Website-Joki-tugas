# TODO List - Perbaikan Order Form dan Upload File

## ✅ SEMUA PERUBAHAN SELESAI

### 1. Update Type Definitions ✅
- [x] `src/components/page/home/order-form.d.ts` - 8 tipe proyek baru
- [x] `src/data/project-types.tsx` - 8 project type cards
- [x] `src/data/project-items.tsx` - 7 project items
- [x] `src/data/technologies.tsx` - 8 technologies
- [x] Tambahkan field file upload di interface FormData

### 2. Update Order Form Component ✅
- [x] `src/components/page/home/order-forms.tsx` - File upload state
- [x] Fungsi sendOrderToWhatsApp dengan info file yang JELAS

### 3. Update Step Description ✅
- [x] `src/components/page/home/order-form/step-description.tsx` - UI upload file
- [x] Validasi file (PDF, Word, max 10MB)
- [x] Preview file

### 4. Fix ESLint Errors ✅
- [x] `src/components/page/home/cta-join.tsx` - Hapus unused imports
- [x] `src/data/project-items.tsx` - Hapus unused import

### 5. Update Kontak ✅
- [x] `src/config/site.ts` - WhatsApp: +6281385222903
- [x] `src/config/site.ts` - Instagram: https://www.instagram.com/jokigofast/

### 6. Perbaiki Pesan WhatsApp ✅
Format pesan sekarang:
```
*PESANAN BARU - JOKIGOFAST*

*Jenis Proyek:* [tipe]

*Deskripsi:*
[deskripsi]

*📎 FILE LAMPIRAN:*
1. [nama file] ([size] MB)
2. [nama file] ([size] MB)

_Note: File asli akan dikirim setelah admin merespons._

*Deadline:* [deadline]

Mohon diproses, terima kasih.
```

## Tipe Proyek Baru (Semua File Konsisten):
1. **Jurnal** - Penulisan jurnal refleksi
2. **Artikel** - Penulisan artikel ilmiah
3. **Parafrase** - Penulisan ulang teks
4. **Essay** - Penulisan esai akademik
5. **Resume** - Ringkasan dokumen
6. **Translate** - Penerjemahan Bahasa Inggris
7. **CV** - Curriculum Vitae
8. **Lainnya** - Layanan custom

## File yang Diubah (8 file):
1. `src/components/page/home/order-form.d.ts`
2. `src/data/project-types.tsx`
3. `src/data/project-items.tsx`
4. `src/data/technologies.tsx`
5. `src/config/site.ts`
6. `src/components/page/home/cta-join.tsx`
7. `src/components/page/home/order-forms.tsx`
8. `src/components/page/home/order-form/step-description.tsx`

## Langkah Selanjutnya:
Silakan **commit, push, dan deploy ke Vercel** untuk verifikasi build berhasil.
