'use client'
import Sidebar from '@/components/sidebar'
import { useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <div className="flex flex-row">
          {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} className="fixed" /> */}
          <main
            className={`transition-all duration-500 ${isOpen ? 'pl-[300px]' : 'pl-[95px]'}`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
