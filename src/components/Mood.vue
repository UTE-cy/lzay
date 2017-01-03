<template lang="html">
  <div class="wrap">
    <ul class="mimgbar">
      <li><img src="/img/click1.jpg" alt=""></li>
      <li><img src="/img/click2.jpg" alt=""></li>
      <li><img src="/img/click3.jpg" alt=""></li>
    </ul>
    <ul class="mimgbar">
      <li><img src="/img/click2.jpg" alt=""></li>
      <li><img src="/img/click1.jpg" alt=""></li>
      <li><img src="/img/click3.jpg" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .mimgbar{
    list-style: none;
  }
  .mimgbar li{
    padding: 10px;
    text-align: center;
    display: inline-block;
    margin: 0 auto;
  }
  .mimgbar img{
    width: 510px;
    height: 310px;
  }
</style>
