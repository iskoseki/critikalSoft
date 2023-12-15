import type { Metadata } from 'next'
import { Prompt, League_Gothic } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Prompt({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Critikal Software',
  description: 'Personal web site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='cursor-none'>
        <Navbar/>
        {children}
        <Footer/>

        </div>
        </body>
    </html>
  )
}
