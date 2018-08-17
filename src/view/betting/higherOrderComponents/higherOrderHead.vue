<template>
  <v-head :title="title">
    <div v-if="showRight" slot="right" class="head-left-button">
      <router-link tag="div" to="/startBuyTogether">发起合买</router-link>
    </div>
  </v-head>
</template>
<script>
  import VHead from '../../../components/VHead.vue';
  import Lottery from '../../../model/common/Lottery';

  export default {
    name: 'higherOrderHead',
    props: {
      title: {type: String},
      lottery: {type: Number}
    },
    data () {
      return {
        showRight: Lottery.isJointPurchase(this.lottery)
      }
    },
    components: {
      VHead
    }
  }
</script>

<style scoped>
  .head-left-button {
    height: 100%;
    padding: 5px 0;
    line-height: 30px;
  }

  .head-left-button > div {
    border: 1px solid #333;
    border-radius: 5px;
    padding: 0 5px;
    color: #333333;
  }
</style>
