<!--成长之路页面-->
<template>
  <!--绑定style可以使用变量动态控制css属性-->
  <div  :style="{'height':height_swiper+ 'rpx'}">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoPlay" :interval="interval" :duration="duration" :circular="circular"
              @change="swiperChange" @animationfinish="animationfinish" style="height:100%">
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
            <div style="height: 40rpx"></div>
            <!--成长经历-->
            <div v-for="(items,inner) in item.growth" :key="inner">
              <growth-experience :growth_props_date="items.date" :growth_props_month="items.month"
                                 :growth_props_age="items.age" :growth_props_title="items.title"
                                 :growth_props_img="items.img"></growth-experience>
            </div>
            <!--最后（更多）-->
            <div style="display: flex;margin: 0 24rpx">
              <div class="oval"></div>
              <button style="align: left" @click="more(item)">更多</button>
            </div>
          </swiper-item>
        </div>
      </swiper>
  </div>
</template>
<script>
  import growthExperience from '@/components/growth_experience'
  import personalInfo from '@/components/personalInfo'
  export default {
    components: {
      personalInfo,
      growthExperience
    },
    data () {
      return {
        height_swiper: 2000,
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
            badge: ['http://pics.ctripfair.com/badge1.jpg', 'http://pics.ctripfair.com/badge2.jpg', 'http://pics.ctripfair.com/badge3.jpg'],
            growth: [
              {date: '24',
                month: '12',
                age: '两岁11个月12天',
                title: '小朋友们终于又来到了美丽的海岛',
                img: ['http://pics.ctripfair.com/island10.jpg', 'http://pics.ctripfair.com/island11.jpg', 'http://pics.ctripfair.com/island12.jpg', 'http://pics.ctripfair.com/island1.jpg']},
              {date: '22',
                month: '2',
                age: '两岁1个月10天',
                title: '小朋友们终于来到了美丽的海岛',
                img: ['http://pics.ctripfair.com/island2.jpg', 'http://pics.ctripfair.com/island3.jpg', 'http://pics.ctripfair.com/island4.jpg']}
            ]
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
    mounted () {
      console.log(this.$refs.outter)
    },
    methods: {
      swiperChange (e) {
        // console.log('第' + e.mp.detail.current + '张轮播图发生了滑动')
      },
      animationfinish (e) {
        // console.log('第' + e.mp.detail.current + '张轮播图滑动结束')
      },
      more: function (e) {
        this.height_swiper *= 2
        // document.getElementById('outter').style.height = this.height_swiper
      }
    }
  }
</script>

<style>
  #out{
    height:2000rpx;
  }
 /* .swiper{
    height:2000rpx;
  }*/
  .swiper-item{
    height: 100%;
  }
  .bigButton{
    height: 140rpx;
    width: 216rpx
  }
  .oval{
    background-image: linear-gradient(-180deg, #FFFFFF 24%, #E7E7E7 80%);
    border: 4rpx solid #23C8DA;
    box-shadow: 0 2rpx 6rpx 0 rgba(2,91,101,0.60);
    width: 24rpx;
    height: 24rpx;
    border-radius: 50%;
  }
</style>
