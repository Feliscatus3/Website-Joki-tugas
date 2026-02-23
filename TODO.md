# TODO List - Perbaikan Order Form dan Upload File

## Error yang Ditemukan:
1. [x] Type mismatch antara `order-form.d.ts` dan `project-types.tsx`
2. [x] Missing file upload functionality di order form
3. [x] ESLint unused vars di `project-items.tsx` (MoreHorizontal)

## Rencana Perbaikan:

### 1. Update Type Definitions ✅
- [x] Update `src/components/page/home/order-form.d.ts` - Sesuaikan ProjectType
- [x] Update `src/data/project-types.tsx` - 8 tipe proyek baru
- [x] Update `src/data/project-items.tsx` - Sesuaikan dengan tipe proyek baru
- [x] Update `src/data/technologies.tsx` - 8 tipe proyek baru
- [x] Tambahkan field file upload di interface FormData

### 2. Update Order Form Component ✅
- [x] Update `src/components/page/home/order-forms.tsx` - Tambahkan state file upload
- [x] Update fungsi sendOrderToWhatsApp untuk menyertakan info file

### 3. Update Step Description ✅
- [x] Update `src/components/page/home/order-form/step-description.tsx` - Tambahkan UI upload file
- [x] Tambahkan validasi file (PDF, Word, max size)
- [x] Tambahkan preview file

### 4. Fix ESLint Errors ✅
- [x] Fix `src/components/page/home/cta-join.tsx` - Hapus unused imports
- [x] Fix `src/data/project-items.tsx` - Hapus unused import (MoreHorizontal)

### 5. Testing
- [ ] Verifikasi build di Vercel
- [ ] Test fungsionalitas upload file
- [ ] Test integrasi WhatsApp

## Progress:
- [x] Step 1: Update type definitions
- [x] Step 2: Update order-forms.tsx
- [x] Step 3: Update step-description.tsx
- [x] Step 4: Fix ESLint errors
- [x] Step 5: Update technologies.tsx
- [ ] Step 6: Testing (menunggu deploy ke Vercel)

## Tipe Proyek Baru (Semua File Sudah Konsisten):
- jurnal
- artikel
- parafrase
- essay
- resume
- translate
- cv
- lainnya

## File yang Diubah:
1. `src/components/page/home/order-form.d.ts`
2. `src/data/project-types.tsx`
3. `src/data/project-items.tsx`
4. `src/data/technologies.tsx`
5. `src/components/page/home/cta-join.tsx`
6. `src/components/page/home/order-forms.tsx`
7. `src/components/page/home/order-form/step-description.tsx`
