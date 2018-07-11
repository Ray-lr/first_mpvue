<template>
  <div>
    <!--营员信息-->
    <div class="mine">
      <div class="nickName">
        <p style="font-size: 52rpx;border: 0">{{name}}</p>
      </div>
      <div>
        <img class="userinfo-avatar" src="http://pics.ctripfair.com/avatar.jpg" background-size="cover"/>
      </div>
    </div>
    <div style="border-top-style: solid;border-width: 2rpx;border-color: #c7c7c7;"></div>
    <!--关注者信息-->
    <div class="info">
      <p class="leftP">姓名：</p>
      <p class="rightP">{{name}}</p>
    </div>
    <div class="info">
      <p class="leftP">证件号：</p>
      <p class="rightP">120215199802152511</p>
    </div>
    <div class="info">
      <p class="leftP">家庭角色：</p>
      <p class="rightP">爸爸</p>
    </div>
    <div class="info">
      <p class="leftP">手机号：</p>
      <p class="rightP">12345678910</p>
    </div>
    <div>
      <!--删除该关注者按钮-->
      <div style="margin-top:auto;">
        <img class="reduceButton" @click="reduce" src="http://pics.ctripfair.com/ico_reduce1.png"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        id: ''
      }
    },
    mounted: function () {
      let _this = this
      _this.name = _this.$root.$mp.query.name
      _this.id = _this.$root.$mp.query.id
    },
    methods: {
      reduce: function () {
        wx.showModal({
          title: '删除',
          content: '确定要删除该关注者吗？',
          confirmText: '确定',
          cancelText: '取消',
          success: function (res) {
            console.log(res)
            if (res.confirm) {
              console.log('确定')
            } else {
              console.log('取消')
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .reduceButton{
    width: 120rpx;
    height: 120rpx;
    margin: 60rpx 314rpx;
  }
  .info{
    display: flex;
    border-bottom-style: solid;
    border-width: 2rpx;
    border-color: #c7c7c7
  }
  .mine{
    width: 100%;
    height: 150rpx;
    display: flex;
  }
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
  .nickName{
    width: 60%;
    height: 82rpx;
    margin: 30rpx;
  }
  .tips{
    font-family: PingFangSC-Medium;
    font-size: 40rpx;
    color: #000000;
    letter-spacing: 0.5rpx;
    line-height: 82rpx;
    height: 84rpx;
    text-align: center;
  }
  .leftP{
    font-family: PingFangSC-Regular;
    font-size: 40rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 44rpx;
    width: 30%;
    margin: 22rpx 0rpx;
  }
  .rightP{
    font-family: PingFangSC-Regular;
    font-size: 40rpx;
    color: #151515;
    letter-spacing: 0;
    line-height: 44rpx;
    width: 70%;
    margin: 22rpx 0rpx;
    text-align: left;
  }
</style>
