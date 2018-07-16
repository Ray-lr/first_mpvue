<!--我的订单页面-->
<template>
  <div>
    <div style="margin: 30rpx 28rpx">
      <order :info="info"></order>
    </div>
  </div>
</template>

<script>
  import order from '@/components/mine/order'
  export default {
    components: {
      order
    },
    data () {
      return {
        info: [
          {
            id: '101909989',
            status: '待支付',
            img: 'http://pics.ctripfair.com/beach.jpg',
            title: '马尔代夫安嘎嘎+萨芙利双岛游度蜜月旅行全包自由行',
            adultsNum: '2',
            childrenNum: '0',
            travelTime: '2018-7-2',
            orderTime: '2018-7-1'
          },
          {
            id: '101909988',
            status: '已付款',
            img: 'http://pics.ctripfair.com/sanyabeach.jpg',
            title: '三亚海景游全家旅行全包自由行',
            adultsNum: '2',
            childrenNum: '1',
            travelTime: '2018-6-20',
            orderTime: '2018-6-18'
          },
          {
            id: '101909987',
            status: '已付款',
            img: 'http://pics.ctripfair.com/hunan.png',
            title: '湖南水乡游闲情逸致旅行全包自由行',
            adultsNum: '2',
            childrenNum: '1',
            travelTime: '2018-6-2',
            orderTime: '2018-7-1'
          },
          {
            id: '101909986',
            status: '已付款',
            img: 'http://pics.ctripfair.com/wushanxiaosanxia.jpg',
            title: '巫山小三峡一周游闲情逸致旅行全包自由行',
            adultsNum: '2',
            childrenNum: '1',
            travelTime: '2018-5-25',
            orderTime: '2018-5-20'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .title{
    font-family: PingFangSC-Regular;
    font-size: 30px;
    color: #000000;
    letter-spacing: 0;
    line-height: 41px;
  }
</style>
