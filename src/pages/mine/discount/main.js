import Vue from 'vue'
import App from './discount'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '我的优惠券'
  }
}
