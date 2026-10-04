import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coupdepaule.fr';
  const now = new Date();

  const routes = [
    '',
    '/diagnostic',
    '/financements',
    '/financements/annuaire',
    '/financements/methodologie',
    '/benevoles',
    '/a-propos',
    '/mentions-legales',
    '/confidentialite',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' || route === '/financements' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/financements') || route === '/diagnostic' ? 0.8 : 0.5,
  }));
}
