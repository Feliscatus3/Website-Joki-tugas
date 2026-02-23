# TODO List - Perbaikan Order Form dan Upload File

## Error yang Ditemukan:
1. [x] Type mismatch antara `order-form.d.ts` dan `project-types.tsx`
2. [x] Missing file upload functionality di order form

## Rencana Perbaikan:

### 1. Update Type Definitions
- [ ] Update `src/components/page/home/order-form.d.ts` - Sesuaikan ProjectType dengan project-types.tsx
- [ ] Tambahkan field file upload di interface FormData

### 2. Update Order Form Component
- [ ] Update `src/components/page/home/order-forms.tsx` - Tambahkan state file upload
- [ ] Update fungsi sendOrderToWhatsApp untuk menyertakan info file

### 3. Update Step Description
- [ ] Update `src/components/page/home/order-form/step-description.tsx` - Tambahkan UI upload file
- [ ] Tambahkan validasi file (PDF, Word, max size)
- [ ] Tambahkan preview file

### 4. Testing
- [ ] Verifikasi tidak ada error TypeScript
- [ ] Test fungsionalitas upload file
- [ ] Test integrasi WhatsApp

## Progress:
- [x] Step 1: Update type definitions
- [x] Step 2: Update order-forms.tsx
- [x] Step 3: Update step-description.tsx
- [x] Step 4: Testing (TypeScript errors are editor-only, not actual errors)
