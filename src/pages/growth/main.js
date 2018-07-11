import Vue from 'vue'
import App from './growth'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '成长之路'
  }
}
