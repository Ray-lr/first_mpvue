<!--路线详情-->
<template>
  <div>
    <div class="abstract">
      <div style="width: 646rpx;height:602rpx;margin: 20rpx;">
        <img style="width: 646rpx;height:344rpx;" :src="route.url"/>
        <p class="title">{{route.title}}</p>
        <p class="introduction" style="font-size: 28rpx">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
        <div class="priceDiv">
          <img style="width: 36rpx;height:36rpx;" src="http://pics.ctripfair.com/ico_seal1.png"/>
          <p class="price" style="font-size: 28rpx">成人：￥<span style="width: 64rpx">{{route.price}}</span>
            /人 &nbsp &nbsp 儿童：￥<span style="width: 64rpx">{{route.price}}</span>/人</p>
        </div>
        <div class="priceDiv">
          <img style="width: 36rpx;height:36rpx;" src="http://pics.ctripfair.com/ico_seal2.png"/>
          <p class="price" style="font-size: 28rpx">成人：￥<span style="color:coral;width: 64rpx">{{route.price}}</span>
         /人 &nbsp &nbsp 儿童：￥<span style="color:coral;width: 64rpx">{{route.price}}</span>/人</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['route_tourist'],
    data () {
      return {
        route: {
          title: '',
          url: '',
          price: '',
          way: ''
        }
      }
    },
    mounted: function () {
      let _this = this
      _this.route.title = _this.$root.$mp.query.title
      _this.route.url = _this.$root.$mp.query.img
      _this.route.price = _this.$root.$mp.query.price
      _this.route.way = _this.$root.$mp.query.way
    }
  }
</script>

<style scoped>
  .abstract {
    width: 686 rpx;
    height: 682 rpx;
    background: #FFFFFF;
    box-shadow: 0 20 rpx 34 rpx 0 rgba(0, 0, 0, 0.12);
    border-radius: 16 rpx;
    margin: 32rpx;
  }

  .title {
    font-family: PingFangSC-Medium;
    font-size: 40 rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 36 rpx;
    font-weight: bold;
    margin: 20 rpx 0;
  }

  .introduction {
    font-family: PingFangSC;
    font-size: 22 rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 36 rpx;
    margin: 10 rpx 0;
  }
  .priceDiv{
    height: 40rpx;
    margin: 6rpx 0;
    display: flex;
  }
  .price{
    font-family: PingFangSC-Regular;
    font-size: 28 rpx;
    color: #333333;
    letter-spacing: -0.44rpx;
    margin-left: 16rpx;
    width: 500rpx;
  }
</style>
