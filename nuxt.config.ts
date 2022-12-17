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
    //       rootValue({ file }: { file: string }) {
    //         return file.includes('vant') ? 50 : 100   // 为什是50而不是官方提供的37.5？ 达到目标rootValue=100并且屏幕宽度按750作为基准 方便开发书写那么
    //   100vw/750*100=100vw/375*? ----->>> 推导出问号为50  所以这里vant的rootValue应该50 其他宽度也可以按照这种思路来  在给html设置(100vw/750*100)这个计算值作为font-size值就行了
    //  即13.3333333333vw  其他情况也如此  即实现rem自适应
    //       },
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
          //type NitroFetchRequest = Exclude<keyof InternalApi, `/_${string}` | `/api/_${string}`> | Exclude<FetchRequest, string> | string & {};
          //初步判断 代理部分已经针对/和/api/开头的地址做了如下的替换处理
          // rewrite: (path: string) => path.replace(/^\/api/, ''),  //没有这个配置
        },
      },
    },
    sourcemap: process.env.NODE_ENV !== 'production',
  })
}
