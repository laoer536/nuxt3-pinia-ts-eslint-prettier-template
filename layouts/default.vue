<script setup lang="ts">
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
useDark()
</script>

<template>
  <div id="app">
    <div>
      <base-header />
      <slot />
    </div>
  </div>
</template>

<style lang="scss"></style>
