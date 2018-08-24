<template>
  <mt-popup
    v-model="popupVisible"
    class="MerchandiserKeyboard-body"
    position="bottom">
    <div class="body-top">
      <input type="number" v-model="multiple">
      <p style="flex: 10">倍</p>
      <div @click="$emit('update:show', false)" style="flex: 3;">
        <img src="../assets/information/odds_down.png" alt="">
      </div>
    </div>
    <table class="body-keyboard">
      <tr>
        <td @click="calculate('1')">1</td>
        <td @click="calculate('2')">2</td>
        <td @click="calculate('3')">3</td>
        <td @click="calculate(-3)" rowspan="2" colspan="2">重置</td>
      </tr>
      <tr>
        <td @click="calculate('4')">4</td>
        <td @click="calculate('5')">5</td>
        <td @click="calculate('6')">6</td>
      </tr>
      <tr>
        <td @click="calculate('7')">7</td>
        <td @click="calculate('8')">8</td>
        <td @click="calculate('9')">9</td>
        <td @click="calculate(-4)" rowspan="2" colspan="2" style="color: #e73f40">确定</td>
      </tr>
      <tr>
        <td @click="calculate(0)">0</td>
        <td @click="calculate(-1)">－1</td>
        <td @click="calculate(-2)">＋1</td>
      </tr>
    </table>
  </mt-popup>
</template>

<script>
  export default {
    name: 'MerchandiserKeyboard',
    props: {
      Merchandiser: {type: Number, default: 1},
      show: {type: Boolean}
    },
    data () {
      return {
        popupVisible: this.show,
        multiple: this.Merchandiser || 1
      }
    },
    methods: {
      calculate (key) {
        if (key > 0) {
          if (this.multiple > 0) {
            this.multiple = this.multiple + key;
          } else {
            this.multiple = key;
          }
        } else {
          switch (key) {
            case 0:
              if (this.multiple > 0) {
                this.multiple = this.multiple + key;
              }
              break;
            case -1:
              if (this.multiple >= 1) this.multiple -= 1;
              break;
            case -2:
              this.multiple = parseInt(this.multiple) + 1;
              break;
            case -3:
              this.multiple = 1;
              break;
            default:
              this.newVal(false)
          }
        }
      },
      newVal (val) {
        this.popupVisible = val;
      }
    },
    watch: {
      popupVisible (newv) {
        this.$emit('update:show', newv);
      },
      show (val) {
        this.newVal(val)
      }
    }
  }
</script>

<style scoped>
  .MerchandiserKeyboard-body {
    width: 100%;
    max-width: 640px;
    background-color: #f5f5f5;
  }

  .MerchandiserKeyboard-body .body-top {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    color: #999999;
  }

  .MerchandiserKeyboard-body .body-top > input {
    background-color: #f0f0f0;
    text-align: center;
    font-size: 16px;
    color: #999999;
    margin: 5px;
    flex: 4;
  }

  .MerchandiserKeyboard-body .body-top img {
    width: 22px;
    height: 17px;
    vertical-align: bottom;
  }

  .MerchandiserKeyboard-body .body-keyboard {
    width: 100%;
    margin-bottom: 5px;
    table-layout: fixed;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }

  .body-keyboard td:nth-child(1), .body-keyboard td:nth-child(2), .body-keyboard td:nth-child(3) {
    background-color: white;
    width: 20%;
  }

  .body-keyboard td:nth-child(4) {
    width: 40%;
    background-color: white;
  }

  .body-keyboard td {
    padding: 5% 0;
  }

  .body-keyboard td:active {
    background-color: #d0d0d0;
  }
</style>
