import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'India Festival Calendar - Hindi and Marathi Festivals',
  description: 'Comprehensive guide to Hindi and Marathi festivals with accurate dates from Drik Panchang, recipes, decorations, and celebration guides',
  keywords: 'India festivals, Hindi festivals, Marathi festivals, Hindu calendar, Drik Panchang, Indian culture, spirituality, calendar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen festival-gradient">
          {children}
        </div>
      </body>
    </html>
  )
}
