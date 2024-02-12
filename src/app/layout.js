import { Open_Sans } from 'next/font/google';
import './globals.css';

import Menu from './components/menu/';

const open = Open_Sans({ weight: ['400', '700'], subsets: ['latin'] });
export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`flex ${open.className} w-screen`}>
        <Menu />
        <main className="w-3/4">
          {children}
        </main>
      </body>
    </html >
  )
}