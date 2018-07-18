<!--成长经历组件-->
<template>
  <div style="margin: 0 24rpx">
    <div style="display: flex;">
      <div style="display: flex;width: 160rpx">
      <div style="height:100%">
        <!--圆-->
        <div class="oval"></div>
        <!--线-->
        <div style="border-width: 4rpx;background-color:  #DDDDDD;width: 6rpx;height: 99.47%;margin: 0 14rpx"></div>
      </div>
      <div style="display: flex;margin: 0 6rpx;width: 120rpx">
        <p class="date">{{growth.date}}</p>
        <p class="month">{{growth.month}}月</p>
      </div>
      </div>
      <div style="width: 540rpx;margin-bottom: 100rpx">
      <div style="position: relative;">
        <p class="age">{{growth.age}}</p>
      </div>
      <!--图和标题-->
      <div style="position: relative;">
        <div>
          <p class="title">{{growth.title}}</p>
        </div>
      <div v-for="item in growth.img" :key="innermost" class="innerDiv">
        <img style="width: 160rpx;height: 160rpx" :src="item"/>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['growth_props_date', 'growth_props_month', 'growth_props_age', 'growth_props_title', 'growth_props_img'],
    data () {
      return {
        growth:
          {
            date: '',
            month: '',
            age: '',
            title: '',
            img: []
          }
      }
    },
    created: function () {
      let _this = this
      _this.growth.date = _this.growth_props_date
      _this.growth.month = _this.growth_props_month
      _this.growth.age = _this.growth_props_age
      _this.growth.title = _this.growth_props_title
      _this.growth.img = _this.growth_props_img
    }
  }
</script>

<style scoped>
.title{
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #333333;
  letter-spacing: 0;
  line-height: 36rpx;
}
.innerDiv{
  margin: 4rpx;
  width:160rpx;
  height:160rpx;
  left:20rpx;
  position: relative;
  float: left;
}
  .age{
    font-family: PingFangSC-Medium;
    font-size: 24rpx;
    color: #999999;
    letter-spacing: 0;
    line-height: 36rpx;
  }
.oval{
  background-image: linear-gradient(-180deg, #FFFFFF 24%, #E7E7E7 80%);
  border: 4rpx solid #23C8DA;
  box-shadow: 0 2rpx 6rpx 0 rgba(2,91,101,0.60);
  width: 24rpx;
  height: 24rpx;
  border-radius: 50%;
}
.date{
  font-family: PingFangSC-Medium;
  font-size: 48rpx;
  color: #333333;
  letter-spacing: 0;
  line-height: 48rpx;
}
.month{
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #333333;
  letter-spacing: 0.42rpx;
  line-height: 32rpx;
}
</style>
