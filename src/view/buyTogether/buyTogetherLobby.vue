<template>
  <div class="buyTogetherLobby">
    <!--合买大厅-->
    <v-head>
      <div slot="center">
        <span class="nav-button" @click="NavPopup(true)"><span>全部玩法</span></span>
      </div>
      <div slot="right" @click="NavPopup(false)">
        <img
          src="../../assets/betting/filter.png"
          style="vertical-align: middle;margin: auto 10px"
          width="20"
          height="20"
        />
      </div>
    </v-head>
    <div class="sort-button">
      <div @click="NavSort(1)"
           :class="{'pitch-on':sortButton[0]===1}">
        <span>按进度</span>
        <img v-show="sortButton[0]===1"
             src="../../assets/betting/down_gray.png"
             :class="{'again-pitch-on':sortButton[1]}"
             style="vertical-align: middle"
             width="10"
             height="5"/>
      </div>
      <div @click="NavSort(2)"
           :class="{'pitch-on':sortButton[0]===2}">
        <span>按战绩</span>
        <img v-show="sortButton[0]===2"
             src="../../assets/betting/down_gray.png"
             :class="{'again-pitch-on':sortButton[1]}"
             style="vertical-align: middle"
             width="10"
             height="5"/>
      </div>
      <div @click="NavSort(3)"
           :class="{'pitch-on':sortButton[0]===3}">
        <span>按金额</span>
        <img v-show="sortButton[0]===3"
             src="../../assets/betting/down_gray.png"
             :class="{'again-pitch-on':sortButton[1]}"
             style="vertical-align: middle"
             width="10"
             height="5"/>
      </div>
    </div>
    <div v-if="!false">
      <buy-together-item/>
      <buy-together-item/>
      <buy-together-item/>
      <buy-together-item/>
    </div>
    <div v-else>
      <img
        src="../../assets/There_is_no_plan03.png"
        style="width: 25%;display: block;margin: 25% auto 10px auto"
        alt="暂无方案">
      <p class="text-center text-md">暂无方案</p>
    </div>
    <mt-popup
      v-model="showPopup[0]"
      position="top">
      <div v-show="!showPopup[1]" class="mt-popup-content">
        <div @click="playing(0,1)" :class="{'pitch-on':playingMethod[0]===1}">竞彩足球</div>
        <div @click="playing(0,2)" :class="{'pitch-on':playingMethod[0]===2}">竞彩足球</div>
        <div @click="playing(0,3)" :class="{'pitch-on':playingMethod[0]===3}">竞彩足球</div>
        <div @click="playing(0,4)" :class="{'pitch-on':playingMethod[0]===4}">竞彩足球</div>
        <div @click="playing(0,5)" :class="{'pitch-on':playingMethod[0]===5}">竞彩足球</div>
        <div @click="playing(0,6)" :class="{'pitch-on':playingMethod[0]===6}">竞彩足球</div>
        <div @click="playing(0,7)" :class="{'pitch-on':playingMethod[0]===7}">竞彩足球</div>
      </div>
      <div v-show="showPopup[1]" class="mt-popup-content-2">
        <div>
          <div @click="playing(1,1)" :class="{'pitch-on':playingMethod[1]===1}">全部方案<span v-show="playingMethod[1]===1">✓</span>
          </div>
          <div @click="playing(1,2)" :class="{'pitch-on':playingMethod[1]===2}">我发起的<span v-show="playingMethod[1]===2">✓</span>
          </div>
          <div @click="playing(1,3)" :class="{'pitch-on':playingMethod[1]===3}">我参与的<span v-show="playingMethod[1]===3">✓</span>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import BuyTogetherItem from './component/buyTogetherItem.vue';

  export default {
    name: 'buyTogetherLobby',
    data () {
      return {
        showPopup: [false, false], // 显示popup组件
        sortButton: [1, false], // 排序
        playingMethod: [1, 1]
      }
    },
    methods: {
      NavPopup (type) {
        let show = [];
        show[0] = !this.showPopup[0];
        if (type) {
          if (this.showPopup[1]) {
            show[1] = false;
          }
        } else {
          if (!this.showPopup[1]) {
            show[1] = true;
          }
        }
        this.showPopup = show;
      },
      NavSort (index) {
        if (this.sortButton[0] === index) {
          //  排序
          this.$set(this.sortButton, 1, !this.sortButton[1])
        } else {
          this.sortButton = [index, false]
          //  切换初始化
        }
      },
      playing (index, target) {
        if (this.playingMethod[index] === target) return;
        this.$set(this.playingMethod, index, target);
      }
    },
    components: {
      BuyTogetherItem
    }
  }
</script>

<style scoped>
  .nav-button {
    line-height: 1;
    display: inline-block;
    padding: 5px 20px 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    background-image: url("../../assets/betting/down.png");
    background-repeat: no-repeat;
    background-size: 10px 7px;
    background-position: 95% center;
  }

  .buyTogetherLobby .sort-button {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    text-align: center;
    background-color: white;
    font-size: 15px;
    color: #666666;
  }

  .buyTogetherLobby .sort-button > div {
    flex: 1;
    line-height: 40px;
  }

  .buyTogetherLobby .sort-button > div.pitch-on {
    border-bottom: 2px solid #e73f40;
  }

  .buyTogetherLobby .sort-button .pitch-on img {
    transition: transform 1s;
  }

  .buyTogetherLobby .sort-button .pitch-on img.again-pitch-on {
    transform: rotate(180deg);
  }

  .mt-popup-content-2 {
    width: 10rem;
    position: relative;
  }

  .mt-popup-content-2 > div {
    position: absolute;
    right: 0;
    top: 40px;
    background-color: white;
  }

  .mt-popup-content-2 > div > div {
    font-size: 15px;
    padding: 15px;
    border-bottom: 1px solid #ddd;
  }

  .mt-popup-content-2 > div > div.pitch-on {
    color: #e73f40;
  }

  .mt-popup-content {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%);
    background-color: white;
    width: 10rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    text-align: center;
  }

  .mt-popup-content > div {
    flex: 29.3%;
    max-width: 29.3%;
    line-height: 30px;
    margin: 2%;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .mt-popup-content > div.pitch-on {
    border-color: #e73f40;
    color: #e73f40;
    background-image: url('../../assets/betting/selected.png');
    background-repeat: no-repeat;
    background-size: 12.5px 12.5px;
    background-position: right bottom;
  }
</style>
