// 首页的小图片和文字组件
<template>
  <div>
    <div v-if="params&&params[0].title!==''">
    <swiper style="height: 200px" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :previous-margin="30" :next-margin="30"
            :duration="duration" :circular="circular" display-multiple-items="2" @change="swiperChange" @animationfinish="animationfinish">
      <div v-for="item in params" :key="index" @click="routeDetail(item)" >
        <swiper-item style="margin-left: 10rpx">
          <img :src="item.url" class="slide-image"/>
            <p class="smallTitle">{{item.title}}</p>
            <p class="wayIn smallTitle">{{item.introduction}}</p>
          <div style="display: flex">
            <p style="font-size: small;margin-top: 2%">￥</p>
            <p class="price">{{item.price}}</p>
            <p style="width:35%;color: #d5d5d6;font-size: smaller">起</p>
          </div>
        </swiper-item>
      </div>
    </swiper>
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
          wx.navigateTo({
            url: './routeDetail_tourist/main?title=' + e.title + '&price=' + e.price + '&introduction=' + e.introduction + '&img=' + e.url
          })
          // console.log(e)
        }
      }
    }
</script>

<style scoped>
  .slide-image{
    height: 50%;
    width: 100%;

  }
  .smallTitle{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    /*font-weight: bold;*/
  }
  .wayIn{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: smaller;
    color: #d5d5d6;
  }
  .price{
    width:25%;
  font-size: small;
    color: coral;
    margin-top: 2%;
  }
</style>
