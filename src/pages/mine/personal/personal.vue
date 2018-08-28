<!--个人信息页面-->
<template>
  <div>
    <!--营员信息（头）-->
    <div>
      <personal-info></personal-info>
    </div>
    <div class="blankBox"></div>
    <div class="infoBox">
      <p class="infoTitle">姓名</p>
      <div style="padding-top: 10rpx;">
        <input type="text" v-model="name" class="nameBox" @blur="checkName" placeholder="请输入姓名"/>
        <p class="nameError" v-if="checkedName!==''">{{checkedName}}</p>
        <p class="checked" v-else>姓名认证通过！</p>
      </div>
    </div>
    <div class="infoBox">
      <p class="infoTitle">手机号</p>
      <div style="padding-top: 10rpx">
        <input type="text" v-model="phoneNum" class="nameBox" @blur="checkPhone" placeholder="请输入手机号"/>
        <p class="nameError" v-if="checkedPhone!==''">{{checkedPhone}}</p>
        <p class="checked" v-else>手机号验证通过！</p>
      </div>
    </div>
    <div class="infoBox">
      <div>
        <picker @change="IDChange" :value="indexPicker" :range="array_id">
          <p class="infoTitle">{{idType}}
            <img style="width: 32rpx;height: 26rpx" src="http://pics.ctripfair.com/ico_more2.png"/>
          </p>
        </picker>
      </div>
      <div style="padding-top: 10rpx">
        <input name="idNum" v-model="idNum" class="nameBox" @blur="checkID" type="idcard" placeholder="请输入证件号码"/>
        <p class="nameError" v-if="checkedIDNum!==''">{{checkedIDNum}}</p>
        <p class="checked" v-else>证件号验证通过！</p>
      </div>
    </div>
    <div class="infoBox">
      <p class="infoTitle">家庭角色</p>
      <div style="padding-top: 10rpx">
        <input type="text" v-model="role" class="nameBox" @blur="checkRole" placeholder="请输入家庭角色"/>
        <p class="nameError" v-if="checkedRole!==''">{{checkedRole}}</p>
        <p class="checked" v-else>家庭角色验证通过！</p>
      </div>
    </div>
    <!--保存个人信息按钮-->
    <div style="margin-top:auto;">
      <img class="reduceButton" @click="saveBtn" src="http://pics.ctripfair.com/save.png"/>
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
        idType: '身份证',
        array_id: ['身份证', '港澳台通行证', '护照', '军官证'],
        indexPicker: 0,
        idNum: '',
        role: '',
        phoneNum: '',
        name: '',
        checkedName: ' ',
        checkedPhone: ' ',
        checkIDReg: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
        checkedIDNum: ' ',
        checkedRole: ' '
      }
    },
    created () {
    },
    methods: {
      IDChange: function (e) {
        let _this = this
        _this.idType = this.array_id[e.mp.detail.value]
        _this.indexPicker = e.mp.detail.value
        switch (_this.indexPicker) {
          case 1:
            _this.checkIDReg = /(^[HMhm]{1}([0-9]{10}|[0-9]{8})$)|(^[0-9]{8}$)|(^[0-9]{10}$)/
            break
          case 2:
            _this.checkIDReg = /(^[a-zA-Z]{5,17}$)|(^[a-zA-Z0-9]{5,17}$)/
            break
          case 3:
            _this.checkIDReg = /^[a-zA-Z0-9]{7,21}$/
            break
        }
      },
      checkName: function () {
        let nameReg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
        let result = nameReg.test(this.name)
        if (result) {
          this.checkedName = ''
        } else {
          this.checkedName = '请输入正确的姓名!'
        }
        // console.log(this.checkedName)
      },
      checkPhone: function () {
        let phoneReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        let result = phoneReg.test(this.phoneNum)
        if (result) {
          this.checkedPhone = ''
        } else {
          this.checkedPhone = '请输入正确的手机号！'
        }
      },
      checkID: function () {
        let result = this.checkIDReg.test(this.idNum)
        if (result) {
          this.checkedIDNum = ''
        } else {
          this.checkedIDNum = '请输入正确的证件号码！'
        }
      },
      checkRole: function () {
        let roleReg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,10}$/
        let result = roleReg.test(this.role)
        if (result) {
          this.checkedRole = ''
        } else {
          this.checkedRole = '请输入正确的家庭角色！'
        }
      },
      saveBtn: function () {
        wx.vibrateShort()
        wx.showModal({
          content: '保存成功!',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .blankBox{
    width: 750rpx;
    height: 20rpx;
    background: #EFEFF4;
  }
  .infoBox{
    width: 750rpx;
    /*height: 90rpx;*/
    border-bottom: 1rpx solid #c7c7c7;
    padding: 10rpx;
  }
  .infoTitle{
    margin: 20rpx 30rpx 0rpx 30rpx;
    font-family:PingFangSC-Regular;
    font-size: 38rpx;
    color:#666666;
    letter-spacing:0;
    float:left;
  }
  .nameBox{
    height:80rpx;
    font-size: 32rpx;
  }
  .reduceButton{
    width: 120rpx;
    height: 120rpx;
    margin: 60rpx 314rpx;
  }
  .nameError{
    font-size: small;
    color: red;
    text-align: center;
  }
  .checked{
    font-size: small;
    color: green;
    text-align: center;
  }
</style>
