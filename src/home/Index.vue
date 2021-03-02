<template>
  <div class="home-wrapper">
    <div class="design">
      <div class="text">0041号阀门</div>
      <div class="valve-wrapper">
        <img class="valve" src="@/assets/images/valve-open.png" alt="">
        <div class="time-wrapper">
          <p class="start-time">14:25</p>
          <p class="end-time"></p>
        </div>
      </div>
      <van-divider />
      <div class="option-wrapper">
        <div class="water">
          <span>浇水</span>
          <van-switch :value="waterOpen" @input="waterHandler" />
        </div>
        <van-divider />
        <div class="fertilizer">
          <span>施肥</span>
           <van-switch :value="fertilizerOpen" @input="fertilizerHandler" />
        </div>
      </div>
      <van-divider />
    </div>
    <div class="status-wrapper">
      <p class="status">工作状态</p>
      <div class="status-content">
        <div class="content-item">
          <img class="close" src="@/assets/images/valve-open.png" alt="">
          <div class="num">0041</div>
          <div class="time-wrapper">
            <p class="start-time">14:25</p>
            <p class="end-time">14:26</p>
          </div>
        </div>
        <div class="content-item">
          <img class="open" src="@/assets/images/valve-open.png" alt="">
          <div class="num">0042</div>
          <div class="time-wrapper">
            <p class="start-time">14:25</p>
            <p class="end-time"></p>
          </div>
        </div>
        <div class="content-item">
          <img class="open" src="@/assets/images/valve-open.png" alt="">
          <div class="num">0042</div>
          <div class="time-wrapper">
            <p class="start-time">14:25</p>
            <p class="end-time"></p>
          </div>
        </div>
        <div class="content-item">
          <img class="open" src="@/assets/images/valve-open.png" alt="">
          <div class="num">0042</div>
          <div class="time-wrapper">
            <p class="start-time">14:25</p>
            <p class="end-time"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      waterOpen: true, //浇水
      fertilizerOpen: false,  // 施肥
    }
  },
  methods: {
    waterHandler () {
      this.waterOpen = !this.waterOpen
      console.log('waterOpen', this.waterOpen)
    },

    fertilizerHandler () {
      if (this.waterOpen) {
        this.fertilizerOpen = !this.fertilizerOpen;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home-wrapper {
    text-align: left;
    .design {
      padding: 0 .16rem;
      background: #fff;
      .text {
        padding-top: .15rem;
        font-size: .18rem;
        color: #000;
      }
      .valve-wrapper {
        display: flex;
        align-items: center;
        padding-top: .15rem;

        .valve {
          width: .59rem;
          height: .59rem;
        }

        .time-wrapper {
          padding-left: .2rem;
          font-size: .16rem;

          .start-time {
            padding-bottom: .08rem;
          }

          .start-time::before {
            content: '';
            width: .1rem;
            height: .1rem;
            background: #07C160;
            border-radius: 50%;
            display: inline-block;
            margin-right: .1rem;
          }

          .end-time::before {
            content: '';
            width: .1rem;
            height: .1rem;
            background: #EF4F4F;
            border-radius: 50%;
            display: inline-block;
            margin-right: .1rem;
          }
        }
      }

      .option-wrapper {
        
        .water {
          font-size: .16rem;
          color: #000;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          line-height: .43rem;
        }

        .fertilizer {
          font-size: .16rem;
          color: #000;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          line-height: .43rem;
        }
      }
    }

    .status-wrapper {
      .status {
        color: #999;
        font-size: .14rem;
        padding: 0 .16rem .12rem;
      }

      .status-content {
        background: #fff;
        padding: .16rem;
        display: flex;
        flex-direction: row;

        .content-item {
          display: flex;
          flex-direction: column;
          padding-right: .33rem;

          &:last-child {
            padding-right: 0;
          }

          .close, .open {
            width: .59rem;
            height: .59rem;
          }

          .num {
            padding: .04rem 0 .07rem;
            font-size: .13rem;
            text-align: center;
          }

          .time-wrapper {
            font-size: .16rem;

            .start-time::before {
              content: '';
              width: .1rem;
              height: .1rem;
              background: #07C160;
              border-radius: 50%;
              display: inline-block;
              margin-right: .1rem;
            }

            .end-time::before {
              content: '';
              width: .1rem;
              height: .1rem;
              background: #EF4F4F;
              border-radius: 50%;
              display: inline-block;
              margin-right: .1rem;
            }
          }
        }
      }
    }

    /deep/ .van-switch--on {
      background: #07C160;
    }
  }
</style>
