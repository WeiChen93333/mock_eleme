<template>
  <div class="food-detail-wrapper">
    <div class="food-detail">
      <div class="backToMenu" @click="backToMenu"></div>
      <!-- <img :src="food.image" class="food-image"> -->
      <div class="food-info border-1px">
        <div class="name">{{food.name}}</div>
        <p class="count-rating">
          <span>月售{{food.sellCount}}份</span>
          <span>好评率{{food.rating}}%</span>
        </p>
        <p class="price">
          <span class="current-price">&yen;{{food.price}}</span>
          <span class="old-price" v-if="food.oldPrice">&yen;{{food.oldPrice}}</span>                         
        </p>
        <span class="add-food">加入购物车</span>
      </div>
      <div class="food-description">
        <div class="title">商品介绍</div>
        <div class="content">{{food.info}}</div>
      </div>
      <div class="food-comments">
        <div class="title">商品评价</div>
        <rating-select :ratings="ratings">
          <template v-slot:default="comment">
            <span class="rate-time">{{comment.item.rateTime}}</span>
            <i :class="comment.item.rateType ? 'icon-thumb_down' : 'icon-thumb_up'"></i>
            <span class="text">{{comment.item.text}}</span>
            <div class="user-info">
              <span class="name">{{comment.item.username}}</span>
              <img :src="comment.item.avatar" class="avatar">
            </div>   
          </template>        
        </rating-select>      
      </div>
    </div>
  </div>  
</template>
<script>
import RatingSelect from "components/common/ratingSelect/RatingSelect"
const ALL = 2;
const POSITIVE = 0
const NEGATIVE = 1
export default {
  name:'FoodDetail', 
  components: {
    RatingSelect
  },
  props:{
    food: Object
  },
  data(){
    return {
      ratings: []     
    }
  },
  watch: {
    food(){
      this.ratings = this.food.ratings     
    }
  }, 
  methods:{
    backToMenu(){
      this.$emit("backToMenu")
    } 
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
.food-detail-wrapper
  position fixed 
  height calc(100vh - 46px)
  bottom 46px
  left 0
  right 0
  z-index 1
  background-color #f3f5f7
  color rgb(147, 153, 159)
  .backToMenu
    width 30px
    height 30px
    background-color red
  .food-image
    width 100vw
    height 100vw
  .food-info
    padding 18px
    position relative
    background-color rgb(255, 255, 255)
    border-1px(rgba(7, 17, 27, .1))
    &::after
      width 100vw
      left -18px
    .name
      font-size 14px
      font-weight 700
      color rgb(7, 17, 27)
      line-height 14px
    .count-rating
      margin 8px 0 18px      
      font-size 10px      
      line-height 10px
      & :first-child
        margin-right 12px      
    .price
      .current-price
        font-size 14px
        color rgb(240, 20, 20)
        font-weight 700
        line-height 24px
      .old-price
        margin-left 8px
        font-size 10px
        font-weight 700
        line-height 24px
        text-decoration line-through 
    .add-food
      position absolute
      bottom 18px
      right 18px
      width 74px
      height 24px
      padding 6px 12px
      border-radius 12px
      background-color rgb(0, 160, 220)
      font-size 10px
      color rgb(255, 255, 255)
      line-height 12px
  .food-description
    padding 18px
    margin: 18px 0
    background-color rgb(255, 255, 255)
    border-top 1px solid rgba(7, 17, 27, .1)
    border-bottom 1px solid rgba(7, 17, 27, .1)
    .title
      font-size 12px
      font-weight 400
      color rgb(7, 17, 27)
      margin-bottom 6px
    .content
      font-size 12px
      font-weight 200
      line-height 24px      
      padding 0 8px
  .food-comments
    padding 18px
    border-top 1px solid rgba(7, 17, 27, .1)
    background-color rgb(255, 255, 255)
    .title
      font-size 12px
      font-weight 400
      color rgb(7, 17, 27)    
    .comment    
      .rate-time
        margin-bottom 6px
        display block
      .icon-thumb_down, .icon-thumb_up
        display inline-block
        width 12px
        height 12px
        font-size 12px
        line-height 16px
        vertical-align top
        margin-right 4px
      .text
        display inline-block
        font-size 12px
        color rgb(7, 17, 27)
        line-height 16px
        vertical-align top
      .user-info        
        position absolute
        top 16px
        right 0                         
        .avatar
          width 12px
          height 12px
          margin-left 6px
          vertical-align top
    
</style>