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
    <div>
    <slide></slide>
    </div>
    <div v-for="(item,index) in info" :key="index">
      <div class="littleHead">
        <little-head :headTitle="headTitle[index].dict_label"></little-head>
      </div>
      <!--图文1-->
      <div>
        <simple :imgs="item"></simple>
      </div>
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
      // 对应数据库的产品类型（跟团游，自驾游等）
      headTitle: [
        {dict_label: ''},
        {dict_label: ''},
        {dict_label: ''},
        {dict_label: ''},
        {dict_label: ''}
      ],
      oneInfo: {
        id: '',
        url: '',
        title: '',
        introduction: '',
        price: ''
      },
      // 子主题属性
      info: [
        [
          {
            id: '',
            url: '',
            title: '',
            introduction: '',
            price: ''
          }
        ],
        [
          {
            id: '',
            url: '',
            title: '',
            introduction: '',
            price: ''
          }
        ],
        [
          {
            id: '',
            url: '',
            title: '',
            introduction: '',
            price: ''
          }
        ],
        [
          {
            id: '',
            url: '',
            title: '',
            introduction: '',
            price: ''
          }
        ],
        [
          {
            id: '',
            url: '',
            title: '',
            introduction: '',
            price: ''
          }
        ]
      ],
      // 搜索框属性
      inputShowed: false,
      inputVal: '',
      // 城市选择
      region: ['广东省', '广州市', '海珠区'],
      city: '城市选择'
    }
  },
  onShow: function () {
    let _this = this
    wx.getStorage({
      key: 'token',
      success: function (res) {
        console.log('查询token成功：' + res.data)
        if (_this.headTitle[0].dict_label === '') {
          _this.selectProduction()
        }
        // console.log(_this.info)
      },
      fail: function (res) {
        console.log(res.errMsg)
        wx.login({
          success: function (resLogin) {
            if (resLogin.code) {
              console.log('登录成功' + resLogin.code)
              wx.request({
                url: 'https://demo.ctripfair.com/wap/wira/wxlogin',
                data: {code: resLogin.code},
                method: 'post',
                success (data) {
                  // 将openId存入storage
                  wx.setStorage({
                    key: 'openId',
                    data: data.data.data.openId,
                    success () {
                      console.log('openId存储成功：' + data.data.data.openId)
                    }
                  })
                  if (!data.data.data.token) {
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
                      data: data.data.data.token,
                      success () {
                        console.log('storage存放token成功:' + data.data.data.token)
                      }
                    })
                    // 存储完token证明已注册过，查询产品
                    if (_this.headTitle[0].dict_label === '') {
                      _this.selectProduction()
                    }
                  }
                }
              })
            }
          }
        })
      }
    })
  },
  methods: {
    // 数据库查询产品
    selectProduction: function () {
      let _this = this
      // 查询出行方式（目前5个）
      _this.$request.post('/dict/getDictData', {dictType: 'TRAVELWILL_TYPE'}).then(dataTitle => {
        for (let i = 0; i < dataTitle.data.length; i++) {
          _this.headTitle[i] = dataTitle.data[i]
        }
        // 根据出行方式查询产品
        for (let i = 0; i < _this.headTitle.length; i++) {
          _this.$request.post('/route/getRouteListByLib', {proType: _this.headTitle[i].dict_label}).then(data => {
            // console.log(data)
            // 如果查到有数据，就将第一条赋值到数组info中的第一个对象
            if (data.data.data.length > 0) {
              _this.info[i][0].id = data.data.data[0].proNum
              _this.info[i][0].title = data.data.data[0].proName
              _this.info[i][0].url = data.data.data[0].proPublicityPic
              _this.info[i][0].introduction = data.data.data[0].proIntro
              let temp = data.data.data[0].priceList.split(':')[1]
              _this.info[i][0].price = temp.split(',')[0]
              temp = []
            }
            if (data.data.data.length > 1) {
              for (let j = 1; j < data.data.data.length; j++) {
                // 从第二个数据开始，先将处理好的对象赋给oneInfo，然后再将oneInfo push到数组info[i] 最后再将oneInfo置空 方便下次使用
                _this.oneInfo.id = data.data.data[j].proNum
                _this.oneInfo.title = data.data.data[j].proName
                _this.oneInfo.url = data.data.data[j].proPublicityPic
                _this.oneInfo.introduction = data.data.data[j].proIntro
                let temp = data.data.data[0].priceList.split(':')[1]
                _this.oneInfo.price = temp.split(',')[0]
                temp = []
                _this.info[i].push(_this.oneInfo)
                _this.oneInfo = {}
              }
            }
          })
        }
      })
    },
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
</style>
