<script setup lang="ts"></script>

<template>
  <div class="privacy-container">
    <div class="empty-area"></div>
    <div class="content-area">
      <!-- <div class="bar"></div> -->
      <div class="header">
        <img src="/icon/ic_chevron_left.svg" alt="prev" @click="$router.back()" />
        <div>Privacy Policy</div>
        <div></div>
      </div>
      <div class="privacy-content">
        <div class="intro">
          Deepen QT (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy
          Policy describes how we collect, use, and share information when you use our app and
          services. By using Deepen QT, you agree to the terms of this Privacy Policy.
        </div>
        <div class="one">
          <strong>1. Information We Collect</strong><br />
          We may collect the following types of information:<br /><br />
          Personal information (such as your name, email address)<br /><br />
          Usage data (including log information, device type, and interaction data)<br /><br />
          Content you share within the app (prayer notes, reflections, etc.)
        </div>
        <div class="two">
          <strong>2. How We Use Your Information</strong><br />
          We use the information we collect to:<br /><br />
          Provide and maintain the app<br /><br />
          Personalize your experience (e.g., devotional suggestions)<br /><br />
          Improve app performance and features<br /><br />
          Communicate with you (e.g., updates, announcements)
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.privacy-container {
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
      border: 1.5px solid #c6c6c6;
      border-radius: 1000px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 32px;
    }

    .privacy-content {
      display: flex;
      flex-direction: column;
      gap: 14px;

      .intro {
        margin-top: 24px;
      }
    }
  }
}
</style>
