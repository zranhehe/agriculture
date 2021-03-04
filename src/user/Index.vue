<template>
  <div class="user-wrapper">
    <div class="header">
      <div class="item"><img src="@/assets/images/count.png" alt=""> 60</div>
      <div class="item"><img src="@/assets/images/active.png" alt="">24</div>
      <div class="item"><img src="@/assets/images/valve-not.png" alt="">17</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  },
  methods: {
   
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .user-wrapper {
    .header {
      padding: .14rem 0;
      background: #fff;
      font-size: .18rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .item {
        display: flex;
        align-items: center;
        margin-right: .09rem;
      }

      .item::after {
        content: '';
        width: 1px;
        height: .13rem;
        background: #CCCCCC;
      }

      .item:nth-last-child(1)::after {
        content: '';
        width: 1px;
        height: .13rem;
        background: #fff;
      }
    }
  }
</style>
