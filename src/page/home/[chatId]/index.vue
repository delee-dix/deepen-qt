<script setup lang="ts">
import { ref } from "vue";
import { useNavigateWithTransition } from "~/composable/useNavigateWithTransition";

const { navigateRight, navigateTop, navigate } = useNavigateWithTransition();

const chatContent = ref<string>("");

const clickHistory = () => {
  navigateRight("/history");
};

const clickMypage = () => {
  navigateTop("/mypage");
};
</script>

<template>
  <div class="qt-detail-container">
    <CommonHeader isQtDetail>
      <CommonIcon path="ic_menu_search" :width="24" :height="24" @click="clickHistory" />
      <div class="title" @click="navigate('/home')">Deepen QT</div>
      <CommonImage path="img_profile" :width="24" :height="24" @click="clickMypage" />
    </CommonHeader>

    <div class="chat-container">
      <div class="chat-user-container">
        <ChatUserBubble
          text="I can't concentrate well these days while doing QT. I'm stressed out because of my children. They're my beloved children..."
        />
      </div>
      <div class="chat-bot-container">
        <CommonIcon path="ic_symbol" :width="32" :height="32" />
        <ChatBotBubble
          text="I really understand that feeling. Having a teenager is a special challenge. I think that even the doubts about your qualifications as a parent are actually an expression of your earnest desire to be a good parent."
        />
        <ChatBotBubble
          text="'Children, obey your parents in the Lord, for this is right. Honor your father and mother, which is the first commandment with promise, so that it may be well with you and you may live long on the earth. And, fathers, do not provoke your children to anger, but bring them up in the training and instruction of the Lord. (Ephesians 6:1-4)'"
          isQuote
        />
        <ChatBotBubble
          text="Okay. Today's 매일성경 is covering a scene from 1 Samuel 17. Have you ever heard the story of David and Goliath?"
        />
        <div class="feed-back-container">
          <CommonIcon path="ic_copy" :width="24" :height="24" />
          <CommonIcon path="ic_thumbs_up" :width="24" :height="24" />
          <CommonIcon path="ic_thumbs_down" :width="24" :height="24" />
        </div>
      </div>
      <div class="chat-user-container">
        <ChatUserBubble
          text="I can't concentrate well these days while doing QT. I'm stressed out because of my children. They're my beloved children..."
        />
      </div>
    </div>
    <CommonInputChat v-model="chatContent" />
    <CommonImage path="img_bg_cross" class="bg-cross" />
  </div>
</template>

<style lang="scss" scoped>
.qt-detail-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .chat-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 80px;
    padding: 0 16px;
    padding-bottom: 120px;
    overflow-y: auto;

    .chat-user-container {
      display: flex;
      flex-direction: column;
      align-items: end;
      width: 100%;
      height: fit-content;
      padding: 20px 0;
      box-sizing: border-box;
    }

    .chat-bot-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: fit-content;
      padding: 20px 0;
      gap: 16px;
      box-sizing: border-box;

      .feed-back-container {
        display: flex;
        flex-direction: row;
        gap: 16px;
      }
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
</style>
