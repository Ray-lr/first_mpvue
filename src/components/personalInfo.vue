// 个人信息组件
<template>
  <div>
    <div class="mine">
      <div class="nickNameDiv">
        <div v-if="info.title===''||!info.title">
        <p class="nickName" >{{userInfo.nickName}}</p>
        </div>
        <p class="nickName" v-else>{{info.title}}</p>
      </div>
      <div style="width: 150rpx;height:150rpx;margin-top:30rpx; float: right">
        <img style="width: 150rpx;height:150rpx;border-radius: 50%;" v-if="info.avatar==='' || !info.avatar" :src="userInfo.avatarUrl" />
        <img style="width: 150rpx;height:150rpx;border-radius: 50%;" v-else :src="info.avatar" />
      </div>
    </div>
    <div style="display: flex;margin-left: 20rpx;width:500rpx">
    <div v-for="item in info.badge" :key="index" style="margin: 10rpx 10rpx">
      <img style="width: 60rpx;height: 60rpx" :src="item"/>
    </div>
    </div>
  </div>
</template>

<script>
  import store from '../store'

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
      userInfo () {
        return store.state.userInfo
      }
    },
    created: function () {
      this.getUserInfo()
      let _this = this
      _this.info.title = _this.info_props_title
      _this.info.badge = _this.info_props_badge
      _this.info.avatar = _this.info_props_avatar
    },
    methods: {
      getUserInfo: function () {
        store.commit('getUserInfo')
      }
    }
  }
</script>

<style scoped>
  .mine {
    width: 100%;
    height: 500 rpx;
    display: flex;
  }

  .nickNameDiv {
    width: 60%;
    height: 82 rpx;
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
  .avatar {
    width: 100 rpx;
    height: 100 rpx;
    /*margin: 80 rpx 28 rpx;*/
    /*border-radius: 50%;*/
  }
</style>
