<style scoped>
  .VsInformationTable {
    table-layout: fixed;
    width: 100%;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    text-align: center;
    border-spacing: 0;
  }

  .VsInformationTable td, .VsInformationTable th {
    font-size: 15px;
    padding: 10px 0;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .VsInformationTable th:nth-child(1), .VsInformationTable th:nth-child(3) {
    width: 25%;
  }

  .VsInformationTable td:nth-child(2) > div {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  .VsInformationTable-bottom {
    margin: 10px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .VsInformationTable-bottom > button {
    background-color: white;
    border: 1px solid #e73f40;
    color: #e73f40;
    line-height: 1;
    padding: 15px 20px;
    font-size: 14px;
    border-radius: 10px;
  }

  .VsInformationTable-bottom.background-img-yes {
    background-image: url("../../../assets/stamp_yes_Winning.png");
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center right;
  }

  .VsInformationTable-bottom.background-img-no {
    background-image: url("../../../assets/stamp_no_Winning.png");
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center right;
  }

  .VsInformationTable-bottom > div {
    flex: 1;
  }

  .VsInformationTable-bottom > div > div:nth-child(1) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    color: white;
    font-size: 14px;
  }

  .VsInformationTable-bottom > div > div:nth-child(1) div.red {
    background-color: #e73f40;
    margin-right: 5px;
    border-radius: 10px;
    padding: 1px 5px;
  }

  .VsInformationTable-bottom > div > div:nth-child(1) div.yellow {
    background-color: #ffbd49;
    margin-right: 5px;
    border-radius: 10px;
    padding: 1px 5px;
  }

  .VsInformationTable-bottom > div > div:nth-child(2) {
    line-height: 25px;
    font-size: 16px;
    color: #999999;
  }
</style>
<template>
  <div style="overflow: hidden">
    <table class="VsInformationTable">
      <tr>
        <th>场次</th>
        <th style="flex: 1">对阵</th>
        <th>投注</th>
      </tr>
      <tr>
        <td>周一0011</td>
        <td>
          <div>
            <div style="flex: 1">莫斯科中央</div>
            <div style="margin: 0 1.5px">VS</div>
            <div style="flex: 1">莫斯科中央</div>
          </div>
        </td>
        <td>截至可见</td>
      </tr>
      <tr>
        <td>周一0011</td>
        <td>
          <div>
            <div style="flex: 1">莫斯科中央</div>
            <div style="margin: 0 1.5px">VS</div>
            <div style="flex: 1">莫斯科中央</div>
          </div>
        </td>
        <td>截至可见</td>
      </tr>
    </table>
    <div class="VsInformationTable-bottom background-img-yes">
      <div>
        <div>
          <div class="red">2串1</div>
          <div class="yellow">抽10%</div>
        </div>
        <div>08-09 17:49截至</div>
      </div>
      <button @click="$emit('showKeyboard')">单倍2元 跟一单</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VsInformationTable'
  }
</script>
