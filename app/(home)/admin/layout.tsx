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
    <html lang="en">
      <body>
        <div className="flex flex-row">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} className="fixed" />
          <main
            className={`transition-all duration-500 ${isOpen ? 'pl-[295px]' : 'pl-[90px]'}`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
