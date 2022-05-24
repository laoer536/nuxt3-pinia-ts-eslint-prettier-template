<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter();
function goAbout(){
    router.push('/about')
}
</script>
<template>
  <div>
      <!--<NuxtWelcome />-->
      <button @click="goAbout">点击跳转到about</button>
  </div>
</template>
