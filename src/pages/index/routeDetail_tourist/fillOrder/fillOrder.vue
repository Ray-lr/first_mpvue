<!--填写订单页面-->
<template>
  <div>
    <div>
      <p class="subtitle">{{order.title}}</p>
      <p class="introduction">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
    </div>
    <!--<mt-popup-->
      <!--v-model="popupVisible"-->
      <!--position="middle"-->
      <!--popup-transition="popup-fade">-->
      <!--<calendar v-if="detail.proLeaveTime && pic" ref="calendar" @getday="getday" :ptype="pic" :leavetime="detail.proLeaveTime" :price="pic" ></calendar>-->
    <!--</mt-popup>-->
    <!--滚动条-->
    <div class="scroll">
      <div class="item" v-for="item in price" :key="index">
        <div style="display: flex">
          <p style="margin: 44rpx 0rpx 4rpx 42rpx">￥</p>
          <p class="price">{{item}}</p>
        </div>
        <div @click="gettrueday">
          <p class="time">{{teamDate}}</p>
        </div>
      </div>
    </div>
    <div class="divide"></div>
    <div class="outOrder">
      <p class="orderNum">预定人数</p>
      <div class="innerItem">
        <div class="manLeft">成人</div>
        <div class="manRight">
          <button type="button" class="decBtn" style="border-right: 1rpx solid #c7c7c7;" @click="decreaseBtn(0)">-</button>
          <input id="manNum" type="number" disabled="true" min="0" max="10" v-model="roomNum.manNum" class="numInp"/>
          <button type="button" class=" decBtn addBtn" style="border-left:1rpx solid #c7c7c7;" @click="addBtn(0)">+</button>
        </div>
      </div>
      <div class="innerItem">
        <div class="manLeft">儿童</div>
        <div class="manRight">
          <button type="button" class="decBtn" style="border-right: 1rpx solid #c7c7c7;" @click="decreaseBtn(1)">-</button>
          <input id="childNum" type="number" disabled="true" min="0" v-model="roomNum.childNum" class="numInp"/>
          <button type="button" class=" decBtn addBtn" style="border-left:1rpx solid #c7c7c7;" @click="addBtn(1)">+</button>
        </div>
      </div>
    </div>
    <div class="campersInfo">
      <ul>
        <li>
          <div class="weui-flex js-category" @click="changeCamList">
            <div class="weui-flex-item" >选择营员（多选）</div>
            <div  style="padding-right: 40rpx"><img :src="campersSrc" class="srcIcon" /></div>
          </div>
          <div class="page" v-if="campersVisible">
            <checkbox-group @change="checkboxChange">
              <label class="weui-cell weui-check__label" v-for="item in campers" :key="index">
                <checkbox class="weui-check" :value="item.value" :checked="item.checked" />
                <div class="weui-cell__bd">
                  <div style="width: 250rpx;display: flex;">
                    <p class="camperName">{{item.name}}</p>
                    <p class="camperOlder">({{item.older}})</p>
                  </div>
                </div>
                <div class="weui-cell__hd weui-check__hd_in-checkbox" v-if="item.checked">
                  <!--<icon class="weui-icon-checkbox_circle" type="circle" size="23" v-if="!item.checked"></icon>-->
                  <!--<icon class="weui-icon-checkbox_success" type="success" size="23" v-if="item.checked"></icon>-->
                  <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon>
                </div>
              </label>
            </checkbox-group>
          </div>
        </li>
      </ul>
    </div>
    <div class="outOrder">
      <p class="orderNum">预定房间</p>
      <div class="innerItem">
        <div class="manLeft">双标</div>
        <div class="manRight">
          <button type="button" class="decBtn" style="border-right: 1rpx solid #c7c7c7;" @click="decreaseBtn(2)">-</button>
          <input id="doubleRoom" type="number" disabled="true" min="0" :value="roomNum.doubleRoom" class="numInp"/>
          <button type="button" class=" decBtn addBtn" style="border-left:1rpx solid #c7c7c7;" @click="addBtn(2)">+</button>
        </div>
      </div>
      <div class="innerItem">
        <div class="manLeft">大床</div>
        <div class="manRight">
          <button type="button" class="decBtn" style="border-right: 1rpx solid #c7c7c7;" @click="decreaseBtn(3)">-</button>
          <input id="bigRoom" type="number" disabled="true" min="0" :value="roomNum.bigRoom" class="numInp"/>
          <button type="button" class=" decBtn addBtn" style="border-left:1rpx solid #c7c7c7;" @click="addBtn(3)">+</button>
        </div>
      </div>
      <div class="innerItem">
        <div class="manLeft">三标</div>
        <div class="manRight">
          <button type="button" class="decBtn" style="border-right: 1rpx solid #c7c7c7;" @click="decreaseBtn(4)">-</button>
          <input id="threeRoom" type="number" disabled="true" min="0" :value="roomNum.threeRoom" class="numInp"/>
          <button type="button" class=" decBtn addBtn" style="border-left:1rpx solid #c7c7c7;" @click="addBtn(4)">+</button>
        </div>
      </div>
      <div class="innerItem">
        <div class="manLeft">家庭房</div>
        <div class="manRight">
          <button type="button" class="decBtn" style="border-right: 1rpx solid #c7c7c7;" @click="decreaseBtn(5)">-</button>
          <input id="familyRoom" type="number" disabled="true" min="0" :value="roomNum.familyRoom" class="numInp"/>
          <button type="button" class=" decBtn addBtn" style="border-left:1rpx solid #c7c7c7;" @click="addBtn(5)">+</button>
        </div>
      </div>
    </div>
    <div class="campersInfo">
      <ul>
        <li>
          <div class="weui-flex js-category" @click="changeHotelList">
            <div class="weui-flex-item" >酒店类型</div>
            <div style="padding-right: 40rpx" id="srcIcon"><img :src="hotelSrc" class="srcIcon"/></div>
          </div>
          <div class="page" v-if="hotelVisible">
            <radio-group @change="changeHotel">
              <label class="weui-cell weui-check__label" v-for="item in hotelType" :key="index" v-model="selectRadio">
                <radio class="weui-check" :value="item.value" :checked="item.checked"/>
                <div class="weui-cell__bd">
                  <p class="camperName">{{item.type}}</p>
                </div>
                <div class="weui-cell__hd weui-check__hd_in-checkbox" v-if="item.checked">
                  <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon>
                </div>
              </label>
            </radio-group>
          </div>
        </li>
      </ul>
    </div>
    <div class="campersInfo1">
      <ul>
        <li>
          <div class="weui-flex js-category" @click="changeGatherList">
            <div class="weui-flex-item" >集合时间地点</div>
            <div style="padding-right: 40rpx" id="srcIcon"><img :src="gatherSrc" class="srcIcon" /></div>
          </div>
          <div class="page" v-if="gatherPlaceVisible">
            <radio-group @change="changeGatherPlace">
              <label class="weui-cell weui-check__label" v-for="item in gatherPlace" :key="index" v-model="selectValue">
                <radio class="weui-check" :value="item.value" :checked="item.checked" />
                <div class="weui-cell__bd">
                  <div class="gather">
                    <p class="gathTime">{{item.gathTime}}&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                    <p class="gathTime">{{item.gathPlace}}</p>
                  </div>
                </div>
                <div class="weui-cell__hd weui-check__hd_in-checkbox" v-if="item.checked">
                  <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon>
                </div>
              </label>
            </radio-group>
          </div>
        </li>
      </ul>
    </div>
    <div class="outBtn">
      <div class="totalPrice">
        <div class="priceOut">总价：￥<div class="priceInner">{{changeMoney}}</div></div>
      </div>
     <button class="alipay" @click="alipay">立即支付</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {
        title: ''
      },
      roomNum: {
        manNum: 0,
        childNum: 0,
        doubleRoom: 0,
        bigRoom: 0,
        threeRoom: 0,
        familyRoom: 0
      },
      price: [5000, 6000, 8888, 6666],
      prices: {
        manPrice: 5000,
        childPrice: 300,
        hotelPrice: {
          thrStarDoub: 199,
          thrStarBig: 168,
          thrStarThree: 259,
          thrStarFamily: 299,
          fouStarDoub: 229,
          fouStarBig: 239,
          fouStarThree: 299,
          fouStarFamily: 349,
          fivStarDoub: 259,
          fivStarBig: 278,
          fivStarThree: 339,
          fivStarFamily: 359
        }
      },
      campers: [
        {name: '江小白', older: '儿童', value: '0', checked: false},
        {name: '江爸爸', older: '成人', value: '1', checked: false},
        {name: '江妈妈', older: '成人', value: '2', checked: false}
      ],
      hotelType: [
        {type: '三星级酒店', value: 'a', checked: false},
        {type: '四星级酒店', value: 'b', checked: false},
        {type: '五星级酒店', value: 'c', checked: false}
      ],
      gatherPlace: [
        {gathPlace: '天津滨海国际机场T2航站楼总服务台接待室', gathTime: '06:30', value: 'A', checked: false},
        {gathPlace: '天津滨海国际机场T2航站楼总服务台接待室', gathTime: '07:30', value: 'B', checked: false},
        {gathPlace: '天津滨海国际机场T2航站楼总服务台接待室', gathTime: '08:30', value: 'C', checked: false}
      ],
      detail: {
        proLeaveTime: null
      },
      pic: null,
      campersSrc: 'http://pics.ctripfair.com/icon_more_def.png',
      hotelSrc: 'http://pics.ctripfair.com/icon_more_def.png',
      gatherSrc: 'http://pics.ctripfair.com/icon_more_def.png',
      type: false,
      // totalPrice: 0,
      campersVisible: false,
      gatherPlaceVisible: false,
      hotelVisible: false,
      selectValue: '',
      selectRadio: '',
      popupVisible: false,
      teamDate: '2018-08-08'
    }
  },
  mounted: function () {
    let _this = this
    _this.order.title = _this.$root.$mp.query.title
  },
  computed: {
    changeMoney: function () {
      let _this = this
      let totalPrice = 0
      let double, bigBed, threeBed, family, orderPrice
      let man = _this.prices.manPrice * _this.roomNum.manNum
      let child = _this.prices.childPrice * _this.roomNum.childNum
      orderPrice = man + child
      totalPrice += orderPrice
      switch (_this.selectRadio) {
        case 'a':
          double = _this.prices.hotelPrice.thrStarDoub * _this.roomNum.doubleRoom
          bigBed = _this.prices.hotelPrice.thrStarBig * _this.roomNum.bigRoom
          threeBed = _this.prices.hotelPrice.thrStarThree * _this.roomNum.threeRoom
          family = _this.prices.hotelPrice.thrStarFamily * _this.roomNum.familyRoom
          totalPrice = orderPrice + double + bigBed + threeBed + family
          break
        case 'b':
          double = _this.prices.hotelPrice.fouStarDoub * _this.roomNum.doubleRoom
          bigBed = _this.prices.hotelPrice.fouStarBig * _this.roomNum.bigRoom
          threeBed = _this.prices.hotelPrice.fouStarThree * _this.roomNum.threeRoom
          family = _this.prices.hotelPrice.fouStarFamily * _this.roomNum.familyRoom
          totalPrice = orderPrice + double + bigBed + threeBed + family
          break
        case 'c':
          double = _this.prices.hotelPrice.fivStarDoub * _this.roomNum.doubleRoom
          bigBed = _this.prices.hotelPrice.fivStarBig * _this.roomNum.bigRoom
          threeBed = _this.prices.hotelPrice.fivStarThree * _this.roomNum.threeRoom
          family = _this.prices.hotelPrice.fivStarFamily * _this.roomNum.familyRoom
          totalPrice = orderPrice + double + bigBed + threeBed + family
          break
      }
      return totalPrice
    }
  },
  methods: {
    getday: function (v) {
      if (this.popupVisible) {
        this.teamDate = v
        // this.getProMoney()
        this.popupVisible = false
      }
    },
    gettrueday: function () {
      this.popupVisible = true
    },
    checkboxChange: function (e) {
      // console.log('checkbox发生change事件，携带value值为：' + e.mp.detail.value)
      let campers = this.campers
      let values = e.mp.detail.value
      for (let i = 0; i < campers.length; ++i) {
        campers[i].checked = false
        for (let j = 0; j < values.length; ++j) {
          if (campers[i].value === values[j]) {
            campers[i].checked = true
          }
        }
      }
      this.campers = campers
    },
    changeHotel: function (e) {
      let hotelType = this.hotelType
      for (let i = 0; i < hotelType.length; i++) {
        hotelType[i].checked = hotelType[i].value === e.mp.detail.value
        if (hotelType[i].checked) {
          this.selectRadio = hotelType[i].value
        }
      }
      this.hotelType = hotelType
    },
    changeGatherPlace: function (e) {
      let gatherPlace = this.gatherPlace
      for (let i = 0; i < gatherPlace.length; i++) {
        gatherPlace[i].checked = gatherPlace[i].value === e.mp.detail.value
        if (gatherPlace[i].checked) {
          this.selectValue = gatherPlace[i].value
        }
      }
      this.gatherPlace = gatherPlace
    },
    changeCamList: function () {
      let _this = this
      _this.campersVisible = !_this.campersVisible
      _this.campersSrc = _this.campersSrc === ('http://pics.ctripfair.com/icon_more_def.png') ? ('http://pics.ctripfair.com/icon_more_pre.png') : ('http://pics.ctripfair.com/icon_more_def.png')
    },
    changeHotelList: function () {
      let _this = this
      _this.hotelVisible = !_this.hotelVisible
      _this.hotelSrc = _this.hotelSrc === ('http://pics.ctripfair.com/icon_more_def.png') ? ('http://pics.ctripfair.com/icon_more_pre.png') : ('http://pics.ctripfair.com/icon_more_def.png')
    },
    changeGatherList: function () {
      let _this = this
      _this.gatherPlaceVisible = !_this.gatherPlaceVisible
      _this.gatherSrc = _this.gatherSrc === ('http://pics.ctripfair.com/icon_more_def.png') ? ('http://pics.ctripfair.com/icon_more_pre.png') : ('http://pics.ctripfair.com/icon_more_def.png')
    },
    decreaseBtn: function (e) {
      let _this = this
      switch (e) {
        case 0:
          wx.createSelectorQuery().select('#manNum').fields({
            properties: ['value']
          }).exec(function (res) {
            let ret = parseInt(res[0].value)
            if (ret === 0) {
              _this.roomNum.manNum = 0
            } else {
              _this.roomNum.manNum = ret - 1
            }
          })
          break
        case 1:
          wx.createSelectorQuery().select('#childNum').fields({
            properties: ['value']
          }).exec(function (res) {
            let ret = parseInt(res[0].value)
            if (ret === 0) {
              _this.roomNum.childNum = 0
            } else {
              _this.roomNum.childNum = ret - 1
            }
          })
          break
        case 2:
          wx.createSelectorQuery().select('#doubleRoom').fields({
            properties: ['value']
          }).exec(function (res) {
            let ret = parseInt(res[0].value)
            if (ret === 0) {
              _this.roomNum.doubleRoom = 0
            } else {
              _this.roomNum.doubleRoom = ret - 1
            }
          })
          break
        case 3:
          wx.createSelectorQuery().select('#bigRoom').fields({
            properties: ['value']
          }).exec(function (res) {
            let ret = parseInt(res[0].value)
            if (ret === 0) {
              _this.roomNum.bigRoom = 0
            } else {
              _this.roomNum.bigRoom = ret - 1
            }
          })
          break
        case 4:
          wx.createSelectorQuery().select('#threeRoom').fields({
            properties: ['value']
          }).exec(function (res) {
            let ret = parseInt(res[0].value)
            if (ret === 0) {
              _this.roomNum.threeRoom = 0
            } else {
              _this.roomNum.threeRoom = ret - 1
            }
          })
          break
        case 5:
          wx.createSelectorQuery().select('#familyRoom').fields({
            properties: ['value']
          }).exec(function (res) {
            let ret = parseInt(res[0].value)
            if (ret === 0) {
              _this.roomNum.familyRoom = 0
            } else {
              _this.roomNum.familyRoom = ret - 1
            }
          })
          break
      }
    },
    addBtn: function (e) {
      let _this = this
      switch (e) {
        case 0:
          wx.createSelectorQuery().select('#manNum').fields({
            properties: ['value']
          }).exec(function (res) {
            res.value = parseInt(res[0].value) + 1
            _this.roomNum.manNum = res.value
          })
          break
        case 1:
          wx.createSelectorQuery().select('#childNum').fields({
            properties: ['value']
          }).exec(function (res) {
            res.value = parseInt(res[0].value) + 1
            _this.roomNum.childNum = res.value
          })
          break
        case 2:
          wx.createSelectorQuery().select('#doubleRoom').fields({
            properties: ['value']
          }).exec(function (res) {
            res.value = parseInt(res[0].value) + 1
            _this.roomNum.doubleRoom = res.value
          })
          break
        case 3:
          wx.createSelectorQuery().select('#bigRoom').fields({
            properties: ['value']
          }).exec(function (res) {
            res.value = parseInt(res[0].value) + 1
            _this.roomNum.bigRoom = res.value
          })
          break
        case 4:
          wx.createSelectorQuery().select('#threeRoom').fields({
            properties: ['value']
          }).exec(function (res) {
            res.value = parseInt(res[0].value) + 1
            _this.roomNum.threeRoom = res.value
          })
          break
        case 5:
          wx.createSelectorQuery().select('#familyRoom').fields({
            properties: ['value']
          }).exec(function (res) {
            res.value = parseInt(res[0].value) + 1
            _this.roomNum.familyRoom = res.value
          })
          break
      }
    },
    alipay: function () {
      console.log('立即支付')
    }
  }
}
</script>

