// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  modules: [['@pinia/nuxt']],
  css: ['~/assets/styles/normalize.css', '~/assets/styles/app.scss'],
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://xxxxxxxx',
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  },
})
