<!--营员管理页面-->
<template>
<div>
  <!--个人信息-->
  <div>
    <personal-info></personal-info>
  </div>
  <!--所有营员-->
  <div >
    <div style="border-top-style: solid;border-width: 2rpx;border-color: #c7c7c7"></div>
    <!--营员都是孩子，不用自己的信息-->
    <!--<div class="members" @click="navigate2MyDetails">
      <p class="font">{{userInfo.nickName}}</p>
      <img style="width: 15rpx;height: 26rpx;margin: 30rpx 26rpx" src="http://pics.ctripfair.com/Back%20Arrow@2x.png"/>
    </div>-->
    <div>
      <member :members="members" :url_props="url"></member>
    </div>
  </div>
  <!--添加按钮-->
  <div>
    <img @click="navigate2CampusAdd" class="addButton" src="http://pics.ctripfair.com/ico_add1.png"/>
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
        members: [
          { name: '江小白' },
          { name: '李小白' },
          { name: '王小明' }
        ],
        url: './campusDetail/main'
      }
    },
    created: function () {
    },
    computed: {
    },
    methods: {
      navigate2MyDetails: function () {
        wx.navigateTo({
          url: './campusDetail/main?name=' + this.userInfo.nickName
        })
      },
      navigate2CampusAdd: function () {
        wx.navigateTo({
          url: './campusAdd/main'
        })
      }
    }
  }
</script>

<style scoped>
.font{
  font-family: PingFangSC-Medium;
  font-size: 40rpx;
  color: #333333;
  letter-spacing: -0.8rpx;
  line-height: 50rpx;
  margin: 22rpx 0rpx;
  width: 600rpx;
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
