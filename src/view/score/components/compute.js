import { SeriesType } from '../../../store/constants.js'
import SportsCalculate from '../../../model/sports/SportsCalculate'
import SportsLotteryJcInfo from '../../../model/sports/SportsLotteryJcInfo';

export default class compute {
  constructor (groups) {
    this.groups = depthCopy(
      {
        'groups': [{
          'date': '2018-04-28',
          'date_timestamp': 1524844800,
          'list': [{
            'id': '6505008',
            'lottery_id': '602',
            'issue_no': null,
            'lottery_name': '\u7ade\u8db3-\u8ba9\u7403\u80dc\u5e73\u8d1f',
            'lottery_image': 'http://tclottery.oss-cn-hangzhou.aliyuncs.com/admin_file/2016-08-06/57a5d6fc22cf9.png',
            'type': '0',
            'status': 3,
            'winnings_bonus': '0.00',
            'plus_award_amount': '0.00',
            'total_amount': '2.00',
            'multiple': '1',
            'series': '106',
            'jc_info': [{
              'bet_content': '{\'602\':[\'v0\']}',
              'is_sure': '0',
              'schedule_id': '247529',
              'schedule_week': '6',
              'schedule_day': '20180428',
              'schedule_round_no': '001',
              'schedule_issue_no': '602*52*180428-001',
              'play_type': 2,
              'home': '\u957f\u5d0e\u822a\u6d77',
              'guest': '\u5e7f\u5c9b\u4e09\u7bad',
              'league': '\u65e5\u804c',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u516d001',
              'lottery_id': '602',
              'schedule_status': '1',
              'schedule_final_score': '',
              'schedule_half_score': '',
              'score': {'half': '', 'final': ''},
              'betting_order': {'betting_score_concede': {'v0': '3.65', 'let_point': 1}},
              'let_point': '+1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '+1', 'v0': '3.65', 'v1': '3.35', 'v3': '1.80'}},
              'id': '20180428001'
            }, {
              'bet_content': '{\'602\':[\'v3\']}',
              'is_sure': '0',
              'schedule_id': '247555',
              'schedule_week': '6',
              'schedule_day': '20180428',
              'schedule_round_no': '007',
              'schedule_issue_no': '602*52*180428-007',
              'play_type': 2,
              'home': '\u5927\u5206\u4e09\u795e',
              'guest': '\u753a\u7530\u6cfd\u7ef4',
              'league': '\u65e5\u4e59',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u516d007',
              'lottery_id': '602',
              'schedule_status': '1',
              'schedule_final_score': '',
              'schedule_half_score': '',
              'score': {'half': '', 'final': ''},
              'betting_order': {'betting_score_concede': {'v3': '3.80', 'let_point': -1}},
              'let_point': '-1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '-1', 'v0': '1.70', 'v1': '3.60', 'v3': '3.80'}},
              'id': '20180428007'
            }, {
              'bet_content': '{\'602\':[\'v3\']}',
              'is_sure': '0',
              'schedule_id': '247570',
              'schedule_week': '6',
              'schedule_day': '20180428',
              'schedule_round_no': '010',
              'schedule_issue_no': '602*52*180428-010',
              'play_type': 2,
              'home': '\u4e1c\u4eacFC',
              'guest': '\u540d\u53e4\u5c4b\u9cb8',
              'league': '\u65e5\u804c',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u516d010',
              'lottery_id': '602',
              'schedule_status': '1',
              'schedule_final_score': '',
              'schedule_half_score': '',
              'score': {'half': '', 'final': ''},
              'betting_order': {'betting_score_concede': {'v3': '2.39', 'let_point': -1}},
              'let_point': '-1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '-1', 'v0': '2.40', 'v1': '3.40', 'v3': '2.39'}},
              'id': '20180428010'
            }, {
              'bet_content': '{\'602\':[\'v3\']}',
              'is_sure': '0',
              'schedule_id': '247585',
              'schedule_week': '6',
              'schedule_day': '20180428',
              'schedule_round_no': '013',
              'schedule_issue_no': '602*52*180428-013',
              'play_type': 2,
              'home': '\u5c71\u53e3\u96f7\u8bfa',
              'guest': '\u65b0\u6cfb\u5929\u9e45',
              'league': '\u65e5\u4e59',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u516d013',
              'lottery_id': '602',
              'schedule_status': '1',
              'schedule_final_score': '',
              'schedule_half_score': '',
              'score': {'half': '', 'final': ''},
              'betting_order': {'betting_score_concede': {'v3': '4.85', 'let_point': -1}},
              'let_point': '-1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '-1', 'v0': '1.51', 'v1': '3.85', 'v3': '4.85'}},
              'id': '20180428013'
            }],
            'schedule_list': [{
              'id': '20180428001',
              'home': '\u957f\u5d0e\u6210\u529f\u4e38',
              'guest': '\u5e7f\u5c9b\u4e09\u7bad',
              'league': '\u65e5\u804c\u8054',
              'begin_date': 1524844800,
              'first_half_begin_time': 1524888000,
              'second_half_begin_time': 1524888000,
              'match_duration': '',
              'round_no': '001',
              'half_score': '',
              'current_score': '0:0',
              'match_status_description': '\u672a',
              'follow_status': 1,
              'match_status': 1,
              'result_odds': null,
              'third_party_schedule_id': 1496695
            }, {
              'id': '20180428007',
              'home': '\u5927\u5206\u4e09\u795e',
              'guest': '\u753a\u7530\u6cfd\u7ef4\u4e9a',
              'league': '\u65e5\u804c\u4e59',
              'begin_date': 1524844800,
              'first_half_begin_time': 1524891600,
              'second_half_begin_time': 1524891600,
              'match_duration': '',
              'round_no': '007',
              'half_score': '',
              'current_score': '0:0',
              'match_status_description': '\u672a',
              'follow_status': 1,
              'match_status': 1,
              'result_odds': null,
              'third_party_schedule_id': 1503659
            }, {
              'id': '20180428010',
              'home': 'FC\u4e1c\u4eac',
              'guest': '\u540d\u53e4\u5c4b\u9cb8\u516b',
              'league': '\u65e5\u804c\u8054',
              'begin_date': 1524844800,
              'first_half_begin_time': 1524895200,
              'second_half_begin_time': 1524895200,
              'match_duration': '',
              'round_no': '010',
              'half_score': '',
              'current_score': '0:0',
              'match_status_description': '\u672a',
              'follow_status': 1,
              'match_status': 1,
              'result_odds': null,
              'third_party_schedule_id': 1496698
            }, {
              'id': '20180428013',
              'home': '\u5c71\u53e3\u96f7\u6cd5',
              'guest': '\u65b0\u6cfb\u5929\u9e45',
              'league': '\u65e5\u804c\u4e59',
              'begin_date': 1524844800,
              'first_half_begin_time': 1524895200,
              'second_half_begin_time': 1524895200,
              'match_duration': '',
              'round_no': '013',
              'half_score': '',
              'current_score': '0:0',
              'match_status_description': '\u672a',
              'follow_status': 1,
              'match_status': 1,
              'result_odds': null,
              'third_party_schedule_id': 1503657
            }]
          }]
        }, {
          'date': '2018-04-27',
          'date_timestamp': 1524758400,
          'list': [{
            'id': '6502470',
            'lottery_id': '602',
            'issue_no': null,
            'lottery_name': '\u7ade\u8db3-\u8ba9\u7403\u80dc\u5e73\u8d1f',
            'lottery_image': 'http://tclottery.oss-cn-hangzhou.aliyuncs.com/admin_file/2016-08-06/57a5d6fc22cf9.png',
            'type': '0',
            'status': 5,
            'winnings_bonus': '26.55',
            'plus_award_amount': '0.00',
            'total_amount': '4.00',
            'multiple': '1',
            'series': '102',
            'jc_info': [{
              'bet_content': '{\'602\':[\'v1\',\'v3\']}',
              'is_sure': '0',
              'schedule_id': '247167',
              'schedule_week': '5',
              'schedule_day': '20180427',
              'schedule_round_no': '002',
              'schedule_issue_no': '602*52*180427-002',
              'play_type': 2,
              'home': '\u6bd4\u52d2\u8d39',
              'guest': '\u51ef\u6cfd',
              'league': '\u5fb7\u4e59',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u4e94002',
              'lottery_id': '602',
              'schedule_status': '4',
              'schedule_final_score': '3:2',
              'schedule_half_score': '0:1',
              'score': {'half': '0:1', 'final': '3:2'},
              'betting_order': {'betting_score_concede': {'v3': '2.65', 'v1': '3.55', 'let_point': -1}},
              'let_point': '-1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '-1', 'v0': '2.13', 'v1': '3.55', 'v3': '2.65'}},
              'id': '20180427002'
            }, {
              'bet_content': '{\'602\':[\'v0\']}',
              'is_sure': '0',
              'schedule_id': '247197',
              'schedule_week': '5',
              'schedule_day': '20180427',
              'schedule_round_no': '008',
              'schedule_issue_no': '602*52*180427-008',
              'play_type': 2,
              'home': '\u5e03\u5c14\u683c',
              'guest': '\u5e03\u96f7\u65af\u7279',
              'league': '\u6cd5\u4e59',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u4e94008',
              'lottery_id': '602',
              'schedule_status': '4',
              'schedule_final_score': '2:4',
              'schedule_half_score': '1:3',
              'score': {'half': '1:3', 'final': '2:4'},
              'betting_order': {'betting_score_concede': {'v0': '3.74', 'let_point': 1}},
              'let_point': '+1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '+1', 'v0': '3.74', 'v1': '3.75', 'v3': '1.68'}},
              'id': '20180427008'
            }],
            'schedule_list': [{
              'id': '20180427002',
              'home': '\u6bd4\u52d2\u83f2\u5c14\u5fb7',
              'guest': '\u51ef\u6cfd\u65af\u52b3\u6ed5',
              'league': '\u5fb7\u4e59',
              'begin_date': 1524758400,
              'first_half_begin_time': 1524846600,
              'second_half_begin_time': 1524850481,
              'match_duration': '',
              'round_no': '002',
              'half_score': '0:1',
              'current_score': '3:2',
              'match_status_description': '\u5b8c\u573a',
              'follow_status': 1,
              'match_status': 3,
              'result_odds': null,
              'third_party_schedule_id': 1407201,
              'home_info': {
                'red_card': '0',
                'yellow_card': '1',
                'ball_possession': '56%',
                'shoot': '28',
                'shots_on_goal': '9'
              },
              'guest_info': {
                'red_card': '1',
                'yellow_card': '1',
                'ball_possession': '44%',
                'shoot': '17',
                'shots_on_goal': '8'
              }
            }, {
              'id': '20180427008',
              'home': '\u666e\u745e\u5170\u65af',
              'guest': '\u5e03\u96f7\u65af\u7279',
              'league': '\u6cd5\u4e59',
              'begin_date': 1524758400,
              'first_half_begin_time': 1524852000,
              'second_half_begin_time': 1524855720,
              'match_duration': '',
              'round_no': '008',
              'half_score': '1:3',
              'current_score': '2:4',
              'match_status_description': '\u5b8c\u573a',
              'follow_status': 1,
              'match_status': 3,
              'result_odds': null,
              'third_party_schedule_id': 1430274,
              'home_info': {
                'red_card': '0',
                'yellow_card': '3',
                'ball_possession': '41%',
                'shoot': '14',
                'shots_on_goal': '2'
              },
              'guest_info': {
                'red_card': '0',
                'yellow_card': '0',
                'ball_possession': '59%',
                'shoot': '19',
                'shots_on_goal': '6'
              }
            }]
          }]
        }, {
          'date': '2018-04-26',
          'date_timestamp': 1524672000,
          'list': [{
            'id': '6495584',
            'lottery_id': '602',
            'issue_no': null,
            'lottery_name': '\u7ade\u8db3-\u8ba9\u7403\u80dc\u5e73\u8d1f',
            'lottery_image': 'http://tclottery.oss-cn-hangzhou.aliyuncs.com/admin_file/2016-08-06/57a5d6fc22cf9.png',
            'type': '0',
            'status': 4,
            'winnings_bonus': '0.00',
            'plus_award_amount': '0.00',
            'total_amount': '2.00',
            'multiple': '1',
            'series': '102',
            'jc_info': [{
              'bet_content': '{\'602\':[\'v0\']}',
              'is_sure': '0',
              'schedule_id': '247077',
              'schedule_week': '4',
              'schedule_day': '20180426',
              'schedule_round_no': '004',
              'schedule_issue_no': '602*52*180426-004',
              'play_type': 2,
              'home': '\u6cb3\u5e8a',
              'guest': '\u57c3\u6885\u83b1\u514b',
              'league': '\u89e3\u653e\u8005\u676f',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u56db004',
              'lottery_id': '602',
              'schedule_status': '4',
              'schedule_final_score': '2:1',
              'schedule_half_score': '0:0',
              'score': {'half': '0:0', 'final': '2:1'},
              'betting_order': {'betting_score_concede': {'v0': '3.75', 'let_point': -1}},
              'let_point': '-1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '-1', 'v0': '3.75', 'v1': '3.45', 'v3': '1.75'}},
              'id': '20180426004'
            }, {
              'bet_content': '{\'602\':[\'v0\']}',
              'is_sure': '0',
              'schedule_id': '247084',
              'schedule_week': '4',
              'schedule_day': '20180426',
              'schedule_round_no': '007',
              'schedule_issue_no': '602*52*180426-007',
              'play_type': 2,
              'home': '\u8fbe\u4f3d\u9a6c',
              'guest': '\u7ade\u6280',
              'league': '\u89e3\u653e\u8005\u676f',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u56db007',
              'lottery_id': '602',
              'schedule_status': '4',
              'schedule_final_score': '1:1',
              'schedule_half_score': '0:1',
              'score': {'half': '0:1', 'final': '1:1'},
              'betting_order': {'betting_score_concede': {'v0': '4.50', 'let_point': 1}},
              'let_point': '+1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '+1', 'v0': '4.75', 'v1': '3.65', 'v3': '1.55'}},
              'id': '20180426007'
            }],
            'schedule_list': [{
              'id': '20180426004',
              'home': '\u6cb3\u5e8a',
              'guest': '\u57c3\u6885\u83b1\u514b',
              'league': '\u81ea\u7531\u676f',
              'begin_date': 1524672000,
              'first_half_begin_time': 1524780900,
              'second_half_begin_time': 1524784854,
              'match_duration': '',
              'round_no': '004',
              'half_score': '0:0',
              'current_score': '2:1',
              'match_status_description': '\u5b8c\u573a',
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
            }, {
              'id': '20180426007',
              'home': '\u8fbe\u4f3d\u9a6c',
              'guest': '\u7ade\u6280\u4ff1\u4e50\u90e8',
              'league': '\u81ea\u7531\u676f',
              'begin_date': 1524672000,
              'first_half_begin_time': 1524789000,
              'second_half_begin_time': 1524792990,
              'match_duration': '',
              'round_no': '007',
              'half_score': '0:1',
              'current_score': '1:1',
              'match_status_description': '\u5b8c\u573a',
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
            }]
          }, {
            'id': '6493086',
            'lottery_id': '602',
            'issue_no': null,
            'lottery_name': '\u7ade\u8db3-\u8ba9\u7403\u80dc\u5e73\u8d1f',
            'lottery_image': 'http://tclottery.oss-cn-hangzhou.aliyuncs.com/admin_file/2016-08-06/57a5d6fc22cf9.png',
            'type': '0',
            'status': 5,
            'winnings_bonus': '11.47',
            'plus_award_amount': '0.00',
            'total_amount': '8.00',
            'multiple': '1',
            'series': '102',
            'jc_info': [{
              'bet_content': '{\'602\':[\'v0\',\'v1\']}',
              'is_sure': '0',
              'schedule_id': '247072',
              'schedule_week': '4',
              'schedule_day': '20180426',
              'schedule_round_no': '001',
              'schedule_issue_no': '602*52*180426-001',
              'play_type': 2,
              'home': '\u5229\u52d2\u65af\u7279',
              'guest': '\u7f57\u68ee\u535a\u683c',
              'league': '\u632a\u8d85\u676f',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u56db001',
              'lottery_id': '602',
              'schedule_status': '4',
              'schedule_final_score': '0:1',
              'schedule_half_score': '0:0',
              'score': {'half': '0:0', 'final': '0:1'},
              'betting_order': {'betting_score_concede': {'v0': '4.75', 'v1': '3.85', 'let_point': 1}},
              'let_point': '+1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '+1', 'v0': '6.25', 'v1': '4.85', 'v3': '1.31'}},
              'id': '20180426001'
            }, {
              'bet_content': '{\'602\':[\'v0\',\'v3\']}',
              'is_sure': '0',
              'schedule_id': '247073',
              'schedule_week': '4',
              'schedule_day': '20180426',
              'schedule_round_no': '002',
              'schedule_issue_no': '602*52*180426-002',
              'play_type': 2,
              'home': '\u963f\u68ee\u7eb3',
              'guest': '\u9a6c\u7ade',
              'league': '\u6b27\u7f57\u5df4',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u56db002',
              'lottery_id': '602',
              'schedule_status': '4',
              'schedule_final_score': '1:1',
              'schedule_half_score': '0:0',
              'score': {'half': '0:0', 'final': '1:1'},
              'betting_order': {'betting_score_concede': {'v0': '1.49', 'v3': '5.00', 'let_point': -1}},
              'let_point': '-1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '-1', 'v0': '1.50', 'v1': '3.85', 'v3': '4.92'}},
              'id': '20180426002'
            }],
            'schedule_list': [{
              'id': '20180426001',
              'home': '\u5229\u52d2\u65af\u7279\u7f57\u59c6',
              'guest': '\u7f57\u68ee\u535a\u683c',
              'league': '\u632a\u8d85\u676f',
              'begin_date': 1524672000,
              'first_half_begin_time': 1524760200,
              'second_half_begin_time': 1524763961,
              'match_duration': '',
              'round_no': '001',
              'half_score': '0:0',
              'current_score': '0:1',
              'match_status_description': '\u5b8c\u573a',
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
            }, {
              'id': '20180426002',
              'home': '\u963f\u68ee\u7eb3',
              'guest': '\u9a6c\u5fb7\u91cc\u7ade\u6280',
              'league': '\u6b27\u7f57\u5df4\u676f',
              'begin_date': 1524672000,
              'first_half_begin_time': 1524769500,
              'second_half_begin_time': 1524773340,
              'match_duration': '',
              'round_no': '002',
              'half_score': '0:0',
              'current_score': '1:1',
              'match_status_description': '\u5b8c\u573a',
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
            }]
          }]
        }, {
          'date': '2018-04-25',
          'date_timestamp': 1524585600,
          'list': [{
            'id': '6488430',
            'lottery_id': '602',
            'issue_no': null,
            'lottery_name': '\u7ade\u8db3-\u8ba9\u7403\u80dc\u5e73\u8d1f',
            'lottery_image': 'http://tclottery.oss-cn-hangzhou.aliyuncs.com/admin_file/2016-08-06/57a5d6fc22cf9.png',
            'type': '0',
            'status': 5,
            'winnings_bonus': '15.25',
            'plus_award_amount': '0.00',
            'total_amount': '2.00',
            'multiple': '1',
            'series': '102',
            'jc_info': [{
              'bet_content': '{\'602\':[\'v0\']}',
              'is_sure': '0',
              'schedule_id': '246743',
              'schedule_week': '3',
              'schedule_day': '20180425',
              'schedule_round_no': '016',
              'schedule_issue_no': '602*52*180425-016',
              'play_type': 2,
              'home': '\u5170\u8d6b\u59c6',
              'guest': '\u5e03\u5170',
              'league': '\u632a\u8d85',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u4e09016',
              'lottery_id': '602',
              'schedule_status': '4',
              'schedule_final_score': '0:2',
              'schedule_half_score': '0:1',
              'score': {'half': '0:1', 'final': '0:2'},
              'betting_order': {'betting_score_concede': {'v0': '3.95', 'let_point': 1}},
              'let_point': '+1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '+1', 'v0': '4.08', 'v1': '3.75', 'v3': '1.62'}},
              'id': '20180425016'
            }, {
              'bet_content': '{\'602\':[\'v0\']}',
              'is_sure': '0',
              'schedule_id': '246748',
              'schedule_week': '3',
              'schedule_day': '20180425',
              'schedule_round_no': '017',
              'schedule_issue_no': '602*52*180425-017',
              'play_type': 2,
              'home': '\u65af\u5854\u8d1d\u514b',
              'guest': '\u65af\u8fbe',
              'league': '\u632a\u8d85',
              'zq_start_date': '0000-00-00 00:00:00',
              'round_no': '\u5468\u4e09017',
              'lottery_id': '602',
              'schedule_status': '4',
              'schedule_final_score': '1:1',
              'schedule_half_score': '0:0',
              'score': {'half': '0:0', 'final': '1:1'},
              'betting_order': {'betting_score_concede': {'v0': '1.93', 'let_point': -1}},
              'let_point': '-1',
              'base_point': '',
              'result_odds': {'602': {'letPoint': '-1', 'v0': '2.03', 'v1': '3.50', 'v3': '2.85'}},
              'id': '20180425017'
            }],
            'schedule_list': [{
              'id': '20180425016',
              'home': '\u5170\u9ed1\u59c6',
              'guest': '\u5e03\u5170',
              'league': '\u632a\u8d85',
              'begin_date': 1524585600,
              'first_half_begin_time': 1524673800,
              'second_half_begin_time': 1524677673,
              'match_duration': '',
              'round_no': '016',
              'half_score': '0:1',
              'current_score': '0:2',
              'match_status_description': '\u5b8c\u573a',
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
            }, {
              'id': '20180425017',
              'home': '\u65af\u5854\u8d1d\u514b',
              'guest': '\u65af\u8fbe',
              'league': '\u632a\u8d85',
              'begin_date': 1524585600,
              'first_half_begin_time': 1524673800,
              'second_half_begin_time': 1524677694,
              'match_duration': '',
              'round_no': '017',
              'half_score': '0:0',
              'current_score': '1:1',
              'match_status_description': '\u5b8c\u573a',
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
            }]
          }]
        }]
      }
    )
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
