<template>
  <div style="margin-bottom: 150px">
    <router-link to="scheme" tag="div" append class="padding relative bg-white margin-top-10">
      <span class="text-normal text-default">方案明细</span>
      <span class="arrow-right"></span>
    </router-link>
    <div class="bottom-logo margin-top-20 text-center">
      <img src="../../../assets/bottom_logo.png" alt=""/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailFooter'
  }
</script>

<style scoped>
  .arrow-right {
    position: absolute;
    right: 10px;
    top: 15px;
  }
  .bottom-logo img {
    width: 100px;
  }
</style>
