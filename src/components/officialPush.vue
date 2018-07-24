<!--官方推送组件-->
<template>
  <div>
    <div>
        <div v-for="(item,index) in push" :key="index" style="width: 725rpx;height:700rpx;margin-top: 150rpx">
          <div>
            <div class="avatarDiv">
              <img class="avatar" src="http://pics.ctripfair.com/logo.png"/>
            </div>
            <div>
              <div style="position: relative;left: 20rpx;">
                <p class="pusher">三只熊官方推送</p>
                <p class="pushTitle">{{item.title}}</p>
              </div>
              <div v-for="(items,inner) in item.img" :key="inner" class="innerDiv">
                <img class="image" :src="items"/>
              </div>
              <div style="position: relative;left: 20rpx;">
                <p class="time">{{item.time}}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['pushInfo'],
      data () {
        return {
          push: []
        }
      },
      methods: {
      },
      created: function () {
        let _this = this
        _this.push = _this.pushInfo
        console.log(_this.push)
      }
    }
</script>

<style scoped>
.image{
  width: 160rpx;
  height: 160rpx;
}
.avatar{
  box-shadow:20rpx 20rpx 20rpx  #aaaaaa;
  border-radius: 50%;
  width: 100rpx;
  height: 100rpx
}
.avatarDiv{
  width: 100rpx;
  height: 680rpx;
  float: left;
  margin:0 22rpx;
}
  .pusher{
    font-family: PingFangSC-Medium;
    font-size: 40rpx;
    color: #39476C;
    letter-spacing: 0.42rpx;
    line-height: 48rpx;
  }
  .pushTitle{
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 36rpx;
    margin: 20rpx 0;
  }
  .innerDiv{
    margin: 4rpx;
    width:160rpx;
    height:160rpx;
    left:20rpx;
    position: relative;
    float: left;
  }
  .time{
    font-family: PingFangSC-Medium;
    font-size: 28rpx;
    color: #999999;
    letter-spacing: 0;
    line-height: 36rpx;
  }
</style>
