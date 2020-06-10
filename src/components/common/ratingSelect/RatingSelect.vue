<template>
  <div class="rating-select">
    <div class="select-comments">
      <div class="all-comments" 
            :class="{active: selectedType==2}" 
            @click="showAllComments"
            :key="2">
        <span>全部</span>
        <span class="number">10</span>
      </div>
      <div class="recommend" :class="{active: selectedType==0}" @click="showRecommends" :key="0">
        <span>推荐</span>
        <span class="number">10</span>
      </div>
      <div class="complain" :class="{active: selectedType==1}" @click="showComplaints">
        <span>吐槽</span>
        <span class="number">10</span>
      </div>
    </div>
    <div class="filter-comments">
      <i class="icon-check_circle" 
          :class="{changedColor: changeColor}"
          @click="showContentComments"></i>
      <span class="text">只看有内容的评价</span>
    </div>
    <ul class="comments">
        <li class="comment" 
            v-for="(item, index) in ratings"
            :key="index"
            v-show="showComment(item.rateType, item.text)">
          <slot :item="item"></slot>
        </li>
      </ul>
  </div>
</template>
<script>
const ALL = 2;
const POSITIVE = 0
const NEGATIVE = 1

export default {
  name:'RatingSelect',
  components:{},
  props:{
    ratings: Array
  },
  data(){
    return {
      selectedType: ALL,
      changeColor: false
    }
  },
  watch:{
    ratings(){
      this.selectedType = ALL;
      this.changeColor = false
    }
  },
  computed:{},
  methods:{
     //是否显示该评论
    showComment(type, text){
      if(this.changeColor && !text){
        return false
      }
      if(this.selectedType == ALL){
        return true
      }else{
        return this.selectedType == type
      }
      
    },
    //选择评论类型
    showAllComments(){
      this.selectedType = ALL
    },
    showRecommends(){
      this.selectedType = POSITIVE
    },
    showComplaints(){
      this.selectedType = NEGATIVE
    },
    showContentComments(){
      this.changeColor = !this.changeColor
    }
  }  
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
.select-comments    
  padding 18px 0
  border-1px(rgba(7, 17, 27, .1))
  display flex          
  .all-comments, .recommend, .complain
    width 66px
    height 30px
    padding 8px 12px
    font-size 12px
    line-height 16px
    border-radius 2px
    margin-right 8px
    .number
      margin-left 2px
      font-size 8px
  .all-comments
    color white
    background-color rgb(0, 160, 220)
  .recommend
    color rgb(77, 85, 93)
    background-color rgba(0, 160, 220, .2)
  .complain
    color rgb(77, 85, 93)
    background-color rgba(77, 85, 93, .2)
  .active
    background-color blue  
.filter-comments
  padding 12px 0
  font-size 0
  border-1px(rgba(7, 17, 27, .1))
  &::after
    width 100vw
    left -18px        
  .icon-check_circle
    width 24px
    height 24px
    font-size 24px
    line-height 24px
    margin-right 4px
    vertical-align top
    &.changedColor
      color rgb(0, 160, 220)
  .text
    font-size 12px
    line-height 24px
    vertical-align top
.comment
  padding 16px 0
  font-size 10px  
  border-1px(rgba(7, 17, 27, .1))
  position relative
</style>