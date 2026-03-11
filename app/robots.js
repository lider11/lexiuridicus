export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://darkslateblue-sheep-899946.hostingersite.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/.next/', '/api/']
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
