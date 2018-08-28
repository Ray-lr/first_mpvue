<!--营员详细信息页面（谁关注我）-->
<template>
  <div>
    <!--营员信息-->
    <div class="mine">
      <div class="nickName">
        <p style="font-size: 52rpx;border: 0">{{detailInfo.name}}</p>
      </div>
      <div>
        <img class="userinfo-avatar" src="http://pics.ctripfair.com/avatar.jpg" background-size="cover" />
      </div>
    </div>
    <div style="border-top-style: solid;border-width: 2rpx;border-color: #c7c7c7;"></div>
    <p class="detailBox">信息详情</p>
    <div>
      <div class="detailInfo">
        <div class="title">姓名</div>
        <input type="text" v-model="detailInfo.name"  @blur="checkName"  class="infoInt"/>
        <p class="checkError" v-if="nameCheck!==''">{{nameCheck}}</p>
        <p class="checked" v-else>姓名认证通过</p>
      </div>
      <div class="detailInfo">
        <div class="title">姓别</div>
        <picker @change="sexChange" :value="detailInfo.sex" :range="array_sex" style="padding-right: 20rpx" class="infoInt">
          <p style="height: 82rpx;padding-top: 14rpx">{{sex}}
            <img style="width: 32rpx;height: 26rpx" src="http://pics.ctripfair.com/ico_more2.png"/>&nbsp
          </p>
        </picker>
      </div>
      <div class="detailInfo">
        <div class="title">年龄</div>
        <input type="number" v-model="detailInfo.age" @blur="checkAge" class="infoInt"/>
        <p class="checkError" v-if="ageCheck!==''">{{ageCheck}}</p>
        <p class="checked" v-else>年龄认证通过</p>
      </div>
      <div class="detailInfo">
        <div class="title">证件类型</div>
        <picker @change="IDChange" :value="indexPickerId" :range="array_id" style="padding-right: 20rpx" class="infoInt">
          <p style="height: 82rpx;padding-top: 14rpx">{{idType}}
            <img style="width: 32rpx;height: 26rpx" src="http://pics.ctripfair.com/ico_more2.png"/>&nbsp
          </p>
        </picker>
      </div>
      <div class="detailInfo">
        <div class="title">证件号码</div>
        <input type="text" v-model="detailInfo.IDCode" @blur="checkID" class="infoInt"/>
        <p class="checkError" v-if="idNumCheck!==''">{{idNumCheck}}</p>
        <p class="checked" v-else>证件号码认证通过</p>
      </div>
      <div class="detailInfo">
        <div class="title">家庭角色</div>
        <input type="text" v-model="detailInfo.homeRole" @blur="checkHomeRole" class="infoInt"/>
        <p class="checkError" v-if="homeRoleCheck!==''">{{homeRoleCheck}}</p>
        <p class="checked" v-else>家庭角色认证通过</p>
      </div>
      <div class="detailInfo">
        <div class="title">手机号码</div>
        <input type="number" v-model="detailInfo.mobile" @blur="checkPhone" class="infoInt"/>
        <p class="checkError" v-if="mobileCheck!==''">{{mobileCheck}}</p>
        <p class="checked" v-else>手机号码认证通过</p>
      </div>
    </div>
    <button type="button" class="saveBtn" @click="updateWira">保存</button>
    <div @click="changeCampusList">
      <p class="detailBox" style="display: inline-block;width: 100%;margin-top: 50rpx;border-top: 1rpx solid #c7c7c7;">
        <img :src="campusSrc" class="srcIcon" />谁关注我</p>
    </div>
    <!--其他信息-->
    <div v-if="campusInfoVisible">
      <member :members="member" :url_props="url"></member>
    </div>
    <!--添加关注者按钮-->
    <div>
      <img class="addButton" @click="share" src="http://pics.ctripfair.com/ico_add1.png"/>
    </div>
  </div>
</template>

