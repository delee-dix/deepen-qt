<script setup lang="ts">
import { ref } from "vue";

const router = useRouter();

const chatContent = ref("");

const clickHistory = () => {
  router.push("/history");
};

const clickTogether = () => {
  router.push("/together");
};
</script>

<template>
  <div class="chat-list">
    <CommonHeader>
      <CommonIcon path="ic_menu_search" :width="24" :height="24" @click="clickHistory" />
      <CommonIcon path="ic_library" :width="24" :height="24" @click="clickTogether" />
    </CommonHeader>
    <div class="hello-container">
      <CommonIcon path="ic_symbol" :width="84" :height="84" />
      <div class="title">
        Hi, <strong>Deepen King</strong>
        <br />
        How are you feeling today?
      </div>
    </div>
    <CommonInputChat v-model="chatContent" isChoice choiceTitle="I am today" />
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
