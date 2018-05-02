<style>
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
</style>
<template>
  <div class="red-manage">
    <div class="red-manage-title">
      <v-head title="红包">
        <span slot="right" class="question-icon" @click=""></span>
      </v-head>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">可使用(3)</mt-tab-item>
        <mt-tab-item id="2">等待派发</mt-tab-item>
        <mt-tab-item id="3">已使用/过期</mt-tab-item>
      </mt-navbar>
    </div>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div v-for="n in 102">红包{{ n }}</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div v-for="n in 4">红包{{ n }}</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div v-for="n in 6">红包{{ n }}</div>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="red-manage-bottom text-center">
      <router-link to="exchangeRed" class="button-L">兑换红包</router-link>
      <router-link to="exchangeRed" class="bottom-R">购买红包</router-link>
    </div>
  </div>
</template>

<script>
  import VHead from '../../../components/VHead.vue';
  import { Navbar, TabItem, TabContainerItem, TabContainer, Button } from 'mint-ui';

  export default {
    name: 'redManage',
    data () {
      return {selected: '1'}
    },
    components: {
      VHead,
      [Navbar.name]: Navbar,
      [Button.name]: Button,
      [TabItem.name]: TabItem,
      [TabContainer.name]: TabContainer,
      [TabContainerItem.name]: TabContainerItem
    }
  }
</script>
<style scoped>
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
