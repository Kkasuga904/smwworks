import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  ogImage?: string
  noindex?: boolean
  canonical?: string
  keywords?: string
}

export default function SEOHead({
  title,
  description,
  ogImage,
  noindex = false,
  canonical,
  keywords,
}: SEOHeadProps) {
  const defaultTitle = 'SmartWeb Works - 初期費用0円のホームページ制作'
  const defaultDescription = '関東圏の中小企業・個人事業主様向けに、初期費用0円、月額5,500円からのホームページ制作サービスを提供。SEO対策・保守込み。'
  const defaultOgImage = 'https://www.smwworks.com/og-image.png'
  const defaultKeywords = 'ホームページ制作,Web制作,初期費用0円,月額制,SEO対策,レスポンシブ対応,関東,東京,神奈川,千葉,埼玉'

  const siteTitle = title || defaultTitle
  const siteDescription = description || defaultDescription
  const siteOgImage = ogImage || defaultOgImage
  const siteKeywords = keywords || defaultKeywords

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {/* OGP */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteOgImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteOgImage} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Noindex */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* その他のSEO最適化 */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="author" content="SmartWeb Works" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  )
}