<!--优惠券页面-->
<template>
  <div>
    <div style="text-align: center">
      <div class="ticket">
        <div style="display: flex">
        <div class="leftDiv">
          <p class="font_discount">折扣券</p>
          <p class="timeLimit">有效期至：2018-7-3</p>
        </div>
        <div class="rightDiv">
          <p class="number">8</p>
          <p class="zhe">折</p>
        </div>
        </div>
        <div style="width: 80%">
          <p class="condition">使用条件</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .ticket{
    margin:auto;
    background-size: 100% 100%;
    width: 686rpx;
    height: 350rpx;
    background-image:url(http://pics.ctripfair.com/ticket1@2x.png);
  }
.leftDiv{
  float: left;
  margin: 46rpx 60rpx 0rpx 44rpx;
  width: 300rpx;
  height: 180rpx;
}
  .font_discount{
    font-family: PingFangSC-Medium;
    font-size: 26px;
    color: #FFFFFF;
    letter-spacing: 0.31px;
  }
  .timeLimit{
    width: 300rpx;
    font-family: PingFangSC-Light;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0.14px;
  }
.number{
  font-family: PingFangSC-Semibold;
  font-size: 64px;
  color: #FFFFFF;
  letter-spacing: 0.77px;
}
  .zhe{
    font-family: PingFangSC-Regular;
    font-size: 56rpx;
    color: #FFFFFF;
    letter-spacing: 0.34px;
    margin-top: 60rpx;
  }
  .rightDiv{
    float: right;
    display: flex;
    width: 200rpx;
    height: 200rpx;
  }
  .condition{
    font-family: PingFangSC-Light;
    font-size: 24rpx;
    color: #FFFFFF;
    letter-spacing: 0.14px;
    text-align: left;
    margin: 10rpx 60rpx;
  }
</style>
