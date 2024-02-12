'use client'
import me from '../assets/img/eu1.png';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import styles from './about.module.css';

export default function Home() {
  const scale = ['Estágio', 'Júnior', 'Pleno', 'Sênior', 'Especialista'];

  return (
    <main className="h-screen flex flex-row justify-between items-center max-w-5xl mx-auto">
      <div className='w-4/12 flex flex-col me-10'>
        <p className='italic font-medium text-2xl mb-2'>
          Prazer!
        </p>
        <p className='font-bold text-3xl mb-5'>
          Bem-vindo...
        </p>

        <div className='flex flex-col justify-center items-center'>
          <Image src={me.src} width={500} height={700} alt="Fernanda" className='rounded-full mt-5 mb-8 bg-gray-100' />
          <p className={`text-center text-4xl font-extrabold uppercase mb-2 ${styles.letter}`}>Fernanda</p>
          <p className='text-center text-2xl font-bold italic mb-2'>Desenvolvedora Web</p>
          <button className='text-lg font-bold flex justify-center items-center'> <span style={{ borderBottom: "1px solid black" }}>Download CV</span> <Icon icon="grommet-icons:share-rounded" className="ms-2" width="25" height="25"></Icon></button>
        </div>
      </div>
      <div className='w-8/12 flex flex-col justify-center items-start'>
        <div className='grid grid-cols-2 gap-4 w-full pb-4 border-b-2 border-gray-300' >
          <div className='flex justify-start items-center' >
            <Icon icon="ic:outline-email" width="30" height="30" className='bg-gray-300 rounded-full p-1'></Icon>
            <p className='ms-2 font-bold italic'>email</p>
          </div>
          <div className='flex justify-start items-center' >
            <Icon icon="mingcute:github-line" width="30" height="30" className='bg-gray-300 rounded-full p-1'></Icon>
            <p className='ms-2 font-bold italic'>email</p>
          </div>
          <div className='flex justify-start items-center' >
            <Icon icon="ri:linkedin-line" width="30" height="30" className='bg-gray-300 rounded-full p-1'></Icon>
            <p className='ms-2 font-bold italic'>email</p>
          </div>
        </div>
        <div className='w-full pt-4 border-b-2 border-gray-300 mb-4' >
          <p className='text-sm mb-7'>Desenvolvedora web com 1 ano de experiência. Tenho facilidade em comunicação e trabalho em equipe. Além disso, tenho a meta de aprender e crescer na carreira.</p>

          <div className="relative m-4">
            <div className="left-0 h-20 w-full relative top-6 flex items-center justify-between">
              {scale.map((s, index) => (
                <div>
                  <span className="pl-2 z-10">{s}</span>
                  <div
                    className={`relative left-2 h-6 bg-orange-300 ${index === 0 ? 'w-0' : 'w-[1px]'
                      }`}
                  />
                </div>
              ))}
            </div>
            <div className="top-6 z-0 bg-orange-400 bottom-0 h-4 w-full rounded-full" />
          </div>

          <ul className="mx-4">
            <li className='mb-3'>
              <p className='text-sm font-bold mb-1'>
                Desenvolvimento Front-end
              </p>
              <div className={styles.wrapper}>
                <input type="range" min="0" max="100" value="80" id="range" className={styles.range} />
              </div>
            </li>
            <li className='mb-3'>
              <p className='text-sm font-bold mb-1'>
                Desenvolvimento Back-end
              </p>
              <div className={styles.wrapper}>
                <input type="range" min="0" max="100" value="70" id="range" className={styles.range} />
              </div>
            </li>
            <li className='mb-3'>
              <p className='text-sm font-bold mb-1'>
                Desenvolvimento Mobile
              </p>
              <div className={styles.wrapper}>
                <input type="range" min="0" max="100" value="75" id="range" className={styles.range} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main >
  );
}
