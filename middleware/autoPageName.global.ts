// 命名为.global后缀 那么将会在页面路由改变时运行 否则需要在组件代码里面注册使用
// import {navigateTo} from "#app";
// import { useHead } from '#head'
export default defineNuxtRouteMiddleware((to, from) => {
  useHead({
    title: to.name === 'index' ? 'nuxt3-pinia-ts-eslint-prettier-template' : (to.name as string),
  })
})
