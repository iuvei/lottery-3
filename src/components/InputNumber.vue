<template>
  <div>
    <div class="InputNumber">
      <div class="one" @click="decrease">－</div>
      <div class="two">{{ number }}</div>
      <div class="three" @click="increase" style="border-right: 1px solid #ddd;">＋</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InputNumber',
    props: {
      number: {type: Number},
      maxNumber: {type: Number},
      minNumber: {type: Number},
      comparison: {type: Number}
    },
    methods: {
      increase () {
        if (this.number >= this.maxNumber) return;
        if ((this.number + this.comparison) >= this.maxNumber) {
          this.$emit('update:comparison', this.comparison - 1)
        }
        this.$emit('update:number', this.number + 1)
      },
      decrease () {
        if (this.number <= this.minNumber) return;
        this.$emit('update:number', this.number - 1)
      }
    }
  }
</script>

<style scoped>
  .InputNumber {
    display: flex;
    display: -webkit-flex;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  .InputNumber > div {
    min-width: 12px;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }

  .InputNumber .one {
    font-weight: bold;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #f2f2f2;
    color: #999999;
    width: 25%;
  }

  .InputNumber .two {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 50%;
  }

  .InputNumber .three {
    font-weight: bold;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #f2f2f2;
    color: #999999;
    width: 25%;
  }
</style>
