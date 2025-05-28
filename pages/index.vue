<script setup lang="ts">
import { initializeApp } from "firebase/app";
import {
  addDoc,
  getFirestore,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { ref } from "vue";
import { mockReplies } from "~/mockReplies";

type Message = {
  id: string;
  sender: "me" | "computer";
  text: string;
  createdAt?: any;
};

const firebaseConfig = {
  apiKey: "AIzaSyBcgHiQgUHjBvIBJSO74pg2kSJpQlIep18",
  authDomain: "deepen-qt-test.firebaseapp.com",
  projectId: "deepen-qt-test",
  storageBucket: "deepen-qt-test.firebasestorage.app",
  messagingSenderId: "661690169876",
  appId: "1:661690169876:web:d8c7f486167df089840501",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const messages = ref<Message[]>([]);
const input = ref<string>("");

const q = query(collection(db, "messages"), orderBy("createdAt"));

onSnapshot(q, (snapshot) => {
  messages.value = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Message[];
});

function getComputerReply(message: string): string {
  const found = mockReplies.find((item) =>
    item.keywords.some((keyword) => message.includes(keyword))
  );
  return found ? found.reply : "다시 말씀해 주세요.";
}

async function sendMessage(): Promise<void> {
  if (!input.value.trim()) return;

  const userInput = input.value;
  input.value = "";

  await addDoc(collection(db, "messages"), {
    sender: "me",
    text: userInput,
    createdAt: serverTimestamp(),
  });

  setTimeout(async () => {
    const reply = getComputerReply(userInput);
    await addDoc(collection(db, "messages"), {
      sender: "computer",
      text: reply,
      createdAt: serverTimestamp(),
    });
  }, 1000);
}
</script>

<template>
  <div>
    <div class="chat-container">
      <div
        v-for="(message, idx) in messages"
        :key="idx"
        :class="message.sender === 'me' ? 'my-message' : 'computer-message'"
      >
        <strong>{{ message.sender === "me" ? "Me" : "computer" }}:</strong>
        {{ message.text }}
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="input-area">
      <input
        v-model="input"
        @keydown.enter="sendMessage"
        placeholder="메시지를 입력하세요"
        class="chat-input"
      />
      <button type="submit" class="send-button" @click="sendMessage">
        전송
      </button>
      <!-- <button @click="testWrite">Firestore에 메시지 저장</button> -->
    </form>
  </div>
</template>

<style lang="scss" scoped>
.chat-container {
  border: 3px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  height: 90vh;
  max-width: 600px;
  margin: auto;
  padding: 16px;
  box-sizing: border-box;

  .my-message {
    text-align: right;
    color: #1976d2;
  }
  .computer-message {
    text-align: left;
    color: #333;
  }
}

.input-area {
  display: flex;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ccc;

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
</style>
