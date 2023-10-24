// import './globals.css'
import ContentContainer from '@/components/ContentContainer/ContentContainer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simon Phillips',
  description: 'My resume website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div>
          <Header/>
          <ContentContainer>
            {children}
          </ContentContainer>
        </div>
      </body>
    </html>
  )
}
