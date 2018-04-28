<style scoped>
  .name-score *{
    box-sizing: border-box;
  }
  .name-score {
    height: 1.76rem;
    font-size: 0.36rem;
    font-weight: bold;
  }

  .item {
    width: 100%;
    height: 50%;
    position: relative;
  }

  .item > div {
    display: inline-block;
    float: left;
  }

  .name {
    max-width: 48%;
    margin-right: 2%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .score {
    color: #a4a4a4;
    width: 25%;
    text-align: center;
  }

  .football {
    color: #e73f40;
    width: 25%;
    text-align: center;
  }

  .basketball {
    color: #60a839;
    width: 25%;
    text-align: center;
  }

  .red-board, .yellow-board {
    box-sizing: border-box;
    width: 9%;
    margin-right: 2%;
    text-align: center;
    color: white;
    border-radius: 2px;
  }

  .red-board {
  background-color: #e73f40;
  }

  .yellow-board {
background-color: #fed223;
  }
</style>
<template>
  <div class="name-score">
    <div class="item">
      <div :class="propsHome[0]>=0 ?theme:'score'">{{ propsHome[0] }}</div>
      <div class="name">{{ propsHome[1]}}{{ propsHome[1]}}</div>
      <div v-if="propsHome[2]" class="red-board">{{ propsHome[2] }}</div>
      <div v-if="propsHome[3]" class="yellow-board">{{ propsHome[3] }}</div>
    </div>
    <div class="item">
      <div :class="propsGuest[0]>=0? theme:'score'">{{ propsGuest[0] }}</div>
      <div class="name">{{ propsGuest[1] }}</div>
      <div v-if="propsGuest[2]" class="red-board">{{ propsGuest[2] }}</div>
      <div v-if="propsGuest[3]" class="yellow-board">{{ propsGuest[3] }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nameScore',
    props: {
      propsHome: {type: Array, required: true},
      propsGuest: {type: Array, required: true},
      theme: {type: String, required: true}
    }
  }
</script>

