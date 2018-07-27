<template>
  <div style="background-image:url(http://pics.ctripfair.com/login_bg.png);width:750rpx;height:1334rpx;background-size: cover">
    <div>
      <!--表单-->
      <div>
        <form @submit.prevent="addSubmit($event)">
          <div class="element">
            <div>
              <p class="fonts">账号：&nbsp</p>
            </div>
            <div>
              <input name="name" v-model="username" @blur="checkUserName" style="height: 80rpx;" type="text" placeholder="请输入用户名"/>
              <p class="checkError" v-if="userNameCheck!==''">{{userNameCheck}}</p>
              <p class="checked" v-else>用户名可用</p>
            </div>
          </div>
          <div class="element">
              <p class="fonts">密码：&nbsp</p>
            <div>
              <input name="password" v-model="password" @blur="checkPassword" style="height: 80rpx;" type="password" placeholder="请输入新密码"/>
              <p class="checkError" v-if="passwordCheck!==''">{{passwordCheck}}</p>
              <p class="checked" v-else>密码可用</p>
            </div>
          </div>
          <div class="element">
            <p class="fonts">确认密码：&nbsp</p>
            <div>
              <input name="password_confirm" v-model="password_confirm" @blur="checkPasswordConfirm" style="height: 80rpx;" type="password" placeholder="请再次输入密码"/>
              <p class="checkError" v-if="password_confirmCheck!==''">{{password_confirmCheck}}</p>
              <p class="checked" v-else>确认密码校验通过</p>
            </div>
          </div>
          <div class="element">
            <p class="fonts">手机号：&nbsp</p>
            <div>
              <input name="phone" v-model="phone" @blur="checkPhone" style="height: 80rpx;" type="phone" placeholder="请输入手机号"/>
              <p class="checkError" v-if="phoneCheck!==''">{{phoneCheck}}</p>
              <p class="checked" v-else>手机号校验通过</p>
            </div>
          </div>
          <div style="position: relative;top: 400rpx;">
            <button form-type="submit" open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo" class="submit">提&nbsp&nbsp交</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import md5 from 'js-md5'
export default {
  data () {
    return {
      userNameCheck: ' ',
      username: '',
      passwordCheck: ' ',
      password: '',
      password_confirmCheck: ' ',
      password_confirm: '',
      openId: '',
      nickName: '',
      avatarUrl: '',
      phoneCheck: ' ',
      phone: ''
    }
  },
  mounted: function () {
    let _this = this
    wx.getStorage({
      key: 'openId',
      success (res) {
        _this.openId = res.data
      }
    })
    wx.getStorage({
      key: 'nickName',
      success (res) {
        _this.nickName = res.data.nickName
      }
    })
    wx.getStorage({
      key: 'avatarUrl',
      success (res) {
        _this.avatarUrl = res.data.avatarUrl
      }
    })
  },
  methods: {
    addSubmit: function () {
      if (this.userNameCheck === '' && this.passwordCheck === '' && this.password_confirmCheck === '' && this.phoneCheck === '') {
        let md5Password = md5(this.password)
        this.$request.post('/wira/register', {
          name: this.nickName,
          avatar: this.avatarUrl,
          openId: this.openId,
          loginCode: this.username,
          password: md5Password,
          mobile: this.phone
        }).then(data => {
          console.log('message' + data.message)
          console.log('datastring' + JSON.stringify(data))
          if (data.status === '200') {
            wx.setStorage({
              key: 'token',
              data: data.data.id,
              success () {
                console.log('注册后token存入storage成功！' + data.data.id)
              }
            })
            wx.showToast({
              title: '恭喜注册成功！',
              icon: 'success',
              duration: 2000
            })
            wx.switchTab({
              url: '/pages/index/main',
              success: function () {
                console.log('注册成功')
              }
            })
          } else {
            console.log('注册失败，错代码：' + data.status + data.message + data.data)
          }
        })
      } else {
        wx.showModal({
          title: '错误',
          content: '信息有误，请重新填写',
          confirmText: '确定',
          showCancel: false,
          // cancelText: '取消',
          success: function (res) {
            if (res.confirm) {
              console.log('确定')
            }
          }
        })
      }
    },
    // 检查用户名格式和是否重复
    checkUserName: function () {
      let userRex = /^[a-zA-Z0-9_-]{6,16}$/
      let result = userRex.test(this.username)
      if (!result) {
        this.userNameCheck = '账号不规范，请使用6-16位字母数字下划线组合'
      } else {
        this.$request.post('/user/queryExist', {value: this.username}).then(data => {
          console.log('后端查询账号是否已存在' + JSON.stringify(data))
          if (data.data === '1') {
            this.userNameCheck = '该用户名已存在，请更换'
          } else if (data.data === '0') {
            this.userNameCheck = ''
          }
        })
      }
    },
    // 检查密码格式
    checkPassword: function () {
      let passwordRex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
      let result = passwordRex.test(this.password)
      if (!result) {
        this.passwordCheck = '密码不符合规范，请使用6-16位字母数字组合'
      } else {
        this.passwordCheck = ''
      }
    },
    // 确认密码是否一致
    checkPasswordConfirm: function () {
      if (this.password_confirm === this.password) {
        this.password_confirmCheck = ''
      } else {
        this.password_confirmCheck = '校验失败，两次输入的密码不一致'
      }
    },
    // 检查手机号格式
    checkPhone: function () {
      let phoneRex = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
      let result = phoneRex.test(this.phone)
      if (!result) {
        this.phoneCheck = '手机号不符合规范'
      } else {
        this.phoneCheck = ''
      }
    }
  }
}
</script>

<style scoped>
  .element {
    width: 600rpx;
    height: 88rpx;
    background: rgba(255,255,255,0.40);
    border-radius: 8rpx;
    margin: 40rpx 76rpx;
    position: relative;
    top: 400rpx;
  }

  .fonts {
    font-family: PingFangSC-Regular;
    font-size: 46 rpx;
    color: #ffffff;
    letter-spacing: 0;
    float: left;
    margin-top: 12rpx;
    margin-left: 20rpx;
  }
  .submit{
    width: 300rpx;
    opacity: 0.9;
    background: rgba(255,255,255,0.20);
    border: 2rpx solid #FFFFFF;
    box-shadow: 0 2rpx 6rpx 0 rgba(88,88,88,0.28);
    border-radius: 8rpx;
  }
  .checked{
    font-size: small;
    font-weight: bold;
    color: green
  }
  .checkError{
    font-size: small;
    font-weight: bold;
    color: red
  }
</style>
