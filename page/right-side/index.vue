<script setup lang="ts">
import { type Ref, ref, computed } from "vue";
const emit = defineEmits<{
  (event: "toggleRightSide"): void;
}>();

const props = defineProps<{
  isVisible: boolean;
}>();

const isShowSide = computed(() => props.isVisible);

const prayerItems = [
  { date: "April 28, 2025", subject: "Silent Whispers of the Morning" },
  { date: "April 27, 2025", subject: "Grace in the Stillness" },
  { date: "April 26, 2025", subject: "Moments of Quiet Faith" },
  { date: "April 25, 2025", subject: "Echoes of His Word" },
  { date: "April 24, 2025", subject: "Peaceful Morning Conversations" },
  { date: "April 23, 2025", subject: "A Day Anchored in Prayer" },
  { date: "April 22, 2025", subject: "A Day Anchored in Prayer" },
  { date: "April 21, 2025", subject: "A Day Anchored in Prayer" },
  { date: "April 20, 2025", subject: "A Day Anchored in Prayer" },
  { date: "April 19, 2025", subject: "A Day Anchored in Prayer" },
];

import {
  type DateValue,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { Calendar } from "@/component/ui/calendar";

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;
</script>

<template>
  <transition name="slide-right">
    <div v-if="isShowSide" class="right-side-container">
      <div class="header-container">
        <IconComponent
          path="ic_arrow_left"
          :width="24"
          :height="24"
          @click="emit('toggleRightSide')"
        />
      </div>
      <div class="body-container">
        <div class="calendar-container">
          <div class="calendar-title">Attendance status</div>
          <Calendar
            v-model="value"
            :weekday-format="'short'"
            class="rounded-md border"
          />
        </div>
        <div class="prayer-container">
          <div class="prayer-title">
            <NuxtLink to="/prayer" class="prayer-title-link">
              Journey of Prayers
              <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
            </NuxtLink>
          </div>
          <RightSidePrayerList
            title="Recent Prayers"
            :prayerItems="prayerItems"
          />
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
  overflow-y: auto;

  .header-container {
    position: fixed;
    top: 0;
    right: 0;
    background-color: $background;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 16px;
    width: 100%;
    height: 80px;
    z-index: 99999;
  }

  .body-container {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;

    .calendar-container {
      width: 100%;
      height: 384px;
      background-color: $background;
      display: flex;
      flex-direction: column;
      padding: 0 16px;
      gap: 16px;

      .calendar-title {
        font-size: 18px;
        font-weight: 500;
        color: $body;
      }
    }

    .prayer-container {
      display: flex;
      flex-direction: column;

      .prayer-title {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        padding-right: 12px;

        .prayer-title-link {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          font-size: 18px;
          font-weight: 500;
          color: $body;
        }
      }
    }
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
