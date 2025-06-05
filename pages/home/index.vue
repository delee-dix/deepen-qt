<script setup lang="ts">
  import { ref } from "vue";

  import Header from "~/components/Header.vue";
  import LeftSide from "~/pages/left-side/index.vue";
  import RightSide from "~/components/RightSide.vue";

  const chatContent = ref("");
  const name = ref("");
  const isVisibleLeft = ref<boolean>(false);
  const isVisibleRight = ref<boolean>(false);

  const toggleLeftSide = (e?: MouseEvent) => {
    isVisibleLeft.value = !isVisibleLeft.value;
  };
  const toggleRightSide = (e?: MouseEvent) => {
    isVisibleRight.value = !isVisibleRight.value;
  };
</script>

<template>
  <div class="chat-list">
    <Header>
      <IconComponent path="ic_menu_search" :width="24" :height="24" @click="toggleLeftSide" />
      <LeftSide :isVisibleLeft="isVisibleLeft" @toggleLeftSide="toggleLeftSide" />
      <IconComponent path="ic_library" :width="24" :height="24" @click="toggleRightSide" />
      <RightSide :isVisibleRight="isVisibleRight" @toggleRightSide="toggleRightSide" />
    </Header>
    <div class="hello-container">
      <img src="/icon/ic_symbol.svg" alt="Home" class="symbol" />
      <div class="title">
        Hi, <strong>Deepen King</strong>
        <br />
        How are you feeling today?
      </div>
    </div>
    <InputChat v-model="chatContent" />
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

      .calendar-area {
        display: flex;
        flex-direction: column;

        .calendar-title {
          font-size: 18px;
          margin-top: 20px;
        }

        .calendar {
          width: 330px;
          height: 300px;
          border: 1px solid #c6c6c6;
          margin-top: 20px;
        }
      }

      .prayer-area {
        display: flex;
        flex-direction: column;
        margin-top: 40px;

        .prayer-title {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
        }

        .prayer-content {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          gap: 8px;
          font-size: 14px;
          border-bottom: 1px solid #c6c6c6;

          .content-subject {
            width: 210px;
          }
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

    .hello-container {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      width: 100%;

      .symbol {
        width: 84px;
        height: 84px;
      }

      .title {
        font-size: 20px;
        line-height: 150%;
        text-align: center;
        width: 100%;
      }
    }
  }
</style>
