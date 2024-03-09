import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { NavigationMenuDemo } from '@/components/Navbar'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arena de Futebol',
  description: 'Arena de Futebol Resultar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <Theme>
          <ThemeProvider attribute="class" defaultTheme="system">
            <NavigationMenuDemo />
            {children}
          </ThemeProvider>
        </Theme>
      </body>
    </html>
  )
}
