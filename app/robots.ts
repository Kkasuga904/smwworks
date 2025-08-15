import { MetadataRoute } from 'next'
import { config } from '@/lib/config'

// 地域名変更時は自動的にrobots.txtも更新されます
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${config.siteUrl}/sitemap.xml`,
  }
}