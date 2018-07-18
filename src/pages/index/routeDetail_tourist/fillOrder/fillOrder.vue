<!--填写订单页面-->
<template>
  <div>
    {{order.title}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {
        title: ''
      }
    }
  },
  mounted: function () {
    let _this = this
    _this.order.title = _this.$root.$mp.query.title
  }
}
</script>

<style scoped>
.subtitle{
  font-family: PingFangSC-Medium;
  font-size: 40rpx;
  color: #333333;
  letter-spacing: 0;
  line-height: 36rpx;
}
</style>
