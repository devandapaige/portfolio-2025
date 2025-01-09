import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Navigation from './components/Navigation'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pythoness Programmer - Digital Artist Witch',
  description: 'Nurture your small business with heartfelt tech guidance through focused personal sessions and community workshops.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-[#1a2e1a]`}>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

