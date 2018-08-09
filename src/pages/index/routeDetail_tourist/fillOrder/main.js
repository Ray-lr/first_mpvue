import Vue from 'vue'
import App from './fillOrder'
import 'mint-ui/lib/style.css'
/* eslint-disable */
import calendar from '../../../../utils/calendar.js'
const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '填写订单'
  }
}
