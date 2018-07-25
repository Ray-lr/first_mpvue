import Vue from 'vue'
import App from './authorize'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '授权'
  }
}
