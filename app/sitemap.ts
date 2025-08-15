import { MetadataRoute } from 'next'
import { config } from '@/lib/config'

// SEO最適化されたサイトマップ
// Googleクローラーに各ページの重要度と更新頻度を伝える
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.ogp.url
  
  return [
    // トップページ - 最高優先度
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // お問い合わせページ - 高優先度
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // 制作実績ページ
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // サービスセクション（アンカーリンク）
    {
      url: `${baseUrl}/#services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // 料金プランセクション（アンカーリンク）
    {
      url: `${baseUrl}/#pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // プライバシーポリシーページ - 低優先度
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}