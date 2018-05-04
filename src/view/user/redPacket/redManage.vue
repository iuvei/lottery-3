<style scoped>
  .red-manage * {
    box-sizing: border-box;
  }

  .red-manage {
    padding-top: 89px;
    padding-bottom: 65px;
  }

  .is-selected {
    color: #e73f40 !important;
    border-color: #e73f40 !important;
  }

  .red-manage-bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background: white;
    z-index: 100;
    font-size: 0;
  }

  .red-manage-title {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: white;
    z-index: 100;
  }

  @media screen and (min-width: 640px) {
    .red-manage-title {
      width: 640px;
      left: 50%;
      margin-left: -320px;
    }

    .red-manage-bottom {
      width: 640px;
      left: 50%;
      margin-left: -320px;
      font-size: 0;
    }
  }

  .question-icon {
    background: url("../../../assets/betting/question.png") no-repeat center;
    background-size: 50% 50%;
    width: 35px;
    height: 35px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .button-L {
    display: inline-block;
    font-size: 18px;
    border-radius: 4px;
    height: 40px;
    line-height: 40px;
    width: 43%;
    margin: 10px;
    color: #e73f40;
    border: 1px solid #ccc;
  }

  .bottom-R {
    display: inline-block;
    font-size: 18px;
    border-radius: 4px;
    border: 0;
    height: 40px;
    line-height: 40px;
    width: 43%;
    margin: 10px;
    color: white;
    background-color: #e73f40;
  }

</style>
<template>
  <div class="red-manage">
    <div class="red-manage-title">
      <v-head title="红包">
        <span slot="right" class="question-icon" @click="goHelp"></span>
      </v-head>
      <mt-navbar v-model="select">
        <mt-tab-item id="yes">可使用( {{redQuantity.available_coupon_number ||0}} )</mt-tab-item>
        <mt-tab-item id="wait">等待派发( {{ redQuantity.waiting_coupon_number||0 }} )</mt-tab-item>
        <mt-tab-item id="no">已使用/过期</mt-tab-item>
      </mt-navbar>
    </div>
    <div>
      <div v-if="selected1[0]" v-show="selected1[1]">
        <template v-for="n in 102">
          <red-packet :propsData="1" theme="yes"/>
        </template>
        <template v-if="1">
          <no-red-packet props-data="暂无可用红包"/>
        </template>
      </div>
      <div v-if="selected2[0]" v-show="selected2[1]">
        <template v-for="n in 102">
          <red-packet :propsData="2" theme="wait"/>
        </template>
        <template v-if="1">
          <no-red-packet props-data="暂无派发红包"/>
        </template>
      </div>
      <div v-if="selected3[0]" v-show="selected3[1]">
        <template v-for="n in 0">
          <red-packet :propsData="3" theme="no"/>
        </template>
        <template v-if="1">
          <no-red-packet props-data="暂无红包"/>
        </template>
      </div>
    </div>
    <div class="red-manage-bottom text-center">
      <router-link to="exchangeRed" class="button-L">兑换红包</router-link>
      <router-link to="redPurchase" class="bottom-R">购买红包</router-link>
    </div>
  </div>
</template>

<script>
  import VHead from '../../../components/VHead.vue';
  import redPacket from './component/redPacket.vue';
  import noRedPacket from './component/noRedPacket.vue';
  import Http from '../../../store/Http.js';
  import loading from '../../../common/loading';
  import { Navbar, TabItem, TabContainerItem, TabContainer, Button } from 'mint-ui';

  export default {
    name: 'redManage',
    data () {
      return {
        select: 'yes',
        selected1: [true, true],
        selected2: [false, false],
        selected3: [false, false],
        redQuantity: {}
      }
    },
    mounted () {
      this.getRedQuantity()
      this.getRedList()
    },
    methods: {
      getRedQuantity () {
        loading.show()
        Http.get('/Coupon/calcUserCouponNumber').then(data => {
          this.redQuantity = {...data}
          loading.hide()
        })
      },
      getRedList () {
        loading.show()
        Http.get('/Coupon/getUserCouponList', {type: 0, offset: 0, limit: 100}).then(data => {
          console.log(data)
          loading.hide()
        })
      },
      switchover (news) {
        switch (news) {
          case 'yes':
            if (this.selected1[0]) {
              this.selected1 = [true, !this.selected1[1]]
            } else {
              this.selected1 = [true, !this.selected1[1]]
            }
            break;
          case 'wait':
            if (this.selected2[0]) {
              this.selected2 = [true, !this.selected2[1]]
            } else {
              this.selected2 = [true, !this.selected2[1]]
            }
            break;
          case 'no':
            if (this.selected3[0]) {
              this.selected3 = [true, !this.selected3[1]]
            } else {
              this.selected3 = [true, !this.selected3[1]]
            }
            break;
          default:
        }
      },
      goHelp () {
        this.$router.push({
          name: 'WebPage',
          query: {
            title: '红包管理帮助',
            url: 'http://phone-api.tigercai.com/index.php?s=/Content/help/coupon.html'
          }
        })
      }
    },
    watch: {
      select (news, no) {
        console.log(news, no)
        this.switchover(no)
        this.switchover(news)
      }
    },
    components: {
      VHead,
      redPacket,
      noRedPacket,
      [Navbar.name]: Navbar,
      [Button.name]: Button,
      [TabItem.name]: TabItem,
      [TabContainer.name]: TabContainer,
      [TabContainerItem.name]: TabContainerItem
    }
  }
</script>
