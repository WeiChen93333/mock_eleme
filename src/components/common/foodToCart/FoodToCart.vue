<template>
  <div class="food-to-cart">
    <transition name="remove-circle">
      <i class="icon-remove_circle_outline"
         :class="{show: moveShow}"
         v-if="isShow"
         @click="clickToDecrease">
      </i>
    </transition>   
    <span class="count" v-show="isShow">{{food.count}}</span>
    <i class="icon-add_circle"
       @click="clickToAdd"></i>         
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name:'FoodToCart',
  components:{},
  data(){
    return {
      
    }
  },
  props:{
    food: {
      type: Object,
      default(){
        return {}
      }
    },   
  },  
  computed:{  
    ...mapState(["cartItems"]),
    isShow(){
      if(this.food.count >= 1){
        return true
      }
    },
    moveShow(){
      return this.isShow
    }
  },
  methods:{
    clickToDecrease(event){
      this.food.count--
      if(this.food.count == 0){
        this.$store.commit("removeFromCart")
      }
      event.stopPropagation()
    },
    clickToAdd(event){      
      if(!this.food.count){       
        this.$set(this.food, "count", 1) 
        this.$store.commit("addToCart", this.food)         
      }else{        
        this.$set(this.food, "count", ++this.food.count)        
      } 
      event.stopPropagation()      
    }
  } 
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.food-to-cart
  // width 48px  
  position relative  
  font-size 0
  .remove-circle-enter-active
    transition all 2s
  .remove-circle-enter
    right 48px 
  .icon-add_circle, .icon-remove_circle_outline
    display inline-block
    width 24px
    height 24px
    font-size 24px          
    vertical-align top    
  .icon-remove_circle_outline
    position absolute 
    &.show
      right 48px
  .count       
    display inline-block
    width 24px
    height 24px
    font-size 10px
    text-align center
    color rgb(147, 153, 159)
    line-height 24px
    vertical-align top
</style>