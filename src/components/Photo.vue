<template lang="html">
  <div class="wrap">
    <ul class="pimgbar">
      <li><img src="/img/click1.jpg" alt=""></li>
      <li><img src="/img/click1.jpg" alt=""></li>
      <li><img src="/img/click1.jpg" alt=""></li>
    </ul>
    <transition name="fade">
      <div v-show="detailShow" class="detail" @click="hideDetail" transition="fade">
        <ul class="textbar">
          <li>该商家支持发票,请下单写好发票抬头</li>
          <li>品类:其他菜系,包子粥店</li>
          <li>北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340</li>
          <li>营业时间:10:00-20:30</li>
        </ul>
      </div>
    </transition>
    <p @click="showDetail" class="activity">活  动<br />说  明</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  }
}
</script>

<style lang="scss">
.wrap {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
}
.pimgbar {
    list-style: none;
    li {
        padding: 10px;
        text-align: center;
        display: inline-block;
        margin: 0 auto;
    }
    img {
        width: 510px;
        height: 310px;
    }
}
.activity {
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    padding-top: 6px;
    line-height: 1.5;
    text-align: center;
    position: fixed;
    right: 20px;
    bottom: 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 255, 0.5);
    color: #fff;
    font-size: 16px;
}
.detail {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}
.textbar {
    padding-top: 80px;
    li {
        display: block;
        line-height: 50px;
        color: #fff;
        font-size: 22px;
    }
}

.fade-enter-active {
    -webkit-animation: bounce-in 0.5s;
            animation: bounce-in 0.5s;
}
.fade-leave-active {
    -webkit-animation: bounce-out 0.5s;
            animation: bounce-out 0.5s;
}
@-webkit-keyframes bounce-in {
    0% {
        -webkit-transform: scale(0);
                transform: scale(0);
    }
    50% {
        -webkit-transform: scale(1.5);
                transform: scale(1.5);
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
}
@keyframes bounce-in {
    0% {
        -webkit-transform: scale(0);
                transform: scale(0);
    }
    50% {
        -webkit-transform: scale(1.5);
                transform: scale(1.5);
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
}
@-webkit-keyframes bounce-out {
    0% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    50% {
        -webkit-transform: scale(1.5);
                transform: scale(1.5);
    }
    100% {
        -webkit-transform: scale(0);
                transform: scale(0);
    }
}
@keyframes bounce-out {
    0% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    50% {
        -webkit-transform: scale(1.5);
                transform: scale(1.5);
    }
    100% {
        -webkit-transform: scale(0);
                transform: scale(0);
    }
}
</style>
