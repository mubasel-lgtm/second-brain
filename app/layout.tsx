import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Second Brain - Mubasel',
  description: 'Your personal knowledge management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">🧠 Second Brain</h1>
            <div className="flex gap-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Dashboard</a>
              <a href="/memory" className="text-gray-600 hover:text-gray-900">Memories</a>
              <a href="/tasks" className="text-gray-600 hover:text-gray-900">Tasks</a>
              <a href="/documents" className="text-gray-600 hover:text-gray-900">Documents</a>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
