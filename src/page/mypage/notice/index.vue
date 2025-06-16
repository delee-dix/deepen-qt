<script setup lang="ts">
const navigator = useNavigateWithTransition();

const clickMypage = () => {
  navigator.replaceRight("/mypage");
};
</script>

<template>
  <div class="notice-container">
    <div class="empty-area"></div>
    <div class="content-area">
      <div class="header">
        <img src="/icon/ic_chevron_left.svg" alt="prev" @click="clickMypage" />
        <div>Notice</div>
        <div></div>
      </div>
      <div class="notice-list">
        <div class="notice-content">
          <div class="title">
            <div class="title-text">
              [Latest News] New Devotional Series: Journey with the Psalms
            </div>
            <NuxtLink to="/mypage/notice/id">
              <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
            </NuxtLink>
          </div>
          <div class="date">April 30, 2025</div>
        </div>
        <div class="notice-content">
          <div class="title">
            <div class="title-text">[Updates] Quiet Time Tips: How to Deepen Your Reflection</div>
            <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
          </div>
          <div class="date">April 29, 2025</div>
        </div>
        <div class="notice-content">
          <div class="title">
            <div class="title-text">[Latest News] Pray with Us: Global Mission Updates</div>
            <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
          </div>
          <div class="date">April 28, 2025</div>
        </div>
        <div class="notice-content">
          <div class="title">
            <div class="title-text">[Latest News] Daily Scripture Challenge Starts Today</div>
            <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
          </div>
          <div class="date">April 27, 2025</div>
        </div>
        <div class="notice-content">
          <div class="title">
            <div class="title-text">[Updates] Upcoming Virtual QT Gathering Schedule</div>
            <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
          </div>
          <div class="date">April 26, 2025</div>
        </div>
        <div class="notice-content">
          <div class="title">
            <div class="title-text">[Latest News] New Feature: Personalized Prayer Reminders</div>
            <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
          </div>
          <div class="date">April 25, 2025</div>
        </div>
        <div class="notice-content">
          <div class="title">
            <div class="title-text">[Notice] Your Quiet Space, Now with Enhanced UI</div>
            <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
          </div>
          <div class="date">April 24, 2025</div>
        </div>
        <div class="notice-content">
          <div class="title">
            <div class="title-text">
              [Updates] Reflection Points from Last Week’s Community Chat
            </div>
            <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
          </div>
          <div class="date">April 23, 2025</div>
        </div>
        <div class="notice-content">
          <div class="title">
            <div class="title-text">
              [Latest News] Celebrate Milestones: 1000+ QT Moments Shared
            </div>
            <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
          </div>
          <div class="date">April 22, 2025</div>
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

    .notice-list {
      display: flex;
      flex-direction: column;
      margin-top: 24px;

      .notice-content {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #363636;
        padding: 8px 0;

        .title {
          display: flex;
          width: 100%;
          font-size: 14px;
          justify-content: space-between;
          align-items: center;

          .title-text {
            width: 320px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .date {
          font-size: 11px;
        }
      }
    }
  }
}
</style>
