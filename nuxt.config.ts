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
    [
      '@unocss/nuxt',
      {
        uno: true, // enabled `@unocss/preset-uno`
        icons: {
          scale: 1.2,
          warn: true,
          cdn: 'https://esm.sh/',
        }, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        typography: true,
        // core options
        shortcuts: [],
        rules: [],
      },
    ],
  ],
  css: ['~/assets/styles/app.scss'],
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
