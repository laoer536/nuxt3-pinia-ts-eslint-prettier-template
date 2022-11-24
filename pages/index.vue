<template>
  <div>
    <button @click="router.push('/home')">点击跳转到home</button>
  </div>
</template>

<script lang="ts" setup>
// definePageMeta({
//   layout: false, //禁用layout
// })
const router = useRouter()
</script>
