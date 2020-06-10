<template>
  <ul class="right-menu">
    <li class="right-menu-item"
        v-for="(item, index) in goods"
        :key="index"
        ref="foodSection">
      <div class="category"><h1>{{item.name}}</h1></div>      
      <ul>
        <li class="food-item border-1px"
            v-for="(fooditem, index) in item.foods"
            :key="index"
            @click="selectFood(fooditem)">        
          <img class="icon" :src="fooditem.icon">
          <div class="content">
            <p class="name">{{fooditem.name}}</p>
            <p class="description">{{fooditem.description}}</p>
            <p class="count-rating">
              <span class="sellCount">月售{{fooditem.sellCount}}份</span>
              <span class="rating">好评率{{fooditem.rating | percentageSymbol}}</span>
            </p>
            <p>
              <span class="price">&yen;{{fooditem.price}}</span>
              <span class="oldPrice" v-if="fooditem.oldPrice">&yen;{{fooditem.oldPrice}}</span>                         
            </p>
            <div class="select-wrapper"><food-to-cart :food="fooditem"></food-to-cart></div>
            
          </div>          
        </li>
      </ul>        
    </li>
  </ul>
</template>
<script>
import FoodToCart from "components/common/foodToCart/FoodToCart"
import { mapState } from "vuex"

export default {
  name:'RightMenu',   
  components: {
    FoodToCart
  },
  data(){
    return{
      offsetTops: []      
    }
  },  
  computed:{
    ...mapState(["goods"])
  },
  methods: {
    //传递商品信息供商品详情组件使用
    selectFood(food){
      this.$emit("foodDetail", food)
    }
  },
  created(){
    this.$nextTick(()=>{
      const foodSection = this.$refs.foodSection
      for(let item of foodSection){
        this.offsetTops.push(item.offsetTop-174)
      }     
      this.$bus.$emit("tops", this.offsetTops)
    })
  },
  destroyed(){
    this.$bus.$off("tops")
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
.right-menu   
  color rgb(147, 153, 159)
  .category
    background-color #d9dde1    
    line-height 26px
    & :first-child
      font-size 12px
      margin 0
      margin-left 2px
      padding-left 12px
      background-color #f3f5f7    
  .food-item
    position relative
    display flex    
    padding 18px
    border-1px(rgb(7, 17, 27, .1))
    &::after
      width calc(100% - 36px)
      left 18px      
      bottom 0
    &:last-child
      border-none()      
    .icon 
      display inline-block     
      width 80px
      height 80px
    .content
      margin 2px 0 0 10px         
      .name
        font-size 14px
        color rgb(7, 17, 27)
        line-height 14px
      .description, .count-rating
        margin 8px 0
        font-size 10px
        line-height 10px
      .sellCount
        margin-right 12px
      .price
        font-size 14px
        color rgb(240, 20, 20)
        font-weight 700
        line-height 24px
      .oldPrice
        margin-left 8px
        font-size 10px
        font-weight 700
        line-height 24px
        text-decoration line-through 
      .select-wrapper
        position absolute
        right 18px
        bottom 18px 

</style>