// https://nuxt.com/docs/api/configuration/nuxt-config
import { loadEnv } from 'vite'
export default () => {
  const curEnv = loadEnv(process.env.NODE_ENV as string, process.cwd())
  console.log(curEnv)
  return defineNuxtConfig({
    app: {
      head: {
        title: 'nuxt3-pinia-ts-eslint-prettier-template',
        link: [{ rel: 'icon', href: 'https://nuxt.com/icon.png' }],
        meta: [
          { property: 'og:title', content: 'nuxt3-pinia-ts-eslint-prettier-template' },
          { property: 'og:url', content: 'https://laoer536.github.io/nuxt3-pinia-ts-eslint-prettier-template/' },
          {
            property: 'og:description',

            content: '哈哈哈哈 点击浏览 nuxt3-pinia-ts-eslint-prettier-template项目online',
          },
          {
            property: 'og:image',
            content: 'https://nuxt.com/icon.png',
          },
        ],
      },
      baseURL: curEnv.VITE_PUBLIC_PATH,
      layoutTransition: { name: 'layout', mode: 'out-in' },
      pageTransition: { name: 'page', mode: 'out-in' },
    },
    // ssr:false, //构建静态
    typescript: {
      strict: true,
      // typeCheck: 'build',
    },
    modules: [
      [
        '@nuxt/content',
        {
          highlight: {
            theme: {
              // Default theme (same as single string)
              default: 'github-light',
              // Theme used if `html.dark`
              dark: 'github-dark',
              // Theme used if `html.sepia`
              sepia: 'monokai',
            },
          },
        },
      ],
      ['@pinia/nuxt'],
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
      ['@vueuse/nuxt'],
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
    sourcemap: process.env.NODE_ENV !== 'production',
  })
}
