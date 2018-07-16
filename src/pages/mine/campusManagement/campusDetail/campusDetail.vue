<!--营员详细信息页面（谁关注我）-->
<template>
  <div>
    <!--营员信息-->
    <div class="mine">
      <div class="nickName">
        <p style="font-size: 52rpx;border: 0">{{name}}</p>
      </div>
      <div>
        <img class="userinfo-avatar" src="http://pics.ctripfair.com/avatar.jpg" background-size="cover" />
      </div>
    </div>

    <div style="background-color:#EFEFF4;height: 1056rpx;">
      <div style="border-top-style: solid;border-width: 2rpx;border-color: #c7c7c7"></div>
      <div>
        <p class="tips">谁关注我</p>
      </div>
      <div style="border-top-style: solid;border-width: 2rpx;border-color: #c7c7c7;"></div>
      <!--其他信息-->
      <div>
        <div style="background-color: #ffffff;position: absolute;">
          <member :members="member" :url_props="url"></member>
          <!--添加关注者按钮-->
          <div style="margin-top:auto;">
            <img class="addButton" @click="share" src="http://pics.ctripfair.com/ico_add1.png"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import personalInfo from '@/components/personalInfo'
  import member from '@/components/mine/members'
  export default {
    components: {
      personalInfo,
      member
    },
    data () {
      return {
        member: [
          {name: '江爸爸'},
          {name: '江妈妈'},
          {name: '江爷爷'}
        ],
        url: './attention2Me/main',
        name: '',
        id: ''
      }
    },
    mounted: function () {
      let _this = this
      // 注意mpvue的路径参数获取方式
      _this.name = _this.$root.$mp.query.name
      _this.id = _this.$root.$mp.query.id
    },
    methods: {
      share: function () {
        wx.showModal({
          title: '分享营员',
          content: '确定要分享该营员吗？',
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
  .mine{
    width: 100%;
    height: 150rpx;
    display: flex;
  }
.name{
  font-family: PingFangSC-Medium;
  font-size: 48rpx;
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
  .nickName{
    width: 60%;
    height: 82rpx;
    margin: 30rpx;
  }
  .rightP{
    font-family: PingFangSC-Regular;
    font-size: 40rpx;
    color: #151515;
    letter-spacing: 0;
    line-height: 44rpx;
    width: 70%;
    margin: 22rpx 0rpx;
    text-align: right;
  }
.members{
  display: flex;
  border-bottom-style: solid;
  border-width: 2rpx 0rpx;
  border-color: #c7c7c7;
  float: right;
  width: 90%;
  height: 88rpx;
}
.addButton{
  width: 120rpx;
  height: 120rpx;
  margin: 60rpx 314rpx;
}
.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}
  .tips{
    font-family: PingFangSC-Medium;
    font-size: 48rpx;
    color: #c7c7c7;
    letter-spacing: 0.5rpx;
    line-height: 82rpx;
    height: 84rpx;
    text-align: center;
  }
</style>
