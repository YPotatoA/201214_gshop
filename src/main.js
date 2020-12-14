// 入口js文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../static/css/iconfont.css'
import '../static/css/global.css'
new Vue({
    el:'#app',
    render:h => h(App),
    router
})

