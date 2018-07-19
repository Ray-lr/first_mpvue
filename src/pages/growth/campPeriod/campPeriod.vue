<template>
  <div>
    <!--营员信息-->
    <div class="mine">
      <div style="position: absolute">
        <div class="nickName">
          <p style="font-size: 52rpx;border: 0">{{name}}</p>
        </div>
        <p class="accountNum">账号: {{account}}</p>
      </div>
      <div>
        <img class="userinfo-avatar" src="http://pics.ctripfair.com/avatar.jpg" background-size="cover" />
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
        name: '',
        account: '',
        id: ''
      }
    },
    mounted: function () {
      let _this = this
      // 注意mpvue的路径参数获取方式
      _this.id = _this.$root.$mp.query.id
      _this.name = _this.$root.$mp.query.name
      _this.account = _this.$root.$mp.query.account
    }
  }
</script>

<style scoped>
  .mine{
    width: 100%;
    height: 260rpx;
  }
  .nickName{
    width: 60%;
    height: 82rpx;
    margin: 20rpx;
  }
  .accountNum{
    font-size: 32rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 36rpx;
    /*width: 60%;*/
    height: 36rpx;
    margin-left: 20rpx;
  }
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
    float: right;
  }
</style>
