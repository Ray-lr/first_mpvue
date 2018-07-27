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
let baseUrl = 'https://demo.ctripfair.com/wap'
const request = {
  get (url, data) {
    // 数据请求前loading，提高用户体验
    wx.showLoading({
      title: '加载中'
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + url,
        data: data,
        method: 'GET',
        // 设置请求的 header
        header: {
          'Content-Type': 'application/json',
          'charset': 'utf-8',
          'token': ''
        },
        success: function (res) {
          wx.hideLoading()
          if (res.statusCode !== 200) {
            wx.showToast({
              title: '网络出错，稍后再试',
              icon: 'none'
            })
            console.log('服务器返回http请求回应码' + res.statusCode)
            return false
          }
          console.log('服务器返回http请求回应码' + res.statusCode)
          resolve(res.data)
        },
        // 请求失败
        fail: function (error) {
          wx.hideLoading()
          reject(error)
          console.log(error)
        },
        // 无论请求成功还是失败都要隐藏加载
        complete: function () {
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
      wx.request({
        url: baseUrl + url,
        data: data,
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          'charset': 'utf-8'
        },
        success: function (res) {
          wx.hideLoading()
          if (res.statusCode !== 200) {
            wx.showToast({
              title: '网络出错，稍后再试',
              icon: 'none'
            })
            console.log('服务器返回http请求回应码' + res.statusCode)
            return false
          }
          console.log('服务器返回http请求回应码' + res.statusCode)
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
    })
  }
}

export default {
  formatTime: formatTime,
  request: request
}
