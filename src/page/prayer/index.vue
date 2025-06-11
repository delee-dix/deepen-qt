<script setup lang="ts">
import { ref } from "vue";

const isModalopen = ref<boolean>(false);

const sortingModalOpen = () => {
  isModalopen.value = !isModalopen.value;
};
</script>

<template>
  <div class="prayer-list-container">
    <div class="header">
      <div class="left">
        <img src="/icon/ic_chevron_left.svg" alt="chevron-left" @click="$router.back()" />
        <div>Journey of Prayers</div>
      </div>
      <div class="right">
        <img src="/icon/ic_sorting.svg" alt="sorting" @click="sortingModalOpen" />
        <div v-if="isModalopen" class="sorting-modal">
          <div class="latest">
            <img src="/icon/ic_latest.svg" alt="latest" />
            <div>Latest</div>
          </div>
          <div class="older">
            <img src="/icon/ic_older.svg" alt="older" />
            <div>Older</div>
          </div>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div class="content-subject">Silent Whispers of the Morning</div>
        <NuxtLink to="/prayer/id">
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
  width: 375px;
  height: 812px;
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
    }

    .right {
      position: relative;
      display: inline-block;

      .sorting-modal {
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: #363636;
        right: 0;

        .latest,
        .older {
          display: flex;
          flex-direction: row;
          gap: 4px;
          padding: 8px 12px;
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
      }
    }
  }
}
</style>
