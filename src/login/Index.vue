<template>
  <div class="login-wrapper">
    <img class="img" src="@/assets/images/login.png" alt="" />
    <div class="pwd-wrapper"><input class="password" placeholder="请输入管理密码" /></div>
    <div class="login-btn" @click="loginHandler()">登录系统</div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    /**
     * 登录系统
     */
    loginHandler () {
      this.$router.push('/user')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login-wrapper {
  height: 100%;
  font-size: 0.18rem;
  background: #fff;

  .img {
    width: 100%;
    height: auto;
  }

  .pwd-wrapper {
    height: 0.43rem;
    line-height: 0.43rem;
    margin: 0.76rem 0.16rem 0;
    border: 1px solid #bbbbbb;
    border-radius: 10px;
    color: #bbbbbb;
    background: #eeeeee;
  }

  .password {
    width: 100%;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    border: none;
    background: #eeeeee;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .login-btn {
    margin: 0.33rem 0.16rem 0;
    line-height: 0.43rem;
    background: #07c160;
    border: 1px solid #029400;
    border-radius: 10px;
    color: #fff;
  }
}
</style>
