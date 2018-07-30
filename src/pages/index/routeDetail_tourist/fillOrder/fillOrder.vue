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
    <div class="outOrder">
      <p class="orderNum">预定人数</p>
      <div class="innerItem">
        <div class="manLeft">成人</div>
        <div class="manRight">
          <button type="button" class="decBtn" style="border-right: 1rpx solid #c7c7c7;" @click="decreaseBtn">-</button>
          <input id="manNum" type="number" min="0" value="0" class="numInp"/>
          <button type="button" class=" decBtn addBtn" style="border-left:1rpx solid #c7c7c7;">+</button>
        </div>
      </div>
      <div class="innerItem">
        <div class="manLeft">儿童</div>
        <div class="manRight">
          <button type="button" class="decBtn" style="border-right: 1rpx solid #c7c7c7;">-</button>
          <input id="childNum" type="number" min="0" value="0" class="numInp"/>
          <button type="button" class=" decBtn addBtn" style="border-left:1rpx solid #c7c7c7;">+</button>
        </div>
      </div>
    </div>
    <div class="campersInfo">
      <ul>
        <li>
          <div class="weui-flex js-category" >
            <div class="weui-flex-item" >选择营员（多选）</div>
            <i class="icon icon-74"></i>
          </div>
          <div v-for="item in campers" :key="index" style="padding-top: 26rpx;">
            <div class="camperMember">
              <p class="camperName">{{item.name}}</p>
              <p class="camperOlder">({{item.older}})</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
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
      ],
      campers: [
        {name: '江小白', older: '儿童'}, {name: '江爸爸', older: '成人'}, {name: '江妈妈', older: '成人'}
      ]
    }
  },
  mounted: function () {
    let _this = this
    _this.order.title = _this.$root.$mp.query.title
  },
  methods: {
    decreaseBtn: function () {
    }
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
  .outOrder{
    width: 686rpx;
    /*height: 320rpx;*/
    background: #FFFFFF;
    box-shadow: 0 10rpx 36rpx 0 rgba(0,0,0,0.12);
    border-radius: 16rpx;
    margin: 40rpx 32rpx;
    padding-top: 10rpx;
    padding-bottom: 20rpx;
  }
  .orderNum{
    width: 494rpx;
    height: 36rpx;
    font-family: PingFangSC-Medium;
    font-size: 40rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 36rpx;
    margin: 28rpx auto auto 28rpx;
  }
  .manLeft{
    width: 74rpx;
    height: 36rpx;
    font-family: PingFangSC-Regular;
    font-size: 32rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 36rpx;
    margin-top: 22rpx;
    float: left;
  }
  .innerItem{
    height: 80rpx;
    font-family: PingFangSC-Medium;
    letter-spacing: 0;
    line-height: 36rpx;
    background-color: #ffffff;
    border-top: 1rpx solid #c7c7c7;
    border-bottom: 1rpx solid #c7c7c7;
    margin: 30rpx;
    vertical-align: middle;
    padding-left: 20rpx;
    padding-right: 20rpx;
  }
  .manRight{
    width: 280rpx;
    height: 50rpx;
    float: right;
    border-radius: 10rpx;
    border: 1rpx solid #c7c7c7;
    margin-top: 15rpx;
    display: flex;
  }
  .decBtn{
    width:70rpx;
    height: 50rpx;
    line-height: 36rpx;
    color: #999999;
    float: left;
    background-color: #efeff4;
    /*text-align: center;*/
    /*font-size: 32rpx;*/
    padding-top: 7rpx;
    padding-left:22rpx;
  }
  .addBtn{
    float: right;
  }
  .numInp{
    width: 138rpx;
    height: 50rpx;
    text-align: center;
    font-size: 32rpx;
  }
  .campersInfo{
    width: 686rpx;
    background: #FFFFFF;
    box-shadow: 0 10rpx 36rpx 0 rgba(0,0,0,0.12);
    border-radius: 16rpx;
    margin-left: 32rpx;
    margin-right: 32rpx;
    padding-top: 10rpx;
    padding-bottom: 20rpx;
  }
  .weui-flex {
    font-family: PingFangSC-Medium;
    font-size: 40rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 36rpx;
    margin: 28rpx auto 28rpx 28rpx;
  }
  .weui-flex-item{
    -webkit-flex: 1 1 0;
    flex: 1 1 0;
    -webkit-box-flex: 1;
    display: block;
    margin: 0 10rpx
  }
  .camperMember{
    width: 654rpx;
    height: 60rpx;
    background: #FFFFFF;
    box-shadow: inset 0 0 0 0 #BCBBC1;
    margin-left: 32rpx;
    border-bottom: 1rpx solid #c7c7c7;
    display: flex;
  }
  .camperName{
    width: 100rpx;
    height: 44rpx;
    font-family: PingFangSC-Semibold;
    font-size: 32rpx;
    color: #000000;
    letter-spacing: -0.82rpx;
    line-height: 44rpx;
  }
  .camperOlder{
    width: 110rpx;
    height: 40rpx;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: -0.41px;
  }
</style>
