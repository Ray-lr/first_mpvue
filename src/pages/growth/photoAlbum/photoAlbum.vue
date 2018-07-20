<template>
    <div>
      <!--营员信息-->
      <div class="mine">
        <div style="position: absolute">
          <div class="nickName">
            <p style="font-size: 52rpx;border: 0">{{title}}</p>
          </div>
          <p class="accountNum">账号: {{nickName}}</p>
        </div>
        <div>
          <img class="userinfo-avatar" :src="avatar" background-size="cover" />
        </div>
      </div>
    </div>
</template>

<script>
    import personalInfo from '@/components/personalInfo'
    export default {
      components: {
        personalInfo
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
    margin: 30rpx;
  }
  .accountNum{
    font-size: 32rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 36rpx;
    /*width: 60%;*/
    height: 36rpx;
    margin-left: 30rpx;
  }
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 30rpx;
    border-radius: 50%;
    float: right;
  }
</style>
