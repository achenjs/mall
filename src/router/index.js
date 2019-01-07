import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import homePage from '@/views/homePage'
import productdetail from '@/views/productdetail'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/productdetail',
            name: 'productdetail',
            component: productdetail
        }
    ]
})
