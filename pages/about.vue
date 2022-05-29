<script lang="ts">
export default {
    //单页面配置head
    head: {
        title: `前端小喵`,
    }
}
</script>
<script setup lang='ts'>
const base_url = import.meta.env.VITE_API_BASE_URL;
</script>

<template>
    <div>
        about页面
        baseUrl:{{ base_url }}
    </div>
</template>

<style lang="less" scoped>

</style>
