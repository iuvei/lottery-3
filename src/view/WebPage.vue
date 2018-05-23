<template>
  <div class="web-page">
    <v-head :title="title"></v-head>
    <iframe :src="url" ref="frame" @load="OnLoad" @error="hide"></iframe>
  </div>
</template>

<script>
  import VHead from '../components/VHead.vue';
  import loading from '../common/loading';
  import Toast from '../common/toast';
  import Lottery from '../model/common/Lottery';
  import { mapActions } from 'vuex';
  import { LOGOUT } from '../store/user/types';

  export default {
    name: 'webPage',
    data () {
      return {
        Win: null,
        title: '加载中',
        url: ''
      }
    },
    methods: {
      ...mapActions({
        logOut: LOGOUT
      }),
      receiveMessage (event) {
        let data = {};
        console.log(event);
        if (event.data && typeof event.data === 'string') {
          data = this.analysis(event.data.substring(event.data.indexOf('?')));
        } else {
          return;
        }
        if (data.data) {
          data.data = this.base64(data.data)
          try {
            data.data = JSON.parse(data.data)
          } catch (e) {
            console.log(e);
          }
        }
        switch (data.act) {
          case '0':
            console.log('初始连接完成')
            break;
          case '10701':
            this.$router.push({name: Lottery.getComponent(data.data.lottery_id), params: {id: data.data.lottery_id}});
            break;
          case '10702':
            this.$router.push({name: 'Payment', query: {lack: data.data.money}});
            break;
          case '10703':
            this.$router.push({name: 'IDCard'});
            break;
          case '10704':
            this.$router.go(-1);
            break;
          case '10705':
            Toast('请使用浏览器自带分享功能!');
            break;
          case '10706':
            this.$router.push({name: 'redPurchase'});
            break;
          case '10707':
          case '10708':
            Toast('开发中...');
            break;
          case '10709':
            this.$router.push({name: 'integralStore'});
            break;
          case '10710':
            this.$router.push({name: 'redManage'});
            break;
          case '10711':
            this.$router.push({
              name: 'Login',
              query: {redirect: this.$router.currentRoute.path, ...(this.$router.currentRoute.query)}
            });
            break;
          case '10712':
          case '10713':
          case '10714':
          case '10715':
            Toast('开发中...');
            break;
          default:
            console.log('未知接口编号')
        }
      },
      analysis (url) {
        let theRequest = {};
        if (url.indexOf('?') !== -1) {
          let str = url.substr(1);
          let strs = str.split('&');
          for (let i = 0; i < strs.length; i++) {
            if (unescape) {
              theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
            } else {
              theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
            }
          }
        }
        return theRequest;
      },
      OnLoad () {
        loading.hide();
        this.$refs.frame.contentWindow.postMessage(this.$store.state.user.token || '', `*`)
      },
      hide () {
        loading.hide();
      },
      base64 (da) {
        if (escape && atob && decodeURIComponent) {
          return decodeURIComponent(escape(atob(da)));
        } else {
          return decode(da);
        }

        function decode (str) {
          const base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];

          function base64decode (str) {
            var c1, c2, c3, c4;
            var i, len, out;

            len = str.length;
            i = 0;
            out = '';
            while (i < len) {
              /* c1 */
              do {
                c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
              } while (i < len && c1 === -1);
              if (c1 === -1) break;
              /* c2 */
              do {
                c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
              } while (i < len && c2 === -1);
              if (c2 === -1) break;

              out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

              /* c3 */
              do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 === 61) return out;
                c3 = base64DecodeChars[c3];
              } while (i < len && c3 === -1);
              if (c3 === -1) break;

              out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

              /* c4 */
              do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 === 61) return out;
                c4 = base64DecodeChars[c4];
              } while (i < len && c4 === -1);
              if (c4 === -1) break;
              out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
            }
            return out;
          }

          function utf8to16 (str) {
            var out, i, len, c;
            var char2, char3;

            out = '';
            len = str.length;
            i = 0;
            while (i < len) {
              c = str.charCodeAt(i++);
              switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  // 0xxxxxxx
                  out += str.charAt(i - 1);
                  break;
                case 12:
                case 13:
                  // 110x xxxx   10xx xxxx
                  char2 = str.charCodeAt(i++);
                  out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                  break;
                case 14:
                  // 1110 xxxx  10xx xxxx  10xx xxxx
                  char2 = str.charCodeAt(i++);
                  char3 = str.charCodeAt(i++);
                  out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                  break;
              }
            }
            return out;
          }

          return utf8to16(base64decode(str));
        }
      }
    },
    mounted () {
      this.$refs.frame.style.height = (window.innerHeight - 40) + 'px';
      window.addEventListener('message', this.receiveMessage, false);
      const query = this.$router.currentRoute.query;
      if (query.url) {
        this.url = query.url;
        query.title && (this.title = query.title);
      }
      loading.show();
    },
    beforeDestroy () {
      window.removeEventListener('message', this.receiveMessage, false);
    },
    components: {VHead}
  }
</script>

<style>
  .web-page {
    height: 100%;
    position: relative;
  }

  .web-page .head {
    position: relative;
    z-index: 1;
  }

  .web-page iframe {
    width: 100%;
    border: none;
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    z-index: 0;
  }
</style>
