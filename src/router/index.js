// 路由  vue-router
import vue from 'vue'
import routers from 'vue-router'

vue.use(routers)

let Home = () => import('views/Home/home.vue')
let goodsinfo = () => import('views/Home/siblinges/goodsinfo.vue')


let Shop = () => import('views/Shop/shop.vue')


const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/goodsinfo', component: goodsinfo },
  { path: '/shop', component: Shop }

];

const router = new routers({
  routes,
  mode: 'history'
})

export default router;