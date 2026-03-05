// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/dumpe/', // Must start and end with a slash
    head: {
      htmlAttrs: {
        lang: 'ru', // Set the default language here (e.g., 'en', 'es', 'fr')
      },
      title: 'Промышленное оборудование и автоматизация', // Default page title
      meta: [
        { charset: 'utf-8' },
        {
          name: 'description',
          content: 'Компания DAMPE — инжиниринговое предприятие, поставщик промышленного оборудования и эксперт в автоматизации и роботизации производств.'
        },
        {
          name: 'og:url',
          content: 'This is the default description for my Nuxt 4 application.'
        },
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'og:title',
          content: 'Промышленное оборудование и автоматизация'
        },
        {
          name: 'og:description',
          content: 'Компания DAMPE — инжиниринговое предприятие, поставщик промышленного оборудования и эксперт в автоматизации и роботизации производств.'
        },
        {
          name: 'og:image',
          content: 'This is the default description for my Nuxt 4 application.'
        }
      ],
      link: [
        // You can add global links here, e.g., favicon
        { rel: 'icon', type: 'image/svg', href: '/icon.svg' }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  fonts: {
    defaults: {
      weights: [400, 700],
      styles: ['normal'],
      subsets: [
        'cyrillic-ext',
        'cyrillic',
      ]
    },
  }
})