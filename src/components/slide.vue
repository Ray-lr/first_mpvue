// 首页顶端滑块组件
<template>
  <swiper style="height: 600rpx;width: 700rpx;margin-left: 31rpx; margin-right: 18rpx; box-shadow:20rpx 20rpx 20rpx #cccccc;border-radius:8%" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
          previous-margin="0" next-margin="0"
          :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
    <div v-for="item in infos" :key="index">
      <swiper-item>
        <p style="font-size: 60rpx;margin: 10rpx 20rpx;width: 80%">{{item.dict_label}}</p>
        <img style="box-shadow:20rpx 20rpx 20rpx #cccccc;" :src="item.pic_url" class="slide-image"/>
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
          {dict_label: '五天四晚三亚冲浪营',
            dict_value: '',
            pic_url: 'http://pics.ctripfair.com/sanya.png'},
          {dict_label: '九寨沟一周游',
            dict_value: '',
            pic_url: 'http://www.yanoda.com/App_Assets/Web/Images/img_subject/41.jpg'},
          {dict_label: '三天三夜森林野营',
            dict_value: '',
            pic_url: 'http://www.yanoda.com/App_Assets/Web/Images/img_subject/42.jpg'},
          {dict_label: '拥抱自然，放飞自我',
            dict_value: '',
            pic_url: 'http://www.yanoda.com/App_Assets/Web/Images/img_subject/44.jpg'}
        ]
      }
    },
    mounted: function () {
      let _this = this
      _this.$request.post('/dict/getDictData', {dictType: 'THREE_BEAR_KIDS'}).then(data => {
        _this.infos = data.data
        // console.log(_this.infos)
      })
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
