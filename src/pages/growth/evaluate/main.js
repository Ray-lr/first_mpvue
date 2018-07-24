import Vue from 'vue'
import App from './evaluate'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '评测'
  }
}
