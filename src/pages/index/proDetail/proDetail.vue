<template>
    <div>
      <div>
        <view-all :imgs="imgs_grown"></view-all>
      </div>
    </div>
</template>

<script>
  import viewAll from '@/components/index/viewAll'
  export default {
    components: {
      viewAll
    },
    data () {
      return {
        // 子主题图片url
        imgs_weekend: [
          {
            headTitle: '周末周边',
            content: [
              {
                url: 'http://pics.ctripfair.com/weekend1.png',
                title: '天津|野三坡三天两晚夏令营',
                way: '8-12岁 儿童独自参团',
                price: '1000'
              },
              {
                url: 'http://pics.ctripfair.com/weekend2.png',
                title: '天津|野三坡夏令营',
                way: '8-12岁 儿童独自参团',
                price: '2000'
              },
              {
                url: 'http://pics.ctripfair.com/grownup2.png',
                title: '北京|故宫三日游',
                way: '5-12岁 家长带领参团',
                price: '3000'
              }
            ]
          }
        ],
        imgs_grown: [
          {
            headTitle: '综合成长',
            content: [
              {
                url: 'http://pics.ctripfair.com/grownup1.png',
                title: '北京|北海公园三天',
                way: '6-15岁 老师带队',
                price: '800'
              },
              {
                url: 'http://pics.ctripfair.com/grownup2.png',
                title: '北京|长城七日游',
                way: '8-16岁 家长跟随',
                price: '1888'
              },
              {
                url: 'http://pics.ctripfair.com/weekend2.png',
                title: '泰安|泰山五日游',
                way: '7-15岁 家长陪同',
                price: '2888'
              }
            ]
          }
        ],
        imgs_international: [
          {
            headTitle: '国际课堂',
            content: [
              {
                url: 'http://pics.ctripfair.com/international1.png',
                title: '泰国|曼谷七日游',
                way: '10-18岁 家长陪同',
                price: '8888'
              },
              {
                url: 'http://pics.ctripfair.com/international2.png',
                title: '云南|大理九日游',
                way: '9-17岁 家长陪同',
                price: '6888'
              },
              {
                url: 'http://pics.ctripfair.com/weekend1.png',
                title: '天津|天津野三坡夏令营五日游',
                way: '8-12岁 家长跟随',
                price: '1500'
              }
            ]
          }
        ],
        imgs_education: [
          {
            headTitle: '营地教育',
            content: [
              {
                url: 'http://pics.ctripfair.com/weekend1.png',
                title: '天津|野三坡三天两晚夏令营',
                way: '8-12岁 儿童独自参团',
                price: '1000'
              },
              {
                url: 'http://pics.ctripfair.com/weekend2.png',
                title: '天津|野三坡夏令营',
                way: '8-12岁 儿童独自参团',
                price: '2000'
              },
              {
                url: 'http://pics.ctripfair.com/grownup2.png',
                title: '北京|故宫三日游',
                way: '5-12岁 家长带领参团',
                price: '3000'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
