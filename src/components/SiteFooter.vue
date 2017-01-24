<template>
    <div class="container">
        <hr>
        <div>
            <div>
                <ul>
                    <li><a href="https://www.linkedin.com/in/psearcy" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-linkedin fa-stack-1x fa-inverse"></i></span></a></li>
                    <li><a href="https://www.facebook.com/psearcy1" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a></li>
                    <li><a href="https://github.com/tridon777" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-github fa-stack-1x fa-inverse"></i></span></a></li>
                </ul>
                <p class="copyright text-muted">Copyright © Paul Searcy 2015-2017</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SiteFooter'
    }

</script>
<style lang="scss" scoped>
  hr{
    border: 0;
    border-top: 1px solid #eee;
  }
  .container{
      position: absolute;
      top: 87%;
      right: 0;
      left: 0;
  }
  ul{
      list-style-type: none;
      display: flex;
      width: 95%;
      justify-content: center;
      text-align: center;
      li{
        display: inline-block;
        padding-right: 5px;
        padding-left: 5px;
      }
  }
  a {
      text-decoration: none;
      color: initial;
  }
  p{
      margin-left: 25px;
      text-align: center;
  }


</style>