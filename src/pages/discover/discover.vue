<template>
  <div>
    <div>
      <!--滑块-->
      <div style="box-shadow:20rpx 20rpx 20rpx 20rpx #aaaaaa;">
        <slide></slide>
      </div>
    </div>
    <!--官方推送officialPush-->
    <div>
      <official-push :pushInfo="pushInfo"></official-push>
    </div>
  </div>
</template>

<script>
import slide from '@/components/slide'
import officialPush from '@/components/officialPush'
export default {
  components: {
    slide,
    officialPush
  },
  data () {
    return {
      pushInfo: [
        {
          title: '小朋友们终于来到了美丽的海岛',
          time: new Date(),
          img: [
            'http://pics.ctripfair.com/island1.jpg',
            'http://pics.ctripfair.com/island2.jpg',
            'http://pics.ctripfair.com/island3.jpg',
            'http://pics.ctripfair.com/island4.jpg',
            'http://pics.ctripfair.com/island5.jpg',
            'http://pics.ctripfair.com/island6.jpg',
            'http://pics.ctripfair.com/island7.jpg',
            'http://pics.ctripfair.com/island8.jpg',
            'http://pics.ctripfair.com/island9.jpeg'
          ]
        },
        {
          title: 'we are here!',
          time: new Date(),
          img: [
            'http://pics.ctripfair.com/island10.jpg',
            'http://pics.ctripfair.com/island11.jpg',
            'http://pics.ctripfair.com/island12.jpg',
            'http://pics.ctripfair.com/island13.jpeg',
            'http://pics.ctripfair.com/island14.jpg',
            'http://pics.ctripfair.com/island15.jpg'
          ]
        }
      ]
    }
  },
  onShow: function () {
    let _this = this
    wx.getStorage({
      key: 'token',
      success (res) {
        console.log('查询token成功：' + res.data)
      },
      fail (res) {
        console.log('查询token失败：' + res.data)
        wx.showToast({
          title: '检测到您是第一次进入我们小程序，无法进入当前页面，请先注册以方便使用,即将自动跳转...',
          icon: 'none',
          duration: 5000,
          mask: true
        })
        setTimeout(_this.navigateToAuthorize, 5000)
      }
    })
  },
  methods: {
    navigateToAuthorize: function () {
      wx.navigateTo({
        url: '/pages/index/authorize/main'
      })
    }
  }
}
</script>

<style>

</style>
