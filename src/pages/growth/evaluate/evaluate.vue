<template>
    <div>
      <!-- 头部信息-->
      <div class="mine">
        <div style="height: 300rpx">
          <personal-info :info_props_title="title" :info_props_nickName="nickName" :info_props_avatar="avatar"></personal-info>
        </div>
      </div>
      <div class="blankBox"></div>
      <!-- 我的表现（徽章）-->
        <div class="badgeBox">
          <p class="titleBox">我的表现</p>
          <div style="margin-left: 24rpx;">
            <div v-for="item in badge" :key="index" style="margin: 8rpx 8rpx;width: 100rpx;height: 100rpx;float: left">
              <img style="width: 100rpx;height: 100rpx;" :src="item"/>
            </div>
          </div>
        </div>
        <!--<div style="border-top-style: solid;border-width: 2rpx;border-color: #c7c7c7;"></div>-->
      <!-- 营长点评-->
      <div class="comBox">
        <div><p class="titleBox">营长点评</p></div>
        <div>
          <div class="pic"><img src="http://pics.ctripfair.com/cute2.jpg" class="picImg"/></div>
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
          title: '江小白',
          nickName: 'sanzhixiong',
          avatar: 'http://pics.ctripfair.com/cute3.jpg',
          badge: ['http://pics.ctripfair.com/badge1.jpg', 'http://pics.ctripfair.com/badge2.jpg', 'http://pics.ctripfair.com/badge3.jpg',
            'http://pics.ctripfair.com/badge1.jpg', 'http://pics.ctripfair.com/badge2.jpg', 'http://pics.ctripfair.com/badge3.jpg',
            'http://pics.ctripfair.com/badge1.jpg', 'http://pics.ctripfair.com/badge2.jpg', 'http://pics.ctripfair.com/badge3.jpg',
            'http://pics.ctripfair.com/badge1.jpg', 'http://pics.ctripfair.com/badge2.jpg', 'http://pics.ctripfair.com/badge3.jpg',
            'http://pics.ctripfair.com/badge1.jpg', 'http://pics.ctripfair.com/badge2.jpg', 'http://pics.ctripfair.com/badge3.jpg'],
          evaluate: [
            {
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .mine{
    width: 100%;
    height: 260rpx;
  }
  .blankBox{
    width: 750rpx;
    height: 20rpx;
    background: #EFEFF4;
  }
  .badgeBox{
    width: 750rpx;
    margin-top: 40rpx;
    background: #FFFFFF;
    box-shadow: 0 0 0 0 #CECED0;
    /*border-bottom:1rpx solid #999999;*/
  }
  .titleBox{
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #000000;
    letter-spacing: 0.29px;
    line-height: 41px;
    margin-left: 32rpx;
  }
  .comBox{
    width: 750rpx;
    min-height: 300rpx;
    background: #FFFFFF;
    box-shadow: 0 0 0 0 #CECED0;
    margin-top: 40rpx;
    display: inline-block;
  }
  .pic{
    width: 100rpx;
    height: 100rpx;
    margin-left: 32rpx;
    margin-top: 40rpx;
    float: left;
  }
  .picImg{
    border-radius: 50%;
    width: 100rpx;
    height: 100rpx;
  }
</style>
