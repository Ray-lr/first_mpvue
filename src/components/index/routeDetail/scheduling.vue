<!--行程安排组件-->
<template>
  <div style="width: 686rpx;margin: 0 32rpx;display: flex;">
    <div style="display: flex;width:75rpx">
      <div style="height:100%;width: 100%;display: block">
        <!--圆-->
        <div class="oval"></div>
        <!--线-->
        <div class="line"></div>
      </div>
    </div>
    <!--主体内容-->
    <div style="width: 500rpx;margin-bottom: 60rpx">
      <div style="width: 250rpx">
        <p class="date">12月24日</p>
      </div>
      <!--小模块-->
      <div class="modules">
        <p class="subtitle">行程路线:</p>
        <p class="contents">天涯海角风景区- 西岛旅游度假区- 西岛- 西岛旅游度假区- 旅游度假区- 西岛旅游度假区- 旅游度假区- 西岛旅游度假区</p>
      </div>
      <div class="modules">
        <p class="subtitle">交通形式:</p>
        <p class="contents">飞机</p>
      </div>
      <div class="modules">
        <p class="subtitle">旅行用餐:</p>
        <p class="contents">早餐、午餐、晚餐</p>
      </div>
      <div class="modules">
        <p class="subtitle">行程特色:</p>
        <p class="contents">天涯海角风景区- 西岛旅游度假区- 西岛- 西岛旅游度假区- 旅游度假区- 西岛旅游度假区- 旅游度假区- 西岛旅游度假区</p>
      </div>
      <div class="modules">
        <p class="subtitle">详细行程:</p>
        <p class="contents">天涯海角风景区- 西岛旅游度假区- 西岛- 西岛旅游度假区- 旅游度假区- 西岛旅游度假区- 旅游度假区- 西岛旅游度假区</p>
      </div>
      <!--图片-->
      <div>
        <img style="width: 574rpx;height:315rpx" src="http://pics.ctripfair.com/img4.png"/>
        <img style="width: 574rpx;height:315rpx" src="http://pics.ctripfair.com/img5.png"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .oval {
    background-image: linear-gradient(-180deg, #FFFFFF 24%, #E7E7E7 80%);
    border: 4rpx solid #23C8DA;
    box-shadow: 0 2rpx 6rpx 0 rgba(2, 91, 101, 0.60);
    width: 24rpx;
    height: 24rpx;
    border-radius: 50%;
  }

  .line {
    border-width: 4rpx;
    background-color: #DDDDDD;
    width: 6rpx;
    height: 99.47%;
    margin: 0 14rpx
  }

  .date {
    width: 250rpx;
    font-family: PingFangSC-Medium;
    font-size: 56rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 48rpx;
    text-align: left;
  }
  .modules{
    width:574rpx;
    margin: 40rpx 0;
  }
  .subtitle{
    font-family: PingFangSC-Semibold;
    font-size: 32rpx;
    color: #333333;
    letter-spacing: 0.42rpx;
    line-height: 48rpx;
    text-align: left;
    font-weight: bold;
  }
  .contents{
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 40rpx;
    text-align: left;
  }
</style>
