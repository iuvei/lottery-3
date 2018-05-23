import Vue from 'vue'
import Router from 'vue-router'
import { pageJump, user } from '../common/store';

import Home from '../view/home/Home.vue';// -首页
import More from '../view/home/More.vue';// -首页更多彩票
import Mine from '../view/user/Mine.vue';// -我的
import Login from '../view/user/Login';// -登陆
import FootballConfirm from '../view/scheme/FootballConfirm';// -足彩提交
import PaymentConfirm from '../view/paymennt/PaymentConfirm.vue';// -支付提交
import Payment from '../view/paymennt/Payment.vue';// -充值
import PaymentOrder from '../view/paymennt/PaymentOrder.vue';// -支付订单
import SFCConfirm from '../view/betting/SFCConfirm.vue';// -胜负彩提交确认
import DigitalConfirm from '../view/betting/DigitalConfirm.vue';// -数字彩提交确认
import SportsConfirm from '../view/betting/SportsConfirm.vue';// -体育提交确认
const SportsOptimize = () => import('../view/betting/SportsOptimize.vue');// -奖金优化
import FootballInformation from '../view/information/FootballInformation.vue'// -足彩比赛详情
import BasketballInformation from '../view/information/BasketballInformation.vue'// -篮球比赛详情

const Register = () => import('../view/user/Register'); // 比赛详情
const UserInfo = () => import('../view/user/UserInfo.vue'); // 个人详情
const IDCard = () => import('../view/user/IDCard.vue'); // 身份证信息
const BankCard = () => import('../view/user/BankCard.vue'); // 银行卡
const Cash = () => import('../view/user/Cash.vue');// 现金
const CashDetail = () => import('../view/user/CashDetail.vue');// 现金详情
const Orders = () => import('../view/user/Orders');// 订单
const OrderDetail = () => import('../view/user/OrderDetail');// 订单详情
const OrderDetailScheme = () => import('../view/user/OrderDetailScheme');// 订单方案
const ForgotPassword = () => import('../view/user/ForgotPassword.vue');// 忘记密码
const NewRegister = () => import('../view/user/NewRegister.vue');// 新彩票
const Football = () => import('../view/scheme/Football.vue');// 足球空
const PaymentComplete = () => import('../view/paymennt/PayComplete.vue');// 支付成功
// import Hello from '../components/Hello.vue';
const FootballBetting = () => import('../view/betting/FootballBetting.vue');// 0足彩
const BasketballBetting = () => import('../view/betting/BasketballBetting.vue');// 0篮球彩票
const SYXWBetting = () => import('../view/betting/SYXWBetting.vue');// 投注比赛
const SSQBetting = () => import('../view/betting/SSQBetting.vue');// 投注比赛
const K3Betting = () => import('../view/betting/K3Betting.vue');// 投注比赛
const FC3DBetting = () => import('../view/betting/FC3DBetting.vue');//  投注比赛
const SFCBetting = () => import('../view/betting/SFCBetting.vue');//  投注比赛
const WebPage = () => import('../view/WebPage.vue');// iframe加载外链
// import WebPage from '../view/WebPage.vue';// -我的

const PromotionElevenPickFive = () => import('../view/promotion/ElevenPickFive.vue'); // 高频彩
const PromotionTest = () => import('../view/promotion/Test.vue'); // 00
import PrizeList from '../view/prize/List.vue';// 开奖列表
const PrizeDetail = () => import('../view/prize/Detail.vue');// 开奖详情
const PrizeSportsDetail = () => import('../view/prize/SportsDetail.vue'); // 体育开奖详情
const Score = () => import('../view/score/score.vue');// 比分模块end
const redManage = () => import('../view/user/redPacket/redManage.vue');// 红包管理st
const redPurchase = () => import('../view/user/redPacket/redPurchase.vue');// 红包购买
const exchangeRed = () => import('../view/user/redPacket/exchangeRed.vue');// 红包兑换end
const integralStore = () => import('../view/user/redPacket/integralStore.vue');// 积分兑换st
const integralDetails = () => import('../view/user/redPacket/integralDetails.vue');// 积分详情

