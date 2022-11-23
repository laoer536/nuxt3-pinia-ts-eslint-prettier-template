<script setup lang="ts">
let mode = useColorMode()
function changeMode() {
  if (mode.value === 'dark') {
    mode.preference = 'light'
  } else {
    mode.preference = 'dark'
  }
}
</script>

<template>
  <div>
    <button class="cursor-pointer" @click="changeMode">
      <div i="ri-sun-line dark:ri-moon-line" />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
