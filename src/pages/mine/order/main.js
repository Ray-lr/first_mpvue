import Vue from 'vue'
import App from './myOrder'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '我的订单'
  }
}
