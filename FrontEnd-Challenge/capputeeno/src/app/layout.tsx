import { Saira } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import DefaultProviders from '@/components/defaultProviders'

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
        <DefaultProviders>
          <Header />
          {children}
        </DefaultProviders>
        </body>
    </html>
  )
}
