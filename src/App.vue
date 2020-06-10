<template>
<div>
    <header-section></header-section>
    <title-bar></title-bar>    
    <keep-alive><router-view></router-view></keep-alive>    
    
    
    
</div>
</template>

<script>
import HeaderSection from 'components/headerSection/HeaderSection'
import TitleBar from 'components/titleBar/TitleBar'


import { getHomeData } from 'network/home'

export default{
    name: 'App',  
    components: {
        HeaderSection,
        TitleBar
        
    },
    created(){
        this.getHomeData()
    },
    methods: {
        getHomeData(){
            getHomeData().then(res =>{                
                this.$store.commit("sellerData", res.seller);
                this.$store.commit("goodsData", res.goods);
                this.$store.commit("ratingsData", res.ratings)
            })
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">



</style>
