// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 声明
  state: {
    count: 0,
    userInfo: []
  },
  // 变化
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    getUserInfo: (state) => {
      const obj = state
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              obj.userInfo = res.userInfo
              // console.log(res)
            }
          })
        }
      })
    }
  }
})
/*
* getUserInfo () {
      let _this = this
      wx.checkSession({
        success: function () {
          // session_key 未过期，并且在本生命周期一直有效
        },
        fail: function () {
          wx.login({
            success: () => {
              wx.getUserInfo({
                success: (res) => {
                  _this.userInfo = res.userInfo
                  console.log(res)
                }
              })
            }
          })
        }
      })
    }
  },
  created: function () {
    let _this = this
    _this.getUserInfo()
  },
* */
export default store
