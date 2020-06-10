<template>
  <div class="header">
    <content-wrapper :seller="seller"
                     @showDetail="showDetail"
                     :classMap="classMap"></content-wrapper>
    <div class="bulletin-wrapper" v-if="seller.bulletin">
      <span class="icon"></span>
      <span class="bulletin">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
        <img :src="seller.avatar" alt="">
    </div>
    <transition name="fade">
      <v-detail v-show="detailShow"               
                @closeDetail="closeDetail"></v-detail>
    </transition>
      
  </div>
</template>

<script>
import { mapState } from "vuex"

import ContentWrapper from "./childComps/contentWrapper/ContentWrapper"
import VDetail from "./childComps/detail/VDetail"



export default {
  name:'HeaderSection',
  components:{ 
    ContentWrapper,
    VDetail
  },  
  data(){
    return {      
      detailShow: false,     
      size: 48
    }
  },  
  computed:{
    ...mapState(["seller"])
  },
  methods:{
    //开关详情页
    showDetail(){
      this.detailShow = true
    },
    closeDetail(){
      this.detailShow = false
    }

  },
  created(){
    //创建展示supports图片所需的类名集合
    this.classMap =["decrease", "discount", "special", "invoice", "guarantee"];
    this.$store.commit("classMap", this.classMap)

  }  
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
.header 
  position relative   
  font-size 0    
  color rgb(255, 255, 255)   
  overflow hidden    
  .bulletin-wrapper
    background-color rgba(7, 17, 27, .2)    
    height 28px
    padding 0 12px
    line-height 28px   
    .icon
      display inline-block
      width 22px 
      height 12px
      background-size 22px 12px
      background-repeat no-repeat
      bg-image("bulletin")
      vertical-align top
      margin-top 8px
    .bulletin
      display inline-block
      width 300px 
      margin 0 4px
      font-size 10px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      vertical-align top
    .icon-keyboard_arrow_right
      font-size 10px
      display inline-block
      margin-top 8px
  .background
    position absolute
    top 0 
    left 0
    width 100%
    height 100%    
    z-index -1
    filter: blur(10px)
    img 
      width 100%
      height 100%  

</style>