import Vue from 'vue'
import App from './campusManagement'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '营员管理'
  }
}
