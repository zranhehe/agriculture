<template>
  <div class="home-wrapper">
    <span class="content"><van-button type="primary" size="large">大号按钮</van-button></span>
  </div>
</template>

<script>
import Vue from 'vue'
// import { Button } from 'vant';
// Vue.use(Button)
export default {
  name: 'Index',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home-wrapper {
    .content {
      background: red;
    }
  }
</style>
