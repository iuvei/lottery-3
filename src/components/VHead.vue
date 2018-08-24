<template>
  <div class="head" :class="selfAdaption">
    <span class="back-icon"
          :class="selfAdaption"
          @click="goBack"
          v-show="hideBack"></span>
    <div v-if="title">{{title}}</div>
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
    props: {
      title: {type: String},
      hideBack: {type: Boolean, default: true},
      to: {type: String},
      selfAdaption: {type: String}
    },
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

  .head.SingInLaTombola {
    background-color: transparent;
  }

  .head {
    position: relative;
    padding: 0 20px;
    height: 40px;
    background-color: white;
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

  .head > .SingInLaTombola {
    background-image: url("../assets/icon/white_back_icon.png");
  }
</style>
