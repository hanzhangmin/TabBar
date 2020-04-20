import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const home = () =>
    import ('components/routerComponents/home')
const sort = () =>
    import ('components/routerComponents/sort')
const shop = () =>
    import ('components/routerComponents/shop')
const profile = () =>
    import ('components/routerComponents/profile')

const routes = [{
    path: '',
    redirect: "/home"
}, {
    path: '/home',
    component: home,
    meta: '首页'
}, {
    path: '/sort',
    component: sort,
    meta: '分类'
}, {
    path: '/shop',
    component: shop,
    meta: '购物车'
}, {
    path: '/profile',
    component: profile,
    meta: '我的'
}];

var router = new VueRouter({
    routes,
    mode: 'history',
})


const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}


export default router