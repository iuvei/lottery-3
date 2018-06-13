<template>
  <div class="mine">
    <v-head title="个人中心" :hide-back="true"></v-head>
    <div class="mine-top-i">
      <div class="mine-top">
        <img class="portrait" v-avatar="this.mine.avatar" alt="">
        <div class="username">{{mine.username}}</div>
        <div class="vip">
          <img v-vip="vipIconUrl" alt="">
        </div>
        <div class="singIn">
          <div class="bubble-bubble">
            <div class="bubble-bubble-body">{{ mine.sign_days? '已连续签到':'签到有好礼' }}<span v-if="mine.sign_days"><span
              style="color: red">{{ mine.sign_days }}</span>天</span></div>
          </div>
          <div class="singIn-button" @click="getSignIn()">
            <span class="mine-sing-in-icon"></span>
            {{ mine.is_sign? '已签到':'签到' }}
          </div>
        </div>
      </div>
      <div class="mine-vip">
        <p-progress
          :user-data="{user_level_name:mine.user_level_name,user_exp:mine.user_exp}"
          :next-data="{next_level_name:mine.next_level_name,next_level_exp:mine.next_level_exp}"/>
      </div>
    </div>
    <div class="info row text-center bg-white">
      <div class="col border-right">
        <p class="money">{{mine.balance | currency}}</p>
        <p class="text-sm text-light">余额</p>
      </div>
      <div class="col border-right">
        <p class="red-pack">{{mine.coupon_balance | currency}}</p>
        <p class="text-sm text-light">红包</p>
      </div>
      <div class="col">
        <p class="points">{{mine.points}}</p>
        <p class="text-sm text-light">积分</p>
      </div>
    </div>
    <router-link to="payment" tag="div" class="item border-top">
      <span class="mine-recharge-icon icon"></span>
      <span>充值</span>
      <span class="arrow-right"></span>
    </router-link>
    <router-link to="cash" tag="div" class="item border-top">
      <span class="mine-cash-icon icon"></span>
      <span>提现</span>
      <span class="arrow-right"></span>
    </router-link>
    <!--<router-link tag="div" to="orders" class="item margin-top-10">-->
    <!--<span class="mine-order-icon icon"></span>-->
    <!--<span>我的订单</span>-->
    <!--<span class="arrow-right"></span>-->
    <!--</router-link>-->
    <router-link tag="div" to="redManage" class="item border-top">
      <span class="mine-envelope-management-icon icon"></span>
      <span>红包管理</span>
      <span class="arrow-right"></span>
    </router-link>
    <router-link tag="div" to="integralStore" class="item border-top">
      <span class="mine-point-management-icon icon"></span>
      <span>积分商城</span>
      <span class="arrow-right"></span>
    </router-link>
    <router-link tag="div" to="exchangeRed" class="item border-top">
      <span class="mine-credit-exchange-icon icon"></span>
      <span>兑换红包</span>
      <span class="arrow-right"></span>
    </router-link>
    <router-link tag="div" to="user_info" class="item border-top">
      <span class="mine-info-icon icon"></span>
      <span>个人信息</span>
      <span class="arrow-right"></span>
    </router-link>
    <p class="text-normal text-center margin-10"><a href="tel:400-835-1108" class="text-light">客服热线 400-835-1108</a></p>
    <div class="logout-panel">
      <a href="javascript:;" @click="logout" class="btn btn-out-line">退出登录</a>
    </div>
    <!--<download-panel></download-panel>-->
    <v-dialog v-show="dialogShow" @close="onCloseDialog">
      <p class="text-md">体验完整功能</p>
      <p class="text-md margin-top-5">请下载安装老虎彩票官方APP</p>
      <div class="padding margin-top-10">
        <a target="_self" href="http://a.app.qq.com/o/simple.jsp?pkgname=co.sihe.tigerlottery" class="btn">立即下载</a>
      </div>
    </v-dialog>
    <bottom-nav active="Mine"></bottom-nav>
  </div>
</template>

