<script setup lang="ts">
definePageMeta({
  name: '关于',
})
const baseUrl = import.meta.env.VITE_API_BASE_URL
</script>

<template>
  <div>about页面 baseUrl:{{ baseUrl }}</div>
</template>

<style lang="scss" scoped></style>
