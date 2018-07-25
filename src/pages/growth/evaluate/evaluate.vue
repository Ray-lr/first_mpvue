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
        <div class="comBox">
          <p class="titleBox">我的表现</p>
          <div style="margin-left: 24rpx;">
            <div v-for="item in badge" :key="index" style="margin: 8rpx 8rpx;width: 100rpx;height: 100rpx;float: left">
              <img style="width: 100rpx;height: 100rpx;" :src="item"/>
            </div>
          </div>
        </div>
      <!-- 营长点评-->
      <div class="comBox">
        <p class="titleBox">营长点评</p>
        <div>
          <div class="pic"><img :src="majorAvatar" class="picImg"/></div>
          <div class="ringhtBox">
            <div class="majorName">{{majorName}}</div>
            <div class="evalContent">{{evalContent}}</div>
          </div>
        </div>
      </div>
      <!-- 精彩瞬间-->
      <div class="comBox">
        <p class="titleBox">精彩瞬间</p>
        <div class="outBox">
          <div class="wonderPic" v-for="item in wonderPic" :key="index">
            <img :src="item" style="width: 210rpx;height: 210rpx;"/>
          </div>
        </div>
      </div>
      <!-- 能力评估-->
      <div class="comBox">
        <p class="titleBox">能力评估</p>
        <div class="evalOutBox" v-for="items in evaluateAbility" :key="index">
            <div class="medalBox">
              <img :src="items.medal" style="width: 200rpx; height: 210rpx;"/>
              <p class="medalTitle">{{items.medalTitle}}</p>
          </div>
          <p class="evalTitle">{{items.evalTitle}}</p>
          <div v-for="(item, inner) in items.ability" :key="inner">
            <div style="display: flex;margin-top: 24rpx;">
              <div class="blank"></div>
              <div class="abilityTitle">{{item.abilityTitle}}</div>
            </div>
            <p class="abilityCont">{{item.abilityContent}}</p>
          </div>
          <p class="evalTitle">{{items.remarkMan}}评语：</p>
          <p class="remarkCont">{{evalContent}}</p>
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
            'http://pics.ctripfair.com/badge1.jpg', 'http://pics.ctripfair.com/badge2.jpg', 'http://pics.ctripfair.com/badge3.jpg'],
          majorAvatar: 'http://pics.ctripfair.com/cute2.jpg',
          majorName: '大兵',
          evalContent: '该小朋友活泼可爱，积极上进，能够很好团结其他小朋友，有一定的宣传组织能力和团队协作能力!',
          wonderPic: ['http://pics.ctripfair.com/island1.jpg', 'http://pics.ctripfair.com/island10.jpg', 'http://pics.ctripfair.com/island11.jpg',
            'http://pics.ctripfair.com/island12.jpg', 'http://pics.ctripfair.com/island13.jpeg', 'http://pics.ctripfair.com/island5.jpg',
            'http://pics.ctripfair.com/island15.jpg', 'http://pics.ctripfair.com/island2.jpg', 'http://pics.ctripfair.com/island3.jpg',
            'http://pics.ctripfair.com/island4.jpg'],
          evaluateAbility: [
            {
              medal: 'http://testpics.ctripfair.com/medal2.png',
              medalTitle: '分析与创造力',
              evalTitle: '营员在实践中体现的子能力：',
              ability: [
                {
                  abilityTitle: '定义、管理及应对复杂问题',
                  abilityContent: '子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明'
                },
                {
                  abilityTitle: '定义、管理及应对复杂问题',
                  abilityContent: '子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明'
                }
              ],
              remarkMan: '大兵队长'
            },
            {
              medal: 'http://testpics.ctripfair.com/medal2.png',
              medalTitle: '分析与创造力',
              evalTitle: '营员在实践中体现的子能力：',
              ability: [
                {
                  abilityTitle: '定义、管理及应对复杂问题',
                  abilityContent: '子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明'
                },
                {
                  abilityTitle: '定义、管理及应对复杂问题',
                  abilityContent: '子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明子能力说明'
                }
              ],
              remarkMan: '大兵队长'
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
  .comBox{
    width: 750rpx;
    margin-top: 40rpx;
    background: #FFFFFF;
    box-shadow: 0 0 0 0 #CECED0;
    display: inline-block;
    border-bottom:1rpx solid #c7c7c7;
    padding-bottom: 40rpx;
  }
  .titleBox{
    font-family: PingFangSC-Medium;
    font-size: 56rpx;
    color: #000000;
    letter-spacing: 0.58rpx;
    line-height: 82rpx;
    margin-left: 32rpx;
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
  .ringhtBox{
    width: 578rpx;
    float: right;
    position: relative;
    margin: 42rpx 0rpx 0rpx 20rpx;
  }
  .majorName{
    font-family: PingFangSC-Medium;
    font-size: 40rpx;
    color: #39476C;
    letter-spacing: 0.42rpx;
    line-height: 48rpx;
    width: 342rpx;
    height: 48rpx;
    text-align: left;
  }
  .evalContent{
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 40rpx;
    margin: 20rpx 32rpx 0rpx 0;
  }
  .wonderPic{
    width: 210rpx;
    height: 210rpx;
    margin: 8rpx;
    float: left;
  }
  .outBox{
    margin: 32rpx 36rpx 32rpx 36rpx;
  }
  .evalOutBox{
    width: 750rpx;
    background: #FFFFFF;
    margin-top: 30rpx;
    margin-bottom: 100rpx;
  }
  .medalBox{
    width: 750rpx;
    height: 258rpx;
    text-align: center;
  }
  .medalTitle{
    font-family: PingFangSC-Medium;
    font-size: 28rpx;
    color: #333333;
    letter-spacing: 0;
  }
  .evalTitle{
    font-family: PingFangSC-Semibold;
    font-size: 32rpx;
    color: #333333;
    letter-spacing: 0.42rpx;
    line-height: 48rpx;
    margin: 60rpx auto 24rpx 32rpx;
    font-weight: bold;
  }
  .blank{
    width: 24rpx;
    height: 24rpx;
    border-radius: 50%;
    background: #FFFFFF;
    border: 4rpx solid #BBBBBB;
    margin-left: 74rpx;
    float: left;
  }
  .abilityTitle{
    width: 486rpx;
    height: 40rpx;
    font-family: PingFangSC-Medium;
    font-size: 28rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 40rpx;
    float: right;
    margin-left: 20rpx;
    font-weight: bold;
  }
  .abilityCont{
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 36rpx;
    margin: 16rpx 32rpx auto 118rpx;
  }
  .remarkCont{
    margin: 24rpx auto auto 32rpx;
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 40rpx;
  }
</style>
