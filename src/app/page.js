'use client'
import me from './assets/img/eu.png';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <main className="h-screen flex flex-row justify-evenly items-center max-w-5xl mx-auto">
      <div className='w-3/6 flex flex-col justify-center items-start'>
        <h1 className="text-6xl mb-8 uppercase">Meu nome é <span className='font-bold'>Fernanda Lima</span>...</h1>
        <h3 className="text-3xl italic font-bold">Desenvolvedora Web</h3>
        <div className='flex justify-center items-center mt-20' >
          <Icon icon="ic:outline-email" width="30" height="30" className='bg-gray-300 rounded-full p-1'></Icon>
          <p className='ms-2 font-bold italic'>email</p>
        </div>
      </div>
      <div className='w-3/6 flex justify-center items-center'>
        <Image src={me.src} width={500} height={700} alt="Fernanda" className='rounded-full' style={{ background: 'linear-gradient(0deg, rgba(255,177,71,1) 0%, rgba(255,108,99,1) 50%, rgba(184,106,223,1) 100%)' }} />
      </div>
    </main>
  );
}
