<template>
    <section class="search">
        <!-- <header class="header">
            <a class="header_title">
                <span class="header_title_text">搜索</span>
            </a>
        </header> -->
        <HeaderTop title="搜索"></HeaderTop>
        <form action="#" class="search_form">
            <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
            <input type="submit" name="submit" class="search_submit">
        </form>
    </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    // 将上面引入的映射成标签
    components: {
        HeaderTop
    }
}
</script>

<style lang="less" scoped>
.search {
    width: 100%;
}
.search .header {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    height: 45px;
    width: 100%;
    background-color: #02a774;
}
.search .header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    color: #fff;
    text-align: center;

}
.search .header .header_title .header_title_text {
    font-size: 22px;
    color: #fff;
    display: block;
}
.search .search_form {
    *zoom: 1;
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;
}
.search .search_form:after {
    content: "";
    display: block;
    clear: both;
}
.search .search_form input {
    height: 35px;
    padding: 0 4px;
    border-radius: 2px;
    font-weight: bold;
    outline: none;
}
.search .search_form input.search_input {
    float: left;
    width: 79%;
    border: 4px solid #f2f2f2;
    font-size: 14px;
    color: #333;
    background-color: #f2f2f2;
}
.search .search_form input.search_submit {
    float: right;
    width: 18%;
    border: 4px solid #02a774;
    font-size: 16px;
    color: #fff;
    background-color: #02a774;
}
</style>