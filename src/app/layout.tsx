import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'
import PageTransition from '../components/ui/PageTransition'
import { generateMetadata } from '../lib/metadata'
import ScrollToTop from '../components/ui/ScrollToTop';
import { ThemeProvider } from '../context/ThemeContext';
import ClientOnly from '../components/ClientOnly';
import NavbarMenu from '../components/ui/navbar-menu';
import { BackgroundBeams } from '../components/ui/background-beams';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = generateMetadata('/')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-[#030712] text-black dark:text-white`}>
        {/* Global Background Pattern */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 bg-dot-pattern opacity-20 dark:opacity-[0.03]" />
          
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-[#030712]/60 via-transparent to-transparent" />
        </div>

        {/* Background Beams Effect */}
        <BackgroundBeams />
        
        <ThemeProvider>
          <ClientOnly>
            <CustomCursor />
          </ClientOnly>
          <NavbarMenu />
          <main className="relative">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <ClientOnly>
            <ScrollToTop />
          </ClientOnly>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