<script>
  import personalInfo from '@/components/personalInfo'
  import member from '@/components/mine/members'
  export default {
    components: {
      personalInfo,
      member
    },
    data () {
      return {
        // 身份证正则
        IDRex: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
        // 证件类型选择器
        array_id: ['身份证', '护照', '港澳台通行证', '军官证'],
        indexPickerId: 0,
        idType: '',
        // 性别选择器
        array_sex: ['女', '男'],
        sex: '',
        // 检查用户输入格式
        nameCheck: '',
        idNumCheck: '',
        ageCheck: '',
        homeRoleCheck: '',
        mobileCheck: '',
        // 营员信息
        detailInfo: {
          name: '',
          sex: '',
          age: '',
          IDType: '',
          IDCode: '',
          homeRole: '',
          mobile: '',
          avatar: '',
          createBy: ''
        },
        // 营员表和用户营员表的id
        wiraInfoId: '',
        wiraUserId: '',
        // 关注者
        member: [
          {name: '江爸爸'},
          {name: '江妈妈'},
          {name: '江爷爷'}
        ],
        url: './attention2Me/main',
        wiraId: '',
        campusSrc: 'http://pics.ctripfair.com/icon_more_def.png',
        campusInfoVisible: false
      }
    },
    mounted: function () {
      let _this = this
      // 重置表单验证
      _this.nameCheck = ''
      _this.ageCheck = ''
      _this.homeRoleCheck = ''
      _this.idNumCheck = ''
      _this.mobileCheck = ''
      // 注意mpvue的路径参数获取方式
      _this.detailInfo.name = _this.$root.$mp.query.name
      _this.wiraId = _this.$root.$mp.query.id
      _this.getWiraInfo()
    },
    methods: {
      getWiraInfo: function () {
        this.$request.post('/wira/getWira', {'userCode': this.$userId, 'wiraId': this.wiraId}).then(data => {
          console.log(data)
          if (data.status === '200' && data.data.wiraUserEntity !== '' && data.data.wiraInfoEntity !== '') {
            let wiraInfo = data.data.wiraInfoEntity
            let wiraUser = data.data.wiraUserEntity
            this.detailInfo.age = wiraInfo.age
            this.detailInfo.sex = wiraInfo.sex
            this.sex = this.array_sex[wiraInfo.sex]
            this.detailInfo.avatar = wiraInfo.avatar
            this.detailInfo.IDType = wiraInfo.certType
            this.idType = this.array_id[wiraInfo.certType - 1]
            this.detailInfo.IDCode = wiraInfo.certNum
            this.detailInfo.createBy = wiraInfo.createBy
            this.detailInfo.homeRole = wiraUser.homeRole
            this.detailInfo.mobile = wiraUser.mobile
            this.wiraInfoId = wiraInfo.id
            this.wiraUserId = wiraUser.id
          }
        })
      },
      updateWira: function () {
        wx.vibrateShort()
        if (this.nameCheck === '' && this.ageCheck === '' && this.idNumCheck === '' && this.homeRoleCheck === '' && this.mobileCheck === '') {
          this.$request.post('/wira/updateWira', {
            'userCode': this.$userId,
            'wiraId': this.wiraId,
            'name': this.detailInfo.name,
            'age': this.detailInfo.age,
            'sex': this.detailInfo.sex,
            'homeRole': this.detailInfo.homeRole,
            'certType': this.detailInfo.IDType,
            'certNum': this.detailInfo.IDCode,
            'mobile': this.detailInfo.mobile,
            'wiraUserId': this.wiraUserId,
            'wiraInfoId': this.wiraInfoId
          }).then(data => {
            console.log(data)
            if (data.status === '200' && data.data.wiraUserEntity !== '') {
              wx.showModal({
                title: '提示',
                content: '营员信息修改成功！',
                confirmText: '好',
                showCancel: false,
                success: function (res) {
                  if (res.confirm) {
                    wx.navigateTo({
                      url: '../main'
                    })
                  }
                }
              })
            }
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '请输入正确的个人信息',
            confirmText: '好',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log(res)
              }
            }
          })
        }
      },
      checkName () {
        let nameRex = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
        let result = nameRex.test(this.detailInfo.name)
        if (result) {
          this.nameCheck = ''
        } else {
          this.nameCheck = '请输入正确的姓名'
        }
      },
      checkHomeRole () {
        let homeRoleRex = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
        let result = homeRoleRex.test(this.detailInfo.homeRole)
        if (result) {
          this.homeRoleCheck = ''
        } else {
          this.homeRoleCheck = '请输入正确家庭角色'
        }
      },
      checkAge () {
        let nameRex = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/
        let result = nameRex.test(this.detailInfo.age)
        if (result) {
          this.ageCheck = ''
        } else {
          this.ageCheck = '请输入正确的年龄'
        }
      },
      checkID () {
        let result = this.IDRex.test(this.detailInfo.IDCode)
        if (result) {
          this.idNumCheck = ''
        } else {
          this.idNumCheck = '请输入正确的证件号码'
        }
      },
      checkPhone () {
        let nameRex = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        let result = nameRex.test(this.detailInfo.mobile)
        if (result) {
          this.mobileCheck = ''
        } else {
          this.mobileCheck = '请输入正确的手机号码'
        }
      },
      sexChange (e) {
        this.detailInfo.sex = parseInt(e.mp.detail.value)
        this.sex = this.array_sex[this.detailInfo.sex]
      },
      IDChange (e) {
        this.indexPickerId = parseInt(e.mp.detail.value)
        this.idType = this.array_id[this.indexPickerId]
        switch (this.idType) {
          case '港澳台通行证':
            this.IDRex = /(^[HMhm]{1}([0-9]{10}|[0-9]{8})$)|(^[0-9]{8}$)|(^[0-9]{10}$)/
            break
          case '护照':
            this.IDRex = /(^[a-zA-Z]{5,17}$)|(^[a-zA-Z0-9]{5,17}$)/
            break
          case '军官证':
            this.IDRex = /^[a-zA-Z0-9]{7,21}$/
            break
          case '身份证':
            this.IDRex = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
        }
        this.checkID()
        console.log('选中的证件类型为：' + this.array_id[this.indexPickerId])
        console.log(this.indexPickerId + 1)
      },
      share: function () {
        wx.vibrateShort()
        wx.showModal({
          title: '分享营员',
          content: '确定要分享该营员吗？',
          confirmText: '确定',
          cancelText: '取消',
          success: function (res) {
            console.log(res)
            if (res.confirm) {
              console.log('确定')
            } else {
              console.log('取消')
            }
          }
        })
      },
      changeCampusList: function () {
        let _this = this
        _this.campusInfoVisible = !_this.campusInfoVisible
        _this.campusSrc = _this.campusSrc === ('http://pics.ctripfair.com/icon_more_def.png') ? ('http://pics.ctripfair.com/icon_more_pre.png') : ('http://pics.ctripfair.com/icon_more_def.png')
      }
    }
  }
</script>

<style scoped>
  .mine{
    width: 100%;
    height: 170rpx;
    display: flex;
  }
  .nickName{
    width: 60%;
    height: 82rpx;
    margin: 30rpx;
  }
.addButton{
  width: 120rpx;
  height: 120rpx;
  margin: 60rpx 314rpx;
}
.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
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
  .detailInfo{
    font-family: PingFangSC-Medium;
    width: 95%;
    border-bottom: 1rpx solid #c7c7c7;
    float: right;
  }
  .title{
    width: 21%;
    height: 80rpx;
    float: left;
    font-size: 34rpx;
    color: #7b7b7b;
    letter-spacing: 0;
    line-height: 80rpx;
  }
  .infoInt{
    width: 73.386%;
    height: 80rpx;
    float: right;
    font-size: 34rpx;
    color: #4f4f4f;
    text-align: right;
    padding-right: 40rpx;
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
  }
  .srcIcon{
    width: 46rpx;
    height: 36rpx;
    float: right;
    margin-right:70rpx;
    margin-top:30rpx;
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
