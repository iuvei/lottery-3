import { SeriesType } from '../../../store/constants.js'
import SportsCalculate from '../../../model/sports/SportsCalculate'
import SportsLotteryJcInfo from '../../../model/sports/SportsLotteryJcInfo';

export default class compute {
  constructor (groups) {
    this.groups = depthCopy(groups)
    return this.Dispose()
  }

  Dispose () {
    let location = [];
    let PromsSave = [];
    this.groups.groups = this.groups.groups.map((data, indexA) => {
      data.list = data.list.map((list, indexB) => {
        // 比赛信息处理
        list.jc_info = list.jc_info.map(info => {
          const newInfo = new SportsLotteryJcInfo(info, info.lottery_id);
          const index = list.schedule_list.findIndex(schedule => schedule.id === info.id);
          const AMatch = list.schedule_list.splice(index, 1);
          info = Object.assign(newInfo, info, {AMatch: AMatch[0]});
          info.selected = info.betting;
          return info;
        });
        if (list.lottery_id === '20' || list.lottery_id === '21') return list;
        // 奖金计算
        let series = [];
        if (list.series) {
          list.seriesText = SeriesType[list.series];
          series.push({key: list.series, value: SeriesType[list.series]});
        }
        location.push([indexA, indexB])
        PromsSave.push(this.setProjectBonus(list.lottery_id, series, list.jc_info, list.multiple));
        return list;
      });
      return data;
    });

    return Promise.all(PromsSave).then(yes => {
      location.forEach((item, index) => {
        if (Object.prototype.toString.call(yes[index]) === `[object Object]`) {
          this.groups.groups[item[0]].list[item[1]].calculatePrice = yes[index]
          this.groups.groups[item[0]].list[item[1]].oddsMin = (yes[index].min).toFixed(2)
          this.groups.groups[item[0]].list[item[1]].oddsMax = (yes[index].max).toFixed(2)
        } else {
          this.groups.groups[item[0]].list[item[1]].oddsMin = 0
          this.groups.groups[item[0]].list[item[1]].oddsMax = 0
          this.groups.groups[item[0]].list[item[1]].calculatePrice = {}
        }
      });
      return Promise.resolve(depthCopy(this.groups));
    })
  }

  setProjectBonus (lotteryId, series, orders, multiple) {
    return new SportsCalculate(lotteryId).setProjectBonus(series, orders, multiple)
  }
}

function depthCopy (obj) {
  let data;
  let type = Object.prototype.toString.call(obj);
  switch (type) {
    case '[object Object]':
      data = {...obj};
      for (let i in data) {
        data[i] = depthCopy(data[i]);
      }
      break;
    case '[object Array]':
      data = [...obj];
      for (let i in data) {
        data[i] = depthCopy(data[i]);
      }
      break;
    default:
      data = obj;
  }
  return data
}
