// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Tada Invoice Dashboard',
      meta: [
        { name: 'description', content: 'This is Tada Invoice dashboard' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  css: [
    '~/assets/scss/index.scss'
  ],
  modules: [
    '@pinia/nuxt'
  ]
})
