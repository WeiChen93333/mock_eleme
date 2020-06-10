<template>
  <li class="supports-item">
      <span class="icon" :class="itemClass"></span>
      <span class="text">{{itemText}}</span>
  </li>
</template>

<script>
export default {
  name:'supportsItem',
  components:{},
  props:{
      itemClass: String,
      itemText: String
  }  
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
.supports-item
  margin-top 12px
  font-size 0
  .icon    
    display inline-block
    margin-right 6px
    width 16px
    height 16px          
    background-size 16px 16px
    background-repeat no-repeat
    vertical-align top
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
    font-size 12px
    font-weight 200
    line-height 16px    
</style>