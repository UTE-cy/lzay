<template lang="html">
  <swiper :options="swiperOption" ref="mySwiperA">
  <!-- 幻灯内容 -->
  <swiper-slide><img src="/img/click1.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="/img/click2.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="/img/click3.jpg" alt=""></swiper-slide>
  <!-- ... -->
  <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
  <div class="swiper-pagination"  slot="pagination"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div>
  <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
</swiper>
</template>

<script>
// swiper options example:
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象（假如你需要使用获取swiper对象来做什么事，那么这个属性一定要是true）
        notNextTick: true,
        autoplay: 3000,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        observeParents: true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart (swiper) {
          console.log(swiper)
        }
        // more Swiper config ...
        // ...
      }
    }
  },
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，实际上这里的$refs对应的是当前组件内所有关联了ref属性的组件元素对象，同时配置中的notNextTick属性一定要设置为true
  computed: {
    swiper () {
      return this.$refs.mySwiperA.swiper
    }
  },
  mounted () {
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="css">
  .swiper-container{
    width: 1200px;
    height: 300px;
    margin: 0 auto;
    background-color: rgba(255, 0, 0, 0.5);
  }
  .swiper-button-prev, .swiper-button-next{
    /*width: 14px;
    height: 22px;
    margin-top: -11px;
    background-size: 14px 22px;
    background-color: rgba(255, 255, 255, 1);*/
  }
</style>
