<template lang="html">
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">LazyCallBack</a>
    </div>
    <div>
      <ul class="nav navbar-nav">
        <router-link class="router-link" to="/home" exact tag="li"><a>Home</a></router-link>
        <router-link class="router-link" to="/photo" exact tag="li"><a>Photo</a></router-link>
        <router-link class="router-link" to="/mood" exact tag="li"><a>Mood</a></router-link>
      </ul>
    </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="css">
.nav li{
  line-height: 50px;
}
.nav li.router-link-active{
	background: #FFFFFF;
	color: #E20000;
	font-weight: bold;
  padding: 0 20px;
}
.nav li.router-link{
	color: #000000;
	font-weight: bold;
}


</style>
