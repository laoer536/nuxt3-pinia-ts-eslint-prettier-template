// https://nuxt.com/docs/api/configuration/nuxt-config
import { loadEnv } from 'vite'
const curNpmScript = process.env.npm_lifecycle_script as string
const envName = curNpmScript.includes('--mode') ? curNpmScript.split(' ').slice(-1)[0] : process.env.NODE_ENV
export default () => {
  const curEnv = loadEnv(envName as string, process.cwd())
  console.log(curEnv)
  return defineNuxtConfig({
    app: {
      head: {
        title: 'nuxt3-pinia-ts-eslint-prettier-template',
        link: [{ rel: 'icon', href: curEnv.VITE_PUBLIC_PATH + 'favicon.ico' }],
        meta: [
          { property: 'og:title', content: 'nuxt3-pinia-ts-eslint-prettier-template' },
          { property: 'og:url', content: 'https://laoer536.github.io/nuxt3-pinia-ts-eslint-prettier-template/' },
          {
            property: 'og:description',

            content: '哈哈哈哈 点击浏览 nuxt3-pinia-ts-eslint-prettier-template项目online',
          },
          {
            property: 'og:image',
            content: curEnv.VITE_PUBLIC_PATH + 'favicon.ico',
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
        'nuxt-security',
        {
          allowedMethodsRestricter: {
            value: ['GET', 'POST', 'PUT', 'DELETE'],
          },
          // rateLimiter
          corsHandler: {
            value: {
              origin: curEnv.VITE_PUBLIC_ORIGIN,
              methods: ['GET', 'POST', 'PUT', 'DELETE'], //  | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE"
            },
          },
          // basicAuth: {
          //   value: {
          //     name: 'laoer536',
          //     pass: '19980309',
          //     enabled: true,
          //     message: '需要登陆哦',
          //   },
          // },
        },
      ],
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
    components: [
      {
        path: '~/components',
        global: true,
      },
    ],
    css: ['~/assets/styles/app.scss', '~/assets/styles/markdown.scss'],
    // postcss: {
    //   config: false,
    //   plugins: {
    //     'postcss-pxtorem': {
    //       rootValue: 100,
    //       propList: ['*'],
    //       exclude: /(node_module)/,
    //       selectorBlackList: ['.van', 'html', '.rem-ignore', '#app'],
    //     },
    //   },
    // },
    nitro: {
      devProxy: {
        '/account': { target: curEnv.VITE_API_V2URL, changeOrigin: true },
        '/api': {
          target: curEnv.VITE_API_V3URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
    sourcemap: process.env.NODE_ENV !== 'production',
  })
}
