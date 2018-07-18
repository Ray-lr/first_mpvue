import Vue from 'vue'
import App from './fillOrder'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '填写订单'
  }
}
