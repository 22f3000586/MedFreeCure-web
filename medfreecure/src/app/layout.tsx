import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medicine Free Cure - Transform Your Health Naturally',
  description: 'Transform your health in 30 days without medication—join the DIY C.A.L.M Challenge for natural blood pressure control.',
  keywords: 'blood pressure, natural healing, acupressure, holistic health, medication-free',
  authors: [{ name: 'Dr. Kanaiya S Gupta' }],
  openGraph: {
    title: 'Medicine Free Cure - Transform Your Health Naturally',
    description: 'Transform your health in 30 days without medication—join the DIY C.A.L.M Challenge for natural blood pressure control.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
