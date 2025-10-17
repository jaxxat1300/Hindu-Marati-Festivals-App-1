import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hindu Marathi Festivals',
  description: 'A beautiful digital companion for Hindu and Marathi festivals',
  keywords: 'Hindu festivals, Marathi festivals, Indian culture, spirituality, calendar',
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
