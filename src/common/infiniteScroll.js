import { InfiniteScroll, Swipe, SwipeItem, Popup } from 'mint-ui';
import Vue from 'vue';

Vue.use(InfiniteScroll);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup)
// <ul
// v-infinite-scroll="loadMore"
// infinite-scroll-disabled="loading"
// infinite-scroll-distance="10">
//   <li v-for="item in list">{{ item }}</li>
// </ul>
