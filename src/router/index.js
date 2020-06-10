import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Goods = () => import('views/goods/Goods')
const Comments = () => import('views/comments/Comments')
const Seller = () => import('views/seller/Seller')

const routes = [
  {
    path: '',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/comments',
    component: Comments
  },
  {
    path: '/seller',
    component: Seller
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
