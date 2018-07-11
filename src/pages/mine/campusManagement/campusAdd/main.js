import Vue from 'vue'
import App from './campusAdd'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '营员添加'
  }
}
