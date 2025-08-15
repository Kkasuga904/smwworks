import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { config } from '@/lib/config'
import Script from 'next/script'

// SEO最適化されたメタデータ
export const metadata: Metadata = {
  title: config.meta.title,
  description: config.meta.description,
  keywords: config.meta.keywords,
  authors: [{ name: 'SmartWeb Works' }],
  creator: 'SmartWeb Works',
  publisher: 'SmartWeb Works',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: config.ogp.title,
    description: config.ogp.description,
    type: 'website',
    locale: 'ja_JP',
    url: config.ogp.url,
    siteName: config.siteName,
    images: [
      {
        url: `${config.ogp.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: config.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.ogp.title,
    description: config.ogp.description,
    images: [`${config.ogp.url}/og-image.png`],
  },
  alternates: {
    canonical: config.ogp.url,
  },
  category: 'web development',
}

// 構造化データ - LocalBusiness
// Google検索で表示されるリッチスニペット用のJSON-LD形式データ
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness', // ローカルビジネスとして定義
  '@id': config.ogp.url,
  name: config.siteName,
  description: config.meta.description,
  url: config.ogp.url,
  email: config.email,
  // 住所情報 - ローカルSEO用
  address: {
    '@type': 'PostalAddress',
    addressRegion: '関東',
    addressCountry: 'JP',
  },
  // 地理座標 - Googleマップ連携用
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.6762, // 東京の座標
    longitude: 139.6503,
  },
  // サービス提供エリア
  areaServed: [
    {
      '@type': 'State',
      name: '東京都',
    },
    {
      '@type': 'State',
      name: '神奈川県',
    },
    {
      '@type': 'State',
      name: '千葉県',
    },
    {
      '@type': 'State',
      name: '埼玉県',
    },
  ],
  priceRange: '¥¥', // 価格帯（中程度）
  image: `${config.ogp.url}/og-image.png`,
  telephone: '+81-00-0000-0000',
  // 営業時間情報
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  // SNSリンク
  sameAs: [
    'https://twitter.com/smwworks',
    'https://www.facebook.com/smwworks',
  ],
  // 提供サービス一覧
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'ホームページ制作',
        description: 'レスポンシブ対応のホームページ制作サービス',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'SEO対策',
        description: '検索順位向上のためのSEO対策サービス',
      },
    },
  ],
}

// ルートレイアウトコンポーネント - 全ページ共通のレイアウト
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Workspace ドメイン認証用メタタグ */}
        <meta name="google-site-verification" content="QeSPCupY1CeEa3vdh7YdPPOKHsUBL5mNOT7eICl88Lc" />
        {/* 構造化データの埋め込み */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive" // ページ読み込み前に実行
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* ヘッダーコンポーネント */}
        <Header />
        {/* メインコンテンツエリア - flex-growで画面全体を使用 */}
        <main className="flex-grow">
          {children}
        </main>
        {/* フッターコンポーネント */}
        <Footer />
      </body>
    </html>
  )
}