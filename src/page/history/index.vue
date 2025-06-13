<script setup lang="ts">
import { ref } from "vue";
import { useNavigateWithTransition } from "~/composable/useNavigateWithTransition";

const { navigateBack } = useNavigateWithTransition();

const clickHome = () => {
  navigateBack();
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
  <div class="left-side-container">
    <div class="search-bar-container">
      <CommonSearchBar />
      <CommonIcon path="ic_arrow_right" :width="24" :height="24" @click="clickHome" />
    </div>
    <div class="history-list-container">
      <HistoryList title="Yesterday" :historyItems="historyItems" />
      <HistoryList title="2 days ago" :historyItems="historyItems" />
      <HistoryList title="3 days ago" :historyItems="historyItems" />
      <HistoryList title="4 days ago" :historyItems="historyItems" />
    </div>
    <HistoryProfile />
    <div class="background-radial-gradient"></div>
  </div>
</template>

<style lang="scss" scoped>
.left-side-container {
  position: absolute;
  top: 0;
  left: 0;
  background-color: $background;
  width: 100%;
  height: 100dvh;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  .search-bar-container {
    position: absolute;
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
    text-align: left;
  }
}
</style>
