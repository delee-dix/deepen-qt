<script setup lang="ts"></script>

<template>
  <div class="profile-container">
    <div class="state">
      <CommonIcon path="ic_sparkle" :width="24" :height="24" />
      <NuxtLink :to="`/history/faith`" class="button-state">State of faith</NuxtLink>
    </div>
    <div class="info">
      <div class="my-info">
        <CommonImage path="img_profile" :width="24" :height="24" />
        <NuxtLink :to="`/mypage`">
          <div class="name">Deepen King</div>
        </NuxtLink>
      </div>
      <div class="button-new-chat">
        <NuxtLink :to="`/home/chatId`" class="button-new-chat-link">
          <CommonIcon path="ic_plus" :width="24" :height="24" />
          New Chat
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  padding: 16px;
  padding-top: 12px;
  padding-bottom: 48px;
  background-color: $background;

  .state {
    background: linear-gradient(to right, #4e5899, #ce70ca);
    background-clip: text;
    color: transparent;
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 10px;
    gap: 4px;

    .button-state {
      background: linear-gradient(90deg, #eea7ff 0%, #7da8fe 50%, #6b72ff 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 14px;
      font-weight: 500;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;

    .my-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .button-new-chat {
      display: flex;
      align-items: center;
      border-radius: 1000px;
      border: 1px solid #323232;
      padding: 12px 16px;
      background: linear-gradient(to right, #4e5899, #ce70ca);
      gap: 8px;

      .button-new-chat-link {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
      }
    }
  }
}
</style>
