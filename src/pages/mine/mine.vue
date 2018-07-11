<!--我的-->
<template>
  <div>
    <!--账号信息-->
    <personal-info></personal-info>
    <div style="height: 240rpx;display: flex;  border-style: solid; border-width: 2rpx 0rpx;border-color: #c7c7c7;">
      <!--我的订单-->
      <div style="width: 50%;margin: 50rpx 20rpx 50rpx 34rpx">
        <img @click="myOrder" class="button" src="http://pics.ctripfair.com/ico_order.png"/>
      </div>
      <!--个人信息-->
      <div style="width: 50%; margin: 50rpx 34rpx 50rpx 20rpx" @click="myInfo">
        <img class="button" src="http://pics.ctripfair.com/ico_inf.png"/>
      </div>
    </div>
    <!--其他-->
    <div style="margin-top: 20rpx">
      <!--优惠券-->
      <div style="display: flex">
        <div style="border-top-style: solid;border-color: #c7c7c7;border-width: 2rpx;width: 118rpx;height: 88rpx">
        <img class="littleIcon" src="http://pics.ctripfair.com/ico_coupon@2x.png"/>
        </div>
        <div class="otherDiv" @click="navigate2Discount">
        <p class="otherFonts">优惠券</p>
          <img style="width: 15.6rpx;height: 26rpx;margin: 30rpx 0" src="http://pics.ctripfair.com/Back%20Arrow@2x.png"/>
        </div>
      </div>
      <!--营员管理-->
      <div style="display: flex">
        <div style="width: 118rpx;height: 88rpx">
        <img class="littleIcon" src="http://pics.ctripfair.com/ico_manage.png"/>
        </div>
        <div style="width: 632rpx;height: 88rpx;display: flex" @click="navigate2CampusManagement">
        <p class="otherFonts">营员管理</p>
          <img style="width: 15.6rpx;height: 26rpx;margin: 30rpx 0" src="http://pics.ctripfair.com/Back%20Arrow@2x.png"/>
        </div>
      </div>
      <div style="display: flex">
        <div style="border-bottom-style: solid;border-color: #c7c7c7;border-width: 2rpx;width: 118rpx;height: 90rpx">
          <img class="littleIcon" src="http://pics.ctripfair.com/ico_member.png"/>
        </div>
        <div class="otherDiv">
          <p class="otherFonts">会员等级</p>
          <img style="width: 15.6rpx;height: 26rpx;margin: 30rpx 0" src="http://pics.ctripfair.com/Back%20Arrow@2x.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import personalInfo from '@/components/personalInfo'
  export default {
    components: {
      personalInfo
    },
    data () {
      return {
      }
    },
    methods: {
      myOrder: function () {
        console.log('navigate to order')
        wx.navigateTo({
          url: './order/main'
        })
      },
      myInfo: function () {
        wx.navigateTo({
          url: './personal/main'
        })
      },
      navigate2Discount: function () {
        wx.navigateTo({
          url: './discount/main'
        })
      },
      navigate2CampusManagement: function () {
        wx.navigateTo({
          url: './campusManagement/main'
        })
      }
    }
  }
</script>

<style>
.button{
  height: 140rpx;
  width: 320rpx;
}
  .littleIcon{
    height: 40rpx;
    width: 60rpx;
    margin: 28rpx 30rpx;
  }
  .otherFonts{
    margin: 22rpx 32rpx 22rpx 0rpx;
    font-size: medium;
    font-weight: bolder;
    width: 560rpx;
  }
  .otherDiv{
    display: flex;
    border-style: solid;
    border-width: 2rpx 0;
    border-color: #c7c7c7;
    width: 632rpx;
    height: 88rpx;
  }
</style>
