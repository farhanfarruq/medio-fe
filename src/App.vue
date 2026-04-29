<script setup lang="ts">
import { useHead } from '@unhead/vue';

// Global SEO Setup
useHead({
  titleTemplate: (title) => title ? `${title} | Optik Medio` : 'Optik Medio | Curated Lens Experience',
  meta: [
    { name: 'description', content: 'Optik Medio provides a curated lens experience with premium eyewear and professional eye care services.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Optik Medio' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'canonical', href: () => window.location.href },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'OpticalBusiness',
        'name': 'Optik Medio',
        'description': 'Optik Medio provides a curated lens experience with premium eyewear and professional eye care services.',
        'url': 'https://optikmedio.com',
        'telephone': '+628123456789', // Example, should be dynamic if possible
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Jl. Contoh No. 123',
          'addressLocality': 'Jakarta',
          'addressRegion': 'DKI Jakarta',
          'postalCode': '12345',
          'addressCountry': 'ID'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'opens': '09:00',
            'closes': '21:00'
          }
        ]
      })
    }
  ]
});
</script>

<template>
  <router-view />
</template>

<style scoped>
</style>
