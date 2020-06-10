<template>
  <div class="goods">
    <div class="left-menu-wrapper">
      <left-menu :positionY="positionY"
                 :foodScroll="foodScroll"></left-menu>
    </div>    
    <div class="right-menu-wrapper" ref="foodMenu">
      <right-menu @foodDetail="foodDetail"></right-menu>
    </div> 
    <shopping-cart></shopping-cart>    
    <food-detail v-show="showFoodDetail" 
                 :food="food"
                 @backToMenu="backToMenu"></food-detail>
  </div>
</template>

<script>
import LeftMenu from "views/goods/childComps/leftMenu/LeftMenu"
import RightMenu from "views/goods/childComps/rightMenu/RightMenu"
import ShoppingCart from 'views/goods/childComps/shoppingCart/ShoppingCart'
import FoodDetail from "views/goods/childComps/foodDetail/FoodDetail"

import BScroll from "better-scroll"

export default {
  name:'Goods',
  components:{
    LeftMenu,
    RightMenu,    
    ShoppingCart,
    FoodDetail
  }, 
  data(){
    return {
      foodScroll: null,
      positionY: 0,
      //在right-menu中点击的商品详情
      food: {},
      showFoodDetail: false
    }
  },
  computed:{},
  created(){    
    this.$nextTick(()=>{
      this.initScroll()
    })
    
  },
  methods:{
    initScroll(){      
      this.foodScroll = new BScroll(this.$refs.foodMenu, {
        probeType: 3,
        click: true  
      })
      this.foodScroll.on("scroll", pos=>{
        this.positionY = Math.abs(Math.round(pos.y));        
      })
    },
    //接受商品信息供商品详情组件使用
    foodDetail(food){
      this.food = food
      this.showFoodDetail = true
    },
    //从详情页返回菜单
    backToMenu(){
      this.showFoodDetail = false
    }
  }   
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.goods
  display flex
  .left-menu-wrapper
    width 80px
    flex-shrink 0
  .right-menu-wrapper
    flex-grow 1 
    height 493px
    overflow hidden

</style>