// 首页的小图片和文字组件
<template>
  <div>
    <div v-if="params.length>1&&params[1].title!==''">
    <swiper style="height: 400rpx;" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :previous-margin="0" :next-margin="30"
            :duration="duration" :circular="circular" display-multiple-items="2" @change="swiperChange" @animationfinish="animationfinish">
      <div v-for="item in params" :key="index" @click="routeDetail(item)" style="margin-left: 10rpx">
        <swiper-item>
          <input :value="item.id " style="display: none"/>
          <img :src="item.url" class="slide-image"/>
            <p class="smallTitle">{{item.title}}</p>
            <p class="wayIn smallTitle">{{item.introduction}}</p>
          <div style="display: flex;margin-left: 16rpx;">
            <p style="font-size: small;margin-top: 2%">￥</p>
            <p class="price">{{item.price}}</p>
            <p style="width:35%;color: #d5d5d6;font-size: smaller">起</p>
          </div>
        </swiper-item>
      </div>
    </swiper>
    </div>
    <div v-else-if="params.length===1&&params[0].title!==''">
      <!--当数组只有一个值时-->
      <div @click="routeDetail(params[0])" style="width:315rpx;height: 400rpx;padding-left: 16rpx;">
        <div style="height: 100%">
          <img :src="params[0].url" class="slide-image"/>
          <p class="smallTitle">{{params[0].title}}</p>
          <p class="wayIn smallTitle">{{params[0].introduction}}</p>
          <div style="display: flex;margin-left: 16rpx;">
            <p style="font-size: small;margin-top:6rpx">￥</p>
            <p class="price">{{params[0].price}}</p>
            <p style="width:35%;color: #d5d5d6;font-size: smaller">起</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else style="align-items: center">
      <p style="text-align: center">暂无数据...</p>
    </div>
    <div style="border-top-style: solid;border-width: 2rpx;border-color: #c7c7c7"></div>
  </div>
</template>

<script>
    export default {
      components: {},
      props: ['imgs'],
      data () {
        return {
          indicatorDots: false,
          autoplay: false,
          circular: false,
          params: []
        }
      },
      created: function () {
        if (this.imgs.length > 0) {
          this.params = this.imgs
          // console.log(this.params)
        }
      },
      methods: {
        routeDetail: function (e) {
          wx.vibrateShort()
          wx.navigateTo({
            url: './routeDetail_tourist/main?title=' + e.title + '&id=' + e.id + '&price=' + e.price + '&introduction=' + e.introduction + '&img=' + e.url
          })
          // console.log(e)
        }
      }
    }
</script>

<style scoped>
  .slide-image{
    height: 55%;
    width: 320rpx;
    margin-left: 16rpx;
  }
  .smallTitle{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    /*font-weight: bold;*/
    margin-left: 16rpx;
  }
  .wayIn{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: smaller;
    color: #d5d5d6;
  }
  .price{
    width:30%;
    font-size: small;
    color: coral;
    margin-top: 2%;
  }
</style>
