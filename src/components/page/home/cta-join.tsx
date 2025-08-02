import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageSquare, Instagram, Bot } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { TextAnimate, BlurFade } from '@/components/animation';

export function CallToActionJoin() {
  const whatsappMessage =
    'Halo, saya tertarik dengan layanan Joki Go Fast. Bisa bantu saya untuk tugas kuliah saya?';
  const botMessage = 'Dim, aku butuh bantuan tugas. Bisa kasih info layanan dan harganya?';
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const encodedBotMessage = encodeURIComponent(botMessage);

  return (
    <section id='join' className='py-20 px-3 text-foreground'>
      <div className='text-center'>
        <TextAnimate
          once
          as='h2'
          className='text-balance text-2xl font-semibold lg:text-3xl'
        >
          Joki Tugas Cepat & Andal untuk Mahasiswa
        </TextAnimate>
        <TextAnimate once as='p' className='mt-4 max-w-lg mx-auto'>
          Mau tugas cepat kelar tanpa stres? Kirim aja ke Joki Go Fast! Kami bantu CV, esai, jurnal PKKMB, koreksi EYD, terjemahan, dan lainnya. Cepat, aman, terpercaya.
        </TextAnimate>

        <BlurFade inView className='mt-12 flex flex-wrap justify-center gap-4'>
          <Button
            className='bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 shadow-lg'
            asChild
            variant='default'
            size='lg'
          >
            <Link
              target='_blank'
              href={`${siteConfig.links.whatsapp}?text=${encodedMessage}`}
            >
              <MessageSquare className='mr-2 h-5 w-5' />
              <span>Chat WhatsApp (SOON)</span>
            </Link>
          </Button>
          <Button
            className='bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400 shadow-lg'
            asChild
            variant='default'
            size='lg'
          >
            <Link target='https://www.instagram.com/jokigofast/' href={siteConfig.links.instagram}>
              <Instagram className='mr-2 h-5 w-5' />
              <span>DM Instagram</span>
            </Link>
          </Button>
        </BlurFade>

        <TextAnimate
          once
          as='p'
          className='mt-10 text-sm text-muted-foreground'
        >
          Respon cepat 24/7 • Aman dan privat • Mulai dari 5 ribuan
        </TextAnimate>
      </div>
    </section>
  );
}
