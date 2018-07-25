<!--路线详情-->
<template>
  <div>
    <!--introduce路线简介-->
    <div class="abstract">
      <div style="width: 646rpx;height:602rpx;margin: 20rpx;">
        <img style="width: 646rpx;height:344rpx;" :src="route.url"/>
        <p class="title">{{route.title}}</p>
        <p class="introduction" style="font-size: 28rpx">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
        <div class="priceDiv">
          <img style="width: 36rpx;height:36rpx;" src="http://pics.ctripfair.com/ico_seal1.png"/>
          <p class="price" style="font-size: 28rpx">成人：￥<span style="width: 64rpx">{{route.price}}</span>/人 &nbsp &nbsp 儿童：￥<span style="width: 64rpx">{{route.price}}</span>/人</p>
        </div>
        <div class="priceDiv">
          <img style="width: 36rpx;height:36rpx;" src="http://pics.ctripfair.com/ico_seal2.png"/>
          <p class="price" style="font-size: 28rpx">成人：￥<span style="color:coral;width: 64rpx">{{route.price}}</span>/人 &nbsp &nbsp 儿童：￥<span style="color:coral;width: 64rpx">{{route.price}}</span>/人</p>
        </div>
      </div>
    </div>
    <!--日期时间-->
    <div class="timeSpaceDiv">
        <p class="otherFonts">发团日期</p>
        <p class="otherFonts" style="text-align: right;color: #151515">2018.8.15</p>
        <img style="width: 15.6rpx;height: 26rpx;margin: 30rpx 0" src="http://pics.ctripfair.com/Back%20Arrow@2x.png"/>
    </div>
    <div class="timeSpaceDiv" style="margin-bottom: 60rpx">
      <p class="otherFonts">时间地点</p>
      <p class="otherFonts" style="text-align: right;color: #151515; overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">6:00|滨海国际机场aaaaaaaaaaaaaaaaaaaa</p>
      <img style="width: 15.6rpx;height: 26rpx;margin: 30rpx 0" src="http://pics.ctripfair.com/Back%20Arrow@2x.png"/>
    </div>
    <!--导航-->
    <div class="weui-tab">
      <div class="weui-navbar">
        <block v-for="(item,index) in tabs" :key="index">
          <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
            <div class="weui-navbar__title">{{item}}</div>
          </div>
        </block>
        <!--<div class="weui-navbar__slider" :class="navbarSliderClass"></div>-->
      </div>
      <div class="weui-tab__panel" style="background: #F8F7FC;border-radius: 8rpx;">
        <!--行程安排的内容-->
        <div class="weui-tab__content" :hidden="activeIndex != 0">
          <div style="display: flex;width: 670rpx;height:68rpx;margin: 60rpx 8rpx">
            <p class="beginToEnd" style="text-align: right">天津</p>
            <img style="width: 68rpx;height:68rpx;margin: 0 20rpx" src="http://pics.ctripfair.com/plane.png"/>
            <p class="beginToEnd" style="text-align: left">三亚</p>
          </div>
          <div>
            <scheduling></scheduling>
          </div>
          <div>
            <scheduling></scheduling>
          </div>
        </div>
        <!--线路特色的内容-->
        <div class="weui-tab__content" :hidden="activeIndex != 1">

        </div>
        <!--费用说明的内容-->
        <div class="weui-tab__content" :hidden="activeIndex != 2">

        </div>
        <!--预订须知的内容-->
        <div class="weui-tab__content" :hidden="activeIndex != 3">

        </div>
      </div>
    </div>
    <!--预定按钮-->
    <button class="order" @click="navigate2FillOrder">预订</button>
  </div>
</template>

<script>
  import scheduling from '@/components/index/routeDetail/scheduling'
  export default {
    components: {
      scheduling
    },
    props: ['route_tourist'],
    data () {
      return {
        route: {
          title: '',
          url: '',
          price: '',
          way: ''
        },
        tabs: ['行程安排', '线路特色', '费用说明', '预订须知'],
        activeIndex: 0,
        fontSize: 30
      }
    },
    computed: {
    },
    mounted: function () {
      let _this = this
      _this.route.title = _this.$root.$mp.query.title
      _this.route.url = _this.$root.$mp.query.img
      _this.route.price = _this.$root.$mp.query.price
      _this.route.way = _this.$root.$mp.query.way
    },
    methods: {
      tabClick (e) {
        console.log(e)
        this.activeIndex = e.currentTarget.id
      },
      navigate2FillOrder: function () {
        wx.getUserInfo({
          withCredentials: true,
          success: function (res) {
            if (res.userInfo.encryptedData) {
              console.log('登录验证成功' + res.userInfo.encryptedData)
              console.log('跳转到填写订单')
              wx.navigateTo({
                url: './fillOrder/main?title=' + this.route.title
              })
            } else {
              wx.showModal({
                title: '注意',
                content: '预定路线之前需要先确定您的身份,请先同意授权',
                cancelText: '再看看',
                confirmText: '好去授权',
                success: function (res) {
                  if (res.confirm) {
                    wx.navigateTo({
                      url: '/pages/authorize/main'
                    })
                  }
                }
              })
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .abstract {
    width: 686rpx;
    height: 682rpx;
    background: #FFFFFF;
    box-shadow: 0 20rpx 34rpx 0 rgba(0, 0, 0, 0.12);
    border-radius: 16rpx;
    margin: 32rpx;
  }

  .title {
    font-family: PingFangSC-Medium;
    font-size: 40rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 36rpx;
    font-weight: bold;
    margin: 20rpx 0;
  }

  .introduction {
    font-family: PingFangSC;
    font-size: 28rpx;
    color: #666666;
    letter-spacing: 0;
    /*line-height: 36rpx;*/
    margin: 20rpx 0;
  }
  .priceDiv{
    height: 45rpx;
    margin: 6rpx 0;
    display: flex;
  }
  .price{
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #333333;
    letter-spacing: -0.44rpx;
    margin-left: 16rpx;
    width: 500rpx;
  }
  .timeSpaceDiv{
    display:flex;
    width: 686rpx;
    height: 80rpx;
    background: #FFFFFF;
    box-shadow: 0 0 0 0 #CECED0;
    border-bottom-style: solid;
    border-width: 2rpx 0;
    border-color: #c7c7c7;
    margin:0 32rpx;
  }
  .otherFonts{
    margin: 20rpx;
    width: 300rpx;
    font-family: PingFangSC-Regular;
    font-size: 32rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 44rpx;
  }
  .weui-tab__content {
    margin: 0 32rpx;
    width: 686rpx;
    padding-top: 60rpx;
    text-align: center;
  }
  .beginToEnd{
    font-family: PingFangSC-Medium;
    font-size: 48rpx;
    color: #333333;
    letter-spacing: 0.38rpx;
    line-height: 68rpx;
    width: 280rpx;
  }
  .order{
    background-image:linear-gradient(-180deg, #68F2FA 0%, #23C8DA 82%);
    box-shadow: 0 -2rpx 16rpx 0 rgba(0,0,0,0.20);
    width: 100%;
    height:100rpx;
    position: fixed;
    bottom: 0;
    color: white;
  }
</style>
