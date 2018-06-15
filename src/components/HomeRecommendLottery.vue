<template>
  <div class="home-recommend-lottery"
       @click="goCurrentLottery"
       :class="classify">
    <template v-if="classify==='home-lottery-image1'">
      <div class="lottery-balls sports-balls">
        <img :src=" issue.HomeGuestLogo[0]" alt="">
        <span class="left">{{ issue.HomeGuestName[0] }}</span>
        <span class="center">VS</span>
        <span class="right">{{  issue.HomeGuestName[1] }}</span>
        <img :src=" issue.HomeGuestLogo[1]" alt="">
      </div>
      <div class="description">
        <div class="description-game">
          <div class="game-time">
            <div>{{ issue.roundNo }}</div>
            <div>{{ issue.endTime }}</div>
          </div>
          <div class="game-score-points-item"
               :class="classify2&&issue.let_point<0? 'lesser':'greater'"
               v-if="classify2&&issue.let_point">
            {{ issue.let_point }}
          </div>
          <div class="game-score">
            <div v-for="i in issue.bettingOdds"
                 :style="{width:countLength}"
                 :class="{'game-score-click':i.opt}">
              <div>{{ i.name }}</div>
              <div>{{ i.odds }}</div>
            </div>
          </div>
          <div class="game-score-points-item greater" v-if="!classify2&&issue.let_point">
            {{ issue.let_point }}
          </div>
        </div>
        <span class="refresh" @click.stop="refresh"></span>
      </div>
    </template>
    <template v-if="classify==='home-lottery-image2'">
      <div class="lottery-balls">
        <span class="bg-red-ball" v-for="ball in redBalls">{{ball}}</span>
        <span class="bg-blue-ball" v-for="ball in blueBalls">{{ball}}</span>
      </div>
      <div class="description">
        <span>{{issue.lottery_name}}</span>
        <span class="text-xn text-light">{{issue.slogon}}</span>
        <span class="refresh" @click.stop="refresh"></span>
      </div>
    </template>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { SET_CURRENT_LOTTERY } from '../store/betting/types';
  import { recommendIssue } from '../common/store';
  import { IS_SPORTS, IS_FOOTBALL } from '../store/constants';

  export default {
    name: 'homeRecommendLottery',
    props: {
      issue: {type: Object, required: true}
    },
    computed: {
      redBalls () {
        return this.issue.betNum && this.issue.betNum[0];
      },
      blueBalls () {
        return this.issue.betNum && this.issue.betNum[1];
      },
      classify () {
        if (IS_SPORTS[this.issue.lottery_id]) {
          return 'home-lottery-image1'
        } else if (this.issue.lottery_id) {
          return 'home-lottery-image2'
        }
        return ''
      },
      classify2 () {
        return IS_FOOTBALL[this.issue.lottery_id]
      },
      countLength () {
        let s = [];
        for (let i in this.issue.bettingOdds) {
          s.push(i);
        }
        return `${100 / s.length - 1}%`;
      }
    },
    methods: {
      ...mapMutations({
        setLottery: SET_CURRENT_LOTTERY
      }),
      refresh () {
        this.$emit('refresh');
      },
      goCurrentLottery () {
        recommendIssue.set(this.issue.getIssue());
        this.$router.push({
          name: this.issue.component,
          params: {id: this.issue.lottery_id, mode: this.issue.play_type}
        });
      }
    }
  }
</script>

<style>
  .home-recommend-lottery {
    min-height: 80px;
    padding: 10px 10px 10px 90px;
    position: relative;
    background-repeat: no-repeat;
    background-size: 70px 60px;
    background-position: 10px center;
  }

  .home-lottery-image1 {
    background-image: url("../assets/home/Today_S_Popular.png");
  }

  .home-lottery-image2 {
    background-image: url("../assets/home/lucky_digital.png");
  }

  .home-recommend-lottery .lottery-balls {
    padding: 5px 0 0 0;
  }

  .home-recommend-lottery .bg-blue-ball,
  .home-recommend-lottery .bg-red-ball {
    width: 22px;
    height: 22px;
    line-height: 22px;
    margin-right: 3px;
  }

  .home-recommend-lottery .description {
    position: relative;
    padding: 10px 30px 0 0;
  }

  .home-recommend-lottery .refresh {
    background: url("../assets/home/refresh.png") no-repeat;
    background-size: 80% auto;
    background-position: right bottom;
    width: 30px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }

  .home-recommend-lottery .sports-balls {
    position: relative;
    font-size: 0;
  }

  .home-recommend-lottery .sports-balls > * {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
  }

  .home-recommend-lottery .sports-balls > img {
    box-sizing: border-box;
    width: 35px;
    height: 35px;
    padding: 2px;
    border: 1px #dddddd solid;
    border-radius: 100%;
  }

  .home-recommend-lottery .sports-balls > .center {
    color: #757575;
    font-size: 14px;
  }

  .home-recommend-lottery .sports-balls > .left, .home-recommend-lottery .sports-balls > .right {
    font-size: 14px;
    margin: 0 2%;
    width: 24%;
    max-width: 24%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .home-recommend-lottery .description .description-game {
    width: 100%;
    font-size: 0;
  }

  .description-game .game-time {
    display: inline-block;
    width: 30%;
    height: 40px;
  }

  .description-game .game-time > div {
    text-align: center;
    font-size: 12px;
    height: 50%;
    line-height: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .description-game .game-score-points-item {
    display: inline-block;
    text-align: center;
    font-size: 12px;
    width: 10%;
    height: 40px;
    line-height: 40px;
    vertical-align: top;
    color: white;
  }

  .description-game .game-score-points-item.greater {
    background-color: #fee200;
  }

  .description-game .game-score-points-item.lesser {
    background-color: #4cb14e;
  }

  .description-game .game-score {
    display: inline-block;
    width: 59%;
    border-left: 1px #ddd solid;
    vertical-align: top;
  }

  .description-game .game-score > div {
    text-align: center;
    display: inline-block;
    font-size: 0;
    height: 40px;
    border-top: 1px #ddd solid;
    border-bottom: 1px #dddddd solid;
    border-right: 1px #ddd solid;
    color: #676767;
  }

  .description-game .game-score > div > div {
    width: 100%;
    height: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 19px;
    text-align: center;
    font-size: 12px;
  }

  .description-game .game-score > div.game-score-click {
    color: white;
    border-color: #e73f40;
    background-color: #e73f40;
  }
</style>
