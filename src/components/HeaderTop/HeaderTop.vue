<template>
    <header class="header">
        <!-- 插槽占位 -->
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </header>     
</template>
<script>
export default {
    props: {
        title:String
    }
}
</script>
<style lang="less" scoped>
.header {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    height: 45px;
    width: 100%;
    background-color: #02a774;
}
.header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
   
}
.header .header_title .header_title_text {
    font-size: 20px;
    color: #fff;
    display: block;
}

</style>