// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  modules: [
    ['@pinia/nuxt'],
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '', //适应unocss tailwindcss 模式
      },
    ],
  ],
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
