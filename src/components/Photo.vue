<template lang="html">
  <div class="wrap">
    <ul class="pimgbar">
      <li><img src="/img/click1.jpg" alt=""></li>
      <li><img src="/img/click1.jpg" alt=""></li>
      <li><img src="/img/click1.jpg" alt=""></li>
    </ul>
    <ul class="pimgbar">
      <li><img src="/img/click2.jpg" alt=""></li>
      <li><img src="/img/click2.jpg" alt=""></li>
      <li><img src="/img/click2.jpg" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .wrap{
    flex: 1;
  }
  .pimgbar{
    list-style: none;
  }
  .pimgbar li{
    padding: 10px;
    text-align: center;
    display: inline-block;
    margin: 0 auto;
  }
 .pimgbar img{
   width: 510px;
   height: 310px;
 }
</style>
