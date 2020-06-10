import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入公共样式
import './common/stylus/index.styl'
import "assets/css/base.css"

//引入mockjs
import 'mock/mock.js'

//引入公共filters
// import { moneySymbol } from "common/filters/filters"
// Vue.filter("moneySymbol", moneySymbol)
import * as filters from "common/filters/filters"
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//引入事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
