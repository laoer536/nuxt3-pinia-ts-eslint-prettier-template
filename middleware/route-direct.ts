// 命名为.global后缀 那么将会在页面路由改变时运行 否则需要在组件代码里面注册使用
// import {navigateTo} from "#app";

export default defineNuxtRouteMiddleware(({ path }) => {
  // console.log(to, from);
  if (path === '/') {
    return navigateTo('/home')
  }
})
