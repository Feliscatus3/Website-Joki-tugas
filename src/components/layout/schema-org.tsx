'use client';

import { siteConfig } from '@/config/site';

export default function SchemaOrg() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JokiGoFast',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.github,
      siteConfig.links.facebook,
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+621385222903',
      contactType: 'customer service',
    },
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Jasa Tugas',
    provider: {
      '@type': 'Organization',
      name: 'JokiGoFast',
    },
    description: 'Layanan cepat dan profesional untuk membantu tugas PKKMB, OSPEK, dan kuliah. Cocok untuk mahasiswa baru yang ingin serba cepat dan tanpa ribet.',
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, serviceSchema]),
      }}
    />
  );
}