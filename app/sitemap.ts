import type { MetadataRoute } from 'next'

import { absoluteUrl } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl('/'),
      priority: 1,
    },
    {
      url: absoluteUrl('/resume'),
      priority: 0.8,
    },
  ]
}

