import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from './utils/scroll/lenis-scroller'
import Navbar from './components/navbar'
import Favicon from '../assets/title-letters/1.avif';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nordicaps - Gorras',
  description: 'Pagina de venta de gorras de alta calidad en Junin, Buenos Aires',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Nordicaps</title>
      <meta name="description" content="Página para venta de gorras en Junin, Buenos Aires" />
      <body className={inter.className}>
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
