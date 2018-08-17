<template>
  <div class="head">
    <span class="back-icon" :class="selfAdaption||''" @click="goBack" v-if="!hideBack"></span>
    <div v-show="title">{{title}}</div>
    <slot name="center"></slot>
    <span class="right">
      <slot name="right"></slot>
    </span>
  </div>
</template>

<script>
  import router from '../router/index';

  export default {
    name: 'vHead',
    props: ['title', 'hideBack', 'to', 'selfAdaption'],
    methods: {
      goBack () {
        if (this.to) {
          router.replace(this.to)
        } else {
          router.go(-1);
        }
      }
    }
  }
</script>

<style>
  @import "../style/icon.css";

  .head {
    position: relative;
    padding: 0 20px;
    height: 40px;
    background: white;
    font-size: 18px;
    color: #333333;
    text-align: center;
    line-height: 40px;
    margin-bottom: 1px;
  }

  .head .back-icon {
    position: absolute;
    left: 5px;
    top: 0;
    background: url("../assets/icon/back.png") no-repeat center;
    background-size: 40% 40%;
    height: 35px;
    width: 25px;
  }

  .head .right {
    position: absolute;
    right: 10px;
    font-size: 14px;
    color: #969696;
    top: 0;
  }

  .head .SingInLaTombola {
    background: url("../assets/icon/white_back_icon.png") no-repeat center;
    background-size: 40% 40%;
    height: 35px;
    width: 25px;
  }
</style>
