<script setup lang="ts">
import { ref } from "vue";

interface Message {
  sender: string;
  text: string;
}

const messages = ref<Message[]>([
  { sender: "시스템", text: "채팅에 오신 것을 환영합니다!" },
]);

const newMessage = ref("");

function sendMessage() {
  const text = newMessage.value.trim();
  if (text === "") return;
  messages.value.push({
    sender: "나",
    text,
  });
  newMessage.value = "";
}
</script>

<template>
  <div class="chat-container">
    <div class="messages">
      <div v-for="(msg, index) in messages" :key="index" class="message">
        <strong>{{ msg.sender }}:</strong> {{ msg.text }}
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="input-area">
      <input
        v-model="newMessage"
        type="text"
        placeholder="메시지를 입력하세요..."
        class="chat-input"
      />
      <button type="submit" class="send-button">전송</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 600px;
  margin: auto;
  padding: 16px;
  box-sizing: border-box;

  .messages {
    flex: 1;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding: 8px;
    margin-bottom: 8px;
    background: #f9f9f9;

    .message {
      margin-bottom: 6px;
    }
  }

  .input-area {
    display: flex;

    .chat-input {
      flex: 1;
      padding: 8px;
      font-size: 16px;
    }
    .send-button {
      padding: 8px 12px;
      font-size: 16px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }

    .send-button:hover {
      background-color: #0056b3;
    }
  }
}
</style>
