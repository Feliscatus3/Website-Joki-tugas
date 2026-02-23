import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Upload, FileText, X, File } from 'lucide-react';
import type { UploadedFile } from '../order-form';

export function StepDescription({
  description,
  files,
  onChange,
  onFileUpload,
  onRemoveFile,
  onBack,
  onContinue,
  isValid,
}: {
  description: string;
  files: UploadedFile[];
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFileUpload: (files: FileList | null) => void;
  onRemoveFile: (index: number) => void;
  onBack: () => void;
  onContinue: () => void;
  isValid: boolean;
}) {
  return (
    <div>
      <h3 className='text-lg sm:text-xl font-medium mb-4 sm:mb-6 text-center'>
        Deskripsi Proyek
      </h3>
      <div className='mb-4 sm:mb-6'>
        <Label
          htmlFor='description'
          className='block mb-2 text-sm sm:text-base'
        >
          Jelaskan secara detail kebutuhan tugas Anda:
        </Label>
        <Textarea
          id='description'
          placeholder='Contoh: Saya butuh jurnal reflektif harian untuk kuliah 5 hari. Tulis dengan gaya santai tapi tetap sopan, sesuai pedoman kampus. Tiap hari 200 kata. Kirim dalam format Word dan PDF.'
          className='min-h-[120px] sm:min-h-[150px] text-sm sm:text-base'
          value={description}
          onChange={onChange}
        />
        <p className='mt-2 text-xs text-gray-500'>
          Minimum 10 karakter. Semakin lengkap penjelasan Anda, semakin tepat
          layanan yang kami berikan, baik itu Minimal Check Plagiasi dan lain sebaginya.
        </p>
      </div>

      {/* File Upload Section */}
      <div className='mb-4 sm:mb-6'>
        <Label className='block mb-2 text-sm sm:text-base'>
          Lampirkan File (Opsional)
        </Label>
        <div className='relative'>
          <input
            type='file'
            id='file-upload'
            multiple
            accept='.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            onChange={(e) => onFileUpload(e.target.files)}
            className='hidden'
          />
          <label
            htmlFor='file-upload'
            className='flex flex-col items-center justify-center w-full h-24 sm:h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors'
          >
            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
              <Upload className='w-6 h-6 sm:w-8 sm:h-8 mb-2 text-gray-400' />
              <p className='mb-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
                <span className='font-semibold'>Klik untuk upload</span> atau drag and drop
              </p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                PDF, Word (max 10MB)
              </p>
            </div>
          </label>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className='mt-3 space-y-2'>
            {files.map((file, index) => (
              <div
                key={index}
                className='flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700'
              >
                <div className='flex items-center gap-2 min-w-0'>
                  {file.type === 'application/pdf' ? (
                    <FileText className='w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0' />
                  ) : (
                    <File className='w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0' />
                  )}
                  <div className='min-w-0'>
                    <p className='text-xs sm:text-sm font-medium truncate'>
                      {file.name}
                    </p>
                    <p className='text-xs text-gray-500'>
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type='button'
                  onClick={() => onRemoveFile(index)}
                  className='p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors flex-shrink-0'
                >
                  <X className='w-4 h-4 text-gray-500' />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 sm:mt-8'>
        <button
          type='button'
          className='px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] w-full sm:w-auto'
          onClick={onBack}
        >
          Kembali
        </button>
        <button
          type='button'
          className={`px-8 py-0.5 border-2 uppercase transition duration-200 text-sm w-full sm:w-auto
            ${
              isValid
                ? 'border-black dark:border-white bg-white text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]'
                : 'border-gray-300 dark:border-gray-700 bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-500 shadow-none cursor-not-allowed'
            }
          `}
          onClick={onContinue}
          disabled={!isValid}
        >
          Lanjutkan
        </button>
      </div>
    </div>
  );
}
