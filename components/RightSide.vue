<script setup lang="ts">
  import { toRefs } from "vue";
  import type { PropType } from "vue";
  const props = defineProps({
    isVisibleRight: Boolean,
    toggleRightWidget: Function as PropType<(payload: MouseEvent) => void>,
  });
  const { isVisibleRight, toggleRightWidget } = toRefs(props);
</script>

<template>
  <transition name="slide-right">
    <div v-if="isVisibleRight" class="widget right">
      <img src="/icon/ic_arrow_right.svg" alt="arrow-right" @click="toggleRightWidget" />
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
    </div>
  </transition>
</template>
