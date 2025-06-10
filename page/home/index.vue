<script setup lang="ts">
  import { ref } from "vue";

  import { useModalStore } from "~/store/modal";

  const chatContent = ref("");
  const isVisibleLeft = ref<boolean>(false);
  const isVisibleRight = ref<boolean>(false);
  const isActive = ref<boolean>(false);
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
      <IconComponent path="ic_library" :width="24" :height="24" @click="toggleRightSide" />
    </Header>
    <LeftSide :isVisible="isVisibleLeft" @toggleLeftSide="toggleLeftSide" />
    <RightSide :isVisible="isVisibleRight" @toggleRightSide="toggleRightSide" />
    <div class="hello-container">
      <IconComponent path="ic_symbol" :width="84" :height="84" />
      <div class="title">
        Hi, <strong>Deepen King</strong>
        <InputRadio v-model="isActive" />
        <InputRadioLabel v-model="isActive" label="라디오 버튼 예시" />
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
    width: 100%;
    height: 100dvh;
    box-sizing: border-box;

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
</style>
