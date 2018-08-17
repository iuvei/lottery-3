<template>
  <div>
    <order-detail>
      <div slot="RightNav" style="color: #e73f40;font-weight: bold">
        撤销方案
      </div>
      <div slot="TogetherState" class="winning-detail margin-top-10">
        <div class="border1px">
          <h3>10000.00</h3>
          <p>您的奖金</p>
        </div>
        <div class="border1px">
          <h3>100.00</h3>
          <p>每份奖金</p>
        </div>
        <div>
          <h3>10000.00</h3>
          <p>方案抽成</p>
        </div>
      </div>

      <div slot="TogetherToBuy" class="TogetherToBuy-content">

        <div class="initiator-detail margin-top-10">
          <div class="detail-top">
            <button>合买战绩</button>
            <div>
              <h3>186****9179</h3>
              <h4>
                <span style="color: #e73f40">近10中8</span>
                <span style="margin: 0 5px;font-weight: initial">历史收益</span>
                <span style="background-color: #e73f40;color: white;border-radius: 10px;padding: 2px 5px">200%</span>
              </h4>
            </div>
          </div>
          <div class="detail-bottom">
            <roundness-chart/>
            <div class="detail">
              <div class="detail-border1px">
                <h3>10000</h3>
                <p>发起人自购(元)</p>
              </div>
              <div class="detail-border1px">
                <h3>10000</h3>
                <p>保底(份)</p>
              </div>
              <div class="detail-border1px">
                <h3>100%</h3>
                <p>方案抽成(元)</p>
              </div>
              <div class="detail-special">
                <h3>170 <img src="../../assets/betting/down_gray.png"/></h3>
                <p>已购(份)</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom-fixed">
          <template v-if="type===1">
            <div class="underway-top">
              <!--进行中-->
              <p>截至时间:2017/05/05 18:18:18</p>
              <p>您已认购100份</p>
            </div>
            <div class="underway-bottom">
              <!--进行中-->
              <div>
                <h3>共<span style="color: #e73f40">1000</span>元</h3>
                <button>参与合买</button>
              </div>
              <div>
                <input type="number" placeholder="剩余10份">
                <h3>每份<span style="color: #e73f40">100</span>元</h3>
              </div>
            </div>
          </template>
          <h3 v-else-if="type===2" class="failure">
            <!--流单-->
            您已认购 <span style="color: #e73f40">1000</span>份,共<span style="color: #e73f40">1000</span>元退回账户
          </h3>
          <h3 v-else-if="type===3" class="no-an-winning">
            <!--没中奖和中奖-->
            您已认购<span style="color: #e73f40">1000</span>份,共<span style="color: #e73f40">1000</span>元
          </h3>
        </div>
      </div>
    </order-detail>
  </div>
</template>

<script>
  import OrderDetail from '../user/OrderDetail.vue';
  import RoundnessChart from '../../components/RoundnessChart.vue'

  export default {
    name: 'HighOrderDetail',
    data () {
      return {type: 1}
    },
    components: {OrderDetail, RoundnessChart}
  }
</script>

<style scoped>
  .winning-detail {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    text-align: center;
    background-color: white;
    padding: 5px 0;
  }

  .winning-detail > div.border1px {
    border-right: 1px solid #ddd;
  }

  .winning-detail > div {
    flex: 1;
  }

  .winning-detail > div > h3 {
    color: #e73f40;
  }

  /*--------------*/
  .initiator-detail {
    background-color: white;

  }

  .initiator-detail > .detail-top {
    padding: 0 10px;
    border-bottom: 1px dashed #ddd;
  }

  .initiator-detail .detail-top > button {
    float: right;
    line-height: 1;
    color: white;
    font-size: 14px;
    background-color: #e73f40;
    border-radius: 5px;
    margin-top: 12px;
    padding: 10px;
  }

  .initiator-detail .detail-top > div h3 {
    line-height: 1;
    padding-top: 10px;
  }

  .initiator-detail .detail-top > div h4 {
    line-height: 1;
    padding: 10px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  /*--------------*/
  .initiator-detail .detail-bottom {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 10px 0 10px 10px;
    justify-content: flex-start;
  }

  .initiator-detail .detail-bottom .detail {
    text-align: center;
    display: flex;
    flex-flow: row nowrap;
    flex: 1;
  }

  .initiator-detail .detail-bottom .detail > div {
    flex: 1;

  }

  .initiator-detail .detail-bottom .detail > div > h3 {
    line-height: 1;
    padding-bottom: 5px;
  }

  .initiator-detail .detail-bottom .detail > div.detail-border1px {
    border-right: 1px solid #ddd;
  }

  .initiator-detail .detail-bottom .detail .detail-special h3 img {
    transform: rotate(-90deg) translate(3.5px, 0);
    vertical-align: middle;
    width: 15px;
    height: 7.5px;
  }

  /*--------------*/
  .bottom-fixed {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    max-width: 10rem;
    z-index: 2;
  }

  .bottom-fixed .underway-top {
    padding: 10px;
    background-color: #72a4ff;
    color: white;
    display: flex;
    flex-flow: row nowrap;
    font-size: 14px;
    line-height: 1;
  }

  .bottom-fixed .underway-top > p:nth-child(1) {
    flex: 1;
  }

  .bottom-fixed .underway-bottom {
    background-color: white;
    height: 50px;
  }

  .bottom-fixed .underway-bottom > div:nth-child(1) {
    float: right;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 100%;
  }

  .bottom-fixed .underway-bottom > div:nth-child(1) button {
    color: white;
    background-color: #e73f40;
    padding: 10px 15px;
    border-radius: 5px;
    margin: 0 10px 0 5px;
  }

  .bottom-fixed .underway-bottom > div:nth-child(2) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 100%;
  }

  .bottom-fixed .underway-bottom > div:nth-child(2) input {
    margin-left: 10px;
    max-width: 8em;
    text-align: center;
  }

  .bottom-fixed .underway-bottom > div:nth-child(2) h3 {
    white-space: nowrap;
    margin: 0 5px;
  }

  .bottom-fixed .failure, .bottom-fixed .no-an-winning {
    text-align: center;
    background-color: white;
    line-height: 50px;
    border-top: 1px #ddd solid;
  }
</style>
