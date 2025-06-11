<script setup lang="ts"></script>

<template>
  <div class="terms-container">
    <div class="empty-area"></div>
    <div class="content-area">
      <!-- <div class="bar"></div> -->
      <div class="header">
        <img src="/icon/ic_chevron_left.svg" alt="prev" @click="$router.back()" />
        <div>Terms</div>
        <div></div>
      </div>
      <div class="terms-content">
        <div class="intro">
          Welcome to Deepen QT, a space designed to help you deepen your spiritual journey through
          daily reflections, prayers, and conversations. Please read these Terms of Service
          (“Terms”) carefully. By accessing or using our app, you agree to be bound by these Terms.
        </div>
        <div class="one">
          <strong>1. Acceptance of Terms</strong><br />
          By using Deepen QT, you agree to comply with and be legally bound by these Terms. If you
          do not agree, please do not use the app.
        </div>
        <div class="two">
          <strong>2. Use of the Service</strong><br />
          • Deepen QT is intended for personal, non-commercial use.<br />
          • You agree to use the app in a manner consistent with applicable laws and regulations.<br />
          • You may not use the app to transmit any harmful or unlawful content.
        </div>
        <div class="three">
          <strong>3. Content and Intellectual Property</strong><br />
          • All content, including text, images, and audio, is owned by Deepen QT or its licensors
          and protected by intellectual property laws.<br />
          • You may not reproduce, distribute, or modify any content without written permission.
        </div>
        <div class="four">
          <strong>4. Privacy</strong><br />
          Your privacy is important to us. Please review our [Privacy Policy] for details on how we
          collect and use personal information.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.terms-container {
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

    .terms-content {
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
