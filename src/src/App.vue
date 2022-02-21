<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view></router-view>
    <ToastFix></ToastFix>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import Index from '@/components/Index/Index.vue'
import ToastFix from '@/components/toastFix/toastFix.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Index,
    ToastFix
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #F9FAFF;
}
</style>
