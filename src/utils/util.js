function formatTime (date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// http://localhost/wap 本地测试
// http://demo.ctripfair.com/wap  线上服务器
let baseUrl = 'http://localhost/wap'
const request = {
  get (url, data) {
    wx.showLoading({
      title: '加载中'
    })
    return new Promise((resolve, reject) => {
      let token = ''
      wx.getStorage({
        key: 'token',
        success (res) {
          token = res.data
          wx.request({
            url: baseUrl + url,
            data: data,
            method: 'get',
            header: {
              'Content-Type': 'application/json',
              'charset': 'utf-8',
              'Authorization': token
            },
            success: function (res) {
              wx.hideLoading()
              if (res.statusCode !== 200) {
                wx.showToast({
                  title: '网络出错，请稍后再试',
                  icon: 'none'
                })
                console.log('http请求回应码' + res.statusCode)
                return false
              }
              console.log('http请求回应码' + res.statusCode)
              resolve(res.data)
            },
            fail: function (error) {
              wx.hideLoading()
              console.log(error)
              reject(error)
            },
            complete: function () {
              wx.hideLoading()
            }
          })
        },
        fail () {
          console.log('请求时获取token失败')
          wx.hideLoading()
        }
      })
    })
  },
  post (url, data) {
    wx.showLoading({
      title: '加载中'
    })
    return new Promise((resolve, reject) => {
      let token = ''
      wx.getStorage({
        key: 'token',
        success (res) {
          token = res.data
          wx.request({
            url: baseUrl + url,
            data: data,
            method: 'POST',
            header: {
              'Content-Type': 'application/json',
              'charset': 'utf-8',
              'Authorization': token
            },
            success: function (res) {
              wx.hideLoading()
              if (res.statusCode !== 200) {
                wx.showToast({
                  title: '网络出错，请稍后再试',
                  icon: 'none'
                })
                console.log('http请求回应码' + res.statusCode)
                return false
              }
              console.log('http请求回应码' + res.statusCode)
              resolve(res.data)
            },
            fail: function (error) {
              wx.hideLoading()
              console.log(error)
              reject(error)
            },
            complete: function () {
              wx.hideLoading()
            }
          })
        },
        fail () {
          console.log('请求时获取token失败')
          wx.hideLoading()
        }
      })
    })
  }
}

export default {
  formatTime: formatTime,
  request: request
}
