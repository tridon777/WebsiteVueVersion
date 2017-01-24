<template>
    <nav>
        <div class="brand"><a href="#">Paul Searcy</a></div>
        <div class="nav-item"><router-link to="/test">Home</router-link></div>
        <div class="nav-item"><router-link to="/about">About</router-link></div>
        <div class="nav-item"><a>Projects</a></div>
        <div class="nav-item"><a>Contact</a></div>
    </nav>
</template>
<script>
    export default {
        name: 'Navbar'
    }

</script>
<style lang="scss" scoped>
  .hovering{
      color: blue;
      cursor: pointer;
      text-decoration: none;
  }
  a {
      text-decoration: none;
      color: initial;
  }
  nav {
    margin: 0;
    margin-left: -8px;
    margin-right:-8px;
    height: 50px;
    display: flex;
    position: relative;
    z-index: 10;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid #eee;
    :hover{
        @extend .hovering;
    }
    .brand {
      margin-left: 5px;
      font-size: 18px;
      flex: 1 1 ;
      text-align: left;
      line-height: 50px;
      :hover{
        @extend .hovering;
      }
    }
    .nav-item{
      text-align: center;
      margin-right: 5px;
      margin-left: 5px;
      width: 80px;
      line-height: 50px;
      font-size: 20px;
      :hover{
        @extend .hovering;
      }

    }
  }

</style>