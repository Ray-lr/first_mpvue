<template>
    <div>
      <!--营员信息（头）-->
      <div class="mine">
        <div style="height: 300rpx">
          <personal-info :info_props_title="title" :info_props_nickName="nickName" :info_props_avatar="avatar"></personal-info>
        </div>
      </div>
      <!-- 照片墙-->
      <div class="picInfo" v-for="item in photoInfo" :key="index">
        <div class="photos" >
          <div  v-for="(items, inner) in item.imgs" :key="inner" style="float: left;width: 210rpx; height: 210rpx;margin: 3rpx">
            <img class="pic" :src="items"/>
          </div>
        </div>
        <div class="campInfo">{{item.titles}}</div>
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
          title: '江小白',
          nickName: 'sanzhixiong',
          avatar: 'http://pics.ctripfair.com/cute1.jpeg',
          photoInfo: [
            {
              imgs: ['http://pics.ctripfair.com/island1.jpg', 'http://pics.ctripfair.com/island10.jpg', 'http://pics.ctripfair.com/island11.jpg',
                'http://pics.ctripfair.com/island12.jpg', 'http://pics.ctripfair.com/island13.jpeg', 'http://pics.ctripfair.com/island5.jpg',
                'http://pics.ctripfair.com/island15.jpg', 'http://pics.ctripfair.com/island2.jpg', 'http://pics.ctripfair.com/island3.jpg',
                'http://pics.ctripfair.com/island4.jpg'],
              titles: '三只熊海南三亚夏令营',
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
  .picInfo{
    width: 686rpx;
    height: 816rpx;
    background: #FFFFFF;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,0.12);
    border-radius: 8px;
    margin: 30rpx 32rpx 40rpx 32rpx;
    padding: 12rpx 20rpx 30rpx 12rpx;
    position : relative;
    display: inline-block;
  }
  .photos{
    width: 646rpx;
    height: 646rpx;
    /*display: flex;*/
  }
  .pic{
    width: 210rpx;
    height: 210rpx;
    margin: 4rpx;
  }
  .campInfo{
    width: 494rpx;
    height: 36rpx;
    margin: 32rpx 152rpx 16rpx 12rpx;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #333333;
    letter-spacing: 0;
    line-height: 18px;
    position: relative;
  }
  .campDate{
    width: 526rpx;
    height: 36rpx;
    margin: 0 120rpx 0 12rpx;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 18px;
    position: relative;
  }
</style>
