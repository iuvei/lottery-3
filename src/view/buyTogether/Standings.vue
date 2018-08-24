<style scoped>
  .Historical-earnings {
    font-weight: initial;
    color: #999999;
    margin-left: 10px;
    margin-right: 5px;
  }

  .Historical-earnings2 {
    color: white;
    background-color: #e73f40;
    border-radius: 10px;
    padding: 1px 6px;
  }

  .Standings-top {
    padding: 10px 0;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
  }

  .Standings-top > img {
    width: 66px;
    height: 66px;
    margin: 0 10px;
  }

  .Standings-top > div {
    flex: 1;
  }

  .Standings-top > div > h3 {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
  }

  .Standings-item {
    background-color: white;
    border-radius: 5px;
    margin: 10px;
  }

  .Standings-item-top {
    border-bottom: 1px dashed #ddd;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    font-size: 13px;
  }

  .Standings-item-top > p {
    flex: 1;
    margin: 0 10px;
    color: #a9a9a9;
  }

  .Standings-item-top > div {
    color: white;
    padding: 2px 5px;
    border-radius: 10px;
  }

  .Standings-item-top > div.yes {
    background-color: #e73f40;
  }

  .Standings-item-top > div.no {
    background-color: #cccccc;
  }

  .Standings-bottom {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 10px 0;
  }

  .Standings-bottom > div {
    flex: 1;
  }

  .Standings-bottom > div h3 {
    font-size: 17px;
  }

  .Standings-bottom > div p {
    color: #999999;
  }
</style>

<template>
  <div>
    <v-head title="合买战绩"></v-head>
    <div class="Standings-top">
      <img src="../../assets/portrait.png" alt="头像">
      <div>
        <h2>186****9179</h2>
        <h3><span style="color: #e73f40">近10中8</span>
          <span class="Historical-earnings">历史收益</span>
          <span class="Historical-earnings2">200%</span></h3>
      </div>
    </div>
    <div style="overflow: hidden">
      <div class="Standings-item">
        <div class="Standings-item-top">
          <h3>竞彩足球-混合投注</h3>
          <p>2017-07-04</p>
          <div class="yes">中奖</div>
        </div>
        <div class="Standings-bottom">
          <div>
            <h2>100000</h2>
            <p>方案金额</p>
          </div>
          <div>
            <h2>100000</h2>
            <p>参与人数</p>
          </div>
          <div>
            <h2>0</h2>
            <p>方案奖金</p>
          </div>
          <div>
            <h2>120%</h2>
            <p>收益率</p>
          </div>
        </div>
      </div>
      <div class="Standings-item">
        <div class="Standings-item-top">
          <h3>竞彩足球-混合投注</h3>
          <p>2017-07-04</p>
          <div class="no">未中奖</div>
        </div>
        <div class="Standings-bottom">
          <div>
            <h2>100000</h2>
            <p>方案金额</p>
          </div>
          <div>
            <h2>100000</h2>
            <p>参与人数</p>
          </div>
          <div>
            <h2>0</h2>
            <p>方案奖金</p>
          </div>
          <div>
            <h2>120%</h2>
            <p>收益率</p>
          </div>
        </div>
      </div>
      <div class="Standings-item">
        <div class="Standings-item-top">
          <h3>竞彩足球-混合投注</h3>
          <p>2017-07-04</p>
          <div class="yes">中奖</div>
        </div>
        <div class="Standings-bottom">
          <div>
            <h2>100000</h2>
            <p>方案金额</p>
          </div>
          <div>
            <h2>100000</h2>
            <p>参与人数</p>
          </div>
          <div>
            <h2>0</h2>
            <p>方案奖金</p>
          </div>
          <div>
            <h2>120%</h2>
            <p>收益率</p>
          </div>
        </div>
      </div>
      <div class="Standings-item">
        <div class="Standings-item-top">
          <h3>竞彩足球-混合投注</h3>
          <p>2017-07-04</p>
          <div class="no">未中奖</div>
        </div>
        <div class="Standings-bottom">
          <div>
            <h2>100000</h2>
            <p>方案金额</p>
          </div>
          <div>
            <h2>100000</h2>
            <p>参与人数</p>
          </div>
          <div>
            <h2>0</h2>
            <p>方案奖金</p>
          </div>
          <div>
            <h2>120%</h2>
            <p>收益率</p>
          </div>
        </div>
      </div>
      <div class="Standings-item">
        <div class="Standings-item-top">
          <h3>竞彩足球-混合投注</h3>
          <p>2017-07-04</p>
          <div class="yes">中奖</div>
        </div>
        <div class="Standings-bottom">
          <div>
            <h2>100000</h2>
            <p>方案金额</p>
          </div>
          <div>
            <h2>100000</h2>
            <p>参与人数</p>
          </div>
          <div>
            <h2>0</h2>
            <p>方案奖金</p>
          </div>
          <div>
            <h2>120%</h2>
            <p>收益率</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Standings'
  }
</script>
