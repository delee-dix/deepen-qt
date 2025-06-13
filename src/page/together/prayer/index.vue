<script setup lang="ts">
import { ref } from "vue";

const isModalOpen = ref<boolean>(false);

const sortingModalOpen = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div class="prayer-list-container">
    <div class="header">
      <div class="left">
        <NuxtLink to="/together" class="header-link">
          <CommonIcon path="ic_chevron_left" :width="24" :height="24" />
          <div class="header-link-text">Journey of Prayers</div>
        </NuxtLink>
      </div>
      <div class="right">
        <img src="/icon/ic_sorting.svg" alt="sorting" @click="sortingModalOpen" />
        <div v-if="isModalOpen" class="sorting-modal">
          <div class="sorting-modal-item active">
            <img src="/icon/ic_latest.svg" alt="latest" />
            Latest
          </div>
          <div class="sorting-modal-item">
            <img src="/icon/ic_older.svg" alt="older" />
            Older
          </div>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div class="content-subject">Silent Whispers of the Morning</div>
        <NuxtLink to="/together/prayer/id">
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </NuxtLink>
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
</template>

<style lang="scss" scoped>
.prayer-list-container {
  background-color: #090607;
  color: #c6c6c6;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  margin: auto;
  padding: 16px;
  overflow-y: auto;
  box-sizing: border-box;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 12px 0 0;

    .left {
      display: flex;
      justify-content: left;
      gap: 8px;
      align-items: center;

      .header-link {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;

        .header-link-text {
          font-size: 18px;
          font-weight: 500;
          color: $body;
        }
      }
    }

    .right {
      position: relative;

      .sorting-modal {
        display: flex;
        flex-direction: column;
        position: absolute;
        min-width: 86px;
        top: 28px;
        right: 0;
        background-color: $gray200;
        border-radius: 8px;

        .sorting-modal-item {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
          padding: 8px 12px;
          font-size: 14px;
          font-weight: 400;
          color: $body;
          cursor: pointer;

          &.active {
            color: $body-active;
          }
        }
      }
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .prayer-content {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      gap: 8px;
      font-size: 14px;
      border-bottom: 1px solid #c6c6c6;

      .content-subject {
        width: 200px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>
