<template>
  <ul class="left-menu">
    <li class="left-menu-item border-1px"
        :class="{active: currentIndex == index}"
        v-for="(item, index) in goods"
        :key="index"
        @click="clickSwitch(index)">{{item.name}}</li>   
  </ul>
</template>

<script>
import { mapState } from "vuex"
export default {
  name:'LeftMenu',
  components:{},
  props:{},
  data(){
    return {      
      offsetTops: []
    }
  }, 
  props:{
    foodScroll: {},
    positionY: Number
  },
  computed:{
    ...mapState(["goods"]),
    currentIndex(){      
      for(let i=0; i<this.offsetTops.length; i++){
        let height1 = this.offsetTops[i];
        let height2 = this.offsetTops[i+1];
        if(!height2 || this.positionY >= height1 && this.positionY < height2){  
          return i
        }
      }
    }
  },
  created(){
    this.$bus.$on("tops", offsetTops=>{
      this.offsetTops = offsetTops     
    })
  },
  methods:{
    clickSwitch(index){     
      this.foodScroll.scrollTo(0, -this.offsetTops[index])      
    }
  },
  destroyed(){
    this.$bus.$off("tops")
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
.left-menu  
  .left-menu-item    
    height 54px
    padding 0 12px     
    font-size 12px    
    font-weight 200
    line-height 54px
    background-color #f3f5f7
    border-1px(rgb(7, 17, 27, .1))
    &::after
      width 56px
      left 12px
    &.active
      background-color white
      border-none()
  
</style>