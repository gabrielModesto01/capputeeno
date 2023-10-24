"use client"

import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const saira = Saira({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
