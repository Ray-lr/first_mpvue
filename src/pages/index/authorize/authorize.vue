<template>
  <div style="background-image:url(http://pics.ctripfair.com/login_bg.png);width:750rpx;height:1334rpx;background-size: cover">
    <h1 style="text-align: center;position: relative;top: 400rpx">说明</h1>
    <div style="position: relative;top:400rpx">
      <p style="width: 80%;margin: 40rpx 10%">为了方便使用本系统和获取更多功能，注册之前请允许我们获取您的基本信息，主要是头像昵称等。同意，请点击下方授权按钮。</p>
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
        wx.setStorage({
          key: 'nickName',
          data: {
            nickName: e.mp.detail.userInfo.nickName
          },
          success () {
            console.log('storage存储nickName成功')
          }
        })
        wx.setStorage({
          key: 'avatarUrl',
          data: {
            avatarUrl: e.mp.detail.userInfo.avatarUrl
          },
          success () {
            console.log('storage存储avtarUrl成功')
            wx.navigateTo({
              url: './register/main'
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
