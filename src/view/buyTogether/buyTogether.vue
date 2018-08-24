<style scoped>
  .BuyTogether {
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
  }

  .BuyTogether .title {
    padding: 10px;
    color: white;
    background-image: url("../../assets/red_paecket_back.png");
    background-position: 0 bottom;
    background-size: 11px 4px;
    background-repeat: repeat-x;
    background-color: #e73f40;
    overflow: hidden;
  }

  .border-bottom1px {
    border-bottom: 1px dashed #ddd;
  }

  .BuyTogether .quotient > div:first-child {
    flex: 60%;
    padding: 10px 10px;
    line-height: 30px;
  }

  .BuyTogether .quotient .money {
    padding: 0 10px;
    margin: 0 5px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    background-color: #e73f40;
  }

  .BuyTogether .quotient > div:last-child {
    flex: 40%;
    padding: 10px 10px;
    line-height: 30px;
    text-align: right;
    font-size: 14px;
    color: #333;
  }

  .BuyTogether .ratio > div:first-child {
    padding: 10px;
    line-height: 30px;
  }

  .BuyTogether .ratio > div:last-child {
    flex-flow: row wrap;
    -webkit-flex-flow: row wrap;
  }

  .BuyTogether .ratio > div:last-child > div {
    border: 1px solid #ddd;
    text-align: center;
    border-radius: 3px;
    padding: 5px 0;
    flex: 16%;
    max-width: 30%;
    margin: 2%;
  }

  .BuyTogether .mine-offer-to-buy, .BuyTogether .mine-minimum {
    padding: 10px;
    line-height: 40px;
  }

  .BuyTogether .confidentiality > h3 {
    padding: 10px;
    line-height: 30px;
  }

  .BuyTogether .confidentiality > div {
    flex-flow: row wrap;
    -webkit-flex-flow: row wrap;
  }

  .BuyTogether .confidentiality > div > div {
    border: 1px solid #ddd;
    text-align: center;
    border-radius: 3px;
    padding: 5px 0;
    flex: 16%;
    max-width: 30%;
    margin: 2%;
  }

  .fixation-BuyTogether {
    width: 100%;
    max-width: 640px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    background-color: white;
    padding: 10px;
    font-size: 15px;
  }

  .fixation-BuyTogether > div button {
    float: right;
    padding: 15px 13%;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    background-color: #e73f40;
    line-height: 1;
  }

  .fixation-BuyTogether .amount {
    line-height: 20px;
    color: #999;
  }

  .fixation-BuyTogether .amount-money {
    line-height: 25px;
    color: #333333;
  }

  .BuyTogether div .click-pitch-on {
    border-color: #e73f40;
    background-color: #e73f40;
    color: white;
    /*background-image: url('../../assets/betting/selected.png');*/
    /*background-repeat: no-repeat;*/
    /*background-size: 12.5px 12.5px;*/
    /*background-position: right bottom;*/
  }
</style>

<template>
  <div style="padding-bottom: 100px">
    <v-head title="发起合买"></v-head>
    <div class="BuyTogether">
      <h2 class="title">方案总金额18888元</h2>
      <div class="row quotient border-bottom1px">
        <div class="row">
          <h3>每份金额</h3>
          <div class="money">1</div>
          <div>元</div>
        </div>
        <div>共18888份</div>
      </div>
      <div class="ratio border-bottom1px">
        <div class="row">
          <h3>提成比例</h3>
          <p style="margin-left: 10px;">提取税后奖金的比例</p>
        </div>
        <div class="row">
          <div v-for="i in 10"
               :class="{'click-pitch-on':optFor[0]===i}"
               @click="pitchOn(0,i)">{{ i }}%
          </div>
        </div>
      </div>
      <div class="row mine-offer-to-buy border-bottom1px">
        <h3 style="margin-right: 10px">我要认购</h3>
        <input-number
          :number.sync="optFor[1]"
          :max-number="10"
          :min-number="1"
          :comparison.sync="optFor[2]"
          style="width: 30%"/>
        <div style="margin-left: 10px">份</div>
        <div style="margin-left: 20px">占10%</div>
      </div>
      <div class="row mine-minimum border-bottom1px">
        <h3 style="margin-right: 10px">我要认购</h3>
        <input-number
          :number.sync="optFor[2]"
          :max-number="10"
          :min-number="1"
          :comparison.sync="optFor[1]"
          style="width: 30%"/>
        <div style="margin-left: 10px">份</div>
        <div style="margin-left: 20px">占10%</div>
      </div>
      <div class="confidentiality">
        <h3>方案保密</h3>
        <div class="row">
          <div :class="{'click-pitch-on':optFor[3]===1}" @click="pitchOn(3,1)">完全公开</div>
          <div :class="{'click-pitch-on':optFor[3]===2}" @click="pitchOn(3,2)">认购可见</div>
          <div :class="{'click-pitch-on':optFor[3]===3}" @click="pitchOn(3,3)">截至可见</div>
          <div :class="{'click-pitch-on':optFor[3]===4}" @click="pitchOn(3,4)">完全保密</div>
        </div>
      </div>
    </div>
    <div class="fixation-BuyTogether">
      <div>
        <button>发起合买</button>
        <p class="amount">认购1份,保底1份</p>
        <p class="amount-money">共 <span style="font-weight: bold;color: #e73f40">10000</span>元</p>
      </div>
    </div>
  </div>
</template>

<script>
  import InputNumber from '../../components/InputNumber.vue';

  export default {
    name: 'BuyTogether',
    data () {
      return {optFor: [1, 2, 3, 4]}
    },
    methods: {
      pitchOn (index, checked) {
        if (this.optFor[index] === checked) return;
        this.$set(this.optFor, index, checked);
      }
    },
    components: {
      InputNumber
    }
  }
</script>

