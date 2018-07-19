import Vue from 'vue'
import App from './App'
import 'mp-weui/lib/style.css'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/growth/main', '^pages/index/main', 'pages/mine/personal/main', 'pages/mine/main', 'pages/discover/main',
      'pages/mine/discount/main', 'pages/mine/order/main', 'pages/mine/campusManagement/main',
      'pages/mine/campusManagement/campusDetail/main', 'pages/mine/campusManagement/campusAdd/main',
      'pages/mine/campusManagement/campusDetail/attention2Me/main', 'pages/index/routeDetail_tourist/main',
      'pages/index/routeDetail_tourist/fillOrder/main', 'pages/growth/campPeriod/main' ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '三只熊',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1AAD16',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [{
        pagePath: 'pages/index/main',
        text: '首页',
        iconPath: './static/img/ico_home.png',
        selectedIconPath: './static/img/ico_home_sel.png'
      },
      {
        pagePath: 'pages/discover/main',
        text: '发现精彩',
        iconPath: './static/img/ico_find.png',
        selectedIconPath: './static/img/ico_find_sel.png'
      },
      {
        pagePath: 'pages/growth/main',
        text: '成长之路',
        iconPath: './static/img/ico_grow.png',
        selectedIconPath: './static/img/ico_grow_sel.png'
      },
      {
        pagePath: 'pages/mine/main',
        text: '我的',
        iconPath: './static/img/ico_aboutme.png',
        selectedIconPath: './static/img/ico_aboutme_sel.png'
      }
      ]
    }
  }
}
