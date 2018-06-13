<template>
  <div class="basketball-betting">
    <sport-lottery-header :playTypeGroup="playTypeGroup"> </sport-lottery-header>
    <sport-lottery-container></sport-lottery-container>
  </div>
</template>

<script>
  import SportLotteryHeader from './child/LotteryHeader.vue';
  import SportLotteryContainer from './child/SportLotteryContainer.vue';
  import {CURRENT_SPORT_PLAY_TYPE_SELECT} from '../../store/betting/types';

  const BasketballLotteryIdList = [
    {id: 701, value: '胜负'},
    {id: 702, value: '让分胜负'},
    {id: 703, value: '胜分差'},
    {id: 704, value: '大小分'},
    {id: 705, value: '混合过关'}
  ];

  export default {
    name: 'basketballBetting',
    data () {
      return {
        playTypeGroup: [{name: '', list: BasketballLotteryIdList}]
      }
    },
    created () {
      let id = 0;
      if (this.$route.params && this.$route.params.id) {
        id = BasketballLotteryIdList.findIndex(i => (this.$route.params.id === i.id));
        if (id < 0) id = 0;
      }
      this.$store.dispatch(CURRENT_SPORT_PLAY_TYPE_SELECT, {
        ...BasketballLotteryIdList[id],
        mode: this.$route.params.mode
      });
    },
    components: { SportLotteryHeader, SportLotteryContainer }
  }
</script>
