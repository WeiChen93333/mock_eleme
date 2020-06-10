<template>
<div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>        
    </div>
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
    props:{   
            probeType: Number,
            pullUpLoad: Boolean     

    },
    methods:{
        scrollTo(x, y, time=500){
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        finishPullingUp(){
            this.scroll.finishPullUp()
        }
    },
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        });
        this.scroll.on('scroll', (position) => {
           this.$emit('scroll', position)            
        });
        this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
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

