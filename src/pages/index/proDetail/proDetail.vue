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
    props: ['headTitle'],
    data () {
      return {
        // 子主题图片url
        imgs_grown:
          {
            headTitle: '',
            content: [
              {
                id: '',
                url: '',
                title: '',
                introduction: '',
                price: ''
              }
            ]
          },
        oneInfo: {
          id: '',
          url: '',
          title: '',
          introduction: '',
          price: ''
        }
      }
    },
    onShow: function () {
      let _this = this
      this.imgs_grown.headTitle = ''
      let array = []
      array[0] = this.oneInfo
      this.imgs_grown.content = array
      _this.imgs_grown.headTitle = _this.$root.$mp.query.headTitle
      _this.moreProduction()
      // console.log('第一条数据：' + JSON.stringify(_this.imgs_grown))
    },
    methods: {
      moreProduction: function () {
        let _this = this
        _this.$request.post('/route/getRouteListByLib', {proType: _this.imgs_grown.headTitle}).then(data => {
          // console.log(data.data.data)
          if (data.data.data.length > 0) {
            _this.imgs_grown.content[0] = _this.oneInfo
            _this.imgs_grown.content[0].id = data.data.data[0].proNum
            _this.imgs_grown.content[0].url = data.data.data[0].proPublicityPic
            _this.imgs_grown.content[0].title = data.data.data[0].proName
            _this.imgs_grown.content[0].introduction = data.data.data[0].proIntro
            _this.imgs_grown.content[0].price = data.data.data[0].priceList.split(':')[1].split(',')[0]
            _this.oneInfo = {}
          }
          if (data.data.data.length > 1) {
            for (let i = 1; i < data.data.data.length; i++) {
              _this.oneInfo.id = data.data.data[i].proNum
              _this.oneInfo.url = data.data.data[i].proPublicityPic
              _this.oneInfo.title = data.data.data[i].proName
              _this.oneInfo.introduction = data.data.data[i].proIntro
              _this.oneInfo.price = data.data.data[i].priceList.split(',')[0].split(':')[1]
              _this.imgs_grown.content.push(_this.oneInfo)
              _this.oneInfo = {}
            }
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
