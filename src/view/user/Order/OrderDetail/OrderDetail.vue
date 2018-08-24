<template>
  <div class="order-detail">
    <v-head title="投注详情"></v-head>

    <order-top-info :detail="detail"></order-top-info>

    <order-status :statusText="detail.statusText"></order-status>

    <!--竞彩-->
    <sports-lottery-content v-if="detail.jc_info" :detail="detail"></sports-lottery-content>
    <!--数字彩-->
    <digital-lottery-content v-if="detail.tickets" :detail="detail"></digital-lottery-content>

    <detail-footer/>
  </div>
</template>

<script>
  import DetailFooter from '../../Component/DetailFooter';
  import { ORDER_DETAIL_REQUEST } from '../../../../store/user/types';
  import { mapActions, mapState } from 'vuex';
  import OrderStatus from '../../Component/OrderStatus';
  import OrderTopInfo from '../../Component/OrderTopInfo';
  import SportsLotteryContent from '../../Component/SportsLotteryContent';
  import DigitalLotteryContent from '../../Component/DigitalLotteryContent';

  export default {
    name: 'orderDetail',
    computed: {
      ...mapState({
        detail: state => state.user.orders.detail
      })
    },
    methods: {
      ...mapActions({
        getOrderDetail: ORDER_DETAIL_REQUEST
      })
    },
    created () {
      this.getOrderDetail(this.$route.params.id);
    },
    components: {
      DigitalLotteryContent,
      SportsLotteryContent,
      OrderTopInfo,
      OrderStatus,
      DetailFooter
    }
  }
</script>
