<template>
    <div id="app">
        <router-view ref=""/>
        <FooterGuider v-show="$route.meta.showFooter" />
    </div>
</template>

<script>
import FooterGuider from './components/FooterGuider/FooterGuider.vue'
export default {
    components: {
        FooterGuider
    }
}
</script>

<style lang="less" scoped>
#app {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: relative;
}

</style>

