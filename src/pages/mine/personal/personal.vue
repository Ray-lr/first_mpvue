<!--个人信息页面-->
<template>
  <div>
    <!--营员信息（头）-->
    <div>
      <personal-info></personal-info>
    </div>
    <div class="blankBox"></div>
    <div>
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
      <div class="infoBox" style="height: 90rpx;">
        <p class="infoTitle">性别</p>
        <div style="float: right;margin-right:20rpx;">
          <picker @change="sexChange" :value="indexSex" :range="sexType">
            <p class="infoTitle">{{sex}}
              <img style="width: 32rpx;height: 26rpx;margin-left: 20rpx;" src="http://pics.ctripfair.com/ico_more2.png"/>
            </p>
          </picker>
        </div>
      </div>
      <div class="infoBox">
        <p class="infoTitle">体重</p>
        <div style="padding-top: 10rpx">
          <input type="number" v-model="userWeight" class="nameBox" @blur="checkWeight" placeholder="请输入体重kg"/>
          <p class="nameError" v-if="checkedWeight!==''">{{checkedWeight}}</p>
          <p class="checked" v-else>体重验证通过！</p>
        </div>
      </div>
      <div style="width: 750rpx;"><button type="button" class="saveBtn" @click="saveBtn">保存</button></div>
    </div>
    <div style="width: 750rpx;margin-top: 140rpx;">
      <p class="detailBox">修改密码</p>
      <div class="infoBox">
        <p class="infoTitle">原来密码</p>
        <div style="padding-top: 10rpx;">
          <input type="text" v-model="olderPwd" class="nameBox" @blur="checkOlderPwd" placeholder="请输入原来密码"/>
          <p class="nameError" v-if="checkedOlderPwd!==''">{{checkedOlderPwd}}</p>
          <p class="checked" v-else>旧密码输入正确！</p>
        </div>
      </div>
      <div class="infoBox">
        <p class="infoTitle">新密码</p>
        <div style="padding-top: 10rpx;">
          <input type="text" v-model="pwd" class="nameBox" @blur="checkPwd" placeholder="请输入新密码"/>
          <p class="nameError" v-if="checkedPwd!==''">{{checkedPwd}}</p>
          <p class="checked" v-else>新密码认证通过！</p>
        </div>
      </div>
      <div class="infoBox">
        <p class="infoTitle">确认新密码</p>
        <div style="padding-top: 10rpx;">
          <input type="text" v-model="pwdComfirm" class="nameBox" @blur="checkPwdCom" placeholder="请输入新密码"/>
          <p class="nameError" v-if="checkedNewPwd!==''">{{checkedNewPwd}}</p>
          <p class="checked" v-else>新密码认证通过！</p>
        </div>
      </div>
      <div style="width: 750rpx;"><button type="button" class="saveBtn" style="width: 200rpx;" @click="savePwd">修改密码</button></div>
    </div>
  </div>
</template>

<script>
  import personalInfo from '@/components/personalInfo'
  import md5 from 'js-md5'
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
        name: '张三',
        checkedName: ' ',
        checkedPhone: ' ',
        checkIDReg: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
        checkedIDNum: ' ',
        checkedRole: ' ',
        sexType: ['女', '男'],
        indexSex: 0,
        sex: '女',
        userWeight: null,
        checkedWeight: ' ',
        pwd: '',
        checkedPwd: ' ',
        pwdComfirm: '',
        checkedNewPwd: ' ',
        md5Pwd: '',
        olderPwd: '',
        checkedOlderPwd: ' '
      }
    },
    created () {
    },
    mounted: function () {
      let _this = this
      console.log('用户ID：' + _this.$userId)
      _this.$request.post('/user/selectUserInfoByUsercode/' + _this.$userId, {}).then(data => {
        console.log(data.data)
        _this.name = data.data.userName
        _this.phoneNum = data.data.mobile
        _this.md5Pwd = data.data.password
        // _this.role = data.data.
      })
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
      sexChange: function (e) {
        let _this = this
        _this.sex = _this.sexType[e.mp.detail.value]
        _this.indexSex = e.mp.detail.value
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
      checkWeight: function () {
        let weightReg = /^[0-9]{2,3}$/
        let result = weightReg.test(this.userWeight)
        if (result) {
          this.checkedWeight = ''
        } else {
          this.checkedWeight = '请输入正确的体重！'
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
      checkPwd: function () {
        let pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        let result = pwdReg.test(this.pwd)
        if (result) {
          this.checkedPwd = ''
        } else {
          this.checkedPwd = '请输入6-16位字母数字组合的密码！'
        }
      },
      checkPwdCom: function () {
        let pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        let result = pwdReg.test(this.pwdComfirm)
        if (result) {
          if (this.pwd === this.pwdComfirm) {
            this.checkedNewPwd = ''
          } else {
            this.checkedNewPwd = '两次输入的密码不一致，请重新输入！'
          }
        } else {
          this.checkedNewPwd = '请输入6-16位字母数字组合的密码！'
        }
      },
      checkOlderPwd: function () {
        let olderPwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        let result = olderPwdReg.test(this.olderPwd)
        if (result) {
          let md5Older = md5(this.olderPwd)
          if (this.md5Pwd === md5Older) {
            this.checkedOlderPwd = ''
          } else {
            this.checkedOlderPwd = '您输入的密码不正确，请重新输入！'
          }
        } else {
          this.checkedOlderPwd = '请输入6-16位字母数字组合的密码！'
        }
      },
      saveBtn: function () {
        wx.showModal({
          content: '保存成功!',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      },
      savePwd: function () {
        // if (this.checkedOlderPwd === '' && this.checkedNewPwd === '' && this.checkedPwd === '') {
        //   this.$request.post('/user/updateUserPassword' + this.$userId, {
        //
        //   })
        // }
        wx.showModal({
          content: '修改密码成功!',
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
    text-align: right;
    margin-right: 50rpx;
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
  .detailBox{
    background: #eeeeee;
    height: 100rpx;
    font-family: PingFangSC-Medium;
    font-size: 44rpx;
    padding-left: 30rpx;
    letter-spacing: 0;
    line-height: 100rpx;
    border-bottom: 1rpx solid #c7c7c7;
  }
  .saveBtn{
    width: 160rpx;
    height: 80rpx;
    float: right;
    margin-right: 60rpx;
    margin-top: 30rpx;
    background: #00e3e3;
    font-family: PingFangSC-Medium;
    line-height: 80rpx;
    color: #ffffff;
    margin-bottom: 50rpx;
  }
</style>
