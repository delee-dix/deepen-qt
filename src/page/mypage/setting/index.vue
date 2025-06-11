<script setup lang="ts">
import { ref } from "vue";
import { VueScrollPicker } from "vue-scroll-picker";
import "@/asset/vue-scroll-picker.css";

const sliderValue = ref(50);

const hour = Array.from({ length: 12 }, (_, i) => ({
  value: String(i + 1).padStart(2, "0"),
  name: String(i + 1).padStart(2, "0"),
}));

const minute = Array.from({ length: 60 }, (_, i) => ({
  value: String(i).padStart(2, "0"),
  name: String(i).padStart(2, "0"),
}));

const ampm = ["AM", "PM"].map(v => ({ value: v, name: v }));

const currentHour = ref("12");
const currentMinute = ref("00");
const currentAmPm = ref("AM");
</script>

<template>
  <div class="setting-container">
    <div class="empty-area"></div>
    <div class="content-area">
      <div class="header">
        <img src="/icon/ic_chevron_left.svg" alt="prev" @click="$router.back()" />
        <div>Setting</div>
        <div>Save</div>
      </div>
      <div class="setting-content">
        <div class="title">Font & Theme</div>
        <div class="font-theme">
          <div class="font-size">
            <div class="sub-title">Font Size</div>
            <div class="slider-container">
              <div :style="{ fontSize: '17px' }">aA</div>
              <input
                type="range"
                id="volume"
                min="0"
                max="100"
                step="1"
                v-model="sliderValue"
                class="slider"
              />
              <div :style="{ fontSize: '24px' }">aA</div>
            </div>
          </div>
          <div class="font">
            <div class="sub-title">Font</div>
            <div class="buttons">
              <div class="button selected">Helvetica</div>
              <div class="button">Arial</div>
            </div>
          </div>
          <div class="theme">
            <div class="sub-title">Theme</div>
            <div class="buttons">
              <div class="button selected">System</div>
              <div class="button">Dark</div>
              <div class="button">Light</div>
            </div>
          </div>
        </div>
        <div class="title">Alarm</div>
        <div class="alarm-picker">
          <div class="picker-content">
            <VueScrollPicker v-model="currentHour" :options="hour" class="picker-column">
              <template #default="{ option }">
                <div class="picker-item" :class="{ selected: option.value === currentHour }">
                  {{ option.name }}
                </div>
              </template>
            </VueScrollPicker>

            <VueScrollPicker v-model="currentMinute" :options="minute" class="picker-column">
              <template #default="{ option }">
                <div class="picker-item" :class="{ selected: option.value === currentMinute }">
                  {{ option.name }}
                </div>
              </template>
            </VueScrollPicker>

            <VueScrollPicker v-model="currentAmPm" :options="ampm" class="picker-column">
              <template #default="{ option }">
                <div class="picker-item" :class="{ selected: option.value === currentAmPm }">
                  {{ option.name }}
                </div>
              </template>
            </VueScrollPicker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.setting-container {
  background-color: #090607;
  color: #c6c6c6;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  margin: auto;
  box-sizing: border-box;

  .empty-area {
    height: 68px;
  }

  .content-area {
    bottom: 0;
    display: flex;
    padding: 16px;
    height: 100%;
    flex-direction: column;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #1e1e1e;

    .bar {
      margin-left: 160px;
      width: 40px;
      border: 1.5px solid $gray100;
      border-radius: 1000px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 32px;
    }

    .setting-content {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .font-theme,
      .alarm-picker {
        display: flex;
        flex-direction: column;
        background-color: $gray200;
        border-radius: 2px;
        padding: 16px;

        .slider-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          margin: 8px auto;
          text-align: center;

          .slider {
            width: 80%;
            height: 4px;
            border-radius: 50%;
            background-color: $primary02;
          }
        }

        .picker-content {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 140px;

          .picker-column {
            width: 60px;
            height: 100%;
            overflow: hidden;

            .picker-item {
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 16px;
              color: $gray100;
              opacity: 0.5;
              transition: all 0.2s;
            }

            .picker-item.selected {
              font-size: 24px;
              color: $gray50;
              opacity: 1;
            }
          }
        }
      }

      .title {
        font-size: 16px;
        margin-top: 25px;
      }

      .sub-title {
        font-size: 14px;
        gap: 16px;
      }

      .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 311px;
        gap: 8px;
        margin: 8px auto;

        .button {
          display: flex;

          justify-content: center;
          width: 100%;
          border-radius: 4px;
          background: $linear;
          padding: 12px 16px;
          font-size: 12px;
          color: $gray100;

          &.selected {
            background: $gradient-primary;
            color: $white;
          }
        }
      }
    }
  }
}
</style>
