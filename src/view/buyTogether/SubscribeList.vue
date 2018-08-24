<style scoped>
  .integral-details {
    margin-top: 81px;
  }

  .integral-details-top {
    position: fixed;
    width: 100%;
    left: 0;
    background: white;
    z-index: 2;
    top: 0;
  }

  @media screen and (min-width: 640px) {
    .integral-details-top {
      width: 640px;
      left: 50%;
      margin-left: -320px;
    }
  }

  .integral-details-classes {
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .integral-details-classes > div {
    flex: 1;
    line-height: 1;
    padding: 11px 0;
    font-size: 15px;
    text-align: center;
    color: #333333;
    border-top: 1px solid #ddd;
    border-bottom: 3px solid #ddd;
    overflow: hidden;
  }

  .border-right1 {
    border-right: 1px solid #ddd;
  }
</style>
<style>
  .integral-details .integral-details-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ddd;
    background-color: white;
  }

  .integral-details .integral-details-item > div {
    flex: 1;
    line-height: 1;
    padding: 15px 0;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
  }
</style>
<template>
  <div class="box-init integral-details">
    <div class="integral-details-top">
      <v-head title="认购列表"/>
      <div class="integral-details-classes">
        <div class="border-right1">认购用户</div>
        <div class="border-right1">份数</div>
        <div>时间</div>
      </div>
    </div>
    <div v-infinite-scroll="loadMore"
         infinite-scroll-distance="10"
         infinite-scroll-immediate-check="false"
    >
      <div class="integral-details-item" v-for="n in 10">
        <!--<div>{{ n.time|dateFormat('yyyy-MM-dd hh:mm:ss') }}</div>-->
        <div>186****179</div>
        <div style="color: #666666;">100</div>
        <div>05-09 18:18:18</div>
      </div>
    </div>
  </div>
</template>

<script>
  // import loading from '../../common/loading';

  export default {
    name: 'SubscribeList',
    data () {
      return {
        list: [],
        loading: false
      }
    },
    methods: {
      loadMore () {
        this.getIntegralList()
      },
      getIntegralList () {
        if (this.loading) return;
        this.loading = true;
        // loading.show();
        // loading.hide();
      }
    },
    created () {
      // this.getIntegralList()
    }
  }
</script>
