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
            <input name="name" v-model="name" @blur="checkName" style="height: 80rpx;" type="text" placeholder="请输入成员姓名"/>
            <p class="checkError" v-if="nameCheck!==''">{{nameCheck}}</p>
            <p class="checked" v-else>姓名认证通过</p>
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
            <input name="idNum" v-model="idNum" @blur="checkID" style="height: 80rpx;" type="idcard" placeholder="请输入证件号码"/>
            <p class="checkError" v-if="idNumCheck!==''">{{idNumCheck}}</p>
            <p class="checked" v-else>身份证号认证通过</p>
          </div>
        </div>
        <div class="element">
          <picker @change="roleChange" :value="indexPicker" :range="array_role">
            <p class="fonts">{{role}}
              <img style="width: 32rpx;height: 26rpx" src="http://pics.ctripfair.com/ico_more2.png"/>&nbsp&nbsp
            </p>
          </picker>
          <div>
            <input name="phone" v-model="phone" @blur="checkPhone" style="height: 80rpx;" type="number" placeholder="请输入联系方式"/>
            <p class="checkError" v-if="phoneCheck!==''">{{phoneCheck}}</p>
            <p class="checked" v-else>手机号认证通过</p>
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
        IDRex: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
        indexPicker: 0,
        array_role: ['儿子', '女儿'],
        array_id: ['身份证', '港澳台通行证', '护照', '军官证'],
        idType: '身份证',
        role: '家庭角色',
        name: '',
        nameCheck: ' ',
        idNum: '',
        idNumCheck: ' ',
        phone: '',
        phoneCheck: ' '
      }
    },
    methods: {
      checkName () {
        let nameRex = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
        let result = nameRex.test(this.name)
        if (result) {
          this.nameCheck = ''
        } else {
          this.nameCheck = '请输入正确的姓名'
        }
      },
      checkID () {
        let result = this.IDRex.test(this.idNum)
        if (result) {
          this.idNumCheck = ''
        } else {
          this.idNumCheck = '请输入正确的身份证号码'
        }
      },
      checkPhone () {
        let nameRex = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        let result = nameRex.test(this.phone)
        if (result) {
          this.phoneCheck = ''
        } else {
          this.phoneCheck = '请输入正确的手机号码'
        }
      },
      roleChange (e) {
        console.log('选中的值为：' + this.array_role[e.mp.detail.value])
        this.role = this.array_role[e.mp.detail.value]
      },
      IDChange (e) {
        this.idType = this.array_id[e.mp.detail.value]
        this.indexPicker = e.mp.detail.value
        switch (this.idType) {
          case '港澳台通行证':
            this.IDRex = /(^[HMhm]{1}([0-9]{10}|[0-9]{8})$)|(^[0-9]{8}$)|(^[0-9]{10}$)/
            break
          case '护照':
            this.IDRex = /(^[a-zA-Z]{5,17}$)|(^[a-zA-Z0-9]{5,17}$)/
            break
          case '军官证':
            this.IDRex = /^[a-zA-Z0-9]{7,21}$/
        }
        console.log('选中的证件类型为：' + this.array_id[e.mp.detail.value])
      },
      addSubmit: function (event) {
        if (this.nameCheck === '' && this.idNumCheck === '' && this.phoneCheck === '') {
          console.log('姓名：' + this.name + '身份证号：' + this.idNum + '手机号：' + this.phone)
        } else {
          wx.showModal({
            title: '错误',
            content: '信息有误，请重新填写',
            confirmText: '确定',
            showCancel: false,
            // cancelText: '取消',
            success: function (res) {
              if (res.confirm) {
                console.log('确定')
              }
            }
          })
        }
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
