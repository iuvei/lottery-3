<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted () {
      document.dispatchEvent(new Event('render-event'));
      this.$nextTick(function () {
        setTimeout(function () {
          let hm;
          if (!window['_hmt']) {
            hm = document.createElement('script');
            hm.async = 'async';
            hm.src = `https://hm.baidu.com/hm.js?3799f003b800273aa2d0071bf8065917`;
            window['_hmt'] = window['_hmt'] || [];
            document.body.appendChild(hm)
          }
          if (!window.FastClick) {
            !hm && (hm = document.createElement('script'));
            const hm2 = hm.cloneNode(false);
            hm2.src = `https://cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js`;
            hm2.onload = function () {
              window.FastClick && window.FastClick.attach(document.body);
            }
            document.body.appendChild(hm2)
          }
        }, 500)
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
