import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seller: {},
    goods: {},
    ratings: {},
    classMap: [],
    cartItems: []
  },
  mutations: {
    sellerData(state, payload){
      state.seller = payload
    },
    goodsData(state, payload){
      state.goods = payload
    },
    ratingsData(state, payload){
      state.ratings = payload
    },
    //supports下的活动的class的集合
    classMap(state, payload){
      state.classMap = payload
    },
    //购物车各项商品的集合--增加新的商品
    addToCart(state, payload){     
      state.cartItems.push(payload)       
    },
    //删除商品
    removeFromCart(state){
      state.cartItems = state.cartItems.filter(item => item.count)
    },
    //清除购物车
    clearCart(state){
      state.cartItems.forEach(item => Vue.set(item, "count", 0))
      state.cartItems =[]
    }
  },
  actions: {

  },
  modules: {
  }
})
