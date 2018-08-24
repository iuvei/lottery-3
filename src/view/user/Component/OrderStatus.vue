<template>
  <div class="OrderStatus" style="overflow: hidden">
    <div v-if="status">
      <div v-if="status[0]==='推荐者'">
        <p style="flex: 1">本单已推荐</p>

        <p v-if="status[1]==='中奖'" style="color: #e73f40">本单共抽成1000.00元</p>
        <p v-if="status[1]==='待开奖'" style="color: #e73f40">本单抽成奖金1%</p>
      </div>
      <div v-else-if="status[0]==='跟单者'">
        <p style="flex: 1">推荐者: {{ '大牛大按时大苏打' }}</p>

        <p v-if="status[1]==='中奖'" style="color: #e73f40">本单已被抽成1000元</p>
        <p v-if="status[1]==='待开奖'" style="color: #e73f40">本单抽成奖金1%</p>
      </div>
    </div>
    <div>
      <p>订单状态： <span class="text-primary">{{statusText}}</span></p>
      <slot name="TogetherState"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OrderStatus',
    props: {
      status: {type: Array},
      statusText: {type: String}
    }
  }
</script>

<style scoped>
  .OrderStatus > div {
    display: flex;
    font-size: 14px;
    flex-flow: row nowrap;
    background-color: white;
    line-height: 1;
    padding: 10px;
    color: #333333;
    margin-top: 10px;
  }
</style>
