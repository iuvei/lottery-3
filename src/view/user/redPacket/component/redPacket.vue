<style scoped>

  .yes-badge, .wait-badge, .no-badge {
    border-radius: 8px;
    padding: 2px 6px;
    font-size: 12px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
  }

  .yes-badge {
    color: #c32e2e;
    background-color: #fcc748;
  }

  .wait-badge {
    color: white;
    background-color: white;
  }

  .no-badge {
    color: white;
    background-color: #bdbdbd;
  }

  .yes-back-color {
    background-color: #ec4f50;
  }

  .wait-back-color {
    background-color: #fda044;
  }

  .no-back-color {
    background-color: #d3d3d3;
  }

  .red-packet * {
    box-sizing: border-box;
  }

  .red-packet {
    box-sizing: border-box;
    margin: 3%;
    width: 94%;
  }

  .red-packet-top {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-image: url("../../../../assets/red_paecket_back.png");
    background-position: left bottom;
    background-size: 16px auto;
    background-repeat: repeat-x;
    padding: 12px;
    font-size: 0;
  }

  .red-packet-bottom {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: white;
  }

  .red-packet-left, .red-packet-right {
    display: inline-block;
    width: 50%;
  }

  .left-red-minor, .right-red-minor {
    font-size: .43rem;
    color: white;
    filter: alpha(opacity=50);
    -moz-opacity: 0.5;
    -khtml-opacity: 0.5;
    opacity: 0.5;
  }

  .right-red-minor, .right-red-importance {
    text-align: right;
  }

  .left-red-importance, .right-red-importance {
    font-size: 0.54rem;
    line-height: 1;
    color: white;
  }

  .left-red-importance {
    font-weight: bold;
  }

  .red-packet-bottom {
    font-size: .39rem;
    padding: 10px 12px;
    color: #999999;
  }
</style>
<template>
  <div class="red-packet">
    <div class="red-packet-top" :class="`${theme}-back-color`">
      <div class="red-packet-left">
        <div class="left-red-importance">
          <span style="font-size: 0.5em">¥</span>
          <span>10000</span>
          <span :class="theme+'-badge'">余额</span>
        </div>
        <div class="left-red-minor">订单满1000可用</div>
      </div>
      <div class="red-packet-right">
        <div class="right-red-importance">天降红包</div>
        <div class="right-red-minor">3天后过期</div>
      </div>
    </div>
    <div class="red-packet-bottom">可用彩种: 竞彩足球 竞彩篮球 双色球 大乐透</div>
  </div>
</template>

<script>
  import { Badge } from 'mint-ui';

  export default {
    name: 'redPacket',
    props: {
      propsData: {type: null},
      theme: {type: null}
    },
    components: {
      [Badge.name]: Badge
    }
  }
</script>

