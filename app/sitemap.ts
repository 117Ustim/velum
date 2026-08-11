import type { MetadataRoute } from 'next';
import { siteUrlString } from './seo/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrlString,
      changeFrequency: 'monthly',
      priority: 1
    }
  ];
}
