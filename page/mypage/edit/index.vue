<script setup lang="ts">
const titleList = [
  "My Page",
  "Edit Profile",
  "Notice",
  "Setting",
  "Terms",
  "Privacy Policy",
];

const message = ref("");
const editableDiv = ref<HTMLDivElement | null>(null);

const onInput = () => {
  message.value = editableDiv.value?.innerText.trim() || "";
};
</script>

<template>
  <div class="edit-container">
    <div class="empty-area"></div>
    <div class="content-area">
      <div class="header">
        <img
          src="/icon/ic_chevron_left.svg"
          alt="prev"
          @click="$router.back()"
        />
        <div>Edit Profile</div>
        <div>Save</div>
      </div>
      <div class="profile-area">
        <div class="profile-image">
          <img
            src="/img/img_profile_change.png"
            alt="profile"
            :style="{ width: '120px', height: '120px' }"
          />
        </div>
      </div>
      <div class="mypage-list">
        <div>Name</div>
        <div
          class="input"
          ref="editableDiv"
          contenteditable="true"
          @input="onInput"
          placeholder="Name"
        ></div>
        <br />
        <div>User Email</div>
        <div class="input">deepenking@deepen.com</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.edit-container {
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

  .profile-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    .profile-image {
      margin-bottom: 48px;
    }
  }

  .mypage-list {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .input {
      display: flex;
      justify-content: center;
      align-items: center;
      // padding-left: 16px;
      width: 100%;
      height: 48px;
      border: 1px solid #363636;
      border-radius: 4px;
      background-color: #3c3c3c;
      box-shadow: inset 0 4px 8px rgba(198, 198, 198, 0.2);
    }
  }
}
</style>
