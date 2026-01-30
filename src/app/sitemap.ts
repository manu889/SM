import { MetadataRoute } from 'next';
import { popularRoutes } from '@/data/routes';
import { tourPackages } from '@/data/tours';

const baseUrl = 'https://smtoursandtravel.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routes`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vehicles`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Service pages
  const services = [
    'airport-taxi-mysore',
    'corporate-taxi-mysore',
    'local-sightseeing-taxi-mysore',
    'outstation-taxi-mysore',
    'pilgrimage-taxi-mysore',
    'tempo-traveller-mysore',
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/services/${s}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Route pages
  const routePages: MetadataRoute.Sitemap = popularRoutes.map((r) => ({
    url: `${baseUrl}/routes/${r.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Tour pages
  const tourPages: MetadataRoute.Sitemap = tourPackages.map((t) => ({
    url: `${baseUrl}/tours/${t.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...routePages, ...tourPages];
}
