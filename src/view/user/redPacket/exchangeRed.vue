<style scoped>
  .question-icon {
    background: url("../../../assets/betting/question.png") no-repeat center;
    background-size: 50% 50%;
    width: 35px;
    height: 35px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .exchange-red * {
    box-sizing: border-box;
  }

  .exchange-button {
    padding: 0 10px;
    margin-bottom: 15px;
  }

  .exchange-msg {
    padding: 10px;
    font-size: 14px;
    line-height: 2em;
    color: #999999;
  }
</style>
<style>
  .exchange-red .exchange-red-key {
    padding: 15px 0;
  }
</style>
<template>
  <div class="exchange-red">
    <v-head title="兑换红包"><span slot="right" class="question-icon" @click=""></span></v-head>
    <div class="exchange-red-key">
      <mt-field placeholder="输入兑换码" v-model="cdKey" style="background-color: initial;background: none;"/>
    </div>
    <div class="exchange-button">
      <mt-button type="danger" size="large">立即兑换</mt-button>
    </div>
    <div class="exchange-msg">
      兑换码一般通过活动发送,没有固定获取方式.如果您获得了兑换码,您可以用来兑换彩票红包,购买彩票时可用红包抵扣现金!
    </div>
  </div>
</template>

<script>
  import VHead from '../../../components/VHead.vue';
  import { Field, Button } from 'mint-ui';

  export default {
    name: 'exchangeRed',
    data () {
      return {cdKey: ''}
    },
    components: {
      VHead,
      [Field.name]: Field,
      [Button.name]: Button
    }
  }
</script>
