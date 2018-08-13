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
      <div style="padding-top: 10rpx;"><input type="text" v-model="name" class="nameBox" placeholder="请输入姓名"/></div>
    </div>
    <div class="infoBox">
      <p class="infoTitle">手机号</p>
      <div style="padding-top: 10rpx"><input type="text" v-model="phoneNum" class="nameBox" placeholder="请输入手机号"/></div>
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
        <input name="idNum" v-model="idNum" class="nameBox" type="idcard" placeholder="请输入证件号码"/>
      </div>
    </div>
    <div class="infoBox">
      <p class="infoTitle">家庭角色</p>
      <div style="padding-top: 10rpx"><input type="text" v-model="role" class="nameBox" placeholder="请输入家庭角色"/></div>
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
        name: ''
      }
    },
    created () {
    },
    methods: {
      IDChange: function (e) {
        let _this = this
        _this.idType = this.array_id[e.mp.detail.value]
        _this.indexPicker = e.mp.detail.value
      },
      saveBtn: function () {
        wx.showModal({
          title: '保存成功!',
          content: '',
          confirmText: '确定',
          showCancel: false
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
    height: 90rpx;
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
</style>
