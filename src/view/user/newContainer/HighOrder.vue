<template>
  <div>
    <div style="overflow: hidden;background-color: white">
      <div class="switch-button">
        <div @click="Switch(1)" class="switch-button-left" :class="{'action-switch-button':button===1}">订单</div>
        <div @click="Switch(2)" :class="{'action-switch-button':button===2}">合买</div>
        <div @click="Switch(3)" class="switch-button-right" :class="{'action-switch-button':button===3}">追号</div>
      </div>
    </div>
    <orders/>
    <bottom-nav active="Orders"></bottom-nav>
  </div>
</template>

<script>
  import BottomNav from '../../../components/BottomNav.vue';
  import orders from '../Orders.vue';

  export default {
    name: 'HighOrder',
    data () {
      return {button: 1}
    },
    methods: {
      Switch (props) {
        if (props === this.button) return;
        this.button = props
      }
    },
    components: {
      BottomNav,
      orders
    }
  }
</script>

<style scoped>
  .switch-button {
    width: 56.25%;
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
    flex: 1;
    font-size: 14px;
    color: #e73f40;
    font-weight: bold;
    border-right: 1px solid #e73f40;
    border-top: 1px solid #e73f40;
    border-bottom: 1px solid #e73f40;
  }

  .switch-button .action-switch-button {
    background-color: #e73f40;
    color: white;
  }
</style>
