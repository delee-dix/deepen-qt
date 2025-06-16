<script setup lang="ts">
const navigator = useNavigateWithTransition();

const clickHome = () => {
  navigator.pushRight("/home");
};

const clickPrayer = () => {
  navigator.pushLeft("/together/prayer");
};

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
</script>

<template>
  <transition name="slide-right">
    <div class="right-side-container">
      <div class="header-container">
        <CommonIcon path="ic_arrow_left" :width="24" :height="24" @click="clickHome" />
      </div>
      <div class="body-container">
        <div class="calendar-container">
          <div class="calendar-title">Attendance status</div>
          <CommonCalendar />
        </div>
        <div class="prayer-container">
          <div class="prayer-title">
            <div class="prayer-title-link" @click="clickPrayer">
              Journey of Prayers
              <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
            </div>
          </div>
          <TogetherPrayerList title="Recent Prayers" :prayerItems="prayerItems" />
        </div>
      </div>

      <CommonBackgroundGradient />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.right-side-container {
  position: absolute;
  top: 0;
  right: 0;
  background-color: $background;
  width: 100%;
  height: 100vh;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  overflow-y: auto;

  .header-container {
    position: absolute;
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
        text-align: left;
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
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-right-leave-from {
  transform: translateX(0);
}
</style>
