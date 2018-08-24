<style scoped>
  .integral-details {
    margin-top: 81px;
  }

  .integral-details-top {
    position: fixed;
    width: 100%;
    left: 0;
    background: white;
    z-index: 100;
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
  }

  .integral-details-classes > div {
    width: 33.33%;
    display: inline-block;
    height: 40px;
    line-height: 40px;
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
    font-size: 0;
    border-bottom: 1px solid #ddd;
    background-color: white;
  }

  .integral-details .integral-details-item > div {
    display: inline-block;
    width: 33.33%;
    height: 50px;
    padding: 5px 0;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
  }

  .integral-details .integral-details-item > div.integral-details-left {
    line-height: 20px;
    text-align: left;
    /*text-indent: 1em;*/
    padding-left: 1em;
    color: #666666;
    word-wrap: break-word;
    word-break: normal;
  }

  .color73f {
    color: #e73f40;
  }

  .color35a {
    color: #35ab1e;
  }
</style>
<template>
  <div class="box-init integral-details">
    <div class="integral-details-top">
      <v-head title="积分明细"/>
      <div class="integral-details-classes">
        <div class="border-right1">时间</div>
        <div class="border-right1">事件类型</div>
        <div>积分变动</div>
      </div>
    </div>
    <div v-infinite-scroll="loadMore"
         infinite-scroll-distance="10"
         infinite-scroll-immediate-check="false"
    >
      <div class="integral-details-item" v-for="n in list">
        <div class="integral-details-left">
          <div>{{ n.time|dateFormat('yyyy-MM-dd hh:mm:ss') }}</div>
        </div>
        <div style="color: #666666;">{{ n.event_name }}</div>
        <div :class="n.event_point>0 ?'color35a':'color73f'">{{ n.event_point }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Http from '../../../store/Http.js';
  import loading from '../../../common/loading';

  export default {
    name: 'IntegralDetails',
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
        loading.show();
        Http.get('/UserIntegral/getUserIntegralList', {
          offset: this.list.length,
          limit: 15
        }).then(data => {
          if (data && data.list && data.list.length) {
            this.loading = data.list.length < 15;
            this.list = (JSON.parse(JSON.stringify(this.list))).concat(data.list)
          } else {
            this.loading = true
          }
          loading.hide()
        })
      }
    },
    created () {
      this.getIntegralList()
    }
  }
</script>
