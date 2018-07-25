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
              <input name="name" v-model="username" style="height: 80rpx;" type="text" placeholder="请输入姓名"/>
            </div>
          </div>
          <div class="element">
              <p class="fonts">密码：&nbsp</p>
            <div>
              <input name="phone" v-model="password" style="height: 80rpx;" type="password" placeholder="请输入新密码"/>
            </div>
          </div>
          <div class="element">
            <p class="fonts">确认密码：&nbsp</p>
            <div>
              <input name="phone" v-model="password_confirm" style="height: 80rpx;" type="password" placeholder="请再次输入密码"/>
            </div>
          </div>
          <div style="position: relative;top: 400rpx;">
            <button form-type="submit" class="submit">提&nbsp&nbsp交</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    addSubmit: function () {
      console.log('用户名：' + this.username + '密码：' + this.password + '确认密码：' + this.password_confirm)
      if (this.password === this.password_confirm) {
        wx.switchTab({
          url: '/pages/index/main',
          success: function () {
            console.log('注册成功')
            wx.showTabBar()
          }
        })
      } else {
        wx.showModal({
          title: '错误',
          content: '两次输入密码不一致',
          confirmText: '确定',
          showCancel: false,
          // cancelText: '取消',
          success: function (res) {
            console.log(res)
            if (res.confirm) {
              console.log('确定')
            }
          }
        })
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
</style>
