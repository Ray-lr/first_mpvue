<!--填写订单页面-->
<template>
  <div>
    <div>
      <p class="subtitle">{{order.title}}</p>
      <p class="introduction">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
    </div>
    <!--滚动条-->
    <div class="scroll">
      <div class="item" v-for="item in price">
        <div style="display: flex">
          <p style="margin: 44rpx 0rpx 4rpx 42rpx">￥</p>
          <p class="price">{{item}}</p>
        </div>
        <div>
          <p class="time">08/15-08/22</p>
        </div>
      </div>
    </div>
    <div class="divide"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {
        title: ''
      },
      price: [
        '5000',
        '5600',
        '4500',
        '6666'
      ]
    }
  },
  mounted: function () {
    let _this = this
    _this.order.title = _this.$root.$mp.query.title
  }
}
</script>

<style scoped>
.subtitle{
  font-family: PingFangSC-Medium;
  font-size: 40rpx;
  color: #333333;
  letter-spacing: 0;
  line-height: 36rpx;
  margin: 30rpx 52rpx;
}
  .introduction{
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 36rpx;
    margin: 30rpx 52rpx;
  }
  .scroll{
    height: 250rpx;
    overflow-x: scroll;
  /* 内容会被裁剪，会以滚动条显示 */
    overflow-y: hidden;  /* 超出内容不可见 */
    white-space: nowrap;  /* 不换行 */
  /* 文本不会换行，会在同一行上继续，直到遇到<br>为止 */
}
  .scroll .item{
    display:inline-block;
    box-sizing: border-box;
    width:260rpx;
    height:160rpx;
    background: #FFFFFF;
    border:2rpx solid #FD7067;
    box-shadow: 0 8rpx 24rpx 0 rgba(0,0,0,0.12);
    border-radius: 16rpx;
    margin: 40rpx 20rpx;
  }
  .scroll .item .price{
    font-family: PingFangSC-Medium;
    font-size: 60rpx;
    color: #FD7067;
    letter-spacing: 0;
    line-height: 64rpx;
    margin: 28rpx 40rpx 6rpx 6rpx;
  }
  .scroll .item .time{
    font-family: PingFangSC-Regular;
    font-size: 24rpx;
    color: #000000;
    letter-spacing: -0.4rpx;
    margin-left: 50rpx;
    margin-bottom: 28rpx;
  }
  .divide{
    background: #EFEFF4;
    height: 20rpx;
  }
</style>
