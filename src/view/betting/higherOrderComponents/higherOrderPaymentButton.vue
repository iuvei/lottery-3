<template>
  <div>
    <div v-if="rendering">
      <mt-popup
        v-model="show"
        position="bottom">
        <div class="recommend-select">
          <h2>推荐设置</h2>
          <h4 class="title">中奖抽成</h4>
          <div class="content">
            <div v-for="i in 10"
                 :class="{'click-pitch-on':optFor[0]===i}"
                 @click="pitchOn(0,i)">{{ i }}%
            </div>
          </div>
          <h4 class="title">保密类型</h4>
          <div class="content">
            <div :class="{'click-pitch-on':optFor[1]===1}" @click="pitchOn(1,1)">截至可见</div>
            <div :class="{'click-pitch-on':optFor[1]===2}" @click="pitchOn(1,2)">完全保密</div>
          </div>
          <div class="submit-button">
            <button @click="clickRecommend">取消</button>
            <button>推荐并付款</button>
          </div>
        </div>
      </mt-popup>
    </div>
    <div class="row higherOrderPaymentButton">
      <a v-if="rendering" class="button-recommend" href="javascript:;" @click="clickRecommend">我要推荐</a>
      <a class="button-payment" href="javascript:;" @click="clickPayment">付款</a>
    </div>
  </div>
</template>

<script>
  import Lottery from '../../../model/common/Lottery';

  export default {
    name: 'higherOrderPaymentButton',
    props: {
      lottery: {type: Number}
    },
    data () {
      return {optFor: [1, 1], rendering: Lottery.isRecommend(this.lottery), show: false}
    },
    methods: {
      clickRecommend () {
        this.show = !this.show;
      },
      clickPayment (...event) {
        this.$emit('Payment', ...event)
      },
      pitchOn (index, checked) {
        if (this.optFor[index] === checked) return;
        this.$set(this.optFor, index, checked);
      }
    }
  }
</script>

<style scoped>
  .recommend-select .content > .click-pitch-on {
    border-color: #e73f40;
    background-image: url('../../../assets/betting/selected.png');
    background-repeat: no-repeat;
    background-size: 12.5px 12.5px;
    background-position: right bottom;
  }

  .recommend-select {
    width: 10rem;
  }

  .recommend-select > h2 {
    text-align: center;
    color: #333333;
    margin: 10px 0;
  }

  .recommend-select > .title {
    color: #333333;
    margin: 10px;
  }

  .recommend-select > .content {
    display: flex;
    display: -webkit-flex;
    flex-flow: row wrap;
    -webkit-flex-flow: row wrap;
    justify-content: flex-start;
    -webkit-justify-content: flex-start;
  }

  .recommend-select > .content > div {
    border: 1px solid #ddd;
    text-align: center;
    border-radius: 3px;
    padding: 5px 0;
    flex: 16%;
    max-width: 30%;
    margin: 2%;
  }

  .recommend-select > .submit-button {
    display: flex;
    display: -webkit-flex;
    flex-flow: row nowrap;
    -webkit-flex-flow: row nowrap;
    border-top: 1px solid #ddd;
    margin-top: 20px;
  }

  .recommend-select > .submit-button > button {
    flex: 1;
    padding: 15px 0;
    font-size: 15px;
    background-color: white;
    color: #333333;
    font-weight: bold;
  }

  .recommend-select > .submit-button > button:last-child {
    border-left: 1px solid #ddd;
    color: #e73f40;
  }

  .higherOrderPaymentButton > .button-recommend {
    flex: 1;
    line-height: 40px;
    border-radius: 5px;
    display: block;
    font-size: 15px;
    margin-right: 10px;
    text-align: center;
    color: #3f6ee7;
    border: 1px solid #3f6ee7;
  }

  .higherOrderPaymentButton > .button-payment {
    flex: 2;
    line-height: 40px;
    border-radius: 5px;
    display: block;
    font-size: 15px;
    text-align: center;
    color: white;
    background-color: #e73f40;
  }
</style>
