// https://nuxt.com/docs/api/configuration/nuxt-config
import { loadEnv } from 'vite'
export default () => {
  const curEnv = loadEnv(process.env.NODE_ENV as string, process.cwd())
  console.log(curEnv)
  return defineNuxtConfig({
    app: {
      head: {
        link: [{ rel: 'icon', href: '/favicon.ico' }],
      },
      baseURL: curEnv.VITE_PUBLIC_PATH,
    },
    // ssr:false, //构建静态
    typescript: {
      strict: true,
      // typeCheck: 'build',
    },
    modules: [
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
  })
}
