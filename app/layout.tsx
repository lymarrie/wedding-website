import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://wedding-website-lymarrie.vercel.app/'),
  title: 'Wedding Website',
  description: "Luc's wedding website.",
  openGraph: {
    title: 'Luc Yuki Marrie',
    description: "Luc's Wedding Website.",
    url: 'https://wedding-website-lymarrie.vercel.app/',
    locale: 'en_US',
    type: 'website',
    images: ['https://avatars.githubusercontent.com/u/16665882?v=4']
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
