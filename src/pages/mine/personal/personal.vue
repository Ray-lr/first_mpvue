<!--个人信息页面-->
<template>
  <div>
    <!--营员信息（头）-->
    <div style="height: 300rpx">
      <personal-info :info_props_title="title" :info_props_nickName="nickName" :info_props_avatar="avatar"></personal-info>
    </div>
    <div class="blankBox"></div>
    <div class="infoBox"><p class="infoTitle">姓名</p></div>
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
        avatar: 'http://pics.ctripfair.com/cute1.jpeg'
      }
    },
    created () {
    },
    methods: {
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
    height: 100rpx;
  }
  .infoTitle{
    margin: 20rpx 30rpx 20rpx 30rpx;
  }
</style>
