<!-- 查看全部组件-->
<template>
    <div>
      <div v-for="items in info" :key="index">
        <div class="headTitle">{{items.headTitle}}</div>
        <div class="blankBox"></div>
        <div style="width: 750rpx;">
          <div class="itemBox" v-for="(item, inner) in items.content" :key="inner">
            <div style="width: 646rpx;height: 344rpx;">
              <img class="itemImg" :src="item.url"/>
            </div>
            <div class="itemTitle">{{item.title}}</div>
            <div class="itemWay">{{item.way}}</div>
            <div style="display: flex">
              <p style="font-size: smaller;margin-top: 10rpx">￥</p>
              <p class="price">{{item.price}}</p>
              <p style="width:10rpx;color: #d5d5d6;font-size: smaller;margin: 10rpx auto auto 50rpx">起</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      props: ['imgs'],
      data () {
        return {
          info: []
        }
      },
      created: function () {
        if (this.imgs.length > 0) {
          this.info = this.imgs
        }
      }
    }
</script>

<style scoped>
.headTitle{
  width: 750rpx;
  height: 82rpx;
  font-family: PingFangSC-Medium;
  font-size: 56rpx;
  color: #000000;
  letter-spacing: 0.58rpx;
  line-height: 82rpx;
  text-align: center;
  margin-bottom: 20rpx;
}
.blankBox{
  width: 750rpx;
  height: 20rpx;
  background: #EFEFF4;
}
.itemBox{
  width: 686rpx;
  background: #FFFFFF;
  box-shadow: 0 20rpx 34rpx 0 rgba(0,0,0,0.12);
  border-radius: 16rpx;
  padding: 20rpx;
  margin: 30rpx 32rpx 50rpx 32rpx;
  display: block;
}
.itemImg{
  width: 646rpx;
  height: 344rpx;
}
.itemTitle{
  font-family: PingFangSC-Medium;
  font-size: 36rpx;
  color: #333333;
  letter-spacing: 0;
  line-height: 36rpx;
  margin-top: 24rpx;
}
.itemWay{
  font-family: PingFangSC-Regular;
  font-size: smaller;
  color: #666666;
  letter-spacing: 0;
  line-height: 36rpx;
  margin-top: 20rpx;
}
.price{
  width:40rpx;
  font-size: smaller;
  color: coral;
  margin-top: 10rpx;
}
</style>
