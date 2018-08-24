<template>
  <div>
    <div class="OrderContainer" style="overflow: hidden;background-color: white">
      <div class="switch-button" :class="'active'+pitchOn">
        <div @click="Switch(1)" class="switch-button-left">订单</div>
        <div @click="Switch(2)">合买</div>
        <div @click="Switch(3)" class="switch-button-right">追号</div>
      </div>
    </div>
    <router-view></router-view>
    <bottom-nav active="Orders"></bottom-nav>
  </div>
</template>

<script>
  import BottomNav from '../../../components/BottomNav.vue';

  function pitchOnRouter (val) {
    switch (val) {
      case '/orders/BuyUpList':
        return 2;
      case '/orders/ChasingList':
        return 3;
      default:
        return 1
    }
  }

  export default {
    name: 'OrderContainer',
    data () {
      return {pitchOn: pitchOnRouter(this.$route.path)}
    },
    methods: {
      Switch (props) {
        if (props === this.pitchOn) return;
        this.pitchOn = props;
        switch (props) {
          case 2:
            this.$router.replace({path: '/orders/BuyUpList'});
            break;
          case 3:
            this.$router.replace({path: '/orders/ChasingList'});
            break;
          default:
            this.$router.replace({path: '/orders'});
            break;
        }
      }
    },
    components: {
      BottomNav
    }
  }
</script>

<style scoped>
  .switch-button {
    width: 60%;
    margin: 10px auto;
    display: flex;
    flex-flow: row nowrap;
  }

  .switch-button-left {
    border-left: 1px solid #e73f40;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .switch-button-right {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .switch-button > div {
    text-align: center;
    padding: 8px 0;
    line-height: 1;
    flex: 1;
    font-size: 14px;
    color: #e73f40;
    font-weight: bold;
    border-right: 1px solid #e73f40;
    border-top: 1px solid #e73f40;
    border-bottom: 1px solid #e73f40;
  }

  .OrderContainer > div.active1 div:nth-child(1),
  .OrderContainer > div.active2 div:nth-child(2),
  .OrderContainer > div.active3 div:nth-child(3) {
    background-color: #e73f40;
    color: white;
  }
</style>
