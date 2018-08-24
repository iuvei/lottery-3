<template>
  <li @click="goOrderDetail(item)" class="OrderListItem item-avatar item-right-icon">
    <img :src="item.lottery_image" alt="">
    <div class="main">
      <span>{{item.lottery_name}}</span>
      <template v-if="ShowType==='order'">
        <span class="text-primary margin-left-15" v-if="item.plus_award_amount > 0">加奖 {{item.plus_award_amount | currency}}</span>
        <span class="pull-right active" v-if="item.winnings_bonus > 0">中奖 {{item.winnings_bonus | currency}}</span>
        <span class="pull-right text-light" v-else>{{item.statusText}}</span>
      </template>
      <template v-else-if="ShowType==='buyTogether'">
        <!--合买-->
      </template>
      <template v-else-if="ShowType==='chaseNumber'">
        <!--追号-->
      </template>
    </div>
    <div class="desc">
      <span>{{item.buying_time | dateFormat('yyyy-MM-dd hh:mm:ss')}}</span>
      <span v-if="ShowType==='order'"
            class="pull-right">{{item.type===0?'自投':'追号'}}：{{item.total_amount | currency}}</span>
      <template v-else-if="ShowType==='buyTogether'">
        <!--合买-->
      </template>
      <template v-else-if="ShowType==='chaseNumber'">
        <!--追号-->
      </template>
    </div>
    <span class="arrow-right"></span>
  </li>
</template>

<script>
  import Lottery from '../../../model/common/Lottery';
  import Toast from '../../../common/toast';

  export default {
    name: 'OrderListItem',
    props: {
      item: {type: Object},
      ShowType: {type: String}
    },
    methods: {
      goOrderDetail (item) {
        const id = item.lottery_id;
        if (Lottery.isFootBall(id) || Lottery.isBasketBall(id) || Lottery.isSYXW(id) ||
          Lottery.isDLT(id) || Lottery.isSSQ(id) || Lottery.isSFCOrRXJ(id) || Lottery.isK3(id) ||
          Lottery.isFC3D(id)) {
          this.$router.push({
            name: 'OrderDetail',
            params: {id: item.id}
          })
        } else {
          Toast('该功能暂未开发!');
        }
      }
    }
  }
</script>

<style scoped>

  .OrderListItem {
    padding: 10px;
    position: relative;
    background: white;
    border-bottom: 1px solid #dddddd;
    min-height: 60px;
  }

  .OrderListItem.item-avatar {
    padding-left: 60px;
  }

  .OrderListItem.item-avatar img {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 40px;
    height: 40px;
  }

  .OrderListItem.item-right-icon {
    padding-right: 30px;
  }

  .OrderListItem.item-right-icon .arrow-right {
    position: absolute;
    right: 10px;
    top: 24px;
  }

  .OrderListItem .main {
    color: #333333;
    font-size: 13px;
    height: 25px;
    line-height: 25px;
  }

  .OrderListItem .main .active {
    color: #e73f40;
  }

  .OrderListItem .desc {
    color: #999999;
    font-size: 10px;
  }
</style>
