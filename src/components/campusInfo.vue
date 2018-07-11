<template>
  <!--营员信息组件-->
  <div class="mine">
    <div class="nickName">
      <p style="font-size: 52rpx;border: 0">{{name}}</p>
    </div>
    <div>
      <img class="userinfo-avatar" src="http://pics.ctripfair.com/avatar.jpg" background-size="cover" />
    </div>
  </div>
</template>

<script>
    export default {
      props: ['name'],
      data () {
        return {
          name: ''
        }
      }
    }
</script>

<style scoped>

</style>
