<template>
  <div class="winning-detail" :class="translucent">
    <div v-for="i in list" class="border1px">
      <h4>{{ i[0] }}</h4>
      <p>{{ i[1] }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ThreeState',
    props: {
      translucent: {type: String},
      list: {
        type: Array,
        default () {
          return [
            ['10000.00', '你的奖金'],
            ['100.00', '每份奖金']
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .winning-detail {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 5px 0;
  }

  .winning-detail > div.border1px {
    border-right: 1px solid #ddd;
  }

  .winning-detail > div:last-child.border1px {
    border-right: 0;
  }

  .winning-detail > div {
    flex: 1;
    max-width: 34%;
  }

  .winning-detail > div > h4 {
    color: #e73f40;
    font-size: 17px;
  }

  .winning-detail > div > p {
    color: #999999
  }

  .translucent > div > h4 {
    color: white;
  }

  .translucent > div > p {
    color: white;
    opacity: 0.5;
  }
</style>
