<style scoped>
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
      <div class="integral-body-title">
        <div class="integral-body-title-child">兑换红包</div>
      </div>
      <div style="position: relative;overflow: hidden">
        <template v-for="i in 10">
          <red-item :theme="false"/>
        </template>
      </div>
      <div class="integral-body-title">
        <div class="integral-body-title-child">兑换实物</div>
      </div>
      <div style="position: relative">
        <entity-exchange/>
      </div>
      <div class="text-center" style="font-size: 15px;height: 40px;line-height: 40px;color: #999999">敬请期待更多礼品</div>
    </div>
    <div class="integral-bottom">
      当期可用积分:{{ 100000 }}
    </div>
  </div>
</template>

<script>
  import VHead from '../../../components/VHead.vue';
  import redItem from './component/redItem';
  import entityExchange from './component/entityExchange';

  export default {
    name: 'integralStore',
    components: {VHead, redItem, entityExchange}
  }
</script>
