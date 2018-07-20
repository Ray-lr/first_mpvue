import Vue from 'vue'
import App from './campPeriod'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '营期'
  }
}
