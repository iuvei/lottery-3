<template>
  <div style="padding-top: 50%;overflow: hidden">
    <div class="RecommendDetails-fixed">
      <div class="RecommendDetails-top">
        <div>
          <v-head selfAdaption="SingInLaTombola"/>
          <div style="overflow: hidden">
            <concern-info translucent="translucent"/>
          </div>
          <div style="position: absolute;bottom: 0;width: 100%;height: 38.125%">
            <three-state translucent="translucent" :list="[['5中5','近期战绩'],['100.00%','命中率'],['100.00%','盈利率']]"/>
          </div>
        </div>
      </div>
      <div class="RecommendDetails-nav">
        <div @click="switchover(0)" :class="{optFor:target[1]===0}">推单</div>
        <div @click="switchover(1)" :class="{optFor:target[1]===1}">战绩</div>
      </div>
    </div>
    <div class="RecommendDetails-body">
      <div v-if="FirstTime[0]||target[1]===0" v-show="target[1]===0">
        <div class="RecommendDetails-table-item">
          <h2 style="line-height:1;margin: 10px 0">今日</h2>
          <div class="border-bottom1px">
            <p><span class="bold-e73f40">100</span><span>人已跟</span> 共<span class="bold-e73f40">10000</span>元</p>
            <vs-information-table/>
          </div>
          <div class="border-bottom1px">
            <p><span class="bold-e73f40">100</span><span>人已跟</span> 共<span class="bold-e73f40">10000</span>元</p>
            <vs-information-table/>
          </div>
        </div>
        <div class="RecommendDetails-table-item">
          <h2 style="line-height:1;margin: 10px 0">昨天</h2>
          <div class="border-bottom1px">
            <p><span class="bold-e73f40">100</span><span>人已跟</span> 共<span class="bold-e73f40">10000</span>元</p>
            <vs-information-table/>
          </div>
          <div class="border-bottom1px">
            <p><span class="bold-e73f40">100</span><span>人已跟</span> 共<span class="bold-e73f40">10000</span>元</p>
            <vs-information-table/>
          </div>
        </div>
      </div>

      <div v-if="FirstTime[1]||target[1]===1" v-show="target[1]===1">
        <table class="RecommendDetails-table">
          <tr>
            <th><img src="../../assets/betting/mine_standings_0.png" alt="战绩" height="16"></th>
            <th>近7日战绩</th>
            <th>近30日战绩</th>
          </tr>
          <tr>
            <th>命中数</th>
            <td style="color: #e73f40">7中5</td>
            <td style="color: #e73f40">7中5</td>
          </tr>
          <tr>
            <th>命中率</th>
            <td>7中5</td>
            <td>7中5</td>
          </tr>
          <tr>
            <th>盈利率</th>
            <td>7中5</td>
            <td>7中5</td>
          </tr>
          <tr>
            <th>中奖跟单金额</th>
            <td>7中5</td>
            <td>7中5</td>
          </tr>
          <tr>
            <th>跟单总奖金</th>
            <td>7中5</td>
            <td>7中5</td>
          </tr>
          <tr>
            <th>跟单人数</th>
            <td>7中5</td>
            <td>7中5</td>
          </tr>
        </table>
        <div class="RecommendDetails-mine-alone">
          已获得抽成总金额 <span style="color: #e73f40;font-weight: bold">1000.00元</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ConcernInfo from './component/ConcernInfo';
  import ThreeState from '../../components/ThreeState';
  import VsInformationTable from './component/VsInformationTable';

  export default {
    name: 'RecommendDetails',
    components: {VsInformationTable, ThreeState, ConcernInfo},
    data () {
      return {
        target: (this.$route.params.target) ? JSON.parse(this.$route.params.target) : [null, null],
        FirstTime: [false, false]
      }
    },
    methods: {
      switchover (index) {
        if (this.target[1] === index) return;
        this.$set(this.FirstTime, index, true);
        this.$set(this.target, 1, index);
      }
    },
    created () {
    }
  }
</script>

<style scoped>
  .bold-e73f40 {
    color: #e73f40;
    font-weight: bold;
  }

  .RecommendDetails-fixed {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    max-width: 640px;

  }

  .RecommendDetails-top {
    overflow: hidden;
    position: relative;
    padding-top: 50%;
    background-image: url("../../assets/merchandiser_details.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }

  .RecommendDetails-top > div {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  .RecommendDetails-nav {
    display: flex;
    flex-flow: row nowrap;
    line-height: 1;
    background-color: white;
    font-size: 18px;
    text-align: center;
  }

  .RecommendDetails-nav > div {
    flex: 1;
    padding: 11px 0;
    border-bottom: 3px solid #ddd;
  }

  .RecommendDetails-nav > div.optFor {
    color: #e73f40;
    border-color: #e73f40;
  }

  .RecommendDetails-body {
    padding-top: 43px;
  }

  .RecommendDetails-body > div {
    overflow: hidden;
  }

  /*----------------*/
  .RecommendDetails-table-item {
    overflow: hidden;
    background-color: white;
    padding: 0 10px;
    margin-bottom: 10px;
  }

  .RecommendDetails-table-item .border-bottom1px {
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }

  .RecommendDetails-table-item .border-bottom1px > p {
    line-height: 1;
    margin: 15px 0;
    font-size: 15px;

  }

  .RecommendDetails-table-item > div:last-child.border-bottom1px {
    border-bottom: 0;
  }

  /*----------------*/
  .RecommendDetails-mine-alone {
    background-color: white;
    margin: 0 2%;
    width: 96%;
    border: 1px solid #ddd;
    text-align: center;
    line-height: 1;
    padding: 13px 0;
    font-size: 15px;
    color: #999999;
  }

  .RecommendDetails-table {
    border-spacing: 0;
    table-layout: fixed;
    margin: 5% 2%;
    width: 96%;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    text-align: center;
    background-color: white;
    font-size: 15px;
  }

  .RecommendDetails-table td, .RecommendDetails-table th {
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    line-height: 1;
    padding: 13px 0;
  }

  .RecommendDetails-table td {
    font-weight: bold;
  }

  .RecommendDetails-table th {
    font-weight: 100;
    color: #999999;
  }
</style>
