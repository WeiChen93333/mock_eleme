<template>
  <div class="rating-star">
      <span v-for="(item, index) in itemClasses" :key="index" :class="[sizeFormat, item]"></span>
  </div>
</template>

<script>
export default {
  name:'RatingStar',
  components:{},
  props:{
      size: Number,
      score: Number
  },  
  computed:{
      sizeFormat(){
          return "star" + this.size + "_"
      },
      itemClasses(){
          let result = [];
          const length = 5;
          const cls_on = "on";
          const cls_half = "half";
          const cls_off = "off";
          let score = Math.floor(this.score*2)/2;
          let integar = Math.floor(score)
          for(let i=0; i<integar; i++){
              result.push(cls_on)
          }
          let hasDecimal = score%1 !== 0
          if(hasDecimal){
              result.push(cls_half)
          }
          while(result.length < length){
              result.push(cls_off)
          }
          return result



      }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
.rating-star
  font-size 0  
  .star48_
    margin-right 22px
    display inline-block
    width 20px
    height 19px
    background-size 20px 19px
    background-repeat no-repeat
    &.on
      bg-image("star48_on")
    &.half
      bg-image("star48_half")
    &.off
      bg-image("star48_off")
  .star36_
    margin-right 6px
    display inline-block
    width 15px
    height 14.5px
    background-size 15px 14.5px
    background-repeat no-repeat
    &.on
      bg-image("star36_on")
    &.half
      bg-image("star36_half")
    &.off
      bg-image("star36_off")
  .star24_
    margin-right 3px
    display inline-block
    width 10px
    height 9.5px
    background-size 10px 9.5px
    background-repeat no-repeat
    &.on
      bg-image("star24_on")
    &.half
      bg-image("star24_half")
    &.off
      bg-image("star24_off")



</style>