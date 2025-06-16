<script setup lang="ts">
import { useNavigateWithTransition } from "~/composable/useNavigateWithTransition";
import { useModalStore } from "~/store/modal";

const modalStore = useModalStore();
const router = useRouter();

const displayName = ref("");
const editableDiv = ref<HTMLDivElement | null>(null);

const navigator = useNavigateWithTransition();
const profilePhoto = ref("/img/img_profile_change.png");
const fileInput = ref<HTMLInputElement | null>(null);

const onInput = () => {
  displayName.value = editableDiv.value?.innerText.trim() || "";
};

const clickMypage = () => {
  navigator.replaceRight("/mypage");
};

const clickProfile = () => {
  modalStore.showModal("photo");
};

const clickCamera = () => {
  console.log("clickCamera");
};

const clickLibrary = () => {
  console.log("clickLibrary");
  modalStore.hideModal("photo");
  fileInput.value?.click();
};

const clickCancel = () => {
  modalStore.hideModal("photo");
};

const onSaveValue = () => {
  sessionStorage.setItem("displayName", displayName.value);
  sessionStorage.setItem("profilePhoto", profilePhoto.value || "");
  router.push("/mypage");
};

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      profilePhoto.value = result;
      if (typeof window !== "undefined") {
        sessionStorage.setItem("profilePhoto", result);
      }
    };
    reader.readAsDataURL(file);
  }
};

onMounted(() => {
  const savedName = sessionStorage.getItem("displayName");
  const savedPhoto = sessionStorage.getItem("profilePhoto");
  if (savedName) {
    displayName.value = savedName;
  }
  if (savedPhoto) {
    profilePhoto.value = savedPhoto;
  }
  if (editableDiv.value) {
    editableDiv.value.innerText = displayName.value || "Deepen King";
  }
});
</script>

<template>
  <div class="edit-container">
    <div class="empty-area"></div>
    <div class="content-area">
      <div class="header">
        <CommonIcon path="ic_chevron_left" @click="clickMypage" />
        <div>Edit Profile</div>
        <div @click="onSaveValue">Save</div>
      </div>
      <div class="profile-area" @click="clickProfile">
        <div class="profile-image">
          <img :src="profilePhoto" alt="profile" style="width: 120px; height: 120px" />
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
  <CommonModalThreeButton
    modal-id="photo"
    title="Edit Photo"
    description="Please choose your preferred method.?"
    first-label="Camera"
    second-label="Library"
    third-label="Cancel"
    first-icon-path="ic_camera"
    second-icon-path="ic_photo"
    @click-first-button="clickCamera"
    @click-second-button="clickLibrary"
    @click-third-button="clickCancel"
  />

  <input type="file" ref="fileInput" accept="image/*" @change="onFileChange" />
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
