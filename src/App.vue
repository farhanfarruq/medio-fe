<script setup lang="ts">
import { useHead } from '@unhead/vue';

// Global SEO Setup
useHead({
  titleTemplate: (title) => title ? `${title} | Optik Medio` : 'Optik Medio | Pengalaman Lensa Terpilih & Berkualitas',
  meta: [
    { name: 'description', content: 'Optik Medio menyediakan pilihan lensa terbaik dengan kacamata premium dan layanan perawatan mata profesional.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Optik Medio' },
    { property: 'og:image', content: '/gambar/medio.jpeg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: '/gambar/medio.jpeg' },
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
        'description': 'Optik Medio menyediakan pilihan lensa terbaik dengan kacamata premium dan layanan perawatan mata profesional.',
        'url': 'https://optik-medio-shop.vercel.app/',
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
