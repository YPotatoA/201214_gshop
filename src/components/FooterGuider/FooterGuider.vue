<template>
    <div class="footer_guide">
        <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
            <span class="item_icon">
                <i class="iconfont icon-u"></i>
            </span>
            <span>外卖</span>
        </span>
         <span class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
            <span class="item_icon">
                <i class="iconfont icon-sousuo1"></i>
            </span>
            <span>搜索</span>
        </span>
         <span class="guide_item" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </span>
         <span class="guide_item" :class="{on: '/profile'===$route.path}"  @click="goTo('/profile')">
            <span class="item_icon">
                <i class="iconfont icon-geren1"></i>
            </span>
            <span>我的</span>
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        goTo(path) {
            this.$router.replace(path)
        }
    }
}
</script>


<style lang="less" scoped>

.footer_guide {
    // top-border
    position: relative;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
}
.footer_guide a {
    text-decoration: none;
}
.footer_guide:before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
    transform: scaleY(.5);
}
.guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;
   
}
.guide_item.on {
    color: #02a774;
}
.guide_item span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
}
.iconfont {
    font-size: 22px;
}

// .fa {
//   display: inline-block;
//   font: normal normal normal 14px/1 FontAwesome;
//   font-size: inherit;
//   text-rendering: auto;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }
// .fa-search:before {
//   content: "\f002";
// }
// .fa-search-plus:before {
//   content: "\f00e";
// }
// .fa-search-minus:before {
//   content: "\f010";
// }

</style>