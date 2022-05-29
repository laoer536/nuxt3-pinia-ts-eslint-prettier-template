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
