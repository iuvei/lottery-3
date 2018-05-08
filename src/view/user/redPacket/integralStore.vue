<style scoped>
  .alert-red-conversion {
    position: relative;
    box-sizing: border-box;
    max-width: 90%;
    margin: 0 auto;
    padding: 16.92% 0;
    background-image: url("../../../assets/red_packet_back_2.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: left;
    color: white;
  }

  .alert-red-conversion > div:nth-child(1) {
    box-sizing: border-box;
    position: absolute;
    top: 18.9%;
    left: 0;
    max-width: 81%;
    width: 81%;
    height: .7rem;
    line-height: .7rem;
    padding-left: 18.3%;
    background-image: url("../../../assets/icon/red_item_icon.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 7% 0;
    font-size: .56rem;
    font-weight: bold;
    overflow: hidden;
  }

  .alert-red-conversion > div:nth-child(2) {
    position: absolute;
    width: 81%;
    bottom: 11.58%;
    line-height: 1;
    left: 0;
    padding-left: 7%;
    font-size: .39rem;
    filter: alpha(opacity=70);
    -moz-opacity: 0.7;
    -khtml-opacity: 0.7;
    opacity: 0.7;
  }

  .alert-msg {
    max-width: 90%;
    margin: 0.25em auto;
    color: #666666;
  }

  .alert-msg > span {
    color: #e73f40;
  }

  .integral-top, .integral-bottom {
    position: fixed;
    width: 100%;
    left: 0;
    background: white;
    z-index: 100;
  }

  .integral-bottom {
    bottom: 0;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    color: #333333;
  }

  .integral-top {
    top: 0;
  }

  @media screen and (min-width: 640px) {
    .integral-top, .integral-bottom {
      width: 640px;
      left: 50%;
      margin-left: -320px;
    }
  }

  .integral-body {
    overflow-x: hidden;
    padding: 41px 0 82px 0;
  }

  .integral-body-title {
    margin: .39rem 0;
    background-color: #f4f4f4;
    color: #333333;
    font-weight: bold;
    font-size: .37rem;
  }

  .integral-body-title-child {
    margin-left: .35rem;
    border-left: 2px #e73f40 solid;
    text-indent: 0.5em;
    line-height: 1;
  }
</style>

<template>
  <div>
    <v-dialog v-show="hied1" @close="hied1 = false">
      <p class="text-md">兑换确认</p>
      <div class="text-md margin-top-5">
        <div class="alert-msg">您将使用 <span>{{ purchase1.point }}</span>积分兑换</div>
        <div class="alert-red-conversion">
          <div>{{ purchase1.name }}</div>
          <div>{{ purchase1.condition }}</div>
        </div>
        <div class="alert-msg text-left">有效期: {{ purchase1.end_time|getEndTime }}</div>
        <div class="alert-msg text-left">可用彩种: {{ purchase1.support_lottery }}</div>
      </div>
      <div class="padding margin-top-10">
        <a href="javascript:;" class="btn" @click="redConversion()">兑换</a>
      </div>
    </v-dialog>
    <v-dialog v-show="hied2" @close="hied2 = false">
      <p class="text-md">兑换确认</p>
      <div class="text-md margin-top-5">
        <div class="alert-msg">您将使用 <span>{{ purchase2.point }}</span>积分兑换</div>
        <img :src="purchase2.image" alt="" style="width: 50%;height: auto">
        <div class="alert-msg">{{ purchase2.name }}</div>
      </div>
      <div class="padding margin-top-10">
        <a href="javascript:;" class="btn" @click="entityConversion()">兑换</a>
      </div>
    </v-dialog>
    <div class="integral-top">
      <v-head title="积分商城">
        <router-link tag="span"
                     to="integralDetails"
                     slot="right"
                     style="color: #333"
        >积分明细
        </router-link>
      </v-head>
    </div>
    <div class="integral-body">
      <div v-for="n in list">
        <div class="integral-body-title">
          <div class="integral-body-title-child">{{ n.category_name }}</div>
        </div>
        <div v-if="n.category===1" style="position: relative;overflow: hidden">
          <template v-for="i in n.list">
            <red-item @tap="redConversion" :propsData="i" :theme="false"/>
          </template>
        </div>
        <div v-if="n.category===2" style="position: relative">
          <template v-for="i in n.list">
            <entity-exchange @tap="entityConversion" :propsData="i"/>
          </template>
        </div>
      </div>
      <div class="text-center" style="font-size: 15px;height: 40px;line-height: 40px;color: #999999">敬请期待更多礼品</div>
    </div>
    <div class="integral-bottom">
      当期可用积分:{{ mine.points }}
    </div>
  </div>
</template>

<script>
  import VHead from '../../../components/VHead.vue';
  import redItem from './component/redItem';
  import entityExchange from './component/entityExchange';
  import Http from '../../../store/Http.js';
  import loading from '../../../common/loading';
  import Toast from '../../../common/toast';
  import VDialog from '../../../components/VDialog.vue';
  import { mapState, mapActions } from 'vuex'
  import { MINE_INFO } from '../../../store/user/types';

  export default {
    name: 'integralStore',
    data () {
      return {
        list: [],
        purchase1: {},
        purchase2: {},
        hied1: false,
        hied2: false
      }
    },
    computed: {
      ...mapState({
        mine: state => state.user.mine
      })
    },
    methods: {
      ...mapActions({
        getMineInfo: MINE_INFO
      }),
      getUserIntegralGoodsList () {
        loading.show();
        Http.get('/UserIntegral/getIntegralGoodsList').then(data => {
          loading.hide();
          this.list = data.groups
        })
      },
      redConversion (data) {
        if (data) {
          this.purchase1 = {...data};
          this.hied1 = true;
          return
        }
        Http.get('/UserIntegral/exchangeGood', {id: this.purchase1.id}).then(() => {
          Toast('兑换成功')
          this.getMineInfo()
          this.hied1 = false;
        })
      },
      entityConversion (data) {
        if (data) {
          this.purchase2 = {...data};
          this.hied2 = true;
          return
        }
        Http.get('/UserIntegral/exchangeGood', {id: this.purchase2.id}).then(() => {
          Toast('兑换成功')
          this.getMineInfo()
          this.hied2 = false;
        })
      }
    },
    mounted () {
      this.getUserIntegralGoodsList()
    },
    components: {VHead, redItem, entityExchange, VDialog}
  }
</script>
