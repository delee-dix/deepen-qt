<script setup lang="ts">
  const props = defineProps<{
    title: string;
    prayerItems: Array<{
      date: string;
      subject: string;
    }>;
  }>();
</script>

<template>
  <div class="prayer-list-container">
    <div v-for="(item, idx) in prayerItems" :key="idx" class="prayer-item">
      <div class="prayer-item-title">
        <strong>{{ item.date }}</strong>
        <div class="content-subject">{{ item.subject }}</div>
      </div>
      <IconComponent path="ic_chevron_right" :width="24" :height="24" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .prayer-list-container {
    display: flex;
    flex-direction: column;
    height: fit-content;

    .prayer-item {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      gap: 12px;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: $border;
      }

      .prayer-item-title {
        display: flex;
        flex-direction: row;
        gap: 4px;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        color: $body-active;

        .content-subject {
          font-size: 14px;
          font-weight: 400;
          color: $body;
        }
      }
    }
  }
</style>
