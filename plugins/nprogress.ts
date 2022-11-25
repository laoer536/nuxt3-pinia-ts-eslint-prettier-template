// @ts-ignore
import NProgress from 'nprogress'
import type { Router } from 'vue-router'
export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  const router = nuxtApp.$router as Router
  router.beforeEach((to, from) => {
    if (to.path !== from.path) NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
})
