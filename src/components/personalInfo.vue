// 个人信息组件
<template>
  <div>
    <div class="mine">
      <!--名字-->
      <div class="nickNameDiv">
        <div v-if="!info.title||info.title===''">
        <p class="nickName" >
          <open-data type="userNickName"></open-data>
        </p>
        </div>
        <p class="nickName" v-else>{{info.title}}</p>
      </div>
      <!--头像-->
      <div style="width: 150rpx;height:150rpx; float: right">
        <div style="overflow: hidden;border-radius: 50%;height: 150rpx;" v-if="!info.avatar || info.avatar===''">
          <open-data type="userAvatarUrl" ></open-data>
        </div>
        <!--<img style="width: 150rpx;height:150rpx;border-radius: 50%;" v-if="info.avatar==='' || !info.avatar" :src="userInfo.avatarUrl" />-->
        <img style="width: 150rpx;height:150rpx;border-radius: 50%;" v-else :src="info.avatar" />
      </div>
    </div>
    <!--徽章（如果有的话）-->
    <div style="display: flex;margin-left: 20rpx;width:500rpx">
    <div v-for="item in info.badge" :key="index" style="margin: 10rpx 10rpx">
      <img style="width: 60rpx;height: 60rpx" :src="item"/>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['info_props_title', 'info_props_avatar', 'info_props_badge'],
    data () {
      return {
        info: {
          title: '',
          avatar: '',
          badge: []
        }
      }
    },
    computed: {
    },
    created: function () {
      let _this = this
      _this.info.title = _this.info_props_title ? _this.info_props_title : null
      _this.info.badge = _this.info_props_badge ? _this.info_props_badge : null
      _this.info.avatar = _this.info_props_avatar ? _this.info_props_avatar : null
    },
    methods: {
    }
  }
</script>

<style scoped>
  .mine {
    width: 100%;
    display: flex;
    margin-bottom: 20rpx;
  }

  .nickNameDiv {
    width: 60%;
    height: 82rpx;
    margin: 30rpx;
  }

  .nickName{
    font-family: PingFangSC-Medium;
    font-size: 56rpx;
    color: #000000;
    letter-spacing: 0.6rpx;
    line-height: 82rpx;
  }
  .userName{
    font-family: PingFangSC-Medium;
    font-size: 32rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 36rpx;
    width: 500rpx;
    margin-top: 30rpx;
  }
</style>
