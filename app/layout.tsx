import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '🪔 India Festival Calendar | Hindi & Marathi त्योहार | Complete Guide',
  description: 'Discover 15+ authentic Hindi and Marathi festivals with traditional recipes, celebration guides, and puja decorations. Based on Drik Panchang dates. Experience India\'s rich cultural heritage.',
  keywords: 'India festivals, Hindi festivals, Marathi festivals, Hindu calendar, Drik Panchang, Indian culture, Diwali, Holi, Ganesh Chaturthi, festival recipes, puja guide, Indian traditions, त्योहार, भारतीय त्योहार',
  authors: [{ name: 'India Festival Calendar' }],
  creator: 'India Festival Calendar',
  openGraph: {
    title: '🪔 India Festival Calendar | Hindi & Marathi Festivals',
    description: 'Complete guide to 15+ Hindu festivals with recipes, decorations & celebration guides',
    type: 'website',
    locale: 'en_IN',
  }
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
