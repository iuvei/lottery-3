// 放不需要vuex管理的异步请求

import Http from '../../../store/Http';
import loading from '../../../common/loading';
import { OrderStatus } from '../../../store/constants';

export function init (i) {
  switch (i) {
    case 1:
      return 0;
    case 2:
      return -1;
    case 3:
      return 1;
    case 4:
      return -2;
    default:
  }
}

export function init2 (i) {
  switch (i) {
    case 1:
      return 2;
    case 2:
      return 3;
    default:
  }
}

export function loadMore (data) {
  const boole = this.list[this.optFor].length > 10;
  boole && (this.Loading2 = true);
  GET.getOrderList(data).then(data => {
    this.Loading2 && (this.Loading2 = false);
    this.Loading = data.length < 10;
    this.$set(this.list, this.optFor, this.list[this.optFor].concat(data));
  })
}

const GET = {
  getOrderList (data) {
    loading.show();
    return Http.get('/Order', data).then(data => {
      console.log(data);
      data.forEach(value => {
        value.statusText = OrderStatus[value.status];
      });
      loading.hide();
      return data
    })
  }
}
export default GET;
