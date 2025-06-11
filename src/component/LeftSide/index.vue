<script setup lang="ts">
import { ref, computed } from "vue";

const emit = defineEmits<{
  (event: "toggleLeftSide"): void;
}>();

const props = defineProps<{
  isVisible: Boolean;
}>();

const isShowSide = computed(() => props.isVisible);

const toggleLeftSide = () => {
  emit("toggleLeftSide");
};

const historyItems = ref([
  {
    title: "Raising children",
    isQT: false,
    verse: "Ephesians 6:4",
    summary: "Do not provoke others to anger.",
    tags: ["Delight", "Judgement"],
  },
  {
    title: "Raising children",
    isQT: true,
    verse: "Ephesians 6:4",
    summary: "Do not provoke others to anger.",
    tags: ["Delight", "Judgement"],
  },
]);
</script>

<template>
  <transition name="slide-left">
    <div v-if="isShowSide" class="left-side-container">
      <div class="search-bar-container">
        <CommonSearchBar />
        <CommonIcon path="ic_arrow_right" :width="24" :height="24" @click="toggleLeftSide" />
      </div>
      <div class="history-list-container">
        <LeftSideHistoryList title="Yesterday" :historyItems="historyItems" />
        <LeftSideHistoryList title="2 days ago" :historyItems="historyItems" />
        <LeftSideHistoryList title="3 days ago" :historyItems="historyItems" />
        <LeftSideHistoryList title="4 days ago" :historyItems="historyItems" />
      </div>
      <LeftSideProfile />
      <div class="background-radial-gradient"></div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.left-side-container {
  position: fixed;
  top: 0;
  left: 0;
  background-color: $background;
  width: 100vw;
  height: 100vh;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  .search-bar-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: $background;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    padding-left: 12px;
    gap: 8px;
    width: 100%;
  }

  .history-list-container {
    margin-top: 80px;
    height: 100%;
    padding-bottom: 264px;
    overflow-y: auto;
  }

  .background-radial-gradient {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 320px;
    z-index: 99999;
    pointer-events: none;
    background: radial-gradient(
      circle at 48% 100%,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(165, 75, 179, 0) 90%
    );
    opacity: 0.2;
  }
}
</style>
