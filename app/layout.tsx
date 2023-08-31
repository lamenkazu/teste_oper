import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FakeNews!',
  description: 'Seu Site de Notícias Lorem Ipsum',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ptbr">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
