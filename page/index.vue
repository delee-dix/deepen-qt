<script setup lang="ts">
import { ref } from "vue";

const chatContent = ref("");
const isSplash = ref<boolean>(true);
const isVisibleLeft = ref<boolean>(false);
const isVisibleRight = ref<boolean>(false);

const toggleLeftSide = (e?: MouseEvent) => {
  isVisibleLeft.value = !isVisibleLeft.value;
};
const toggleRightSide = (e?: MouseEvent) => {
  isVisibleRight.value = !isVisibleRight.value;
};

const goHome = () => {
  setTimeout(() => {
    isSplash.value = false;
  }, 2000);
};

onMounted(() => {
  goHome();
});
</script>

<template>
  <Splash v-if="isSplash" />

  <div class="chat-list" v-else>
    <CommonHeader>
      <CommonIcon path="ic_menu_search" :width="24" :height="24" @click="toggleLeftSide" />
      <CommonIcon path="ic_library" :width="24" :height="24" @click="toggleRightSide" />
    </CommonHeader>
    <LeftSide :isVisible="isVisibleLeft" @toggleLeftSide="toggleLeftSide" />
    <RightSide :isVisible="isVisibleRight" @toggleRightSide="toggleRightSide" />
    <div class="hello-container">
      <CommonIcon path="ic_symbol" :width="84" :height="84" />
      <div class="title">
        Hi, <strong>Deepen King</strong>
        <br />
        How are you feeling today?
      </div>
    </div>
    <CommonInputChat v-model="chatContent" />
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