Vue.use(Router)
const ScoreRouter = [
  {
    path: '/Score',
    name: 'Score',
    component: Score
  },
  {
    path: '/redManage',
    name: 'redManage',
    component: redManage,
    meta: {requireAuth: true}
  },
  {
    path: '/exchangeRed',
    name: 'exchangeRed',
    component: exchangeRed,
    meta: {requireAuth: true}
  },
  {
    path: '/integralStore',
    name: 'integralStore',
    component: integralStore,
    meta: {requireAuth: true}
  },
  {
    path: '/integralDetails',
    name: 'integralDetails',
    component: integralDetails,
    meta: {requireAuth: true}
  },
  {
    path: '/redPurchase',
    name: 'redPurchase',
    component: redPurchase,
    meta: {requireAuth: true}
  }
]
// 新增模块

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/more',
      name: 'More',
      component: More
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/forgot_password',
      name: 'ForgotPassword',
      component: ForgotPassword
    }, {
      path: '/user_info',
      name: 'UserInfo',
      component: UserInfo
    }, {
      path: '/id_card',
      name: 'IDCard',
      component: IDCard
    }, {
      path: '/bank_card',
      name: 'BankCard',
      component: BankCard
    }, {
      path: '/cash',
      name: 'Cash',
      component: Cash
    }, {
      path: '/cash_detail',
      name: 'CashDetail',
      component: CashDetail
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {requireAuth: true}
    }, {
      path: '/orders',
      name: 'Orders',
      component: Orders,
      meta: {requireAuth: true}
    }, {
      path: '/orders/:id',
      name: 'OrderDetail',
      component: OrderDetail,
      meta: {requireAuth: true}
    }, {
      path: '/orders/:id/scheme',
      name: 'OrderScheme',
      component: OrderDetailScheme,
      meta: {requireAuth: true}
    }, {
      path: '/scheme/football',
      name: 'Football',
      component: Football
    }, {
      path: '/scheme/football/confirm',
      name: 'FootballConfirm',
      component: FootballConfirm
    }, {
      path: '/payment/confirm',
      name: 'PaymentConfirm',
      component: PaymentConfirm,
      meta: {requireAuth: true}
    }, {
      path: '/payment/order',
      name: 'PaymentOrder',
      component: PaymentOrder,
      meta: {requireAuth: true}
    }, {
      path: '/payment/complete',
      name: 'PaymentComplete',
      component: PaymentComplete,
      meta: {requireAuth: true}
    }, {
      path: '/payment',
      name: 'Payment',
      component: Payment,
      meta: {requireAuth: true},
      beforeEnter (to, from, next) {
        from.name && pageJump.fromSet('Payment', from);
        next();
      }
    }, {
      path: '/information/football/:id',
      name: 'FootballInformation',
      component: FootballInformation
    }, {
      path: '/information/basketball/:id',
      name: 'BasketballInformation',
      component: BasketballInformation
    }, {
      path: '/xincai_register',
      name: 'NewRegister',
      component: NewRegister,
      meta: {title: '新彩票'}
    }, {
      path: '/betting/football',
      name: 'FootballBetting',
      component: FootballBetting
    }, {
      path: '/betting/basketball',
      name: 'BasketballBetting',
      component: BasketballBetting
    }, {
      path: '/betting/syxw/:id',
      name: 'SYXWBetting',
      component: SYXWBetting
    }, {
      path: '/betting/k3/:id',
      name: 'K3Betting',
      component: K3Betting
    }, {
      path: '/betting/sfc/:id',
      name: 'SFCBetting',
      component: SFCBetting
    }, {
      path: '/betting/fc3d/:id',
      name: 'FC3DBetting',
      component: FC3DBetting
    }, {
      path: '/betting/confirm',
      name: 'DigitalConfirm',
      component: DigitalConfirm
    }, {
      path: '/betting/sports_confirm',
      name: 'SportsConfirm',
      component: SportsConfirm
    }, {
      path: '/betting/sfc_confirm',
      name: 'SFCConfirm',
      component: SFCConfirm
    }, {
      path: '/betting/sports_optimize',
      name: 'SportsOptimize',
      component: SportsOptimize
    }, {
      path: '/betting/digital/:id',
      name: 'SSQBetting',
      component: SSQBetting
    }, {
      path: '/web',
      name: 'WebPage',
      component: WebPage
    }, {
      path: '/prize/list',
      name: 'PrizeList',
      component: PrizeList
    }, {
      path: '/prize/detail/:lottery',
      name: 'PrizeDetail',
      component: PrizeDetail
    }, {
      path: '/prize/sports_detail/:lottery',
      name: 'PrizeSportsDetail',
      component: PrizeSportsDetail
    }, {
      path: '/promotion/elevenPickFive',
      name: 'PromotionElevenPickFive',
      component: PromotionElevenPickFive
    }, {
      path: '/promotion/test',
      name: 'PromotionTest',
      component: PromotionTest
    }, ...ScoreRouter
  ]
});

// 全局导航钩子
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = '老虎彩票';
  }
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
    if (user.getToken()) {
      next();
    } else {
      next({path: '/login', query: {redirect: to.fullPath}})
      // 将跳转的路由path作为参数，登录成功后跳转到该路由
    }
  } else {
    next();
  }
});

export default router;
