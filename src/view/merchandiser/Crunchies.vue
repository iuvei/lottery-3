<template>
  <div>
    <v-head>
      <div slot="center" class="Crunchies-nav">
        <div :class="{activate:showPage[1]===0}" @click="switchover(0)">{{ List[showPage[0]][0] }}</div>
        <div :class="{activate:showPage[1]===1}" @click="switchover(1)">{{ List[showPage[0]][1] }}</div>
      </div>
    </v-head>
    <div class="crunchies-item">
      <concern-info></concern-info>
      <div style="margin-left: 15%">
        <three-state :list="[['5中5','近期战绩'],['100.00%','命中率'],['100.00%','盈利率']]"></three-state>
      </div>
    </div>
    <div class="crunchies-item">
      <concern-info></concern-info>
      <div style="margin-left: 15%">
        <three-state :list="[['5中5','近期战绩'],['100.00%','命中率'],['100.00%','盈利率']]"></three-state>
      </div>
    </div>
    <div class="crunchies-item">
      <concern-info></concern-info>
      <div style="margin-left: 15%">
        <three-state :list="[['5中5','近期战绩'],['100.00%','命中率'],['100.00%','盈利率']]"></three-state>
      </div>
    </div>
    <div class="crunchies-item">
      <concern-info></concern-info>
      <div style="margin-left: 15%">
        <three-state :list="[['5中5','近期战绩'],['100.00%','命中率'],['100.00%','盈利率']]"></three-state>
      </div>
    </div>
  </div>
</template>

<script>
  import ConcernInfo from './component/ConcernInfo';
  import ThreeState from '../../components/ThreeState';

  export default {
    name: 'Crunchies',
    data () {
      return {
        showPage: JSON.parse(this.$route.params.target),
        List: [['连红榜', '盈利榜'], ['大神榜', '我的关注']]
      }
    },
    methods: {
      switchover (index) {
        if (this.showPage[1] === index) return;
        this.$set(this.showPage, 1, index);
      }
    },
    created () {
      if (this.$route.params && this.$route.params.target) {
        this.showPage = JSON.parse(this.$route.params.target)
      }
    },
    components: {ThreeState, ConcernInfo}
  }
</script>

<style scoped>
  .crunchies-item {
    overflow: hidden;
    background-color: white;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }

  .Crunchies-nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 40px;
  }

  .Crunchies-nav > div.activate {
    background-color: #e73f40;
    color: white;
  }

  .Crunchies-nav > div {
    color: #e73f40;
    border: #e73f40 1px solid;
    width: 5em;
    padding: 5px 0;
  }

  .Crunchies-nav > div:nth-child(1) {
    border-right: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .Crunchies-nav > div:nth-child(2) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>
