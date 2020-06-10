<template>
  <div class="rating">
    <div class="overview">
      <div class="overall-score">
        <span class="score">{{seller.score}}</span>
        <span class="text">综合评分</span>
        <span class="compare">{{seller.rankRate}}</span>
      </div>
      <div class="detail">
        <div class="food-score">
          <span class="text">商品评分</span>  
          <div class="star-wrapper">
            <rating-star :size="36" :score="seller.foodScore"></rating-star>   
          </div>
          <span class="score">{{seller.foodScore}}</span>
        </div>
        <div class="service-score">
          <span class="text">服务评分</span> 
          <div class="star-wrapper">
            <rating-star :size="36" :score="seller.serviceScore"></rating-star>            
          </div>  
          <span class="score">{{seller.serviceScore}}</span>
        </div>
        <div class="delivery-time">
          <span class="text">送达时间</span> 
          <span class="time">{{seller.deliveryTime}}分钟</span> 
        </div>
      </div>
    </div>
    <split></split>
    <div class="comments">
      <rating-select :ratings="ratings">
        <template v-slot:default="comment">
          <div class="comment-inner">
            <img :src="comment.item.avatar" class="avatar">
            <div class="right-content">
              <span class="user-name">{{comment.item.username}}</span>
              <div class="score-delivery">
                <div class="star-wrapper">
                <rating-star :size="24" :score="comment.item.score"></rating-star>            
                </div> 
                <span class="delivery-time" v-if="comment.item.deliveryTime">{{comment.item.deliveryTime}}分钟送达</span>
              </div>              
              <span class="text">{{comment.item.text}}</span>
              <i :class="comment.item.rateType ? 'icon-thumb_down' : 'icon-thumb_up'"></i>
              <ul class="recommend">
                <li class="recommend-item" v-for="(item, index) in comment.item.recommend" :key="index">{{item}}</li>
              </ul>
            <span class="rate-time">{{comment.item.rateTime}}</span>        
            </div>
          </div>         
        </template>          
      </rating-select>     
    </div>    
  </div>
</template>
<script>
import Split from "components/common/split/Split"
import RatingStar from "components/common/ratingStar/RatingStar"
import RatingSelect from "components/common/ratingSelect/RatingSelect"

import { mapState } from "vuex"
export default {
  name:'Comments',
  components:{
    Split,
    RatingStar,    
    RatingSelect
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{
    ...mapState(["seller", "ratings"])
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"

.overview
  width 100%
  display flex
  border-top 1px solid rgba(7, 17, 27, .1)
  border-bottom 1px solid rgba(7, 17, 27, .1)
  background-color white
  .overall-score
    text-align center
    flex 0 0 137.5px
    padding 18px 24px
    .score
      display block
      font-size 24px
      color rgb(255, 153, 0)
      line-height 28px      
    .text
      display block
      font-size 12px
      color rgb(7, 17, 27)
      line-height 12px
      margin 6px 0 8px
    .compare
      display block
      font-size 10px
      color rgb(147, 153, 159)
      margin-bottom 6px
  .detail
    flex 1 0 auto
    padding 18px 22px
    .food-score, .service-score
      display flex
      align-items center
      margin-bottom 8px      
      .star-wrapper
        display inline-block
        margin 0 12px
      .score
        display inline-block
        font-size 12px
        color rgb(255, 153, 0)
        line-height 18px
    .text 
      font-size 12px
      color rgb(7, 17, 27)
      line-height 18px
    .delivery-time
      .time 
        font-size 12px
        color rgb(147, 153, 159)
        line-height 18px
        margin-left 12px
.comments
  padding 0 18px
  .comment    
    .comment-inner
      padding 2px 0
      display flex
      .avatar
        width 28px
        height 28px
        margin-right 12px
      .right-content       
        .user-name
          display block
          font-size 10px
          color rgb(7, 17, 27)
          line-height 12px
        .score-delivery
          margin: 4px 0 6px 
          font-size 0         
          line-height unset
          .star-wrapper
            margin-right 6px
            display inline-block
            line-height 12px         
          .delivery-time 
            font-size 10px
            font-weight 200
            color rgb(147, 153, 159)
            line-height 12px
        .text          
          font-size 1px  
          color rgb(7, 17, 27)
          line-height 18px
          display block
        .icon-thumb_down, .icon-thumb_up
          display inline-block
          width 14px
          height 14px
          font-size 14px
          line-height 18px
          margin-top 8px   
          vertical-align top          
          color rgb(183, 187, 191)
        .icon-thumb_up
          color rgb(0, 160, 220)
        .recommend
          display inline-flex
          width calc(100% - 14px)
          margin-top 8px          
          vertical-align top 
          flex-wrap wrap
          .recommend-item
            width 80px
            height 18px
            padding 0 6px
            font-size 9px
            color rgb(147, 153, 159)
            line-height 16px
            text-align center          
            border 1px solid rgba(7, 17, 27, .1)
            border-radius 2px
            background-color rgb(255, 255, 255)
            margin-left 8px
            overflow hidden
            text-overflow ellipsis            
            white-space nowrap
        .rate-time
          position absolute
          right 0
          top 18px
           




   
 

</style>