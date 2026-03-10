const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://darkslateblue-sheep-899946.hostingersite.com';

const routes = [
  '/',
  '/servicios/cumplimiento',
  '/servicios/patrimonial',
  '/servicios/societario',
  '/servicios/gobierno-corporativo'
];

export default function sitemap() {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.85
  }));
}
