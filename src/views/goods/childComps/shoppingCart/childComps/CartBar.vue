<template>
  <div class="cart-bar">
    <div class="bar-left">
      <div class="logo-wrapper" @click="showCartContent">
        <div class="logo-content" :class="notEmpty">  
          <i class="icon-shopping_cart"></i>        
        </div>
        <span class="total-count" v-show="isShow">{{totalCount}}</span>
      </div>   
      <span class="price border-right-1px">&yen;{{totalPrice}}</span>   
      <span class="delivery-price">另需配送费&yen;4元</span>
    </div>
    <div class="bar-right" :class="payOrder">{{enoughOrNot}}</div>
  </div>
</template>
<script>
import { mapState } from "vuex"
export default {
  name:'CartBar',
  components:{},
  props:{},
  data(){
    return {
    }
  },  
  computed:{
    ...mapState(["cartItems"]),
    notEmpty(){
      if(this.cartItems.length !== 0){
        return "not-empty"
      }      
    },
    totalCount(){
      return this.cartItems.length
    },
    isShow(){
      return this.cartItems.length
    },
    totalPrice(){
      if(this.cartItems.length !== 0){
        let result = 0
        for(let item of this.cartItems){
          result += item.count * item.price
        }        
        return result
      }  
      return 0      
    },
    enoughOrNot(){
      if(this.totalPrice == 0){
        return "￥20起送"
      }else if(this.totalPrice < 20){
        return `还差￥${20-this.totalPrice}起送`
      }else{
       return "去结算"
      }
    },
    payOrder(){
      if(this.totalPrice >= 20){
        return "pay-order"
      }
    }
  },
  methods: {
    showCartContent(){      
      this.$emit("showCartContent")

    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
.cart-bar
  height 46px
  background-color #141d27
  display flex
  .bar-left
    flex-grow 1
    font-size 16px
    font-weight 700
    line-height 24px
    color rgba(255, 255, 255, .4)
    .logo-wrapper
      display inline-block
      width 56px
      height 56px
      margin 0 12px
      padding 6px
      border-radius 50%
      position relative
      background-color #141d27
      top -12px      
      vertical-align top
      .logo-content
        background-color rgb(43,51,59)
        color rgba(255, 255, 255, .4)
        width 44px 
        height 44px      
        border-radius 50%
        text-align center
        .icon-shopping_cart
          display inline-block
          font-size 24px          
          line-height 44px
        &.not-empty
          color white
          background-color rgb(0,160,220)
      .total-count
        position absolute
        right 0
        top 0
        display inline-block
        width 24px
        line-height 16px
        height 16px
        font-size 9px
        font-weight 700
        color rgb(255, 255, 255)
        text-align center
        padding 0 6px
        border-radius 12px
        background-color red
    .price      
      display inline-block
      padding 11px 12px  
      border-right-1px(rgba(255, 255, 255, .1))
      &::after
        height calc(100% - 22px)
    .delivery-price
      display inline-block
      padding 11px 12px      
      font-size 12px
      font-weight 500
  .bar-right
    flex-shrink 0
    background-color rgb(43,51,59)
    width 105px
    padding 11px 8px
    color rgba(255, 255, 255, .4)
    font-size 14px
    font-weight 700
    line-height 24px
    text-align center
    &.pay-order
      color white
      background-color rgb(0,160,220)
</style>