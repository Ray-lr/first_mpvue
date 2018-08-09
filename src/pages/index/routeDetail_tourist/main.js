import Vue from 'vue'
import App from './routeDetail_tourist'
import 'mint-ui/lib/style.css'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '路线详情'
  }
}
