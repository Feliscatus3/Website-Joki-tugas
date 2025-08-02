import { CheckCheck, Trophy } from 'lucide-react';
import Image from 'next/image';
import { TextAnimate, BlurFade } from '@/components/animation';
import { NumberTicker } from '@/components/animation';

export const About = () => {
  return (
<section id='tentang' className='py-16 md:py-32'>
  <div className='mx-auto max-w-screen-xl space-y-8 px-6 md:space-y-16'>
    <TextAnimate
      as={'h2'}
      once
      className='relative z-10 max-w-xl text-5xl font-medium lg:text-6xl'
    >
      Layanan Joki Tugas PKKMB & Akademik Terpercaya.
    </TextAnimate>
    <BlurFade className='relative'>
      <div className='relative z-10 space-y-4 md:w-1/2'>
        <p>
          JokiGoFast hadir sebagai solusi bagi mahasiswa baru yang kewalahan dengan tugas PKKMB seperti CV, esai motivasi, jurnal refleksi, dan laporan kegiatan.
        </p>
        <p>
          Tim kami terdiri dari editor profesional, penulis akademik, dan desainer dokumen berpengalaman yang telah menangani ratusan tugas dengan berbagai format dan standar kampus.
        </p>
        <p>
          Kami menjunjung tiga nilai utama: hasil rapi & orisinal, harga yang masuk akal, dan pengerjaan cepat tanpa mengorbankan kualitas. Kamu fokus kuliah, kami urus dokumenmu.
        </p>
        <div className='grid grid-cols-2 gap-3 pt-6 sm:gap-4'>
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <CheckCheck className='size-4 text-yellow-400' />
              <h3 className='text-sm font-medium'>
                +<NumberTicker value={800} />
              </h3>
            </div>
            <p className='text-muted-foreground text-sm'>
              Tugas mahasiswa baru telah diselesaikan dengan sempurna
            </p>
          </div>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <Trophy className='size-4 text-yellow-400' />
              <h3 className='text-sm font-medium'>
                <NumberTicker value={99} />%
              </h3>
            </div>
            <p className='text-muted-foreground text-sm'>
              Klien puas dengan hasil{' '}
              <span className='text-yellow-400'>cepat & berkualitas</span>
            </p>
          </div>
        </div>
      </div>

      <div className='mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0'>
        <div
          aria-hidden
          className='bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-54% md:block'
        ></div>
        <div className='border-border/50 relative rounded-2xl border border-dotted p-2'>
          <Image
            src='/banner-2.png'
            className='rounded-[12px] h-full object-cover object-right'
            alt='Ilustrasi layanan joki tugas PKKMB dan akademik'
            width={1207}
            height={929}
            quality={85}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px'
            priority={false}
          />
        </div>
      </div>
    </BlurFade>
  </div>
</section>
  );
};
