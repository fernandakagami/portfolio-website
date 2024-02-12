'use client'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Pacifico } from 'next/font/google';
import styles from './menu.module.css';

const protest = Pacifico({ weight: ['400'], subsets: ['latin'] });
export default function Menu() {
  return (
    <div className='flex flex-col h-screen justify-between items-start bg-black text-white p-24 w-1/4'>
      <div className={protest.className}><h1 className='text-5xl'>Fer.</h1></div>
      <ul className="flex flex-col justify-center gap-3 mb-40">
        <li className="cursor-pointer">
          <Link href="/" className='uppercase'>Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">SOBRE MIM</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">SERVIÇOS</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/rooms">PROJETOS</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/rooms">CONTATOS</Link>
        </li>
        <li>
          <button className={`px-3 py-2 mt-5 ${styles.btn}`} >Download CV</button>
        </li>
      </ul>
      <div>
        <ul>
          <li className='mb-2'>
            <a href='https://github.com/fernandakagami' target='_blank'>
              <Icon icon="bi:github" width="30" height="30" />
            </a>
          </li>
          <li className='mb-2'>
            <a href='https://www.linkedin.com/in/fernanda-lima-94b60b229/' target='_blank'>
              <Icon icon="entypo-social:linkedin-with-circle" width="30" height="30"></Icon>
            </a>
          </li>
        </ul>
        <p className='text-xs'>Copyright ©{`${new Date().getFullYear()}`} Fernanda Lima.</p>
        <p className='text-xs'>Todos os direitos reservados.</p>
      </div>
    </div>
  )
}