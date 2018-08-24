<template>
  <div>
    <nav class="row text-center bg-white text-sm" :class="'active'+optFor">
      <div class="col col-50" @click="changeStatus(1)"><span>进行中</span></div>
      <div class="col col-50" @click="changeStatus(2)"><span>已结束/取消</span></div>
    </nav>
    <ul
      v-infinite-scroll='loadMore'
      infinite-scroll-disabled='Loading'
      infinite-scroll-distance='10'
      infinite-scroll-immediate-check='false'
    >
      <li v-if="list[1].length">
        <ul v-show="optFor===1">
          <order-list-item
            v-for="item in list[1]"
            :item="item"
            show-type="order"
            :key="item.id||item.buying_time"
          />
        </ul>
      </li>
      <li v-if="list[2].length">
        <ul v-show="optFor===2">
          <order-list-item
            v-for="item in list[2]"
            :item="item"
            show-type="order"
            :key="item.id||item.buying_time"
          />
        </ul>
      </li>
      <li>
        <infinite-scroll-loading :show="Loading2"/>
      </li>
    </ul>
    <no-order style="margin-top: 50%" v-if="list[optFor].length===0"></no-order>
  </div>
</template>

<script>
  import NoOrder from '../../../../components/NoOrders';
  import OrderListItem from '../../Component/OrderListItem';
  import InfiniteScrollLoading from '../../../../components/InfiniteScrollLoading.vue';
  import { loadMore, init2 } from '../index'

  export default {
    name: 'ChasingList',
    components: {InfiniteScrollLoading, OrderListItem, NoOrder},
    data () {
      return {
        optFor: 1,
        Loading: false,
        Loading2: false,
        list: [['占位用'], [], []]
      }
    },
    methods: {
      loadMore () {
        loadMore.call(this, {
          lottery_id: 0,
          order_type: init2(this.optFor),
          offset: this.list[this.optFor].length,
          limit: 10,
          category: 1
        })
      },
      changeStatus (status) {
        if (status === this.optFor) return;
        this.optFor = status;
        this.Loading && (this.Loading = false);
        if (!this.list[status].length) {
          this.loadMore();
        }
      }
      // loadMore () {
      //   const boole = this.list[this.optFor].length > 10;
      //   boole && (this.Loading2 = true);
      //   GET.getOrderList({
      //     lottery_id: 0,
      //     order_type: init2(this.optFor),
      //     offset: this.list[this.optFor].length,
      //     limit: 10,
      //     category: 1
      //   }).then(data => {
      //     this.Loading2 && (this.Loading2 = false);
      //     this.Loading = data.length < 10;
      //     this.$set(this.list, this.optFor, this.list[this.optFor].concat(data));
      //   })
      // }
    },
    created () {
      this.loadMore()
    }
  }
</script>

<style scoped>
  nav .col {
    height: 37px;
    line-height: 35px;
    border-bottom: 2px solid #dddddd;
    color: #666666;
  }

  nav.active1 div:nth-child(1),
  nav.active2 div:nth-child(2) {
    color: #e73f40;
    border-color: #e73f40;
  }
</style>
