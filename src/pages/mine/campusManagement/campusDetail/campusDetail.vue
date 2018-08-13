<!--营员详细信息页面（谁关注我）-->
<template>
  <div>
    <!--营员信息-->
    <div class="mine">
      <div class="nickName">
        <p style="font-size: 52rpx;border: 0">{{name}}</p>
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
        <input type="text" :value="detailInfo.name" class="infoInt"/>
      </div>
      <div class="detailInfo">
        <div class="title">证件类型</div>
        <input type="text" :value="detailInfo.IDType" class="infoInt"/>
      </div>
      <div class="detailInfo">
        <div class="title">证件号码</div>
        <input type="text" :value="detailInfo.IDCode" class="infoInt"/>
      </div>
      <div class="detailInfo">
        <div class="title">家庭角色</div>
        <input type="text" :value="detailInfo.familyRole" class="infoInt"/>
      </div>
      <div class="detailInfo">
        <div class="title">手机号码</div>
        <input type="text" :value="detailInfo.phone" class="infoInt"/>
      </div>
    </div>
    <button type="button" class="saveBtn">保存</button>
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
        detailInfo: {
          name: '将小小',
          IDType: '身份证',
          IDCode: '123456789123456789',
          familyRole: '女儿',
          phone: '12312345678'
        },
        member: [
          {name: '江爸爸'},
          {name: '江妈妈'},
          {name: '江爷爷'}
        ],
        url: './attention2Me/main',
        name: '',
        id: '',
        campusSrc: 'http://pics.ctripfair.com/icon_more_def.png',
        campusInfoVisible: false
      }
    },
    mounted: function () {
      let _this = this
      // 注意mpvue的路径参数获取方式
      _this.name = _this.$root.$mp.query.name
      _this.id = _this.$root.$mp.query.id
    },
    methods: {
      share: function () {
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
    height: 80rpx;
    border-bottom: 1rpx solid #c7c7c7;
    float: right;
  }
  .title{
    width: 150rpx;
    height: 80rpx;
    float: left;
    font-size: 34rpx;
    color: #7b7b7b;
    letter-spacing: 0;
    line-height: 80rpx;
  }
  .infoInt{
    width: 500rpx;
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
</style>
