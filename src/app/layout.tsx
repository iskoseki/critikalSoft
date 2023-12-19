import type { Metadata } from 'next'
import { DarkModeProvider } from '@/context/DarkModeContext'
import { Prompt } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'
import Container from '@/components/Container/Container'

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
        <DarkModeProvider>
        <Container>
          <Navbar/>
        {children}
        <Footer/>
        </Container>
      
 
       
        </DarkModeProvider>
      
        
        </body>
    </html>
  )
}
