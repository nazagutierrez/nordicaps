import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from './utils/scroll/lenis-scroller'
import Navbar from './components/navbar'
import Favicon from '../assets/title-letters/1.avif';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nordicaps.vercel.app'),
  title: {
    default: 'Nordicaps - Gorras en Junín',
    template: '%s | Nordicaps'
  },
  description: 'Tienda de gorras, pilusos y gorros de alta calidad en Junín, Buenos Aires. Envíos a todo el país.',
  keywords: ['gorras', 'pilusos', 'gorros', 'Nordicaps', 'Junín', 'Buenos Aires', 'venta de gorras'],
  authors: [{ name: 'Nordicaps' }],
  creator: 'Nordicaps',
  openGraph: {
    title: 'Nordicaps - Gorras en Junín',
    description: 'Tienda de gorras y accesorios de alta calidad en Junín. ¡Explora nuestro catálogo!',
    url: 'https://nordicaps.vercel.app',
    siteName: 'Nordicaps',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nordicaps - Gorras en Junín',
    description: 'Tienda de gorras de alta calidad en Junín, Buenos Aires.',
  },
  icons: [{ rel: 'icon', url: Favicon.src }],
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Nordicaps",
    "description": "Venta de gorras de alta calidad en Junín, Buenos Aires.",
    "url": "https://nordicaps.vercel.app",
    "image": "https://nordicaps.vercel.app" + Favicon.src,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Junín",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    }
  }

  return (
    <html lang="es">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
