<style scoped>
  .total-points {
    height: 1.23rem;
    line-height: 1.23rem;
    color: #888;
    font-size: .3rem;
    text-align: center;
  }

  .total-points > div {
    display: inline-block;
    width: 40%;
  }
</style>
<template>
  <div @click="$emit('tap')"  class="total-points">
    <div>总分:{{propsData[0]}}</div>
    <div>分差:{{propsData[1]}}</div>
  </div>
</template>

<script>
  export default {
    name: 'BtotalPoints',
    props: {
      propsData: {
        type: Array
      }
    }
  }
</script>
