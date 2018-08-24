<template>
  <div>
    <v-head title="追号详情"></v-head>
    <div class="ChaseNumberDetail-top">
      <img src="../../../../assets/MerchandiserLobby-top3.png" alt="">
      <div>
        <div>
          <h3>湖北11选5</h3>
          <p>2018-08-22 15:25:07</p>
        </div>
        <div class="text-right">
          <h3>当前1/5期</h3>
          <p>完成后追停完成后追停完成后追停完成后追停</p>
        </div>
      </div>
    </div>
    <div class="ChaseNumberDetail-center">
      <div>
        <h4 style="color: #e73f40">8.0</h4>
        <p style="color: #999999">投注金额( 元 )</p>
      </div>
      <div>
        <h4 style="color: #e73f40">8.0</h4>
        <p style="color: #999999">投注金额( 元 )</p>
      </div>
    </div>
    <div class="ChaseNumberDetail-nav">
      <p>期次明细</p>
      <input id="checkbox" type="checkbox"/>
      <label for="checkbox">显示已追</label>
    </div>
    <div class="ChaseNumberDetail-item">
      <h4>180822248期</h4>
      <h4>2元</h4>
      <h4>出票失败</h4>
      <div></div>
    </div>
    <div class="ChaseNumberDetail-item background-img">
      <h4>18082248期</h4>
      <h4>2888元</h4>
      <h4>出票失</h4>
      <div></div>
    </div>
    <div class="ChaseNumberDetail-item background-img">
      <h4>18082248期</h4>
      <h4>2888元</h4>
      <h4>出票失</h4>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChaseNumberDetail'
  }
</script>

<style scoped>
  .ChaseNumberDetail-top {
    display: flex;
    flex-flow: row nowrap;
    justify-content: stretch;
    background: url("../../../../assets/icon/order_top_bg.png") no-repeat;
    background-size: 100% 100%;
    padding: 20px 0;
  }

  .ChaseNumberDetail-top img {
    width: 15%;
    height: 15%;
    margin: 0 3%;
  }

  .ChaseNumberDetail-top > div {
    margin-right: 3%;
    max-width: 76%;
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .ChaseNumberDetail-top > div > div {
    flex: 1;
    line-height: 1;
    overflow: hidden;
  }

  .ChaseNumberDetail-top > div > div h3 {
    height: 65%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ChaseNumberDetail-top > div > div p {
    color: #999999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ChaseNumberDetail-center {
    margin: 10px 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    text-align: center;
    background-color: white;
  }

  .ChaseNumberDetail-center > div {
    flex: 1;
    margin: 10px 0;
    border-right: 1px dashed #ddd;
    font-size: 14px;
  }

  .ChaseNumberDetail-center > div:last-child {
    border-right: 0;
  }

  .ChaseNumberDetail-nav {
    padding: 10px 0;
    display: flex;
    flex-flow: row nowrap;
    background-color: white;
    align-items: center;
    justify-content: flex-start;
    font-size: 15px;
  }

  .ChaseNumberDetail-nav > p {
    margin-left: 10px;
    color: #999999;
    flex: 1;
  }

  .ChaseNumberDetail-nav > label {
    margin: 0 10px 0 5px;
  }

  .ChaseNumberDetail-item {
    border-bottom: 1px dashed #ddd;
    display: flex;
    flex-flow: row nowrap;
    line-height: 1;
    font-size: 16px;
    padding: 20px 0 10px 0;
  }

  .ChaseNumberDetail-item.background-img {
    background-image: url("../../../../assets/present_icon.png");
    background-size: auto 15px;
    background-repeat: no-repeat;
    background-position: left top;
  }

  .ChaseNumberDetail-item h4:nth-child(1) {
    margin-left: 10px;
    flex: 30;
  }

  .ChaseNumberDetail-item h4:nth-child(2) {
    color: #e73f40;
    flex: 20;
    text-align: center;
  }

  .ChaseNumberDetail-item h4:nth-child(3) {
    text-align: right;
    flex: 15;
    color: #868686;
  }

  .ChaseNumberDetail-item > div {
    flex: 2;
    margin: 0 10px 0 5px;
    background: url("../../../../assets/icon/arrow_right.png") no-repeat;
    background-size: auto 100%;
    background-position: center center;
  }
</style>
