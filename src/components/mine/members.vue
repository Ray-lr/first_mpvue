<!--营员管理页面的每个营员-->
<template>
  <div>
    <div class="members" v-for="item in member" :key="index" @click="navigate2Details(item,index)">
      <p class="font">{{item.name}}</p>
      <img style="width: 15rpx;height: 26rpx;margin: 30rpx 26rpx" src="http://pics.ctripfair.com/Back%20Arrow@2x.png"/>
    </div>
  </div>
  <!--weui的list，但样式不太好看-->
  <!--<div>
    <div class="weui-cells__title">营员管理</div>
      <div class="weui-cells weui-cells_after-title">
        <div v-for="item in member">
          <div class="weui-cell">
          <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
            <div class="weui-cell__bd">{{item.name}}</div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </navigator>
          </div>
       </div>
  </div>
    </div>-->
</template>

<script>
    export default {
      props: ['members', 'url_props'],
      data () {
        return {
          member: [],
          url: ''
        }
      },
      created: function () {
        let _this = this
        _this.member = _this.members
        _this.url = _this.url_props
      },
      methods: {
        navigate2Details: function (item, index) {
          wx.navigateTo({
            url: this.url + '?name=' + item.name + '&id=' + index
          })
        }
      }
    }
</script>

<style scoped>
  .font{
    font-family: PingFangSC-Medium;
    font-size: 40rpx;
    color: #333333;
    letter-spacing: -0.8rpx;
    line-height: 50rpx;
    margin: 22rpx 0rpx;
    width: 600rpx;
  }
  .members{
    display: flex;
    border-bottom-style: solid;
    border-width: 2rpx 0rpx;
    border-color: #c7c7c7;
    float: right;
    width: 90%;
    height: 88rpx;
  }
</style>
