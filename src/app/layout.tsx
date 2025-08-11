import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Siddharth Pathak | Portfolio',
  description: 'Portfolio of Siddharth Pathak - Java Developer | AWS Enthusiast | Backend Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-blue-50/30">
        <Navbar />
        <main className="flex-1 container-base pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}