<style scoped>
.subtitle{
  font-family: PingFangSC-Medium;
  font-size: 40rpx;
  color: #333333;
  letter-spacing: 0;
  line-height: 36rpx;
  margin: 30rpx 52rpx;
}
  .introduction{
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 36rpx;
    margin: 30rpx 52rpx;
  }
  .scroll{
    height: 250rpx;
    overflow-x: scroll;
  /* 内容会被裁剪，会以滚动条显示 */
    overflow-y: hidden;  /* 超出内容不可见 */
    white-space: nowrap;  /* 不换行 */
  /* 文本不会换行，会在同一行上继续，直到遇到<br>为止 */
}
  .scroll .item{
    display:inline-block;
    box-sizing: border-box;
    width:260rpx;
    height:160rpx;
    background: #FFFFFF;
    border:2rpx solid #FD7067;
    box-shadow: 0 8rpx 24rpx 0 rgba(0,0,0,0.12);
    border-radius: 16rpx;
    margin: 40rpx 20rpx;
  }
  .scroll .item .price{
    font-family: PingFangSC-Medium;
    font-size: 60rpx;
    color: #FD7067;
    letter-spacing: 0;
    line-height: 64rpx;
    margin: 28rpx 40rpx 6rpx 6rpx;
  }
  .scroll .item .time{
    font-family: PingFangSC-Regular;
    font-size: 24rpx;
    color: #000000;
    letter-spacing: -0.4rpx;
    margin-left: 50rpx;
    margin-bottom: 28rpx;
  }
  .divide{
    background: #EFEFF4;
    height: 20rpx;
  }
  .outOrder{
    width: 686rpx;
    /*height: 320rpx;*/
    background: #FFFFFF;
    box-shadow: 0 10rpx 36rpx 0 rgba(0,0,0,0.12);
    border-radius: 16rpx;
    margin: 40rpx 32rpx;
    padding-top: 10rpx;
    padding-bottom: 20rpx;
  }
  .orderNum{
    width: 494rpx;
    height: 36rpx;
    font-family: PingFangSC-Medium;
    font-size: 40rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 36rpx;
    margin: 28rpx auto auto 28rpx;
  }
  .manLeft{
    width: 100rpx;
    height: 36rpx;
    font-family: PingFangSC-Regular;
    font-size: 32rpx;
    color: #666666;
    letter-spacing: 0;
    line-height: 36rpx;
    margin-top: 22rpx;
    float: left;
  }
  .innerItem{
    height: 80rpx;
    font-family: PingFangSC-Medium;
    letter-spacing: 0;
    line-height: 36rpx;
    background-color: #ffffff;
    border-top: 1rpx solid #c7c7c7;
    border-bottom: 1rpx solid #c7c7c7;
    margin: 30rpx;
    vertical-align: middle;
    padding-left: 20rpx;
    padding-right: 20rpx;
  }
  .manRight{
    width: 280rpx;
    height: 50rpx;
    float: right;
    border-radius: 10rpx;
    border: 1rpx solid #c7c7c7;
    margin-top: 15rpx;
    display: flex;
    padding: auto 0rpx;
  }
  .decBtn{
    width:71rpx;
    height: 50rpx;
    line-height: 36rpx;
    color: #999999;
    float: left;
    background-color: #efeff4;
    /*text-align: center;*/
    /*font-size: 32rpx;*/
    padding-top: 7rpx;
    padding-left:23rpx;
  }
  .addBtn{
    float: right;
  }
  .numInp{
    width: 138rpx;
    height: 50rpx;
    text-align: center;
    font-size: 36rpx;
    font-family: PingFangSC-Medium;
    color: #666666;
    letter-spacing: 0;
    line-height: 36rpx;
  }
  .campersInfo{
    width: 686rpx;
    background: #FFFFFF;
    box-shadow: 0 10rpx 36rpx 0 rgba(0,0,0,0.12);
    border-radius: 16rpx;
    margin: auto 32rpx 20rpx 32rpx;
    padding-top: 10rpx;
    padding-bottom: 30rpx;
  }
  .campersInfo1{
    width: 686rpx;
    background: #FFFFFF;
    box-shadow: 0 10rpx 36rpx 0 rgba(0,0,0,0.12);
    border-radius: 16rpx;
    margin: 40rpx 32rpx 120rpx 32rpx;
    padding-top: 10rpx;
    padding-bottom: 30rpx;
  }
  .weui-flex {
    font-family: PingFangSC-Medium;
    font-size: 40rpx;
    color: #333333;
    letter-spacing: 0;
    line-height: 36rpx;
    margin: 28rpx auto 28rpx 20rpx;
  }
  .weui-flex-item{
    -webkit-flex: 1 1 0;
    flex: 1 1 0;
    -webkit-box-flex: 1;
    display: block;
    margin: 0 10rpx
  }
  .camperName{
    width: 150rpx;
    height: 44rpx;
    font-family: PingFangSC-Semibold;
    font-size: 32rpx;
    color: #000000;
    letter-spacing: -0.82rpx;
    line-height: 44rpx;
  }
  .camperOlder{
    width: 100rpx;
    height: 40rpx;
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #999999;
    letter-spacing: -0.82rpx;
  }
  .srcIcon{
    width: 46rpx;
    height: 36rpx;
    float: right;
    margin-left: 20rpx;
  }
  .gathTime{

    font-family: PingFangSC-Regular;
    font-size: 32rpx;
    color: #000000;
  }
  .gather{
    width: 550rpx;
    letter-spacing: -0.82rpx;
    line-height: 44rpx;
    display: flex;
  }
  .totalPrice{
    width: 376rpx;
    height: 98rpx;
    background: #FFFFFF;
    display: flex;
    float: left;
    /*padding: 16rpx 64rpx;*/
  }
  .priceInner{
    width: 100rpx;
    height: 44rpx;
    font-family: PingFangSC-Medium;
    font-size: 48rpx;
    color: #23C8DA;
    letter-spacing: 0.34rpx;
    line-height: 44rpx;
    margin-top: 6rpx;
  }
  .priceOut{
    width: 234rpx;
    height: 66rpx;
    font-family: PingFangSC-Regular;
    font-size: 32rpx;
    color: #333333;
    letter-spacing: 0.38rpx;
    display: flex;
    margin-left: 64rpx;
    margin-top: 16rpx;

  }
  .alipay{
    width: 375rpx;
    height: 98rpx;
    background-image: linear-gradient(-180deg, #68F2FA 0%, #23C8DA 82%);
    float: right;
    font-family: PingFangSC-Medium;
    font-size: 36rpx;
    color: #FFFFFF;
    letter-spacing: 0.44rpx;
  }
  .outBtn{
    width: 750rpx;
    height: 98rpx;
    bottom: 0;
    position: fixed;
  }
</style>
