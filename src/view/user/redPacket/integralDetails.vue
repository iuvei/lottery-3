<style scoped>
  .integral-details * {
    box-sizing: border-box;
  }

  .integral-details {
    margin-top: 81px;
  }

  .integral-details-top {
    position: fixed;
    width: 100%;
    left: 0;
    background: white;
    z-index: 100;
    top: 0;
  }

  @media screen and (min-width: 640px) {
    .integral-details-top {
      width: 640px;
      left: 50%;
      margin-left: -320px;
    }
  }

  .integral-details-classes {
    font-size: 0;
  }

  .integral-details-classes > div {
    width: 33.33%;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    color: #333333;
    border-top: 1px solid #ddd;
    border-bottom: 3px solid #ddd;
    overflow: hidden;
  }

  .border-right1 {
    border-right: 1px solid #ddd;
  }


</style>
<style>
  .integral-details .integral-details-item {
    font-size: 0;
    border-bottom: 1px solid #ddd;
    background-color: white;
  }
  .integral-details .integral-details-item > div {
    width: 33.33%;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    color: #333333;
    overflow: hidden;
  }
  .integral-details .text-one{
    text-align: left;
    text-indent: 1em;
  }
</style>
<template>
  <div class="integral-details">
    <div class="integral-details-top">
      <v-head title="积分明细"/>
      <div class="integral-details-classes">
        <div class="border-right1">时间</div>
        <div class="border-right1">事件类型</div>
        <div>积分变动</div>
      </div>
    </div>
    <div>
      <div class="integral-details-item" v-for="i in 100">
        <div class="text-one">{{ i+1 }}</div>
        <div>{{ i+1+1 }}</div>
        <div>{{ i+1+1+1 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import VHead from '../../../components/VHead.vue';

  export default {
    name: 'IntegralDetails',
    components: {VHead}
  }
</script>
