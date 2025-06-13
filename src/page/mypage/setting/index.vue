<script setup lang="ts">
import { reactive, ref } from "vue";
import { useNavigateWithTransition } from "~/composable/useNavigateWithTransition";

const { navigateRight } = useNavigateWithTransition();

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

const currentAlarmTime = reactive({
  hour: "10",
  minute: "00",
  ampm: "AM",
});
</script>

<template>
  <div class="setting-container">
    <div class="empty-area"></div>
    <div class="content-area">
      <div class="header">
        <CommonIcon
          path="ic_chevron_left"
          :width="24"
          :height="24"
          @click="navigateRight('/mypage')"
        />
        <div class="header-title">Setting</div>
        <div class="header-save">Save</div>
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
            <CommonScrollPicker v-model="currentAlarmTime.hour" :options="hour" />
            <CommonScrollPicker v-model="currentAlarmTime.minute" :options="minute" />
            <CommonScrollPicker v-model="currentAlarmTime.ampm" :options="ampm" />
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
  position: absolute;
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
    text-align: left;

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

      .header-title {
        font-size: 18px;
        font-weight: 500;
        color: $white;
      }

      .header-save {
        font-size: 14px;
        font-weight: 400;
        color: $body;
      }
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
          gap: 16px;
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
