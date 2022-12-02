<script setup lang="ts">
definePageMeta({
  name: '首页',
})
import { useUserStore } from '~/stores/user'
const router = useRouter()
const userStore = useUserStore()
</script>
<template>
  <div>
    <!--    <Head>-->
    <!--      <Title>哈哈哈哈</Title>-->
    <!--      <Style type="text/css" children="body { background-color: green; }" />-->
    <!--    </Head>-->
    <div class="mt-4">
      <button @click="router.push('/about')">➡️about</button>
      <button @click="router.push('/promise')">➡️promise(md-解析)</button>
    </div>
    <br />
    <div class="mt-4 flex items-center gap-6">
      <button @click="userStore.changeAge">点击会加1：{{ userStore.age }}</button>
      <div>doubleNum：{{ userStore.doubleAge }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
