import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // usually we don't want to index API routes
    },
    sitemap: 'https://nordicaps.vercel.app/sitemap.xml',
  };
}
