<style scoped>
  .red-item, .red-item * {
    box-sizing: border-box;
  }

  .red-item {
    float: left;
    position: relative;
    display: inline-block;
    width: 50%;
    background-color: white;
    border-bottom: 1px solid #ddd;
  }

  .red-item:after {
    content: ' ';
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    width: 1px;
    background-color: #ddd;
    z-index: 2;
  }

  .red-item-body {
    padding: .35rem;
  }

  .red-item-top {
    background-image: url("../../../../assets/red_packet_back_2.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 1.63rem;
    width: 100%;
    color: white;
  }

  .red-item-top-1 {
    height: 1.03rem
  }

  .red-item-top-1 > div {
    position: relative;
    padding-left: 24%;
    top: 50%;
    transform: translateY(-50%);
    background-image: url("../../../../assets/icon/red_item_icon.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 7% 0;
    font-size: .56rem;
    font-weight: bold;
    overflow: hidden;
  }

  .red-item-top-2 {
    height: 0.6rem;
    line-height: 0.6rem;
    position: relative;
  }

  .red-item-top-2 > div {
    display: inline-block;
    font-size: .39rem;
    overflow: hidden;
  }

  .top2-child-left {
    float: left;
    padding-left: 0.7em;
    filter: alpha(opacity=70);
    -moz-opacity: 0.7;
    -khtml-opacity: 0.7;
    opacity: 0.7;
  }

  .top2-child-right {
    float: right;
    padding-right: 0.7em;
    filter: alpha(opacity=70);
    -moz-opacity: 0.7;
    -khtml-opacity: 0.7;
    opacity: 0.7;
  }

  .red-item-details {
    color: #666666;
    padding: .32rem 0;
    font-size: .37rem;
  }

  .red-item-PB2, .red-item-PB {
    font-size: 0;
  }

  .red-item-PB .red-item-price, .red-item-PB .red-item-button {
    display: inline-block;
    width: 50%;
    font-size: .39rem;
  }

  .red-item-price {
    color: #999999;
  }

  .red-item-PB .red-item-price > span {
    color: #e73f40;
    font-weight: bold;
  }

  .red-item-button {
    border: 1px #e73f40 solid;
    text-align: center;
    padding: .2rem 0;
    border-radius: 5px;
    color: #e73f40;
  }

  .red-item-PB2 .red-item-button {
    width: 30%;
    display: inline-block;
    font-size: .3rem;
    vertical-align: middle;
  }

  .red-item-PB2 .red-item-price {
    vertical-align: middle;
    width: 70%;
    display: inline-block;
    font-size: .3rem;
    overflow: hidden;
  }

</style>
<template>
  <div class="red-item">
    <div class="red-item-body">
      <div class="red-item-top">
        <div class="red-item-top-1">
          <div>¥12222</div>
        </div>
        <div class="red-item-top-2">
          <div class="top2-child-left">购买送80元</div>
          <div class="top2-child-right">补货中</div>
        </div>
      </div>
      <div class="red-item-details">全彩种通用</div>
      <div v-if="theme" class="red-item-PB">
        <div class="red-item-price"><span>500</span>元</div>
        <div class="red-item-button">购买</div>
      </div>
      <div v-else class="red-item-PB2">
        <div class="red-item-price">
          <div><span style="color:#e73f40;">1000</span>积分</div>
          <div style="color: #333333">
            <count-down :endTime="'1525472430'"/>
          </div>
        </div>
        <div class="red-item-button">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
  import countDown from './countDown.vue'

  export default {
    name: 'redItem',
    props: {
      theme: {type: null}
    },
    components: {countDown}
  }
</script>
