import type { Metadata } from 'next'
import { Inter, Abril_Fatface } from 'next/font/google'
import './globals.css'
import './animations.css'
import './custom-animations.css'

const inter = Inter({ subsets: ['latin'] })
const abrilFatface = Abril_Fatface({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real Estate',
  description: 'Real Estate',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sbig-VIObDKTJOpIsLOLVwXj4KwCqih7OHm.png',
        sizes: '32x32',
        type: 'image/png',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}