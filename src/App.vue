<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'

export default {
  name: 'App',
  components: {
    Navbar,
    Hello,
    SiteFooter
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
}
</style>
