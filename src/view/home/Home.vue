<template>
  <div class="home padding-bottom-50">
    <div class="home-top">
      <mt-swipe :prevent="true" :stopPropagation="true" v-if="home.banners.length > 0">
        <mt-swipe-item :key="key" v-for="(banner, key) in home.banners">
          <img class="banner"
               :src="banner.image"
               alt="banner"
               @touchmove="touchChange"
               @touchend="goBannerUrl(banner)"
          />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="container">
      <div class="recommend-box" v-if="home.issue!==null">
        <recommend-lottery :issue="home.issue" @refresh="refresh"></recommend-lottery>
      </div>
      <div class="lottery-box">
        <div v-if="lotteries.length > 0">
          <template v-for="(lottery, index) in lotteries">
            <lottery-item :lottery="lottery"></lottery-item>
            <template v-if="(index+1)%3 === 0">
              <hr>
            </template>
          </template>
          <lottery-item :lottery="moreLottery"></lottery-item>
        </div>
      </div>
      <div style="overflow: hidden;margin-top: 10px">
        <home-recommended></home-recommended>
      </div>
      <div class="information-list">
        <information-item :key="item.id||key+1" :information="item" v-for="(item, key) in home.information"></information-item>
      </div>
    </div>
    <bottom-nav active="Home"></bottom-nav>
  </div>
</template>

<script>
  import BottomNav from '../../components/BottomNav.vue';
  import HomeRecommended from './components/homeRecommended';
  import { mapActions } from 'vuex';
  import Lottery from '../../model/common/Lottery';
  import {
    GET_BANNER, GET_LOTTERY_LIST, GET_INFORMATION_LIST,
    GET_RECOMMEND_ISSUE, RECOMMEND_ISSUE_REFRESH
  } from '../../store/home/types';
  import LotteryItem from '../../components/HomeLotteryItem.vue';
  import InformationItem from '../../components/HomeInformationItem.vue';
  import RecommendLottery from '../../components/HomeRecommendLottery.vue';

  export default {
    name: 'home',
    data () {
      return {
        touchTig: false,
        moreLottery: {
          component: 'More',
          tipText: '发现更多彩种',
          lottery_image: 'http://tclottery.oss-cn-hangzhou.aliyuncs.com/tigerH5App/img/more.png',
          lottery_name: '更多'
        }
      }
    },
    computed: {
      home () {
        return this.$store.state.home;
      },
      lotteries () {
        let lotteries = this.home.lotteries.filter(value => {
          return Lottery.isSYXW(value.lottery_id) || Lottery.isDLT(value.lottery_id) ||
            Lottery.isSSQ(value.lottery_id) || (value.lottery_id === 6) ||
            (value.lottery_id === 7) || (value.lottery_id === 5) ||
            Lottery.isFC3D(value.lottery_id) || Lottery.isSFCOrRXJ(value.lottery_id);
        });
        if (lotteries.length > 8) {
          lotteries.length = 8
        }
        return lotteries
      }
    },
    methods: {
      ...mapActions({
        getBanners: GET_BANNER,
        getLotteryList: GET_LOTTERY_LIST,
        getInformation: GET_INFORMATION_LIST,
        getRecommendIssue: GET_RECOMMEND_ISSUE,
        recommendIssueRefresh: RECOMMEND_ISSUE_REFRESH
      }),
      refresh () {
        this.recommendIssueRefresh();
      },
      goBannerUrl (item) {
        if (this.touchTig) {
          this.touchTig = false;
          return null
        }
        let router;
        const item2 = JSON.parse(JSON.stringify(item));
        switch (item2.type) {
          case '0':
            // -打开新页面
            item2.target && (function () {
              if (item2.target.indexOf('http://') !== -1) item2.target = item2.target.replace('http:', '');
              router = {name: 'WebPage', query: {title: item2.title, url: item2.target}};
            })();
            break;
          case '1':
            // -购买红包
            router = {name: 'redPurchase'};
            break;
          case '2':
            // -投注页面
            router = {
              name: Lottery.getComponent(item2.lottery_id),
              params: {id: item2.lottery_id}
            };
            break;
          case '3':
            // -充值
            router = {name: 'Payment'};
            break;
          case '4':// -合买大厅
          case '5':// -合买详情
          case '7':// -签到页面
          case '8':// -vip详情
            break;
          default:
          // -不做处理
        }
        router && this.$router.push(router);
      },
      touchChange () {
        // IOS默认事件禁用处理
        this.touchTig = true;
      }
    },
    created () {
      this.getBanners();
      this.getLotteryList();
      this.getRecommendIssue();
      this.getInformation()
    },
    components: {BottomNav, HomeRecommended, LotteryItem, InformationItem, RecommendLottery}
  }
</script>

<style>
  .home .home-top {
    height: 110px;
    background-color: white;
  }

  .home .container .recommend-box {
    min-height: 80px;
    background-color: white;
    border-radius: 5px;
  }

  .home .mint-swipe .banner {
    width: 100%;
    height: 100%;
  }

  .home .mint-swipe-indicators {
    bottom: 5px;
  }

  .home .mint-swipe-indicator {
    background: white;
    opacity: 0.3;
  }

  .home .mint-swipe-indicator.is-active {
    opacity: 1;
  }

  .home .container {
    padding: 10px;
  }

  .home .container .lottery-box {
    min-height: 346px;
    border: 1px solid #dddddd;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 10px;
  }

  .home .container .lottery-box hr {
    border-top: 0;
    border-bottom: 1px solid #ddd;
  }
</style>
