<template>
  <ul class="title-bar border-1px">    
      <li v-for="(item, index) in itemContent" 
          :key="index" @click="clickSwitch(index)" 
          :class="{active: index==currentIndex}">{{item}}</li>      
  </ul>
</template>

<script>
export default {
  name:'TitleBar',
  components:{},
  props:{},
  data(){
    return {
      //定义展示的内容
      itemContent: ["商品", "评价", "商家"],
      currentIndex: 0,
      //定义要使用的路径
      paths: ["/goods", "/comments", "/seller"]

    }
  },
  computed:{},
  methods:{
    clickSwitch(index){
      this.currentIndex = index;
      this.$router.push(this.paths[index])
      
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"

.title-bar 
  height: 40px 
  line-height 40px
  display: flex  
  text-align center
  font-size 14px
  font-weight 200
  color rgb(77, 85, 93)
  border-1px(rgb(7, 17, 27, .1))  
  li
    flex: 1
    &.active
      color rgb(240, 20, 20)
</style>