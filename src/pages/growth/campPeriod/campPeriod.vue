<template>
  <div>
    <!--营员信息-->
    <div class="mine">
      <!--<div style="position: absolute">-->
        <!--<div class="nickName">-->
          <!--<p style="font-size: 52rpx;border: 0">{{title}}</p>-->
        <!--</div>-->
        <!--<p class="accountNum">账号: {{nickName}}</p>-->
      <!--</div>-->
      <!--<div>-->
        <!--<img class="userinfo-avatar" :src="avatar" background-size="cover" />-->
      <!--</div>-->
      <!--营员信息（头）-->
      <div style="height: 300rpx">
        <personal-info :info_props_title="title" :info_props_nickName="nickName" :info_props_avatar="avatar"></personal-info>
      </div>
    </div>
    <!--营期信息-->
    <div class="campInfo" v-for="item in campsInfo" :key="index">
      <div>
        <img class="campPic" :src="item.img" background-size="cover"/>
      </div>
      <div class="campTitle">{{item.title}}</div>
      <div class="campDate">{{item.startDate}}-{{item.endDate}}</div>
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
        id: '1',
        title: '江小白',
        nickName: 'sanzhixiong',
        avatar: 'http://pics.ctripfair.com/avatar.jpg',
        campsInfo: [
          {
            img: 'http://pics.ctripfair.com/002cc082-2933-4194-b061-638627f43462',
            title: '三只熊海南三亚夏令营',
            startDate: '2018.01.02',
            endDate: '2018.01.12'
          },
          {
            img: 'http://pics.ctripfair.com/11c7f7d8-a50c-46d6-986d-9b66d1b953cd',
            title: '三只熊海南三亚夏令营',
            startDate: '2018.01.02',
            endDate: '2018.01.12'
          },
          {
            img: 'http://pics.ctripfair.com/2e363327-0002-44d2-806c-9c81f0e1ed41',
            title: '三只熊海南三亚夏令营',
            startDate: '2018.01.02',
            endDate: '2018.01.12'
          }
        ]
      }
    },
    mounted: function () {
    }
  }
</script>

<style scoped>
  .mine{
    width: 100%;
    height: 260rpx;
  }
  .campInfo{
    width: 686rpx;
    height: 500rpx;
    background: #FFFFFF;
    box-shadow: 0 20rpx 34rpx 0 rgba(0,0,0,0.12);
    border-radius: 16rpx;
    margin: 30rpx 32rpx 50rpx 32rpx;
    padding: 20rpx 20rpx 24rpx 20rpx;
  }
  .campPic{
    width: 646rpx;
    height: 344rpx;
    margin-bottom: 24rpx;
  }
  .campTitle{
    width: 494rpx;
    height: 36rpx;
    margin-bottom: 24rpx;
    font-family: PingFangSC-Medium;
    font-size: 36rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 36rpx;
  }
  .campDate{
    width: 526rpx;
    height: 36rpx;
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 36rpx;
  }
</style>
