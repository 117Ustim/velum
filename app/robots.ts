import type { MetadataRoute } from 'next';
import { siteUrlString } from './seo/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/api/']
    },
    sitemap: `${siteUrlString}/sitemap.xml`
  };
}
