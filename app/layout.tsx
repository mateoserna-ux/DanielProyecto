import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { MobileReserveBar } from '@/components/mobile-reserve-bar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://drdanielfelipemunoz.cl'),
  title: 'Dr. Daniel Muñoz | Medicina Estética',
  description:
    'Belleza natural, resultados seguros. Medicina estética avanzada en Santiago, Antofagasta y Calama. Armonización facial, bioestimuladores, rinomodelación y más.',
  openGraph: {
    title: 'Dr. Daniel Muñoz | Medicina Estética',
    description:
      'Reserva y paga tu tratamiento online, 24/7. Medicina estética de precisión.',
    url: 'https://drdanielfelipemunoz.cl',
    siteName: 'Dr. Daniel Muñoz',
    locale: 'es_CL',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a1512',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`light ${playfair.variable} ${inter.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        <MobileReserveBar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
