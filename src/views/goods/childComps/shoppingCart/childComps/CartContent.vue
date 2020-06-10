<template>
  <div class="cart-content">
    <div class="title-box">
      <span class="title">购物车</span>
      <span class="clear" @click="clearCart">清空</span>
    </div>
    <ul class="foods">
      <li class="food border-1px" 
          v-for="(item, index) of cartItems"
          :key="index">
        <div class="name">{{item.name}}</div>
        <div class="price-count">
          <span class="price">&yen;{{item.price}}</span>
          <div class="select-wrapper"><food-to-cart :food="item"></food-to-cart></div>          
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import FoodToCart from "components/common/foodToCart/FoodToCart"
import { mapState } from "vuex"
export default {
  name:'CartContent',
  components:{
    FoodToCart
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{
    ...mapState(["cartItems"])
  },
  methods:{
    clearCart(){
      this.$store.commit("clearCart")
    }
  }
 
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
.cart-content  
  background-color white 
  .title-box    
    display flex
    justify-content space-between  
    padding 0 18px  
    background-color #f3f5f7
    line-height 40px    
    font-weight 200
    border-1px(rgb(7, 17, 27, .1))
    &::after
      left 0
    .title
      font-size 14px
      color rgb(7, 17, 27)
    .clear      
      font-size 12px
      color rgb(0, 160, 220)
  .foods
    padding 0 18px
    .food
      display flex
      justify-content space-between      
      padding 12px 0
      border-1px(rgb(7, 17, 27, .1))
      .name
        font-size 14px
        color rgb(7, 17, 27)
        line-height 24px
      .price-count
        height 24px
        .price
          display inline-block          
          font-size 14px
          font-weight 700
          color #f01414
          line-height 24px
        .select-wrapper
          width 60px
          margin-left 24px
          display inline-block
          padding-left 12px
          color rgb(7, 17, 27)
          vertical-align top
</style>