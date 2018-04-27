import { SeriesType } from '../../../store/constants.js'
import SportsCalculate from '../../../model/sports/SportsCalculate'
// import Util from '../../../common/util';
import SportsLotteryJcInfo from '../../../model/sports/SportsLotteryJcInfo';

function DeepCopy (obj) {
  // Hash表 记录所有的对象引用关系
  let data;

  function dp (par) {
    let type = Object.prototype.toString.call(obj)
    Vue.set()
    if (type === '[object Object]') {
      data = {}
      for (let i in par) {
        if (typeof par[i] === 'object') {
          dp(par[i])
          data = {[i]: {...par}}
        }
      }
    } else if (type === '[object Array]') {
      data = []
    } else {
      return obj
    }
    return data
  }
}

export default class compute {
  constructor (groups) {
    // this.groups = JSON.parse(JSON.stringify(groups))
    this.groups = {
      'groups': [
        {
          'date': '2018-04-26',
          'date_timestamp': 1524672000,
          'list': [
            {
              'id': '6495584',
              'lottery_id': '602',
              'issue_no': null,
              'lottery_name': '竞足-让球胜平负',
              'lottery_image': 'http://tclottery.oss-cn-hangzhou.aliyuncs.com/admin_file/2016-08-06/57a5d6fc22cf9.png',
              'type': '0',
              'status': 4,
              'winnings_bonus': '0.00',
              'plus_award_amount': '0.00',
              'total_amount': '2.00',
              'multiple': '1',
              'series': '102',
              'jc_info': [
                {
                  'bet_content': '{\'602\':[\'v0\']}',
                  'is_sure': '0',
                  'schedule_id': '247077',
                  'schedule_week': '4',
                  'schedule_day': '20180426',
                  'schedule_round_no': '004',
                  'schedule_issue_no': '602*52*180426-004',
                  'play_type': 2,
                  'home': '河床',
                  'guest': '埃梅莱克',
                  'league': '解放者杯',
                  'zq_start_date': '0000-00-00 00:00:00',
                  'round_no': '周四004',
                  'lottery_id': '602',
                  'schedule_status': '4',
                  'schedule_final_score': '2:1',
                  'schedule_half_score': '0:0',
                  'score': {
                    'half': '0:0',
                    'final': '2:1'
                  },
                  'betting_order': {
                    'betting_score_concede': {
                      'v0': '3.75',
                      'let_point': -1
                    }
                  },
                  'let_point': '-1',
                  'base_point': '',
                  'result_odds': {
                    '602': {
                      'letPoint': '-1',
                      'v0': '3.75',
                      'v1': '3.45',
                      'v3': '1.75'
                    }
                  },
                  'id': '20180426004'
                },
                {
                  'bet_content': '{\'602\':[\'v0\']}',
                  'is_sure': '0',
                  'schedule_id': '247084',
                  'schedule_week': '4',
                  'schedule_day': '20180426',
                  'schedule_round_no': '007',
                  'schedule_issue_no': '602*52*180426-007',
                  'play_type': 2,
                  'home': '达伽马',
                  'guest': '竞技',
                  'league': '解放者杯',
                  'zq_start_date': '0000-00-00 00:00:00',
                  'round_no': '周四007',
                  'lottery_id': '602',
                  'schedule_status': '4',
                  'schedule_final_score': '1:1',
                  'schedule_half_score': '0:1',
                  'score': {
                    'half': '0:1',
                    'final': '1:1'
                  },
                  'betting_order': {
                    'betting_score_concede': {
                      'v0': '4.50',
                      'let_point': 1
                    }
                  },
                  'let_point': '+1',
                  'base_point': '',
                  'result_odds': {
                    '602': {
                      'letPoint': '+1',
                      'v0': '4.75',
                      'v1': '3.65',
                      'v3': '1.55'
                    }
                  },
                  'id': '20180426007'
                }
              ],
              'schedule_list': [
                {
                  'id': '20180426004',
                  'home': '河床',
                  'guest': '埃梅莱克',
                  'league': '自由杯',
                  'begin_date': 1524672000,
                  'first_half_begin_time': 1524780900,
                  'second_half_begin_time': 1524784854,
                  'match_duration': '',
                  'round_no': '004',
                  'half_score': '0:0',
                  'current_score': '2:1',
                  'match_status_description': '完场',
                  'follow_status': 1,
                  'match_status': 3,
                  'result_odds': null,
                  'third_party_schedule_id': 1514165,
                  'home_info': {
                    'red_card': '0',
                    'yellow_card': '1',
                    'ball_possession': '58%',
                    'shoot': '20',
                    'shots_on_goal': '7'
                  },
                  'guest_info': {
                    'red_card': '0',
                    'yellow_card': '1',
                    'ball_possession': '42%',
                    'shoot': '8',
                    'shots_on_goal': '1'
                  }
                },
                {
                  'id': '20180426007',
                  'home': '达伽马',
                  'guest': '竞技俱乐部',
                  'league': '自由杯',
                  'begin_date': 1524672000,
                  'first_half_begin_time': 1524789000,
                  'second_half_begin_time': 1524792990,
                  'match_duration': '',
                  'round_no': '007',
                  'half_score': '0:1',
                  'current_score': '1:1',
                  'match_status_description': '完场',
                  'follow_status': 1,
                  'match_status': 3,
                  'result_odds': null,
                  'third_party_schedule_id': 1514177,
                  'home_info': {
                    'red_card': '1',
                    'yellow_card': '3',
                    'ball_possession': '48%',
                    'shoot': '14',
                    'shots_on_goal': '3'
                  },
                  'guest_info': {
                    'red_card': '0',
                    'yellow_card': '4',
                    'ball_possession': '52%',
                    'shoot': '11',
                    'shots_on_goal': '3'
                  }
                }
              ]
            },
            {
              'id': '6493086',
              'lottery_id': '602',
              'issue_no': null,
              'lottery_name': '竞足-让球胜平负',
              'lottery_image': 'http://tclottery.oss-cn-hangzhou.aliyuncs.com/admin_file/2016-08-06/57a5d6fc22cf9.png',
              'type': '0',
              'status': 5,
              'winnings_bonus': '11.47',
              'plus_award_amount': '0.00',
              'total_amount': '8.00',
              'multiple': '1',
              'series': '102',
              'jc_info': [
                {
                  'bet_content': '{\'602\':[\'v0\',\'v1\']}',
                  'is_sure': '0',
                  'schedule_id': '247072',
                  'schedule_week': '4',
                  'schedule_day': '20180426',
                  'schedule_round_no': '001',
                  'schedule_issue_no': '602*52*180426-001',
                  'play_type': 2,
                  'home': '利勒斯特',
                  'guest': '罗森博格',
                  'league': '挪超杯',
                  'zq_start_date': '0000-00-00 00:00:00',
                  'round_no': '周四001',
                  'lottery_id': '602',
                  'schedule_status': '4',
                  'schedule_final_score': '0:1',
                  'schedule_half_score': '0:0',
                  'score': {
                    'half': '0:0',
                    'final': '0:1'
                  },
                  'betting_order': {
                    'betting_score_concede': {
                      'v0': '4.75',
                      'v1': '3.85',
                      'let_point': 1
                    }
                  },
                  'let_point': '+1',
                  'base_point': '',
                  'result_odds': {
                    '602': {
                      'letPoint': '+1',
                      'v0': '6.25',
                      'v1': '4.85',
                      'v3': '1.31'
                    }
                  },
                  'id': '20180426001'
                },
                {
                  'bet_content': '{\'602\':[\'v0\',\'v3\']}',
                  'is_sure': '0',
                  'schedule_id': '247073',
                  'schedule_week': '4',
                  'schedule_day': '20180426',
                  'schedule_round_no': '002',
                  'schedule_issue_no': '602*52*180426-002',
                  'play_type': 2,
                  'home': '阿森纳',
                  'guest': '马竞',
                  'league': '欧罗巴',
                  'zq_start_date': '0000-00-00 00:00:00',
                  'round_no': '周四002',
                  'lottery_id': '602',
                  'schedule_status': '4',
                  'schedule_final_score': '1:1',
                  'schedule_half_score': '0:0',
                  'score': {
                    'half': '0:0',
                    'final': '1:1'
                  },
                  'betting_order': {
                    'betting_score_concede': {
                      'v0': '1.49',
                      'v3': '5.00',
                      'let_point': -1
                    }
                  },
                  'let_point': '-1',
                  'base_point': '',
                  'result_odds': {
                    '602': {
                      'letPoint': '-1',
                      'v0': '1.50',
                      'v1': '3.85',
                      'v3': '4.92'
                    }
                  },
                  'id': '20180426002'
                }
              ],
              'schedule_list': [
                {
                  'id': '20180426001',
                  'home': '利勒斯特罗姆',
                  'guest': '罗森博格',
                  'league': '挪超杯',
                  'begin_date': 1524672000,
                  'first_half_begin_time': 1524760200,
                  'second_half_begin_time': 1524763961,
                  'match_duration': '',
                  'round_no': '001',
                  'half_score': '0:0',
                  'current_score': '0:1',
                  'match_status_description': '完场',
                  'follow_status': 1,
                  'match_status': 3,
                  'result_odds': null,
                  'third_party_schedule_id': 1534386,
                  'home_info': {
                    'red_card': '0',
                    'yellow_card': '0',
                    'ball_possession': '57%',
                    'shoot': '35',
                    'shots_on_goal': '7'
                  },
                  'guest_info': {
                    'red_card': '0',
                    'yellow_card': '2',
                    'ball_possession': '43%',
                    'shoot': '24',
                    'shots_on_goal': '16'
                  }
                },
                {
                  'id': '20180426002',
                  'home': '阿森纳',
                  'guest': '马德里竞技',
                  'league': '欧罗巴杯',
                  'begin_date': 1524672000,
                  'first_half_begin_time': 1524769500,
                  'second_half_begin_time': 1524773340,
                  'match_duration': '',
                  'round_no': '002',
                  'half_score': '0:0',
                  'current_score': '1:1',
                  'match_status_description': '完场',
                  'follow_status': 1,
                  'match_status': 3,
                  'result_odds': null,
                  'third_party_schedule_id': 1532880,
                  'home_info': {
                    'red_card': '0',
                    'yellow_card': '0',
                    'ball_possession': '76%',
                    'shoot': '29',
                    'shots_on_goal': '8'
                  },
                  'guest_info': {
                    'red_card': '1',
                    'yellow_card': '2',
                    'ball_possession': '24%',
                    'shoot': '6',
                    'shots_on_goal': '5'
                  }
                }
              ]
            }
          ]
        },
        {
          'date': '2018-04-25',
          'date_timestamp': 1524585600,
          'list': [
            {
              'id': '6488430',
              'lottery_id': '602',
              'issue_no': null,
              'lottery_name': '竞足-让球胜平负',
              'lottery_image': 'http://tclottery.oss-cn-hangzhou.aliyuncs.com/admin_file/2016-08-06/57a5d6fc22cf9.png',
              'type': '0',
              'status': 5,
              'winnings_bonus': '15.25',
              'plus_award_amount': '0.00',
              'total_amount': '2.00',
              'multiple': '1',
              'series': '102',
              'jc_info': [
                {
                  'bet_content': '{\'602\':[\'v0\']}',
                  'is_sure': '0',
                  'schedule_id': '246743',
                  'schedule_week': '3',
                  'schedule_day': '20180425',
                  'schedule_round_no': '016',
                  'schedule_issue_no': '602*52*180425-016',
                  'play_type': 2,
                  'home': '兰赫姆',
                  'guest': '布兰',
                  'league': '挪超',
                  'zq_start_date': '0000-00-00 00:00:00',
                  'round_no': '周三016',
                  'lottery_id': '602',
                  'schedule_status': '4',
                  'schedule_final_score': '0:2',
                  'schedule_half_score': '0:1',
                  'score': {
                    'half': '0:1',
                    'final': '0:2'
                  },
                  'betting_order': {
                    'betting_score_concede': {
                      'v0': '3.95',
                      'let_point': 1
                    }
                  },
                  'let_point': '+1',
                  'base_point': '',
                  'result_odds': {
                    '602': {
                      'letPoint': '+1',
                      'v0': '4.08',
                      'v1': '3.75',
                      'v3': '1.62'
                    }
                  },
                  'id': '20180425016'
                },
                {
                  'bet_content': '{\'602\':[\'v0\']}',
                  'is_sure': '0',
                  'schedule_id': '246748',
                  'schedule_week': '3',
                  'schedule_day': '20180425',
                  'schedule_round_no': '017',
                  'schedule_issue_no': '602*52*180425-017',
                  'play_type': 2,
                  'home': '斯塔贝克',
                  'guest': '斯达',
                  'league': '挪超',
                  'zq_start_date': '0000-00-00 00:00:00',
                  'round_no': '周三017',
                  'lottery_id': '602',
                  'schedule_status': '4',
                  'schedule_final_score': '1:1',
                  'schedule_half_score': '0:0',
                  'score': {
                    'half': '0:0',
                    'final': '1:1'
                  },
                  'betting_order': {
                    'betting_score_concede': {
                      'v0': '1.93',
                      'let_point': -1
                    }
                  },
                  'let_point': '-1',
                  'base_point': '',
                  'result_odds': {
                    '602': {
                      'letPoint': '-1',
                      'v0': '2.03',
                      'v1': '3.50',
                      'v3': '2.85'
                    }
                  },
                  'id': '20180425017'
                }
              ],
              'schedule_list': [
                {
                  'id': '20180425016',
                  'home': '兰黑姆',
                  'guest': '布兰',
                  'league': '挪超',
                  'begin_date': 1524585600,
                  'first_half_begin_time': 1524673800,
                  'second_half_begin_time': 1524677673,
                  'match_duration': '',
                  'round_no': '016',
                  'half_score': '0:1',
                  'current_score': '0:2',
                  'match_status_description': '完场',
                  'follow_status': 1,
                  'match_status': 3,
                  'result_odds': null,
                  'third_party_schedule_id': 1486655,
                  'home_info': {
                    'red_card': '0',
                    'yellow_card': '2',
                    'ball_possession': '46%',
                    'shoot': '8',
                    'shots_on_goal': '3'
                  },
                  'guest_info': {
                    'red_card': '0',
                    'yellow_card': '1',
                    'ball_possession': '54%',
                    'shoot': '10',
                    'shots_on_goal': '6'
                  }
                },
                {
                  'id': '20180425017',
                  'home': '斯塔贝克',
                  'guest': '斯达',
                  'league': '挪超',
                  'begin_date': 1524585600,
                  'first_half_begin_time': 1524673800,
                  'second_half_begin_time': 1524677694,
                  'match_duration': '',
                  'round_no': '017',
                  'half_score': '0:0',
                  'current_score': '1:1',
                  'match_status_description': '完场',
                  'follow_status': 1,
                  'match_status': 3,
                  'result_odds': null,
                  'third_party_schedule_id': 1488879,
                  'home_info': {
                    'red_card': '0',
                    'yellow_card': '1',
                    'ball_possession': '57%',
                    'shoot': '5',
                    'shots_on_goal': '2'
                  },
                  'guest_info': {
                    'red_card': '0',
                    'yellow_card': '4',
                    'ball_possession': '43%',
                    'shoot': '5',
                    'shots_on_goal': '2'
                  }
                }
              ]
            }
          ]
        },
        {
          'date': '2018-04-20',
          'date_timestamp': 1524153600,
          'list': [
            {
              'id': '6437903',
              'lottery_id': '606',
              'issue_no': null,
              'lottery_name': '竞足-混合投注',
              'lottery_image': 'http://tclottery.oss-cn-hangzhou.aliyuncs.com/admin_file/2016-08-06/57a5d736d60f6.png',
              'type': '0',
              'status': 5,
              'winnings_bonus': '75.08',
              'plus_award_amount': '0.00',
              'total_amount': '8.00',
              'multiple': '1',
              'series': '102',
              'jc_info': [
                {
                  'bet_content': '{\'603\':[\'v20\'],\'604\':[\'v2\']}',
                  'is_sure': '0',
                  'schedule_id': '244562',
                  'schedule_week': '5',
                  'schedule_day': '20180420',
                  'schedule_round_no': '001',
                  'schedule_issue_no': '606*52*180420-001',
                  'play_type': 2,
                  'home': '墨尔本城',
                  'guest': '布里斯班',
                  'league': '澳超',
                  'zq_start_date': '0000-00-00 00:00:00',
                  'round_no': '周五001',
                  'lottery_id': '606',
                  'schedule_status': '4',
                  'schedule_final_score': '2:0',
                  'schedule_half_score': '0:0',
                  'score': {
                    'half': '0:0',
                    'final': '2:0'
                  },
                  'betting_order': {
                    'betting_score_scores': {
                      'v20': '8.00'
                    },
                    'betting_score_balls': {
                      'v2': '3.55'
                    }
                  },
                  'let_point': '-1',
                  'base_point': '',
                  'result_odds': {
                    '601': {
                      'v0': '4.30',
                      'v1': '3.80',
                      'v3': '1.58'
                    },
                    '602': {
                      'letPoint': '-1',
                      'v0': '2.09',
                      'v1': '3.50',
                      'v3': '2.75'
                    },
                    '603': {
                      'v00': '12.00',
                      'v01': '13.00',
                      'v02': '22.00',
                      'v03': '55.00',
                      'v04': '150.0',
                      'v05': '500.0',
                      'v10': '7.50',
                      'v11': '7.00',
                      'v12': '12.00',
                      'v13': '32.00',
                      'v14': '80.00',
                      'v15': '300.0',
                      'v20': '8.00',
                      'v21': '7.00',
                      'v22': '14.00',
                      'v23': '32.00',
                      'v24': '100.0',
                      'v25': '400.0',
                      'v30': '13.00',
                      'v31': '12.00',
                      'v32': '18.00',
                      'v33': '50.00',
                      'v40': '26.00',
                      'v41': '25.00',
                      'v42': '40.00',
                      'v50': '60.00',
                      'v51': '50.00',
                      'v52': '80.00',
                      'v90': '30.00',
                      'v99': '200.0',
                      'v09': '100.0'
                    },
                    '604': {
                      'v0': '12.00',
                      'v1': '4.80',
                      'v2': '3.30',
                      'v3': '3.35',
                      'v4': '4.70',
                      'v5': '8.50',
                      'v6': '20.00',
                      'v7': '25.00'
                    },
                    '605': {
                      'v00': '7.00',
                      'v01': '16.00',
                      'v03': '22.00',
                      'v10': '9.50',
                      'v11': '6.00',
                      'v13': '3.90',
                      'v30': '40.00',
                      'v31': '16.00',
                      'v33': '2.25'
                    }
                  },
                  'id': '20180420001'
                },
                {
                  'bet_content': '{\'601\':[\'v1\'],\'605\':[\'v13\']}',
                  'is_sure': '0',
                  'schedule_id': '244568',
                  'schedule_week': '5',
                  'schedule_day': '20180420',
                  'schedule_round_no': '002',
                  'schedule_issue_no': '606*52*180420-002',
                  'play_type': 2,
                  'home': '不伦瑞克',
                  'guest': '比勒费',
                  'league': '德乙',
                  'zq_start_date': '0000-00-00 00:00:00',
                  'round_no': '周五002',
                  'lottery_id': '606',
                  'schedule_status': '4',
                  'schedule_final_score': '0:0',
                  'schedule_half_score': '0:0',
                  'score': {
                    'half': '0:0',
                    'final': '0:0'
                  },
                  'betting_order': {
                    'betting_score_no_concede': {
                      'v1': '3.25'
                    },
                    'betting_score_half': {
                      'v13': '4.70'
                    }
                  },
                  'let_point': '-1',
                  'base_point': '',
                  'result_odds': {
                    '601': {
                      'v0': '2.67',
                      'v1': '3.20',
                      'v3': '2.26'
                    },
                    '602': {
                      'letPoint': '-1',
                      'v0': '1.48',
                      'v1': '4.00',
                      'v3': '4.90'
                    },
                    '603': {
                      'v00': '10.50',
                      'v01': '8.50',
                      'v02': '13.00',
                      'v03': '28.00',
                      'v04': '80.00',
                      'v05': '250.0',
                      'v10': '7.50',
                      'v11': '6.50',
                      'v12': '8.50',
                      'v13': '22.00',
                      'v14': '60.00',
                      'v15': '200.0',
                      'v20': '10.00',
                      'v21': '7.50',
                      'v22': '12.00',
                      'v23': '27.00',
                      'v24': '80.00',
                      'v25': '250.0',
                      'v30': '23.00',
                      'v31': '18.00',
                      'v32': '22.00',
                      'v33': '50.00',
                      'v40': '50.00',
                      'v41': '45.00',
                      'v42': '60.00',
                      'v50': '150.0',
                      'v51': '120.0',
                      'v52': '150.0',
                      'v90': '70.00',
                      'v99': '300.0',
                      'v09': '80.00'
                    },
                    '604': {
                      'v0': '10.50',
                      'v1': '4.30',
                      'v2': '3.25',
                      'v3': '3.50',
                      'v4': '5.30',
                      'v5': '9.50',
                      'v6': '17.00',
                      'v7': '27.00'
                    },
                    '605': {
                      'v00': '4.15',
                      'v01': '13.00',
                      'v03': '26.00',
                      'v10': '6.00',
                      'v11': '5.10',
                      'v13': '5.30',
                      'v30': '30.00',
                      'v31': '13.00',
                      'v33': '3.40'
                    }
                  },
                  'id': '20180420002'
                }
              ],
              'schedule_list': [
                {
                  'id': '20180420001',
                  'home': '墨尔本城',
                  'guest': '布里斯班狮吼',
                  'league': '澳洲甲',
                  'begin_date': 1524153600,
                  'first_half_begin_time': 1524217800,
                  'second_half_begin_time': 1524222061,
                  'match_duration': '',
                  'round_no': '001',
                  'half_score': '0:0',
                  'current_score': '2:0',
                  'match_status_description': '完场',
                  'follow_status': 1,
                  'match_status': 3,
                  'result_odds': null,
                  'third_party_schedule_id': 1533842,
                  'home_info': {
                    'red_card': '0',
                    'yellow_card': '3',
                    'ball_possession': '61%',
                    'shoot': '26',
                    'shots_on_goal': '10'
                  },
                  'guest_info': {
                    'red_card': '0',
                    'yellow_card': '2',
                    'ball_possession': '39%',
                    'shoot': '6',
                    'shots_on_goal': '0'
                  }
                },
                {
                  'id': '20180420002',
                  'home': '布伦斯维克',
                  'guest': '比勒菲尔德',
                  'league': '德乙',
                  'begin_date': 1524153600,
                  'first_half_begin_time': 1524241800,
                  'second_half_begin_time': 1524245580,
                  'match_duration': '',
                  'round_no': '002',
                  'half_score': '0:0',
                  'current_score': '0:0',
                  'match_status_description': '完场',
                  'follow_status': 1,
                  'match_status': 3,
                  'result_odds': null,
                  'third_party_schedule_id': 1407185,
                  'home_info': {
                    'red_card': '0',
                    'yellow_card': '1',
                    'ball_possession': '39%',
                    'shoot': '10',
                    'shots_on_goal': '5'
                  },
                  'guest_info': {
                    'red_card': '0',
                    'yellow_card': '1',
                    'ball_possession': '61%',
                    'shoot': '20',
                    'shots_on_goal': '3'
                  }
                }
              ]
            }
          ]
        },
        {
          'date': '2018-04-19',
          'date_timestamp': 1524067200,
          'list': [
            {
              'id': '6431702',
              'lottery_id': '605',
              'issue_no': null,
              'lottery_name': '竞足-半全场',
              'lottery_image': 'http://tclottery.oss-cn-hangzhou.aliyuncs.com/admin_file/2016-08-06/57a5d726b2939.png',
              'type': '0',
              'status': 4,
              'winnings_bonus': '0.00',
              'plus_award_amount': '0.00',
              'total_amount': '2.00',
              'multiple': '1',
              'series': '102',
              'jc_info': [
                {
                  'bet_content': '{\'605\':[\'v31\']}',
                  'is_sure': '0',
                  'schedule_id': '244372',
                  'schedule_week': '4',
                  'schedule_day': '20180419',
                  'schedule_round_no': '001',
                  'schedule_issue_no': '605*52*180419-001',
                  'play_type': 2,
                  'home': '乌德勒支',
                  'guest': '格罗宁根',
                  'league': '荷甲',
                  'zq_start_date': '0000-00-00 00:00:00',
                  'round_no': '周四001',
                  'lottery_id': '605',
                  'schedule_status': '4',
                  'schedule_final_score': '1:1',
                  'schedule_half_score': '1:0',
                  'score': {
                    'half': '1:0',
                    'final': '1:1'
                  },
                  'betting_order': {
                    'betting_score_half': {
                      'v31': '16.00'
                    }
                  },
                  'let_point': '',
                  'base_point': '',
                  'result_odds': {
                    '605': {
                      'v00': '8.00',
                      'v01': '16.00',
                      'v03': '18.00',
                      'v10': '13.00',
                      'v11': '8.00',
                      'v13': '4.30',
                      'v30': '40.00',
                      'v31': '16.00',
                      'v33': '1.83'
                    }
                  },
                  'id': '20180419001'
                },
                {
                  'bet_content': '{\'605\':[\'v01\']}',
                  'is_sure': '0',
                  'schedule_id': '244373',
                  'schedule_week': '4',
                  'schedule_day': '20180419',
                  'schedule_round_no': '002',
                  'schedule_issue_no': '605*52*180419-002',
                  'play_type': 2,
                  'home': '哈马比',
                  'guest': '北雪平',
                  'league': '瑞超',
                  'zq_start_date': '0000-00-00 00:00:00',
                  'round_no': '周四002',
                  'lottery_id': '605',
                  'schedule_status': '4',
                  'schedule_final_score': '2:1',
                  'schedule_half_score': '2:0',
                  'score': {
                    'half': '2:0',
                    'final': '2:1'
                  },
                  'betting_order': {
                    'betting_score_half': {
                      'v01': '13.00'
                    }
                  },
                  'let_point': '',
                  'base_point': '',
                  'result_odds': {
                    '605': {
                      'v00': '3.90',
                      'v01': '13.00',
                      'v03': '22.00',
                      'v10': '6.10',
                      'v11': '5.40',
                      'v13': '5.50',
                      'v30': '24.00',
                      'v31': '13.00',
                      'v33': '3.50'
                    }
                  },
                  'id': '20180419002'
                }
              ],
              'schedule_list': [
                {
                  'id': '20180419001',
                  'home': '乌德勒支',
                  'guest': '格罗宁根',
                  'league': '荷甲',
                  'begin_date': 1524067200,
                  'first_half_begin_time': 1524155400,
                  'second_half_begin_time': 1524159559,
                  'match_duration': '',
                  'round_no': '001',
                  'half_score': '1:0',
                  'current_score': '1:1',
                  'match_status_description': '完场',
                  'follow_status': 1,
                  'match_status': 3,
                  'result_odds': null,
                  'third_party_schedule_id': 1395641,
                  'home_info': {
                    'red_card': '0',
                    'yellow_card': '4',
                    'ball_possession': '46%',
                    'shoot': '12',
                    'shots_on_goal': '3'
                  },
                  'guest_info': {
                    'red_card': '0',
                    'yellow_card': '1',
                    'ball_possession': '54%',
                    'shoot': '13',
                    'shots_on_goal': '7'
                  }
                },
                {
                  'id': '20180419002',
                  'home': '哈马比',
                  'guest': '诺科平',
                  'league': '瑞典超',
                  'begin_date': 1524067200,
                  'first_half_begin_time': 1524157200,
                  'second_half_begin_time': 1524160905,
                  'match_duration': '',
                  'round_no': '002',
                  'half_score': '2:0',
                  'current_score': '2:1',
                  'match_status_description': '完场',
                  'follow_status': 1,
                  'match_status': 3,
                  'result_odds': null,
                  'third_party_schedule_id': 1489126,
                  'home_info': {
                    'red_card': '0',
                    'yellow_card': '1',
                    'ball_possession': '48%',
                    'shoot': '16',
                    'shots_on_goal': '7'
                  },
                  'guest_info': {
                    'red_card': '0',
                    'yellow_card': '1',
                    'ball_possession': '52%',
                    'shoot': '11',
                    'shots_on_goal': '3'
                  }
                }
              ]
            }
          ]
        }
      ]
    }
    console.log(groups);
    return this.Dispose()
  }

  Dispose () {
    let location = [];
    let PromsSave = [];
    console.log(this.groups);
    this.groups.groups = this.groups.groups.map((data, indexA) => {
      console.time(1)
      console.log(DeepCopy(data))
      console.timeEnd(1)
      console.time(2)
      console.log(JSON.parse(JSON.stringify(data)))
      console.timeEnd(2)
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
      console.log(yes, JSON.parse(JSON.stringify(this.groups)));
      return Promise.resolve(this.groups);
    })
  }

  setProjectBonus (lotteryId, series, orders, multiple) {
    return new SportsCalculate(lotteryId).setProjectBonus(series, orders, multiple)
  }
}
