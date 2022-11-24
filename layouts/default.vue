<script setup lang="ts">
import { useDark } from '@vueuse/core'
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
