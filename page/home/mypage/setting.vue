<script setup lang="ts">
import { ref } from "vue";

const value = ref(50);
const isSelected = ref<boolean>(false);
</script>

<template>
  <div class="setting-container">
    <div class="empty-area"></div>
    <div class="content-area">
      <!-- <div class="bar"></div> -->
      <div class="header">
        <img
          src="/icon/ic_chevron_left.svg"
          alt="prev"
          @click="$router.back()"
        />
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
                v-model="value"
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
        <div class="alarm-picker" :style="{ height: '178px' }">(picker)</div>
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
      border: 1.5px solid #c6c6c6;
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
        background-color: #363636;
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
            background-color: #d987ee;
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
          border-radius: 4px;
          background-color: #161616;
          padding: 12px 16px;
          font-size: 12px;
          color: #8e8e8e;

          &.selected {
            background: linear-gradient(to right, #4e5899, #ce70ca);
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
