<template>
  <div class="detail">
    <div class="detail-wrapper">
      <div class="detail-main">
        <h1 class="name">{{seller.name}}</h1>
        <div class="star-wrapper">
           <rating-star :size="size" :score="seller.score"></rating-star>
        </div>
        <div class="title">
          <div class="line"></div>
           <div class="text">优惠信息</div>
          <div class="line"></div>
        </div>  
        <div class="supports-info-wrapper">
          <supports-info></supports-info> 
        </div>   
        <div class="title">
          <div class="line"></div>
            <div class="text">商家公告</div>
          <div class="line"></div>
        </div>   
        <div class="bulletin-content">{{seller.bulletin}}</div>  
      </div>
    </div>
    <div class="detail-close" @click="closeDetail">
      <i class="icon-close"></i>
    </div>        
  </div>     
</template>

<script>
import { mapState } from "vuex"

import SupportsInfo from "components/common/supportsInfo/SupportsInfo"
import RatingStar from "components/common/ratingStar/RatingStar"

export default {
  name:'VDetail',
  components:{
    RatingStar,
    SupportsInfo
  },
  data(){
    return {      
      size: 48
    }
  },  
  computed:{
    ...mapState(["seller"])
  },
  methods:{
    closeDetail(){
      this.$emit("closeDetail")
    }
  } 
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin";
.detail
    width 100%
    height 100%
    position fixed
    top 0
    left 0
    overflow auto    
    z-index 100
    color rgb(255, 255, 255)
    background-color rgba(7, 17, 27, .8)   
    backdrop-filter blur(10px)   
    &.fade-enter-active, &.fade-leave-active 
      transition all 0.5s
    &.fade-enter, &.fade-leave-to
      opacity 0
      background-color rgba(7, 17, 27, 0)      
    &.fade-leave, &.fade-enter-to
      opacity 1
      background-color rgba(7, 17, 27, .8)
    .detail-wrapper      
      min-height 100%
      .detail-main
        padding 64px 36px
        font-size 16px
        color rgb(255, 255, 255)
        .name
          margin 0
          text-align center
          font-size 16px
          font-weight 700
          line-height 16px
        .star-wrapper         
          height 24px
          font-size 0  
          text-align center
          padding 2.5px 0
          margin 16px auto 28px auto
        .title
          display flex
          .line
            width 30px            
            border-bottom 2px solid rgba(255, 255, 255, .2)            
            position relative
            top -8px
            flex 1
          .text     
            padding 0 12px
            font-size 16px
            font-weight 700 
        .supports-info-wrapper
          margin: 24px 12px 28px         
        .bulletin-content
          margin: 24px 12px 0
          font-size 12px
          font-weight 200
          line-height 24px        
    .detail-close 
      width 32px
      height 32px
      font-size 32px
      color rgba(255, 255, 255, .5)
      margin -64px auto 0 auto     
</style>