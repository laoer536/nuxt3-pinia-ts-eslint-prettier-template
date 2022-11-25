<script setup lang="ts">
definePageMeta({
  name: '首页',
})
import { useUserStore } from '~/stores/user'
const router = useRouter()
const userStore = useUserStore()
function goAbout() {
  router.push('/about')
}
</script>
<template>
  <div>
    <!--    <Head>-->
    <!--      <Title>哈哈哈哈</Title>-->
    <!--      <Style type="text/css" children="body { background-color: green; }" />-->
    <!--    </Head>-->
    <button @click="goAbout">点击跳转到about</button>
    <button @click="userStore.changeAge">点击会加1：{{ userStore.age }}</button>
    <div>doubleNum：{{ userStore.doubleAge }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
