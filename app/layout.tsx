'use client'

import '@/app/globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { NavigationMenuDemo } from '@/components/Navbar'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { getPathname } from '@/lib/useClientUtils'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = getPathname()
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <Theme>
          <ThemeProvider attribute="class" defaultTheme="system">
            {pathname !== '/login' && <NavigationMenuDemo />}
            {children}
          </ThemeProvider>
        </Theme>
      </body>
    </html>
  )
}
