<style scoped>
  .MerchandiserLobby-top {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
  }

  .MerchandiserLobby-top > div {
    flex: 1;
    padding-top: 18%;
    padding-bottom: 10px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    line-height: 1;
  }

  .MerchandiserLobby-top .top-left {
    background-image: url("../../assets/MerchandiserLobby-top1.png");
  }

  .MerchandiserLobby-top .top-center {
    background-image: url("../../assets/MerchandiserLobby-top2.png");
  }

  .MerchandiserLobby-top .top-right {
    background-image: url("../../assets/MerchandiserLobby-top3.png");
  }

  .MerchandiserLobby-top .top-left, .MerchandiserLobby-top .top-center, .MerchandiserLobby-top .top-right {
    background-size: 45%;
    background-position: center 20%;
    background-repeat: no-repeat;
  }

  .MerchandiserLobby-center {
    background-color: white;
  }

  .MerchandiserLobby-recommend .recommend-title, .MerchandiserLobby-center .center-title {
    background-color: white;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    padding: 10px 0;
  }

  .MerchandiserLobby-recommend .recommend-title > h3, .MerchandiserLobby-center .center-title > h3 {
    border-left: 3px solid #e73f40;
    padding-left: 10px;
    flex: 1;
  }

  .MerchandiserLobby-center .center-title > div {
    color: #999;
    margin-right: 10px;
    padding-right: 10px;
    background-image: url("../../assets/icon/arrow_right.png");
    background-repeat: no-repeat;
    background-size: 7px auto;
    background-position: center right;
  }

  .MerchandiserLobby-recommend .recommend-title > div {
    color: #999;
    margin-right: 10px;
    padding-left: 20px;
    background-image: url("../../assets/icon/selected_icon.png");
    background-repeat: no-repeat;
    background-size: 17.5px auto;
    background-position: center left;
  }

  .MerchandiserLobby-center .center-List {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 10px;
  }

  .MerchandiserLobby-center .center-List > div {
    max-width: 25%;
    flex: 1;
    text-align: center;
  }

  .MerchandiserLobby-center .center-List > div > img {
    width: 60%;
    border-radius: 100%;
  }

  .MerchandiserLobby-center .center-List > div > h4 {
    font-size: 15px;
    line-height: 1;
    padding: 7px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .MerchandiserLobby-center .center-List > div > div {
    display: inline-block;
    background-color: #e73f40;
    color: white;
    padding: 2px 5px;
    border-radius: 10px;
  }

  .MerchandiserLobby-recommend .recommend-item {
    background-color: white;
  }

  .MerchandiserLobby-recommend .recommend-item.background {
    background-image: url("../../assets/hot_seal.png");
    background-repeat: no-repeat;
    background-size: 20%;
    background-position: 70% top;
  }

  .MerchandiserLobby-recommend .recommend-item .item-top > div > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #999999;
    line-height: 1;
    margin-top: 7px;
    font-size: 14px;
  }

  .MerchandiserLobby-recommend .recommend-item .item-top > button.yes:before {
    content: '✓ 已关注';
    display: inline-block;
    color: #999999;
  }

  .MerchandiserLobby-recommend .recommend-item .item-top > button.no:before {
    content: '✛ 关注';
    display: inline-block;
    color: #e73f40;
    font-weight: bold;
  }

  .MerchandiserLobby-recommend .recommend-item .item-top > button {
    border: 1px solid #ddd;
    padding: 5px;
    margin-right: 10px;
    border-radius: 3px;
    background-color: white;
  }

</style>

<template>
  <div>
    <v-head title="跟单大厅"></v-head>
    <div class="MerchandiserLobby-top">
      <router-link :to="{name:'Crunchies',params:{target:'[0,0]'}}" tag="div" class="top-left">
        连红榜
      </router-link>
      <router-link :to="{name:'Crunchies',params:{target:'[0,1]'}}" tag="div" class="top-center">
        盈利榜
      </router-link>
      <router-link :to="{name:'RecommendDetails',params:{target:'[true,0]'}}" tag="div" class="top-right">
        我的推荐
      </router-link>
    </div>

    <div class="MerchandiserLobby-center margin-top-10">
      <router-link :to="{name:'Crunchies',params:{target:'[1,0]'}}" tag="div" class="center-title">
        <h3>虎彩认证大师</h3>
        <div>更多大神</div>
      </router-link>
      <div class="center-List">
        <div>
          <img src="../../assets/MerchandiserLobby-top1.png" alt="头像">
          <h4>大牛</h4>
          <div>近5中5</div>
        </div>
        <div>
          <img src="../../assets/MerchandiserLobby-top1.png" alt="头像">
          <h4>名字</h4>
          <div>近5中5</div>
        </div>
        <div>
          <img src="../../assets/MerchandiserLobby-top1.png" alt="头像">
          <h4>名字</h4>
          <div>近5中5</div>
        </div>
        <div>
          <img src="../../assets/MerchandiserLobby-top1.png" alt="头像">
          <h4>名字</h4>
          <div>近5中5</div>
        </div>
      </div>
    </div>

    <div class="MerchandiserLobby-recommend margin-top-10">
      <div class="recommend-title">
        <h3>潜力推荐单</h3>
        <div>仅查看关注</div>
      </div>

      <div class="recommend-item background">
        <div style="overflow: hidden">
          <concern-info/>
        </div>
        <div style="margin: 15px 10px">
          <vs-information-table @showKeyboard="keyboardClick"/>
        </div>
      </div>

      <div class="recommend-item background">
        <div style="overflow: hidden">
          <concern-info/>
        </div>
        <div style="margin: 15px 10px">
          <vs-information-table @showKeyboard="keyboardClick"/>
        </div>
      </div>

    </div>
    <merchandiser-keyboard :show.sync="keyboardShow"/>
  </div>
</template>

<script>

  import VsInformationTable from './component/VsInformationTable';
  import ConcernInfo from './component/ConcernInfo';
  import MerchandiserKeyboard from '../../components/MerchandiserKeyboard';

  export default {
    name: 'MerchandiserLobby',
    data () {
      return {keyboardShow: false}
    },
    methods: {
      keyboardClick () {
        this.keyboardShow = !this.keyboardShow
      }
    },
    components: {MerchandiserKeyboard, ConcernInfo, VsInformationTable}
  }
</script>
