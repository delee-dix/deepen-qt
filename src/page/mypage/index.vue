<script setup lang="ts">
import { useModalStore } from "~/store/modal";

const modalStore = useModalStore();
const router = useRouter();

const clickSignout = () => {
  modalStore.showModal("signout");
};

const clickConfirm = () => {
  router.push("/");
  modalStore.hideModal("signout");
};
</script>

<template>
  <div class="mypage-container">
    <div class="empty-area"></div>
    <div class="content-area">
      <div class="header">
        <div :style="{ width: '24px' }"></div>
        <div>My Page</div>
        <img src="/icon/ic_close.svg" alt="chevron-left" @click="router.back()" />
      </div>
      <div class="profile-area">
        <NuxtLink :to="`/mypage/edit`">
          <div class="profile-image">
            <img
              src="/img/img_profile_change.png"
              alt="profile"
              :style="{ width: '120px', height: '120px' }"
            />
          </div>
        </NuxtLink>
        <div class="nickname">Deepen King</div>
        <div class="email">deepenking@deepen.com</div>
      </div>
      <div class="mypage-list">
        <NuxtLink :to="'/mypage/notice'" class="notice">
          <div class="left">
            <img src="/icon/ic_notice.svg" alt="notice" />
            <div>Notice</div>
          </div>
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </NuxtLink>
        <NuxtLink :to="'/mypage/setting'" class="setting">
          <div class="left">
            <img src="/icon/ic_sorting.svg" alt="setting" />
            <div>Setting</div>
          </div>
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </NuxtLink>
        <NuxtLink :to="'/mypage/terms'" class="terms">
          <div class="left">
            <img src="/icon/ic_terms.svg" alt="terms" />
            <div>Terms</div>
          </div>
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </NuxtLink>
        <NuxtLink :to="'/mypage/privacy'" class="privacy">
          <div class="left">
            <img src="/icon/ic_privacy.svg" alt="privacy" />
            <div>Privacy Policy</div>
          </div>
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </NuxtLink>
        <div class="signout" @click="clickSignout">
          <div class="left">
            <img src="/icon/ic_signout.svg" alt="privacy" />
            <div>Exit QT</div>
          </div>
          <img src="/icon/ic_chevron_right.svg" alt="chevron-right" />
        </div>
      </div>
    </div>
  </div>
  <CommonModalTwoButton
    modal-id="signout"
    title="Exit QT"
    description="Are you sure you want to exit QT?"
    @click-confirm-button="clickConfirm"
  />
</template>

<style lang="scss" scoped>
.mypage-container {
  background-color: #090607;
  color: #c6c6c6;
  display: flex;
  flex-direction: column;
  justify-content: end;
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
    display: flex;
    padding: 16px;
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

  .profile-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    .nickname {
      font-size: 16px;
      margin-top: 16px;
      margin-bottom: 8px;
    }

    .email {
      font-size: 14px;
      margin-bottom: 48px;
    }
  }

  .mypage-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 40px;
    padding-bottom: 32px;

    .notice,
    .setting,
    .terms,
    .privacy {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: inherit;
      text-decoration: none;

      .left {
        display: flex;
        gap: 8px;
      }
    }

    .signout {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #be4e4e;
      border-top: 1px solid #363636;
      padding-top: 32px;

      .left {
        display: flex;
        gap: 8px;
      }
    }

    .line {
      width: 100%;
      height: 1px;
    }
  }
}
</style>
