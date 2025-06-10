<script setup lang="ts"></script>

<template>
  <div class="notice-container">
    <div class="empty-area"></div>
    <div class="content-area">
      <div class="header">
        <img
          src="/icon/ic_chevron_left.svg"
          alt="prev"
          @click="$router.back()"
        />
        <div>Notice</div>
        <div></div>
      </div>
      <div class="detail-content">
        <div class="title">
          <div class="title-text">
            [Latest News] New Devotional Series: Journey with the Psalms
          </div>
          <div class="date">April 30, 2025</div>
        </div>
        <div class="content">
          We’re excited to introduce a brand-new devotional series designed to
          deepen your connection with God’s Word.<br />
          This month, we invite you to Journey with the Psalms, exploring the
          heartfelt prayers and praises found in the Book of Psalms.
        </div>
        <br />
        <div class="image">
          <img src="/img/img_notice_detail.png" alt="notice-detail" />
        </div>
        <br />
        <div class="content">
          Here’s what to expect:<br /><br />
          • <strong>Daily Reflections</strong>: Short meditations to inspire
          your quiet moments.<br /><br />
          • <strong>Audio Guide</strong>: Listen to reflections on key Psalms
          while you start your day.<br /><br />
          • <strong>Prayer Prompts</strong>: Thoughtful questions and prayer
          cues to guide your conversation with God.<br /><br />
          Join us in this spiritual journey as we uncover the timeless wisdom
          and comfort of the Psalms.<br /><br />
          🙏 Let’s seek His presence together.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notice-container {
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
    overflow-y: auto;

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

    .detail-content {
      display: flex;
      flex-direction: column;
      margin-top: 24px;

      .title {
        margin-bottom: 24px;

        .title-text {
          font-size: 16px;
          margin-bottom: 8px;
        }

        .date {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
