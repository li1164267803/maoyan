<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <router-view/>

    <!-- 底部导航 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from 'common/Footer/Footer'

export default {
  name: 'App',
  components:{Footer,}
}
</script>

<style>


</style>
