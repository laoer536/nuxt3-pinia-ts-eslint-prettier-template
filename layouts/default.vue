<script setup lang='ts'>
import {useUserStore} from "~/stores/user";
const userStore = useUserStore();
</script>

<template>
    <div>
        <base-header/>
        通用布局页，default.vue:全部页面都会应用 具名的在使用时需要用到NuxtLayout并指定名字
        姓名：{{userStore.userName}}
        <slot />
    </div>
</template>

<style scoped>
</style>
