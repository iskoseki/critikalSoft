import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'
import Container from '@/components/Container/Container'
import  Providers  from './providers'
import Cursor from '@/components/Greeting/MouseCustom'
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
    <html lang="en" className='dark' suppressHydrationWarning>
      <body className={`${inter.className}dark:bg-gray-800`}>

      <Providers>
        
        <Container>
            { /*Cursor
             <Cursor/>
             */}
     
          <Navbar/>
        {children}
        <Footer/>
        </Container>
     </Providers>
        
        </body>
    </html>
  )
}
