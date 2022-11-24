<script setup lang="ts"></script>

<template>
  <div>
    <button class="cursor-pointer" @click="toggleDark()">
      <!--toggleDark已经自动导入 在/composables中-->
      <div i="ri-sun-line dark:ri-moon-line" />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
