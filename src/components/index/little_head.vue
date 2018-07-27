// 首页的小标题组件
<template>
  <div class="page" style="display: flex">
    <div style="width: 80%;">
      <p style="font-size: 66rpx;font-weight: bold">{{headTitle}}</p>
    </div>
    <div style="width: 20%;float: right;">
      <p style="font-size: small;color: aqua;margin-top: 32rpx" @click="navigateToDetail">查看全部</p>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['headTitle'],
      data () {
        return {
        }
      },
      methods: {
        navigateToDetail: function (e) {
          wx.navigateTo({
            url: '/pages/index/proDetail/main?headTitle=' + e.headTitle + '&imgs= ' + e.imgs
          })
        }
      }
    }
</script>

<style scoped>

</style>
