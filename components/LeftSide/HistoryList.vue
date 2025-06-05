<script setup lang="ts">
  const props = defineProps<{
    title: string;
    historyItems: Array<{
      title: string;
      verse: string;
      summary: string;
      tags: string[];
      isQT?: boolean;
    }>;
  }>();
</script>

<template>
  <div class="history-container">
    <div class="history-title-container">
      <div class="history-title-date">{{ title }}</div>
    </div>
    <div v-for="(item, idx) in historyItems" :key="idx" class="history-item">
      <div class="history-item-title-container">
        <div class="history-item-title">
          {{ item.title }}
          <div v-if="item.isQT" class="qt-badge">QT</div>
        </div>
        <div class="description">
          <strong>{{ item.verse }}</strong> - {{ item.summary }}
        </div>
      </div>
      <div class="tag-list">
        <div v-for="(tag, tIdx) in item.tags" :key="tIdx" class="tag-item">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .history-container {
    display: flex;
    flex-direction: column;
    height: fit-content;

    .history-title-container {
      padding: 16px;
      padding-bottom: 12px;

      .history-title-date {
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 12px;
        border-bottom: 1px solid $border;
      }
    }

    .history-item {
      display: flex;
      flex-direction: column;
      padding: 12px 16px;
      gap: 12px;

      .history-item-title-container {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .history-item-title {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          color: $body-active;

          .qt-badge {
            background-color: #6940c6;
            border-radius: 1000px;
            padding: 2px 8px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
          }
        }

        .description {
          color: $body;
          font-size: 12px;
        }
      }

      .tag-list {
        display: flex;
        flex-direction: row;
        color: $body;
        font-size: 11px;
        gap: 4px;

        .tag-item {
          padding: 4px 12px 6px 12px;
          border-radius: 100px;
          border: 1px solid $body;
        }
      }
    }
  }
</style>
