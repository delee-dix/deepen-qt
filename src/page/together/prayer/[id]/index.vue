<script setup lang="ts">
import { useNavigateWithTransition } from "~/composable/useNavigateWithTransition";

const { navigateLeft, navigate, navigateTop } = useNavigateWithTransition();

const clickMypage = () => {
  navigateTop("/mypage");
};
</script>

<template>
  <div class="prayer-detail-container">
    <CommonHeader isQtDetail>
      <CommonIcon
        path="ic_arrow_left"
        :width="24"
        :height="24"
        @click="navigateLeft('/together/prayer')"
      />
      <NuxtLink to="/"> Deepen QT </NuxtLink>
      <CommonImage path="img_profile" :width="24" :height="24" @click="clickMypage" />
    </CommonHeader>
    <div class="prayer-container">
      <div class="prayer-date">
        <div class="badge">Jun 9, 2025</div>
      </div>

      <div class="prayer-content">
        Dear Heavenly Father, As I enter this quiet moment, I long to hear Your voice.
        <br />
        <br />
        Still my heart and calm my thoughts, so that I can rest in Your presence. Speak to me
        through Your Word today, and help me to see Your hand at work in my life.

        <br />
        <br />
        Remind me that You are my refuge and strength, my ever-present help in times of need. Let
        this time of reflection not only fill me with peace but also renew my spirit for the day
        ahead.
        <br />
        <br />
        Help me to carry Your presence into every conversation, decision, and challenge I face
        today. Thank You for meeting me in the quiet and for always being near. In Jesus’ name, I
        pray, Amen.
      </div>
    </div>
    <div class="button-ghost-container">
      <div class="button-ghost" @click="navigate('/home/chatId')">New Conversation</div>
    </div>
    <CommonImage path="img_bg_cross" class="bg-cross" />
  </div>
</template>

<style lang="scss" scoped>
.prayer-detail-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .prayer-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    margin-top: 80px;
    padding: 0 16px;

    .prayer-date {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: fit-content;
      padding: 16px 0;

      .badge {
        background-color: rgb(46, 48, 49, 0.8);
        border-radius: 1000px;
        color: $body;
        font-size: 14px;
        font-weight: 300;
        line-height: 150%;
        letter-spacing: -0.02em;
        padding: 4px 12px;
      }
    }

    .prayer-content {
      display: flex;
      flex-direction: column;
      width: 100%;

      color: $body;
      font-size: 16px;
      font-weight: 300;
      line-height: 150%;
      letter-spacing: -0.02em;
    }
  }

  .bg-cross {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: rgba($color: $background, $alpha: 0.9);
  }
}

.button-ghost-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  .button-ghost {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 52px;
    padding: 8px 16px;
    background: $background-glass;
    box-shadow: inset 4px 4px 24px 0px rgba(256, 256, 256, 0.04);
    border: 1px solid $border;
    border-radius: 4px;
    color: $body;
  }
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-left-enter-to,
.slide-right-enter-to,
.slide-left-leave-from,
.slide-right-leave-from {
  transform: translateX(0);
}
</style>
