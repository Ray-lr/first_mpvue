// 首页顶端滑块组件
<template>
  <swiper style="height: 300px;align-items: center;box-shadow:20rpx 20rpx 20rpx #cccccc;border-radius:8%" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
          previous-margin="0" next-margin="0"
          :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
    <div v-for="item in infos" :key="index">
      <swiper-item>
        <p style="font-size: 60rpx;margin: 10rpx 20rpx;width: 80%">{{item.title}}</p>
        <img style="margin:0 0rpx;box-shadow:20rpx 20rpx 20rpx #cccccc;" :src="item.img" class="slide-image"/>
      </swiper-item>
    </div>
  </swiper>
</template>

<script>
  export default {
    data () {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 4000,
        duration: 900,
        circular: true,
        infos: [
          {title: '五天四晚三亚冲浪营',
            img: 'http://pics.ctripfair.com/sanya.png'},
          {title: '九寨沟一周游',
            img: 'http://www.yanoda.com/App_Assets/Web/Images/img_subject/41.jpg'},
          {title: '三天三夜森林野营',
            img: 'http://www.yanoda.com/App_Assets/Web/Images/img_subject/42.jpg'},
          {title: '拥抱自然，放飞自我',
            img: 'http://www.yanoda.com/App_Assets/Web/Images/img_subject/44.jpg'}
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
    width: 98%;
    height: 80%;
    border-radius:8%
  }
</style>
