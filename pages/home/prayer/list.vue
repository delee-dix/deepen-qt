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
        <img
          src="/icon/ic_chevron_left.svg"
          alt="chevron-left"
          @click="$router.back()"
        />
        <div>Journey of Prayers</div>
      </div>
      <div class="right">
        <img
          src="/icon/ic_sorting.svg"
          alt="sorting"
          @click="sortingModalOpen"
        />
      </div>
    </div>

    <div class="body">
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <NuxtLink to="/home/prayer/detail">
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </NuxtLink>
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
      <div class="prayer-content">
        <strong>April 28, 2025</strong>
        <div>Silent Whispers of the Morning</div>
        <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
      </div>
    </div>
  </div>

  <Modal v-model="isModalopen" class="sorting-modal" v-show="isModalopen">
    <div class="latest">
      <img src="/icon/ic_latest.svg" alt="latest" />
      <div>Latest</div>
    </div>
    <div class="older">
      <img src="/icon/ic_older.svg" alt="older" />
      <div>Older</div>
    </div>
  </Modal>
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

    .left {
      display: flex;
      justify-content: left;
      gap: 8px;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    .prayer-content {
      display: flex;
      justify-content: left;
      padding: 10px 0;
      gap: 8px;
      font-size: 14px;
      border-bottom: 1px solid #c6c6c6;
    }
  }
}

.sorting-modal {
  display: flex;
  flex-direction: column;
  background-color: #363636;
  width: 100px;
  height: 100px;

  .latest,
  .older {
    gap: 4px;
  }
}
</style>
