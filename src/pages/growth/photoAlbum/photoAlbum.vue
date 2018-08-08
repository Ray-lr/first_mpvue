<template>
    <div>
      <!--营员信息（头）-->
      <div class="mine">
        <div>
          <personal-info></personal-info>
        </div>
      </div>
      <!-- 照片墙-->
      <div class="picInfo" v-for="item in photoInfo" :key="index">
        <!--<div class="photos" >-->
          <div style="position:relative;">
            <div v-for="(items, inner) in item.imgs" :key="inner" style="float: left;width: 200rpx; height: 200rpx;margin: 8rpx">
              <img class="pic" :src="items"/>
            </div>
            <!--showAll = !showAll-->
            <div v-if="item.imgs.length>9" class="showMore">全部</div>
          </div>
          <div style="position:relative;top: 20rpx;left: 20rpx; display: inline-block;">
            <p class="campInfo">{{item.titles}}</p>
            <p class="campDate">{{item.startDate}}-{{item.endDate}}</p>
          </div>
      </div>
      <!--</div>-->
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
              endDate: '2018.01.12',
              showAll: false
            },
            {
              imgs: ['http://pics.ctripfair.com/island1.jpg', 'http://pics.ctripfair.com/island10.jpg', 'http://pics.ctripfair.com/island11.jpg',
                'http://pics.ctripfair.com/island12.jpg', 'http://pics.ctripfair.com/island13.jpeg', 'http://pics.ctripfair.com/island5.jpg',
                'http://pics.ctripfair.com/island15.jpg', 'http://pics.ctripfair.com/island2.jpg', 'http://pics.ctripfair.com/island3.jpg'],
              titles: '三只熊厦门鼓浪屿夏令营',
              startDate: '2018.02.02',
              endDate: '2018.02.12',
              showAll: false
            },
            {
              imgs: ['http://pics.ctripfair.com/island1.jpg', 'http://pics.ctripfair.com/island10.jpg', 'http://pics.ctripfair.com/island11.jpg',
                'http://pics.ctripfair.com/island12.jpg', 'http://pics.ctripfair.com/island13.jpeg', 'http://pics.ctripfair.com/island5.jpg'],
              titles: '三只熊西塘古镇夏令营',
              startDate: '2018.01.02',
              endDate: '2018.01.12',
              showAll: false
            }
          ]
        }
      },
      mounted: function () {
      },
      computed: {
        // photoInfos: function () {
        //   let showList = []
        //   // 当数据不需要完全显示的时候
        //   for (let j = 0; j < this.photoInfo.length; j++) {
        //     if (this.photoInfo[j].imgs.length > 9) {
        //       if (this.photoInfo[j].showAll === false) {
        //         this.photoInfo[j].imgs = this.photoInfo[j].imgs.slice(0, 9)
        //         // this.photoInfo[j].imgs2 = this.photoInfo[j].imgs.slice(10, this.photoInfo[j].imgs.length)
        //         showList.push(this.photoInfo[j])
        //       } else {
        //         showList.push(this.photoInfo[j])
        //       }
        //     } else {
        //       showList.push(this.photoInfo[j])
        //     }
        //   }
        //   return showList
        // },
        // word: function () {
        //   if (this.photoInfo.showAll === false) {
        //     return '全部'
        //   } else {
        //     return '收起'
        //   }
        // }
      },
      methods: {
        changeFoldState: function () {
          this.photoInfo.showAll = !this.photoInfo.showAll
        }
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
    min-height: 500rpx;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0 20rpx 40rpx 0 rgba(0,0,0,0.12);
    border-radius: 16rpx;
    margin: 30rpx 32rpx 40rpx 32rpx;
    padding: 12rpx 20rpx 30rpx 12rpx;
    position : relative;
    /*display: inline-block;*/
  }
  .pic{
    width: 200rpx;
    height: 200rpx;
    /*margin: 4rpx;*/
  }
  .campInfo{
    width: 494rpx;
    height: 36rpx;
    /*margin: 64rpx 152rpx 16rpx 12rpx;*/
    font-family: PingFangSC-Medium;
    font-size: 36rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 36rpx;
    /*position: relative;*/
    /*top: 30rpx;*/
  }
  .campDate{
    width: 526rpx;
    height: 36rpx;
    /*margin: 0 120rpx 0 12rpx;*/
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 36rpx;
    margin-top: 20rpx;
    margin-bottom: 30rpx;
    /*position: relative;*/
    /*top: 60rpx;*/
  }
  .showMore{
    width: 96rpx;
    height: 48rpx;
    background: #000000;
    background-color: rgba(0,0,0,0.5);
    float: right;
    position: relative;
    right: 46rpx;
    top: -58rpx;
    color: #ffffff;
    font-size: medium;
    text-align: center;
    line-height: 40rpx;
  }
</style>
