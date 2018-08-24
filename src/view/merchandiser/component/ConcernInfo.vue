<template>
  <div class="ConcernInfo" :class="translucent">
    <img src="../../../assets/MerchandiserLobby-top3.png" alt="">
    <div style="flex: 1;align-self:stretch;">
      <h2>大牛</h2>
      <div class="no">有推单</div>
    </div>
    <button class="no"></button>
  </div>
</template>

<script>
  export default {
    name: 'ConcernInfo',
    props: {translucent: {type: String}},
    created () {
      if (this.translucent) {
        console.log(this.translucent)
      }
    }
  }
</script>

<style scoped>

  .ConcernInfo {
    margin-top: 10px;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
  }

  .ConcernInfo img {
    margin: 0 10px;
    width: 15%;
    border-radius: 100%;
  }

  .ConcernInfo > div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    line-height: 1;
  }

  .ConcernInfo > div > h2::after {
    content: '';
    display: inline-block;
    vertical-align: top;
    margin-left: 5px;
    background-image: url("../../../assets/icon/vip4.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    width: 18px;
    height: 18px;
  }

  .ConcernInfo > div > div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 7px;
    font-size: 14px;
  }

  .ConcernInfo > div > div.no {
    color: #999999;
  }

  .ConcernInfo > div > div.yes {
    color: white;
    background-color: #3f6ee7;
    padding: 0 5px;
    border-radius: 5px;
  }

  .ConcernInfo > button.yes:before {
    content: '✓ 已关注';
    display: inline-block;
    color: #999999;
  }

  .ConcernInfo > button.no:before {
    content: '✛ 关注';
    display: inline-block;
    color: #e73f40;
    font-weight: bold;
  }

  .ConcernInfo > button {
    border: 1px solid #ddd;
    padding: 5px;
    margin-right: 10px;
    border-radius: 3px;
    background-color: white;
  }

  /*----------------------------------*/
  .translucent > div > h2 {
    color: white;
  }

  .translucent > div > div.no {
    color: #dadefe;
  }

  .translucent > button {
    background-color: transparent;
  }

  .translucent > button.yes:before {
    content: '✓ 已关注';
    display: inline-block;
    color: white;
  }

  .translucent > button.no:before {
    content: '✛ 关注';
    display: inline-block;
    color: white;
    font-weight: bold;
  }
</style>
