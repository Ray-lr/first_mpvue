<!--我的订单中，每个订单都是引用的该组件-->
<template>
<div style="width: 700rpx;height: 368rpx;margin-top: auto;">
  <div v-for="item in infos" :key="index" class="vfor">
  <!--订单号和状态-->
  <div style="display: flex">
    <div style="margin: 20rpx 250rpx 20rpx 34rpx">
      <p class="orderNumber">订单编号:{{item.id}}</p>
    </div>
    <div style="margin: 20rpx 8rpx">
      <p class="orderStatus">{{item.status}}</p>
    </div>
  </div>
  <!--出行信息-->
  <div class="orderInfo">
    <img class="orderImg" :src='item.img'/>
    <div>
      <div style="width: 430rpx;height: 88rpx;margin: 40rpx 20rpx">
        <p class="orderDetail">{{item.title}}</p>
      </div>
      <div style="width: 460rpx;height: 34rpx;margin: auto;display: flex">
        <p class="memberAndTime" style="width: 400rpx">成人{{item.adultsNum}} 儿童{{item.childrenNum}}</p>
        <p class="memberAndTime" style="text-align: right;width: 500rpx">出行时间：{{item.travelTime}}</p>
      </div>
    </div>
  </div>
  <!--下单信息-->
  <div class="order_user_div">
    <p class="order_user">{{userInfo.nickName}}</p>
    <p class="order_user">15236597137</p>
    <p class="order_time" style="text-align: right">下单时间：{{item.orderTime}}</p>
  </div>
  </div>
</div>
</template>

<script>
  import store from '../store'
  export default {
    props: ['info'],
    data () {
      return {
        infos: []
      }
    },
    created: function () {
      let _this = this
      _this.getUserInfo()
      this.infos = this.info
    },
    computed: {
      userInfo () {
        return store.state.userInfo
      }
    },
    methods: {
      getUserInfo: function () {
        store.commit('getUserInfo')
      }
    }
  }
</script>

<style scoped>
  .vfor{
    margin-top: 60rpx;
    box-shadow:20rpx 20rpx 20rpx 5rpx #aaaaaa;
    background-size: 100% 100%;
    background-color:#fffffe;
    /*background-image:url(http://pics.ctripfair.com/bg_cardblue.jpg);*/
  }
.orderNumber{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0.17px;
  width: 300rpx;
  height: 40rpx;
}
  .orderStatus{
    font-family: PingFangSC-Medium;
    font-size: 14px;
    /*color: #23C8DA;*/
    letter-spacing: -0.22px;
    width: 84rpx;
    height: 40rpx;
  }
  .orderInfo{
    display: flex;
    border-bottom-style: solid;
    border-top-style: dashed;
    border-width: 2rpx;
    border-color:  #DDDDDD;
    width: 620rpx;
    height: 220rpx;
    margin: auto;
  }
  .orderImg{
    width: 140rpx;
    height: 140rpx;
    margin: 40rpx 0rpx 40rpx 20rpx;
  }
  .orderDetail{
    font-family: PingFangSC-Medium;
    font-size: 30rpx;
    font-weight: bolder;
    color: #333333;
    letter-spacing: 0.19px;
  }
  .memberAndTime{
    font-family: PingFangSC-Regular;
    font-size: 24rpx;
    color: #666666;
    letter-spacing: 0.14px;
  }
  .order_user{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #666666;
    letter-spacing: -0.19px;
    width: 30%;
    margin-bottom: 8rpx;
  }
  .order_user_div{
    margin: 14rpx 40rpx;
    display: flex;
  }
  .order_time{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #666666;
    letter-spacing: -0.19px;
    width: 60%;
    margin-bottom: 8rpx;
  }
</style>
