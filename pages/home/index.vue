<script setup lang="ts">
import { ref } from "vue";

const content = ref("");
const name = ref("");
const isVisibleLeft = ref<boolean>(false);
const isVisibleRight = ref<boolean>(false);

const toggleLeftWidget = () => {
  isVisibleLeft.value = !isVisibleLeft.value;
};
const toggleRightWidget = () => {
  isVisibleRight.value = !isVisibleRight.value;
};
</script>

<template>
  <div class="chat-list">
    <div class="tab">
      <div @click="toggleLeftWidget">Yesterday</div>
      <transition name="slide-left">
        <div v-if="isVisibleLeft" class="widget left">
          <div class="search-area">
            <input :v-model="name" placeholder="Search..." />
            <img
              src="/icon/ic_arrow_right.svg"
              alt="arrow-right"
              @click="toggleLeftWidget"
            />
          </div>
          <div class="history-area">(History)</div>
          <div class="info-area">
            <div class="state">
              <img src="/icon/ic_sparkle.svg" alt="sparkle" />
              <div>State of faith</div>
            </div>
            <div class="info">
              <div class="my-info">
                <img src="/img/img_profile.png" alt="profile" />
                <div class="name">Deepen King</div>
              </div>
              <div class="new-chat">
                <img src="/icon/ic_plus.svg" alt="plus" />
                <div>New Chat</div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div @click="toggleRightWidget">Together</div>
      <transition name="slide-right">
        <div v-if="isVisibleRight" class="widget right">
          <img
            src="/icon/ic_arrow_right.svg"
            alt="arrow-right"
            @click="toggleRightWidget"
          />
          <div class="calendar-area">
            <div class="calendar-title">Attendance status</div>
            <div
              class="calendar"
              :style="{
                width: '343px',
                height: '303px',
                background: '#323232',
              }"
            >
              (Calendar)
            </div>
          </div>
          <div class="prayer-area">
            <div class="prayer-title">
              <div>Journey of Prayers</div>
              <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
            </div>
            <br />
            <div class="prayer-content">
              <strong>April 28, 2025</strong>
              <div>Silent Whispers of the Morning</div>
              <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
            </div>
            <div class="prayer-content">
              <strong>April 27, 2025</strong>
              <div>Peaceful Morning Conversations</div>
              <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
            </div>
            <div class="prayer-content">
              <strong>April 26, 2025</strong>
              <div>Moments of Quiet Faith</div>
              <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
            </div>
            <div class="prayer-content">
              <strong>April 25, 2025</strong>
              <div>Silent Whispers of the Morning</div>
              <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
            </div>
            <div class="prayer-content">
              <strong>April 24, 2025</strong>
              <div>Peaceful Morning Conversations</div>
              <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
            </div>
            <div class="prayer-content">
              <strong>April 23, 2025</strong>
              <div>Moments of Quiet Faith</div>
              <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
            </div>
          </div>
        </div>
      </transition>
    </div>

    <img src="/img/img_symbol.svg" alt="Home" class="symbol" />
    <div class="title">Hi,&nbsp;<strong>Deepen King</strong></div>
    <div class="title">How are you feeling today?</div>

    <div :style="{ marginTop: '180px' }">
      <div class="sub-title">I am today</div>
      <div class="select-area">
        <div class="keyword">Delight</div>
        <div class="keyword">Sorrow</div>
        <div class="keyword">Stress</div>
        <div class="keyword">Expect</div>
      </div>
    </div>
    <br />
    <div class="input-area">
      <textarea
        v-model="content"
        class="content"
        placeholder="Please tell me anything..."
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-list {
  background-color: #090607;
  color: #c6c6c6;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 812px;
  margin: auto;
  box-sizing: border-box;

  .tab {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 16px;

    .widget {
      position: fixed;
      top: 0;
      background-color: #090607;
      border: 1px solid #323232;
      width: 300px;
      height: 100vh;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
      padding: 20px;
      z-index: 1000;

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }
    }

    .search-area {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .history-area {
      display: flex;
      flex-direction: column;
      padding: 16px;
      height: 65%;
      background-color: #323232; //
      margin-bottom: 20px;
    }

    .info-area {
      display: flex;
      flex-direction: column;

      .state {
        background: linear-gradient(to right, #4e5899, #ce70ca);
        background-clip: text;
        color: transparent;
        display: flex;
        justify-content: end;
        margin: 10px;
        gap: 5px;
      }

      .info {
        display: flex;
        justify-content: space-between;

        .my-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .new-chat {
          display: flex;
          align-items: center;
          // gap: 10px;
          border-radius: 1000px;
          border: 1px solid #323232;
          padding: 12px 16px;
          background: linear-gradient(to right, #4e5899, #ce70ca);
        }
      }
    }

    .calendar-area {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }

    .prayer-area {
      display: flex;
      flex-direction: column;
      padding: 10px;

      .prayer-title {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
      }

      .prayer-content {
        display: flex;
        justify-content: left;
        padding-bottom: 10px;
        gap: 8px;
        font-size: 14px;
      }
    }

    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
      transition: transform 0.3s ease;
    }

    .slide-left-enter-from,
    .slide-left-leave-to {
      transform: translateX(-100%);
    }

    .slide-right-enter-from,
    .slide-right-leave-to {
      transform: translateX(100%);
    }

    .slide-left-enter-to,
    .slide-right-enter-to,
    .slide-left-leave-from,
    .slide-right-leave-from {
      transform: translateX(0);
    }
  }

  .symbol {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 84px;
    height: 80px;
    margin-top: 180px;
    margin-bottom: 24px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  .sub-title {
    display: flex;
    padding: 16px;
  }

  .select-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .keyword {
      display: flex;
      background-color: #363636;
      border: 1px solid #323232;
      border-radius: 20px;
      font-size: 13px;
      padding: 12px 18px;
    }
  }

  .input-area {
    display: flex;
    width: 99%;
    height: 120px;

    .content {
      background-color: #363636;
      border: 1px solid #323232;
      color: #c6c6c6;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      padding: 16px;
      width: 100%;
    }
  }
}
</style>
