<!--个人信息页面-->
<template>
  <div class="userinfo">
    <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
    <div class="userinfo-nickname">
      <p>{{userInfo.nickName}}</p>
      <h3 align="center" v-if="userInfo.gender==1">男</h3>
      <h3 align="center" v-else>女</h3>
    </div>
    <div @click="bindViewTap">
      <button>{{info}}</button>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          info: 'Hello liRui,click here to check the log of login',
          userInfo: {}
        }
      },
      created () {
      },
      methods: {
        bindViewTap () {
          const url = '../logs/main'
          wx.navigateTo({url})
        }
      }
    }
</script>

<style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }
</style>
