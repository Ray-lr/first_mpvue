<!--成长之路页面-->
<template>
  <div>
      <swiper :indicator-dots="indicatorDots" :autoplay="autoPlay" :interval="interval" :duration="duration" :circular="circular"
              @change="swiperChange" @animationfinish="animationfinish" class="swiper">
        <div v-for="item in campusInfo" :key="index">
          <swiper-item class="swiper-item">
            <!--营员信息（头）-->
            <div style="height: 300rpx">
              <personal-info :info_props_title="item.title" :info_props_badge="item.badge" :info_props_avatar="item.avatar"></personal-info>
            </div>
            <!--<div style="border-top-style: solid;border-width: 2rpx;border-color: #c7c7c7"></div>-->
            <!--三个小标题按钮（营期，相册，评测）-->
            <div style="height: 240rpx;display: flex;border-style: solid;border-width: 2rpx 0;border-color: #c7c7c7">
              <img class="bigButton" style="margin: 50rpx 20rpx 50rpx 32rpx" src="http://pics.ctripfair.com/ico_cump.png"/>
              <img class="bigButton" style="margin: 50rpx 20rpx" src="http://pics.ctripfair.com/ico_album.png"/>
              <img class="bigButton" style="margin: 50rpx 32rpx 50rpx 20rpx" src="http://pics.ctripfair.com/ico_test.png"/>
            </div>
            <div style="height: 20rpx;background: #EFEFF4;"></div>
          </swiper-item>
        </div>
      </swiper>
  </div>
</template>

<script>
  import personalInfo from '@/components/personalInfo'
  export default {
    components: {
      personalInfo
    },
    data () {
      return {
        indicatorDots: true,
        autoPlay: false,
        interval: 5000,
        duration: 900,
        circular: true,
        campusInfo: [
          {
            title: '江小白',
            img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            avatar: 'http://pics.ctripfair.com/island1.jpg',
            badge: ['http://pics.ctripfair.com/badge1.jpg', 'http://pics.ctripfair.com/badge2.jpg', 'http://pics.ctripfair.com/badge3.jpg']
          },
          {
            title: '李小明',
            img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            avatar: 'http://pics.ctripfair.com/island15.jpg',
            badge: ['http://pics.ctripfair.com/badge3.jpg', 'http://pics.ctripfair.com/badge2.jpg', 'http://pics.ctripfair.com/badge1.jpg']
          },
          {
            title: '王Tom',
            img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
            avatar: 'http://pics.ctripfair.com/avatar.jpg',
            badge: ['http://pics.ctripfair.com/badge2.jpg', 'http://pics.ctripfair.com/badge1.jpg', 'http://pics.ctripfair.com/badge3.jpg']
          }
        ]
      }
    },
    methods: {
      swiperChange (e) {
        // console.log('第' + e.mp.detail.current + '张轮播图发生了滑动')
      },
      animationfinish (e) {
        // console.log('第' + e.mp.detail.current + '张轮播图滑动结束')
      }
    }
  }
</script>

<style>
  .slide-image {
    width: 100%;
    height: 100%;
  }
  .swiper{
    height: 1200rpx;
  }
  .swiper-item{
    height: 1000rpx;
  }
  .bigButton{
    height: 140rpx;
    width: 216rpx
  }
</style>
