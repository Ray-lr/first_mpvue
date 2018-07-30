<!--主页-->
<template>
  <div class="container">
    <div class="page">
      <!--城市选择-->
      <div style="width: 20%;float: left;align-items: center;">
      <picker style="width: 20%;margin: 8px 8px" mode="region" :value="region" @change="CityChange">
        <p style="color: darkgray;font-size: 12px;width: 60px">{{city}}<img style="color: darkgray;width: 8px;height: 8px;" src="http://pics.ctripfair.com/Back%20Arrow.png"></p>
      </picker>
      </div>
      <!--搜索框-->
      <div class="weui-search-bar" style="margin-right:20rpx ">
        <div class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
            <input type="text" class="weui-search-bar__input" placeholder="搜索" v-model="inputVal" :focus="inputShowed" @input="inputTyping" />
            <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
              <icon type="clear" size="15"></icon>
            </div>
          </div>
          <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
            <icon class="weui-icon-search" type="search" size="14"></icon>
            <div class="weui-search-bar__text">搜索</div>
          </label>
        </div>
        <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">取消</div>
      </div>
      <!--搜索结果展示-->
      <div class="weui-cells searchbar-result" v-if="inputVal.length > 0">
        <navigator url="" class="weui-cell" hover-class="weui-cell_active">
          <div class="weui-cell__bd">
            <div>实时搜索文本</div>
          </div>
        </navigator>
        <navigator url="" class="weui-cell" hover-class="weui-cell_active">
          <div class="weui-cell__bd">
            <div>实时搜索文本</div>
          </div>
        </navigator>
      </div>
    </div>
    <!--滑块-->
    <div >
    <slide></slide>
    </div>
    <!--小标题1-->
    <div class="littleHead">
    <little-head headTitle="周末周边"></little-head>
    </div>
    <!--图文1-->
    <div>
    <simple :imgs="imgs_weekend"></simple>
    </div>
    <!--小标题2-->
    <div class="littleHead">
      <little-head headTitle="综合成长"></little-head>
    </div>
    <!--图文2-->
    <div>
      <simple :imgs="imgs_grown"></simple>
    </div>
    <!--小标题3-->
    <div class="littleHead">
      <little-head headTitle="国际课堂"></little-head>
    </div>
    <!--图文3-->
    <div>
      <simple :imgs="imgs_international"></simple>
    </div>
    <!--小标题4-->
    <div class="littleHead">
      <little-head headTitle="营地教育"></little-head>
    </div>
    <!--图文4-->
    <div>
      <simple :imgs="imgs_education"></simple>
    </div>
  </div>
</template>

