<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter();
function goAbout(){
    router.push('/about')
}
</script>
<template>
  <div >
      <Head>
          <Title>home</Title>
          <Meta name="description" :content="'home'" />
          <!--<Style type="text/css" children="body { background-color: green; }" />-->
      </Head>
      <button @click="goAbout">点击跳转到about</button>
  </div>
</template>

<style lang="less" scoped>
body{
    background-color: mediumslateblue;
}
</style>
