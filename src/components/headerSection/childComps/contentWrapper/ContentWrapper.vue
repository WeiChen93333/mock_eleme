<template>
<!-- header部分内容区 -->
    <div class="content-wrapper">
        <div class="avatar">
            <img width="64" height="64" :src="seller.avatar">            
        </div>         
        <div class="content">
            <div class="title">
                <span class="brand"></span>
                <span class="seller-name">{{seller.name}}</span>
            </div>
            <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
            <div class="supports" v-if="seller.supports" @click="showDetail">
                <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                <span class="text">{{seller.supports[0].description}}</span>
            </div>
        </div>        
        <div class="supports-count" v-if="seller.supports">
            <span class="count">{{count}}个</span>
            <i class="icon-keyboard_arrow_right"></i>          
        </div> 
        <span>{{seller.name}}</span>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name:'ContentWrapper',
  components:{},    
  computed: {
    ...mapState(["seller", "classMap"]),
    count(){
    return this.seller.supports.length
    }
  },
  methods:{
      showDetail(){
          this.$emit("showDetail")
      }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
.content-wrapper
    background-color rgba(7, 17, 27, .5)
    height 106px
    padding: 24px 12px 18px 24px  
    position relative  
    .avatar      
      display inline-block      
      border-radius 4px
      overflow hidden  
      vertical-align top
    .content
      display inline-block      
      margin-left 16px      
      .title
        margin-top 2px             
        .brand
          display inline-block
          width 30px
          height 18px          
          bg-image("brand")
          background-size 30px 18px
          background-repeat no-repeat
          vertical-align top        
        .seller-name
          font-size 16px          
          font-weight bold
          line-height 18px
          margin-left: 6px          
      .description
        margin-top 8px
        font-size 12px
        font-weight 200
        line-height 12px
      .supports
        margin-top 10px            
        .icon
          margin-right 4px
          display inline-block
          width 12px
          height 12px          
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image("decrease_1")            
          &.discount
            bg-image("discount_1")
          &.special
            bg-image("special_1")
          &.invoice
            bg-image("invoice_1")
          &.guarantee
            bg-image("guarantee_1")         
        .text
          font-size 10px
          font-weight 200
          line-height 12px
          vertical-align top
    .supports-count      
      widith 36px
      height 24px
      line-height 12px    
      padding 7px 8px      
      background-color rgba(0, 0, 0, .2)      
      position absolute
      right 12px
      bottom 14px
      border-radius 14px
      .count
        font-size 10px
        font-weight 200
        margin-right 2px
        vertical-align top
      .icon-keyboard_arrow_right
        font-size 10px      
</style>