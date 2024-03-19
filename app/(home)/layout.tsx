'use client'

import '@/app/globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { NavigationMenuDemo } from '@/components/Navbar'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { GetPathname } from '@/lib/useClientUtils'
import { Inter } from 'next/font/google'
import Authprovider from '@/providers/auth'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = GetPathname()
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${inter.className} .light`}>
        <Authprovider>
          <Theme>
            <ThemeProvider attribute="class" defaultTheme="system">
              {pathname !== '/login' && !pathname.startsWith('/admin') && (
                <NavigationMenuDemo />
              )}
              {children}
            </ThemeProvider>
          </Theme>
        </Authprovider>
      </body>
    </html>
  )
}
