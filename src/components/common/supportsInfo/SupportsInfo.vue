<template>  
  <ul class="supports-info">
    <supports-item v-for="(item, index) in supports" 
                   :key="index" 
                   :itemClass="classMap[index]"
                   :itemText="supports[index].description"></supports-item>
</ul>    
</template>

<script>
import { mapState } from "vuex"

import SupportsItem from "./childComps/SupportsItem"
export default {
  name:'SupportsInfo',
  components:{
      SupportsItem
  }, 
   computed:{
    ...mapState(["seller", "classMap"]),
    supports(){
      return this.seller.supports
    }
  }  
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>