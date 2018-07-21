<!--营员添加页面-->
<template>
  <div>
    <!--账号个人信息-->
    <div>
      <personal-info></personal-info>
    </div>
    <div style="border-top-style: solid;border-width: 2rpx;border-color: #c7c7c7"></div>
    <!--表单-->
    <div>
      <form @submit.prevent="addSubmit($event)">
        <div class="element">
          <div>
            <p class="fonts">成员姓名&nbsp&nbsp</p>
          </div>
          <div>
            <input name="name" v-model="name" style="height: 80rpx;" type="text" placeholder="请输入成员姓名"/>
          </div>
        </div>
        <div class="element" style="border-style: solid;border-width: 2rpx 0;border-color: #c7c7c7">
          <div>
            <picker @change="IDChange" :value="indexPicker" :range="array_id">
              <p class="fonts">{{idType}}
                <img style="width: 32rpx;height: 26rpx" src="http://pics.ctripfair.com/ico_more2.png"/>&nbsp&nbsp
              </p>
            </picker>
          </div>
          <div>
            <input name="idNum" v-model="idNum" style="height: 80rpx;" type="idcard" placeholder="请输入证件号码"/>
          </div>
        </div>
        <div class="element">
          <picker @change="roleChange" :value="indexPicker" :range="array_role">
            <p class="fonts">{{role}}
              <img style="width: 32rpx;height: 26rpx" src="http://pics.ctripfair.com/ico_more2.png"/>&nbsp&nbsp
            </p>
          </picker>
          <div>
            <input name="phone" v-model="phone" style="height: 80rpx;" type="number" placeholder="请输入联系方式"/>
          </div>
        </div>
        <div>
          <button form-type="submit" class="addButton"></button>
        </div>
      </form>
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
        indexPicker: 0,
        array_role: ['儿子', '女儿'],
        array_id: ['身份证', '港澳台通行证', '护照', '军官证'],
        idType: '身份证',
        role: '家庭角色',
        name: '',
        idNum: '',
        phone: ''
      }
    },
    methods: {
      roleChange (e) {
        console.log('选中的值为：' + this.array_role[e.mp.detail.value])
        this.role = this.array_role[e.mp.detail.value]
      },
      IDChange (e) {
        this.idType = this.array_id[e.mp.detail.value]
        this.indexPicker = e.mp.detail.value
        console.log('选中的证件类型为：' + this.array_id[e.mp.detail.value])
      },
      addSubmit: function (event) {
        console.log('姓名：' + this.name + '身份证号：' + this.idNum + '手机号：' + this.phone)
      }
    }
  }
</script>

<style scoped>
  .element {
    height: 88 rpx;
    width: 686 rpx;
    margin: 0 32 rpx;
  }

  .fonts {
    font-family: PingFangSC-Regular;
    font-size: 46 rpx;
    color: #666666;
    letter-spacing: 0;
    float: left;
    margin-top: 12rpx;
  }
  .tips{
    font-family: PingFangSC-Medium;
    font-size: 48rpx;
    color: #c7c7c7;
    letter-spacing: 0.5rpx;
    line-height: 82rpx;
    height: 84rpx;
    text-align: center;
  }
  .addButton{
    width: 120rpx;
    height: 120rpx;
    margin: 60rpx 314rpx;
    background-image: url(http://pics.ctripfair.com/ico_add1.png);
  }
</style>
