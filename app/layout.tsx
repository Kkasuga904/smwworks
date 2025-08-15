import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { config } from '@/lib/config'

// 地域名変更時は .env.local の NEXT_PUBLIC_REGION_NAME を修正
export const metadata: Metadata = {
  title: config.meta.title,
  description: config.meta.description,
  keywords: config.meta.keywords,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: config.ogp.title,
    description: config.ogp.description,
    type: 'website',
    locale: 'ja_JP',
    url: config.ogp.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}