<template>
  <div class="homeRecommended-container">
    <div class="top">
      <router-link tag="div" to="/" class="item" style="border-right: 1px solid #ddd">
        <img src="../../../assets/home-Recommended.jpg" alt="大神推荐">
        <div>
          <h2 class="ellipsis">大神推荐</h2>
          <p class="ellipsis">爆红大神心水爆红大神心水</p>
        </div>
      </router-link>
      <router-link tag="div" to="/buyTogetherLobby" class="item">
        <img src="../../../assets/home-jointPurchase.jpg" alt="合买大厅">
        <div>
          <h2 class="ellipsis">合买大厅</h2>
          <p class="ellipsis">中奖可以更简单</p>
        </div>
      </router-link>
    </div>
    <div class="bottom">
      <router-link to="/">
        <div>
          <img src="../../../assets/home-information.jpg" alt="">
          <p>资讯</p>
        </div>
      </router-link>
      <router-link to="/">
        <div>
          <img src="../../../assets/home-activity.jpg" alt="">
          <p>活动</p>
        </div>
      </router-link>
      <router-link to="/redPurchase">
        <div>
          <img src="../../../assets/home-kimsVolume.png" alt="">
          <p>红包</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeRecommended'
  }
</script>

<style scoped>
  .homeRecommended-container {
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: white;
  }

  .homeRecommended-container .top {
    display: flex;
    display: -webkit-flex;
    flex-flow: row nowrap;
    -webkit-flex-flow: row nowrap;
    height: 75px;
  }

  .homeRecommended-container .bottom {
    display: flex;
    display: -webkit-flex;
    flex-flow: row nowrap;
    -webkit-flex-flow: row nowrap;
    border-top: 1px solid #ddd;
    height: 75px;
  }

  .homeRecommended-container .top .item {
    padding: 12px 5px;
    flex: 1;
    overflow: hidden;
  }

  .homeRecommended-container .bottom > a {
    display: flex;
    display: -webkit-flex;
    flex-flow: row nowrap;
    -webkit-flex-flow: row nowrap;
    justify-content: center;
    -webkit-justify-content: center;
    padding: 12px 0;
    flex: 1;
    overflow: hidden;
  }

  .homeRecommended-container .item > img {
    width: 66px;
    float: left;
  }

  .homeRecommended-container .item > div {
    padding-top: 5px;
    text-indent: 5px;
    overflow: hidden;
  }

  .homeRecommended-container .bottom > a img {
    width: 40px;
    height: 40px;
  }

  .homeRecommended-container .bottom > a h2 {
    color: red ;
  }

  .homeRecommended-container .bottom > a p {
    text-align: center;
    color: #333333 ;
  }
</style>