<script>
  import VHead from '../../components/VHead.vue';
  import BottomNav from '../../components/BottomNav.vue';
  import DownloadPanel from '../../components/DownloadPanel.vue';
  import VDialog from '../../components/VDialog.vue';
  import PProgress from './privateComponent/progress.vue';
  import { mapActions, mapState } from 'vuex';
  import { MINE_INFO, LOGOUT, MINE_SIGN_IN } from '../../store/user/types';

  export default {
    name: 'mine',
    data: () => {
      return {
        dialogShow: false
      }
    },
    computed: {
      ...mapState({
        mine: state => state.user.mine
      }),
      vipIconUrl () {
        // 但经验值最大时不会升了
        return this.mine.user_exp >= this.mine.next_level_exp ? this.mine.next_level_img : this.mine.user_level_img;
      }
    },
    methods: {
      onShowDialog () {
        this.dialogShow = true;
      },
      onCloseDialog () {
        this.dialogShow = false;
      },
      ...mapActions({
        getMineInfo: MINE_INFO,
        getSignIn: MINE_SIGN_IN,
        logout: LOGOUT
      })
    },
    components: {
      VHead,
      DownloadPanel,
      VDialog,
      BottomNav,
      PProgress
    },
    created () {
      this.getMineInfo();
    }
  }
</script>

<style>
  .mine {
    position: relative;
    padding-bottom: 50px;
  }

  .mine .mine-top-i {
    background: linear-gradient(to bottom, #e6403f, #ee7736);
  }

  .mine .mine-top {
    padding: 15px 100px 15px 70px;
    min-height: 80px;
    position: relative;
    overflow: hidden;
  }

  .mine .mine-top .singIn {
    position: absolute;
    right: 10px;
    bottom: 15px;
    width: 90px;
    /*height: 50px;*/
  }

  .mine .mine-top .singIn-button {
    position: relative;
    background-color: #ffba00;
    color: white;
    font-weight: bold;
    text-indent: 2em;
    font-size: 15px;
    line-height: 1;
    padding: 7px;
    border-radius: 5px;
  }

  .mine-sing-in-icon {
    position: absolute;
    width: 1.6em;
    height: 1.6em;
    left: 7px;
    top: 50%;
    transform: translate(0, -50%);
  }

  .mine .mine-top .portrait {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 10px;
    border-radius: 50px;
  }

  .mine .mine-top .username {
    font-size: 17px;
    color: white;
    line-height: 30px;
  }

  .mine .mine-top .vip span {
    display: inline-block;
  }

  .mine .item {
    padding: 10px 10px 10px 40px;
    background: white;
    position: relative;
  }

  .mine .item .icon {
    position: absolute;
    left: 12px;
  }

  .mine .item .arrow-right {
    position: absolute;
    right: 10px;
    top: 15px;
  }

  .mine .item.border-top {
    border-top: 1px solid #ddd;
  }

  .mine .info .red-pack {
    color: #fc942c;
  }

  .mine .info .money {
    color: #e83f3f;
  }

  .mine .info .points {
    color: #5eb935;
  }

  .mine .info .border-right {
    border-right: 1px solid #ddd;
  }

  .mine .info .col {
    padding: 10px 0;
  }

  .mine .logout-panel {
    padding: 30px 10px;
    width: 100%;
  }

  .mine .logout-panel .btn {
    border: 1px solid #e73f40;
    background: #f2f2f2;
  }

  .mine .vip img {
    width: 20px;
    height: 20px;
  }

  .margin-10 {
    margin: 10px auto;
  }

  .mine-vip {
    width: 96%;
    margin: 0 2%;
    padding: 2% 0;
    border-top: 1px #d88f81 solid;
  }

  .bubble-bubble {
    width: 90%;
    font-size: 12px;
    height: 2em;
    line-height: 2em;
    margin-bottom: 5px;
    position: relative;
    background-color: #FFF;
    border-radius: 10px;
    color: #999999;
  }

  .bubble-bubble-body {
    width: 100%;
    transform: scale(0.8);
    text-align: center;
    overflow: hidden;
  }

  .bubble-bubble:after {
    content: "";
    display: inline-block;
    border-width: 5px;
    position: absolute;
    bottom: -10px;
    right: 10px;
    border-style: solid dashed dashed;
    border-color: #fff transparent transparent;
    font-size: 0;
    line-height: 0;
  }
</style>
