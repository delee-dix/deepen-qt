<script setup lang="ts">
  const emit = defineEmits<{
    (event: "toggleRightSide"): void;
  }>();

  const props = defineProps<{
    isVisible: boolean;
  }>();

  const isShowSide = computed(() => props.isVisible);
</script>

<template>
  <transition name="slide-right">
    <div v-if="isShowSide" class="right-side-container">
      <img src="/icon/ic_arrow_right.svg" alt="arrow-right" @click="emit('toggleRightSide')" />
      <div class="calendar-area">
        <div class="calendar-title">Attendance status</div>
        <img src="/img/img_calendar.png" alt="calendar" class="calendar" />
      </div>
      <div class="prayer-area">
        <div class="prayer-title">
          <div>Journey of Prayers</div>
          <NuxtLink to="/home/prayer/list">
            <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
          </NuxtLink>
        </div>
        <br />
        <div class="prayer-content">
          <strong>April 28, 2025</strong>
          <div class="content-subject">Silent Whispers of the Morning</div>
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </div>
        <div class="prayer-content">
          <strong>April 27, 2025</strong>
          <div class="content-subject">Grace in the Stillness</div>
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </div>
        <div class="prayer-content">
          <strong>April 26, 2025</strong>
          <div class="content-subject">Moments of Quiet Faith</div>
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </div>
        <div class="prayer-content">
          <strong>April 25, 2025</strong>
          <div class="content-subject">Echoes of His Word</div>
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </div>
        <div class="prayer-content">
          <strong>April 24, 2025</strong>
          <div class="content-subject">Peaceful Morning Conversations</div>
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </div>
        <div class="prayer-content">
          <strong>April 23, 2025</strong>
          <div class="content-subject">A Day Anchored in Prayer</div>
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </div>
      </div>
      <div class="background-radial-gradient"></div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
  .right-side-container {
    position: fixed;
    top: 0;
    right: 0;
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
      background: radial-gradient(circle at 48% 100%, rgba(255, 255, 255, 0.6) 0%, rgba(165, 75, 179, 0) 90%);
      opacity: 0.2;
    }
  }
</style>
