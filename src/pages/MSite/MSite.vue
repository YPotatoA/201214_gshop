<template>
    <section class="msite">
        <!-- 首页头部 -->
        <!-- <header class="header">
            <span class="header_search">
                <i class="iconfont icon-sousuo1"></i>
            </span>
            <span class="header_title">
                <span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
            </span>
            <span class="header_login">
                <span class="header_login_text">登录|注册</span>
            </span>
        </header> -->
        <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
             <span class="header_search" slot="left">
                <i class="iconfont icon-sousuo1"></i>
            </span>
            <span class="header_login" slot="right">
                <span class="header_login_text">登录|注册</span>
            </span>
        </HeaderTop>
        <!-- 首页导航 -->
        <nav class="msite_nav">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg" />
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpg">
                            </div>
                            <span>商超便利</span>
                        </a>
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/3.jpg">
                            </div>
                            <span>美食</span>
                        </a>
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/4.jpg">
                            </div>
                            <span>简餐</span>
                        </a>
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/5.jpg">
                            </div>
                            <span>新店特惠</span>
                        </a>
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/6.jpg">
                            </div>
                            <span>准时达</span>
                        </a>
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/7.jpg">
                            </div>
                            <span>预定早餐</span>
                        </a>
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/8.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/9.jpg">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/10.jpg">
                            </div>
                            <span>商超便利</span>
                        </a>
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/11.jpg">
                            </div>
                            <span>美食</span>
                        </a>
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/12.jpg">
                            </div>
                            <span>简餐</span>
                        </a>
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/13.jpg">
                            </div>
                            <span>新店特惠</span>
                        </a>
                         <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/14.jpg">
                            </div>
                            <span>准时达</span>
                        </a>
                        <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg">
                            </div>
                            <span>预定早餐</span>
                        </a>
                        <a href="javascript: ;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                    </div>
                </div>
                <!-- Add pagination -->
                <div class="swiper-pagination"></div>   
            </div>
        </nav>
        <!-- 首页附近商家 -->
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont icon-option"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
            <ShopList></ShopList>
        </div>
    </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
// import Swiper from '_swiper@5.4.5@swiper'
// import '_swiper@5.4.5@swiper/css/swiper.min.css'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {

    mounted() {
        //创建一个swiper对象实现轮播
        var mySwiper = new Swiper('.swiper-container',{
            loop: true,//可以循环轮播
            pagination: {
                el: '.swiper-pagination',
            },
           
        })
    },
    // 将上面引入的映射成标签
    components: {
        HeaderTop,
        ShopList
    }
}
</script>

<style lang="less" scoped>

.msite{
    width: 100%;
}
// .msite .header {
//     position: fixed;
//     z-index: 100;
//     left: 0;
//     top: 0;
//     height: 45px;
//     width: 100%;
//     background-color: #02a774;
// }

.msite .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
}
.msite .header_search .icon-sousuo1 {
    font-size: 25px;
    color: #fff;
}
// .msite .header .header_title {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 50%;
//     color: #fff;
//     text-align: center;
//     margin-left: -5%;
// }
// .msite .header .header_title .header_title_text {
//     font-size: 20px;
//     color: #fff;
//     display: block;
// }
.msite .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
}
.msite .header_login .header_login_text {
    color: #fff;
}
.msite .msite_nav {
    position: relative;
    margin-top: 45px;
    height: 200px;
    background: #fff;
}
.msite .msite_nav:before {
    content: "";
    position: absolute;
    z-index: 200;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
    transform: scaleY(0.5);
}
.msite .msite_nav .swiper-container {
    width: 100%;
    height: 100%;
}
.msite .msite_nav .swiper-container .swiper-wrapper {
    width: 100%;
    height: 100%;
}
.msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}
.msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food {
    width: 25%;
}
.msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #666;
}
.msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container img {
    display: inline-block;
    width: 50px;
    height: 50px;
}
.msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #666;
}
.msite .msite_nav .swiper-container .swiper-pagination >span.swiper-pagination-bullet-active{
    background-color: #02a774;
}
.msite .msite_shop_list {
    position: relative;
    margin-top: 10px;
    background: #fff;
}
.msite .msite_shop_list::before {
    content: "";
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
}
.msite .msite_shop_list .shop_header {
    padding: 10px 10px 0;
}
.msite .msite_shop_list .shop_header .icon-option {
    font-size: 10px;
    margin-left: 3px;
    color: #999;
    margin-right: 5px;
}
.msite .msite_shop_list .shop_header .shop_header_title {
    color: #999;
    font-size: 14px;
    line-height: 20px;
   
}
</style>