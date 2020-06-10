<template>
<div class="wrapper" ref="wrapper">    
    <slot></slot>
</div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
    name: 'BetterScroll',
    data(){
        return{
            scroll: null
        }
    },   
    methods:{
        // scrollTo(x, y, time=500){
        //     this.scroll && this.scroll.scrollTo(x, y, time)
        // },
        // refresh(){
        //     this.scroll && this.scroll.refresh()
        // },
        // finishPullingUp(){
        //     this.scroll.finishPullUp()
        // }
    },
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        });
        this.scroll.on('scroll', (position) => {
           this.$emit('scroll', position)            
        })        
    }
    
}


</script>

<style scoped>
.wrapper{    
    overflow: hidden;
    position: absolute;    
    top: 44px;
    bottom: 49px;
    background-color: antiquewhite;
}

</style>

