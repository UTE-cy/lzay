<template>
  <div id="app">
    <navtop></navtop>
    <div class="">
      <router-view></router-view>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import Navtop from './components/Navtop'
import Hello from './components/Hello'
import Footbar from './components/Footbar'

export default {
  components: {
    'hello': Hello,
    'navtop': Navtop,
    'footbar': Footbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
