import { defineNuxtConfig } from "nuxt";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    link: [{ rel: "icon", href: "/favicon.ico" }],
  },
  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      types: ["@pinia/nuxt"],
    },
  },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/styles/normalize.css", "~/assets/styles/app.less"],
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://xxxxxxxx",
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  },
});
