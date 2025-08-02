import { Metadata } from 'next';
import { AllProjectsList, ProjectsHero } from '@/components/page/projects';
import { generateMetadata } from '@/lib/metadata';
import { Shade } from '@/components/ui/shade';

export const metadata: Metadata = generateMetadata({
  title: 'Template Siap Pakai | JokiGoFast',
  description:
    'Kumpulan template dan dokumen siap edit seperti CV PKKMB, esai motivasi, jurnal refleksi, dan presentasi yang bisa langsung kamu gunakan.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />

      <div className='relative'>
        <Shade className='border-t' />

        <div
          id='projects-list'
          className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'
        >
          <div className='mb-12 max-w-3xl'>
            <h2 className='text-3xl font-bold mb-4'>Template Siap Pakai</h2>
            <p className='text-lg text-muted-foreground'>
              Semua dokumen yang kamu butuhkan di awal masa kuliah tersedia di sini.
              Mulai dari CV PKKMB, jurnal, sampai esai — siap edit, siap cetak.
            </p>
          </div>

          <AllProjectsList />
        </div>

        <Shade className='border-b' />
      </div>
    </>
  );
}
