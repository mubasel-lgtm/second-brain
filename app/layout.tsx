import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Second Brain',
  description: 'Your personal mission control',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-[#fafafa] antialiased">
        {children}
      </body>
    </html>
  )
}
