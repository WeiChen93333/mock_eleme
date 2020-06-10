<template>
  <div class="shopping-cart">
    <transition name="show">
      <div class="cart-content-wrapper" 
         :class="{show: isShow}"
         v-show="moveShow"
         ><cart-content></cart-content>
      </div>
    </transition>        
    <cart-bar @showCartContent="showCartContent"></cart-bar>
  </div>
</template>

<script>
import CartContent from "./childComps/CartContent"
import CartBar from "./childComps/CartBar"

import { mapState } from "vuex"

export default {
  name:'ShoppingCart',
  components:{
    CartContent,
    CartBar
  },
  props:{},
  data(){
    return {
      isShow: false
    }
  },
  watch:{},
  computed:{
    ...mapState(["cartItems"]),
    moveShow(){
      if(this.cartItems.length !== 0){
        return this.isShow
      }      
    }
  },
  methods:{
    showCartContent(){
      if(this.cartItems.length !== 0){
        this.isShow = !this.isShow
      }      
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopping-cart  
  position fixed
  bottom 0
  left 0
  right 0 
  z-index 2  
  .show-enter-active, .show-leave-active
    transition all 0.4s
  .show-enter, .show-leave-to
    bottom -600px
  .show-leave, .show-enter-to   
    bottom 46px
  .cart-content-wrapper
    z-index -1
    position absolute
    left 0
    right 0
    &.show
      bottom 46px
  
  
</style>