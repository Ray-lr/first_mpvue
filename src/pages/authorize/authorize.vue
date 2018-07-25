<template>
  <div style="background-image:url(http://pics.ctripfair.com/login_bg.png);width:750rpx;height:1334rpx;background-size: cover">
    <h1 style="text-align: center;position: relative;top: 400rpx">说明</h1>
    <div style="position: relative;top:400rpx">
      <p style="width: 80%;margin: 40rpx 10%">为了方便使用本系统和获取更多功能，请允许我们获取您的基本信息，主要是头像昵称等。同意，请点击下方授权按钮。</p>
    </div>
    <button style="position: relative;top: 400rpx;" type="primary" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">授权</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    onGotUserInfo: function (e) {
      console.log(e.mp.detail)
      if (e.mp.detail.encryptedData) {
        wx.switchTab({
          url: '/pages/index/main',
          success: function () {
            console.log('授权成功')
            wx.showTabBar()
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