<script>
import slide from '@/components/slide'
import littleHead from '@/components/index/little_head'
import simple from '@/components/index/simple'
export default {
  components: {
    slide,
    littleHead,
    simple
  },
  data () {
    return {
      // 子主题图片url
      imgs_weekend: [
        {url: 'http://pics.ctripfair.com/weekend1.png',
          title: '天津|野三坡三天两晚夏令营',
          way: '8-12岁 儿童独自参团',
          price: '1000'},
        {url: 'http://pics.ctripfair.com/weekend2.png',
          title: '天津|野三坡夏令营',
          way: '8-12岁 儿童独自参团',
          price: '2000'},
        {url: 'http://pics.ctripfair.com/grownup2.png',
          title: '北京|故宫三日游',
          way: '5-12岁 家长带领参团',
          price: '3000'}
      ],
      imgs_grown: [
        {url: 'http://pics.ctripfair.com/grownup1.png',
          title: '北京|北海公园三天',
          way: '6-15岁 老师带队',
          price: '800'},
        {url: 'http://pics.ctripfair.com/grownup2.png',
          title: '北京|长城七日游',
          way: '8-16岁 家长跟随',
          price: '1888'},
        {url: 'http://pics.ctripfair.com/weekend2.png',
          title: '泰安|泰山五日游',
          way: '7-15岁 家长陪同',
          price: '2888'}
      ],
      imgs_international: [
        {url: 'http://pics.ctripfair.com/international1.png',
          title: '泰国|曼谷七日游',
          way: '10-18岁 家长陪同',
          price: '8888'},
        {url: 'http://pics.ctripfair.com/international2.png',
          title: '云南|大理九日游',
          way: '9-17岁 家长陪同',
          price: '6888'},
        {url: 'http://pics.ctripfair.com/weekend1.png',
          title: '天津|天津野三坡夏令营五日游',
          way: '8-12岁 家长跟随',
          price: '1500'}
      ],
      imgs_education: [
        {url: 'http://pics.ctripfair.com/weekend1.png',
          title: '天津|野三坡三天两晚夏令营',
          way: '8-12岁 儿童独自参团',
          price: '1000'},
        {url: 'http://pics.ctripfair.com/weekend2.png',
          title: '天津|野三坡夏令营',
          way: '8-12岁 儿童独自参团',
          price: '2000'},
        {url: 'http://pics.ctripfair.com/grownup2.png',
          title: '北京|故宫三日游',
          way: '5-12岁 家长带领参团',
          price: '3000'}
      ],
      // 搜索框属性
      inputShowed: false,
      inputVal: '',
      // 城市选择
      region: ['广东省', '广州市', '海珠区'],
      city: '城市选择'
    }
  },
  mounted: function () {
    let _this = this
    wx.getStorage({
      key: 'token',
      success: function (res) {
        console.log('查询token成功：' + res.data)
        _this.$request.post('/route/getRouteListByLib', {proType: 'TRAVELWILL_TYPE'}).then(data => {
          console.log(data)
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
        wx.login({
          success: function (resLogin) {
            if (resLogin.code) {
              console.log('登录成功' + resLogin.code)
              _this.$request.post('/wira/wxlogin', {code: resLogin.code}).then(data => {
                console.log('后端传回openId' + data.data.openId)
                // 将openId存入storage
                wx.setStorage({
                  key: 'openId',
                  data: data.data.openId,
                  success () {
                    console.log('openId存储成功')
                  }
                })
                // 在后端查数据库是否有token，没有就弹框跳注册
                if (!data.data.token) {
                  wx.showModal({
                    title: '提示',
                    content: '检测到您是第一次进入我们小程序，请先注册以方便使用',
                    cancelText: '再看看',
                    confirmText: '好去注册',
                    success: function (res) {
                      if (res.confirm) {
                        wx.navigateTo({
                          url: './authorize/main'
                        })
                      }
                    }
                  })
                } else {
                // 后端已有token并传回，需要放入storage
                  wx.setStorage({
                    key: 'token',
                    data: data.data.token,
                    success () {
                      console.log('storage存放token成功:' + data.data.token)
                    }
                  })
                }
              })
            }
          }
        })
      }
    })
  },
  onShow: function () {
  },
  methods: {
    // 搜索框方法
    showInput () {
      this.inputShowed = true
    },
    hideInput () {
      this.inputVal = ''
      this.inputShowed = false
    },
    clearInput () {
      this.inputVal = ''
    },
    inputTyping (e) {
      console.log(e)
      // 注意取值方式e.mp.detail.value
      this.inputVal = e.mp.detail.value
    },
    CityChange (e) {
      // 城市选择精确到市，数组第二个
      this.city = e.mp.detail.value[1]
      console.log('选中的城市为：' + e.mp.detail.value)
    },
    bindViewTap () {
      // 微信接口，查看登录日志
      const url = '../logs/main'
      wx.navigateTo({url})
    },
    // 微信api，获取地理位置
    getLocation () {
      wx.getLocation({
        // 返回可以用于wx.openLocation的经纬度
        type: 'gcj02',
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28,
            success: function (res) {
              this.location.name = res.name
              this.location.address = res.address
              console.log(res)
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },
  created: function () {
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    /*display: flex;*/
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    box-sizing: border-box;
  }
  .page{
    width: 100%;
    height: 10%;
  }
  .littleHead{
    margin: 5% 2% 2% 3%;
  }
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .searchbar-result {
    margin-top: 0;
    font-size: 28rpx;
  }
  .searchbar-result:before {
    display: none;
  }
  .weui-cell {
    padding: 24rpx 30rpx 24rpx 70rpx;
  }

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 30rpx;
}

.form-control {
  display: block;
  padding: 0 24rpx;
  margin-bottom: 10rpx;
  border: 2rpx solid #ccc;
}

.counter {
  display: inline-block;
  margin: 20rpx auto;
  padding: 10rpx 20rpx;
  color: blue;
  border: 2rpx solid blue;
}
</style>
