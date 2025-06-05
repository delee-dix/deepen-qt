<script setup lang="ts"></script>

<template>
  <div class="mypage-container">
    <div class="empty-area"></div>
    <div class="content-area">
      <!-- <div class="bar"></div> -->
      <div class="header">
        <img
          src="/icon/ic_chevron_left.svg"
          alt="prev"
          @click="$router.back()"
        />
        <div>Notice</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mypage-container {
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
  }
}
</style>
