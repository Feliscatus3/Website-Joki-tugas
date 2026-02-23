# TODO List - Perbaikan Order Form dan Upload File

## Error yang Ditemukan:
1. [x] Type mismatch antara `order-form.d.ts` dan `project-types.tsx`
2. [x] Missing file upload functionality di order form

## Rencana Perbaikan:

### 1. Update Type Definitions ✅
- [x] Update `src/components/page/home/order-form.d.ts` - Sesuaikan ProjectType dengan project-types.tsx
- [x] Update `src/data/project-types.tsx` - Ubah ke tipe proyek baru (jurnal, artikel, parafrase, essay, resume, translate, cv, lainnya)
- [x] Update `src/data/project-items.tsx` - Sesuaikan dengan tipe proyek baru
- [x] Tambahkan field file upload di interface FormData

### 2. Update Order Form Component ✅
- [x] Update `src/components/page/home/order-forms.tsx` - Tambahkan state file upload
- [x] Update fungsi sendOrderToWhatsApp untuk menyertakan info file

### 3. Update Step Description ✅
- [x] Update `src/components/page/home/order-form/step-description.tsx` - Tambahkan UI upload file
- [x] Tambahkan validasi file (PDF, Word, max size)
- [x] Tambahkan preview file

### 4. Fix ESLint Errors ✅
- [x] Fix `src/components/page/home/cta-join.tsx` - Hapus unused imports (Bot) dan variables (encodedMessage)

### 5. Testing
- [ ] Verifikasi tidak ada error TypeScript
- [ ] Test fungsionalitas upload file
- [ ] Test integrasi WhatsApp

## Progress:
- [x] Step 1: Update type definitions
- [x] Step 2: Update order-forms.tsx
- [x] Step 3: Update step-description.tsx
- [x] Step 4: Fix ESLint errors
- [ ] Step 5: Testing (menunggu deploy ke Vercel)

## Tipe Proyek Baru:
- jurnal
- artikel
- parafrase
- essay
- resume
- translate
- cv
- lainnya
