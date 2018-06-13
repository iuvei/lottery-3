<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import 'babel-polyfill';

  export default {
    name: 'app',
    mounted () {
      this.$nextTick(function () {
        setTimeout(function () {
          import('fastclick').then(FastClick => {
            FastClick.attach(document.body);
            if (!window['_hmt']) {
              window['_hmt'] = window['_hmt'] || [];
              const hm = document.createElement('script');
              hm.src = 'https://hm.baidu.com/hm.js?3799f003b800273aa2d0071bf8065917';
              hm.async = 'async';
              document.body.appendChild(hm)
            }
          });
        }, 2000)
      });
    }
  }
</script>

<style>
  @import "style/common.css";
  @import "style/animate.css";

  #app {
    height: 100%;
  }
</style>
