<template>
  <router-link to="/HighOrderDetail/101050">
    <div class="buyTogetherItem">
      <div class="item-top">
        <div>已参与</div>
        <h3 style="color: #666;">竞彩足球-混合投注</h3>
      </div>
      <div class="item-center">
        <div class="chart">
          <roundness-chart :red="45" :green="45"/>
        </div>
        <div style="overflow: hidden">
          <h3>
            <span>186****9179</span>
            <span>历史收益</span>
            <span>200%</span>
          </h3>
          <h2>¥1000</h2>
        </div>
      </div>
      <div class="item-end">
        <p>已有750人参与</p>
        <p>剩余<span style="color:#e73f40;">10000</span>份</p>
      </div>
    </div>
  </router-link>
</template>

<script>
  import RoundnessChart from '../../../components/RoundnessChart.vue'

  export default {
    name: 'buyTogetherItem',
    components: {
      RoundnessChart
    }
  }
</script>

<style scoped>
  .buyTogetherItem {
    margin: 10px;
    overflow: hidden;
    background-color: white;
    border-radius: 5px;
  }

  .buyTogetherItem .item-top {
    line-height: 40px;
    padding: 0 10px;
    border-bottom: 1px dashed #ddd;
  }

  .buyTogetherItem .item-top > div {
    /*已参与*/
    float: right;
    color: white;
    width: 66.6px;
    padding-left: 16.6px;
    background-image: url("../../../assets/identification-participation.png");
    background-repeat: no-repeat;
    background-size: 66.6px 20px;
    background-position: left center;
    text-align: center;
    font-size: 14px;
  }

  .buyTogetherItem .item-center {
    padding: 0 10px;
    position: relative;
  }

  .buyTogetherItem .item-center h3 {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    line-height: 1;
    padding: 10px 0 0 0;
    /*transform: scale(0.8);*/
  }

  .buyTogetherItem .item-center h3 > span:nth-child(2) {
    color: #666;
    margin: 0 5px;
    font-weight: initial;
  }

  .buyTogetherItem .item-center h3 > span:nth-child(3) {
    background-color: #e73f40;
    border-radius: 20px;
    padding: 2px 5px;
    color: white;
  }

  .buyTogetherItem .item-center h2 {
    color: #e73f40;
    line-height: 1;
    padding: 10px 0;
  }

  .buyTogetherItem .item-center .chart {
    float: right;
    margin-top: 10px;
  }

  .buyTogetherItem .item-end {
    padding: 0 10px 10px 10px;
    display: flex;
    flex-flow: row nowrap;
    color: #999999;
    font-size: 14px;
  }

  .buyTogetherItem .item-end > p:nth-child(2) {
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px #ddd solid;
  }
</style>
