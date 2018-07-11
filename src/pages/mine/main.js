import Vue from 'vue'
import App from './mine'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '个人中心'
  }
}
