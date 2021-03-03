<template>
  <div class="home-wrapper">
    <div class="design">
      <div class="text">0041号阀门</div>
      <div class="valve-wrapper">
        <img class="valve" src="@/assets/images/valve-open.png" alt="" />
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
        <div class="content-item time-dis">
          <img class="close" src="@/assets/images/water-dis.png" alt="" />
          <div class="num">0041</div>
          <div class="time-wrapper">
            <p class="start-time">14:25</p>
            <p class="end-time">14:26</p>
          </div>
        </div>
        <div class="content-item time-open">
          <img class="open" src="@/assets/images/water-open.png" alt="" />
          <div class="num">0042</div>
          <div class="time-wrapper">
            <p class="start-time">14:25</p>
            <p class="end-time"></p>
          </div>
        </div>
        <div class="content-item time-open">
          <img class="open" src="@/assets/images/water-open.png" alt="" />
          <div class="num">0042</div>
          <div class="time-wrapper">
            <p class="start-time">14:25</p>
            <p class="end-time"></p>
          </div>
        </div>
        <div class="content-item time-open">
          <img class="open" src="@/assets/images/water-open.png" alt="" />
          <div class="num">0042</div>
          <div class="time-wrapper">
            <p class="start-time">14:25</p>
            <p class="end-time"></p>
          </div>
        </div>
        <div class="content-item time-open">
          <img class="open" src="@/assets/images/water-open.png" alt="" />
          <div class="num">0042</div>
          <div class="time-wrapper">
            <p class="start-time">14:25</p>
            <p class="end-time"></p>
          </div>
        </div>
      </div>
    </div>
    <!-- <van-popup v-model="waterOpen" :close-on-click-overlay="false"
      >内容</van-popup -->
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "Index",
  data() {
    return {
      waterOpen: false, //浇水
      fertilizerOpen: false, // 施肥
    };
  },
  methods: {
    waterHandler() {
      this.waterOpen = !this.waterOpen;
      console.log("waterOpen", this.waterOpen);
      if (!this.waterOpen) {
        Dialog.confirm({
          title: "确认停止浇水",
          message: "请确认您已停止浇水并关闭阀门",
        })
          .then(() => {
            // on confirm
          })
          .catch(() => {
            // on cancel
            this.waterOpen = true
          });
      }
    },

    fertilizerHandler() {
      this.fertilizerOpen = !this.fertilizerOpen;
      if (!this.fertilizerOpen) {
        Dialog.confirm({
          title: "确认关闭施肥",
          message: "本次施肥将不被系统记录",
        })
          .then(() => {
            // on confirm
          })
          .catch(() => {
            // on cancel
            this.fertilizerOpen = true
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-wrapper {
  text-align: left;
  .design {
    padding: 0 0.16rem;
    background: #fff;
    .text {
      padding-top: 0.15rem;
      font-size: 0.18rem;
      color: #000;
    }
    .valve-wrapper {
      display: flex;
      align-items: center;
      padding-top: 0.15rem;

      .valve {
        width: 0.59rem;
        height: 0.59rem;
      }

      .time-wrapper {
        padding-left: 0.2rem;
        font-size: 0.16rem;

        .start-time {
          padding-bottom: 0.08rem;
        }

        .start-time::before {
          content: "";
          width: 0.1rem;
          height: 0.1rem;
          background: #07c160;
          border-radius: 50%;
          display: inline-block;
          margin-right: 0.1rem;
        }

        .end-time::before {
          content: "";
          width: 0.1rem;
          height: 0.1rem;
          background: #ef4f4f;
          border-radius: 50%;
          display: inline-block;
          margin-right: 0.1rem;
        }
      }
    }

    .option-wrapper {
      .water {
        font-size: 0.16rem;
        color: #000;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 0.43rem;
      }

      .fertilizer {
        font-size: 0.16rem;
        color: #000;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 0.43rem;
      }
    }
  }

  .status-wrapper {
    .status {
      color: #999;
      font-size: 0.14rem;
      padding: 0 0.16rem 0.12rem;
    }

    .status-content {
      background: #fff;
      padding: 0.16rem 0;
      display: flex;
      flex-direction: row;
      flex-flow: row wrap;

      .content-item {
        display: flex;
        flex-direction: column;
        // padding-right: .33rem;
        width: 25%;
        align-items: center;
        padding-bottom: 0.2rem;

        &:last-child {
          padding-right: 0;
        }

        .close,
        .open {
          width: 0.59rem;
          height: 0.59rem;
        }

        .num {
          padding: 0.05rem 0 0.11rem;
          font-size: 0.13rem;
          text-align: center;
        }

        .time-wrapper {
          font-size: 0.16rem;
          white-space: nowrap;

          .start-time {
            padding-bottom: 0.12rem;
          }

          .start-time::before {
            content: "";
            width: 0.1rem;
            height: 0.1rem;
            background: #07c160;
            border-radius: 50%;
            display: inline-block;
            margin-right: 0.06rem;
          }

          .end-time::before {
            content: "";
            width: 0.1rem;
            height: 0.1rem;
            border-radius: 50%;
            display: inline-block;
            margin-right: 0.06rem;
          }
        }
      }

      .time-open {
        .end-time::before {
          content: "";
          background: #ef4f4f;
        }
      }

      .time-dis {
        .num {
          color: #666666;
        }

        .start-time,
        .end-time {
          color: #a9a9a9;
        }

        .end-time::before {
          content: "";
          width: 0.1rem;
          height: 0.1rem;
          background: #bbb;
          border-radius: 50%;
          display: inline-block;
          margin-right: 0.1rem;
        }
      }
    }
  }

  /deep/ .van-switch--on {
    background: #07c160;
  }

  // 弹窗
  /deep/ .van-dialog {
    border-radius: 8px;
  }

  /deep/ .van-dialog__header {
    color: #000;
    font-size: 0.18rem;
  }

  /deep/ .van-dialog__message {
    color: #999;
    font-size: 0.15rem;
    border-bottom: 0.005rem solid #d2d3d5;
  }
}
/deep/.van-button__text {
  color: #00c200 !important;
}
</style>
