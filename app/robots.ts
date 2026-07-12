import type { MetadataRoute } from 'next'
import { env } from '@/lib/env'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/demo/transfer', '/demo/insights', '/demo/cards', '/demo/security'],
      },
    ],
    sitemap: `${env.appUrl}/sitemap.xml`,
  }
}
