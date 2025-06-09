<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
  import { ref, onMounted } from "vue";
  import { db } from "~/util/firebase";
  import { mockReplies } from "~/util/mockReplies";

  type Message = {
    id: string;
    sender: "me" | "computer";
    text: string;
    createdAt?: any;
  };

  const route = useRoute();
  const roomId = route.params.roomId as string;

  const messages = ref<Message[]>([]);
  const input = ref("");

  function getComputerReply(message: string): string {
    const found = mockReplies.find((item) => item.keywords.some((keyword) => message.includes(keyword)));
    return found ? found.reply : "다시 말씀해 주세요.";
  }

  onMounted(() => {
    const messagesRef = collection(db, "chatRooms", roomId, "messages");
    const q = query(messagesRef, orderBy("createdAt"));

    onSnapshot(q, (snapshot) => {
      messages.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
    });
  });

  const sendMessage = async () => {
    if (!input.value.trim()) return;

    await addDoc(collection(db, "chatRooms", roomId, "messages"), {
      sender: "me",
      text: input.value,
      createdAt: serverTimestamp(),
    });

    await addDoc(collection(db, "chatRooms", roomId, "messages"), {
      sender: "computer",
      text: getComputerReply(input.value),
      createdAt: serverTimestamp(),
    });

    input.value = "";
  };
</script>

<template>
  <div class="chat-container">
    <!-- <h2>채팅방: {{ roomId }}</h2> -->
    <div v-if="messages.length === 0">아직 메시지가 없습니다.</div>
    <div
      v-for="message in messages"
      :key="message.id"
      :class="message.sender === 'me' ? 'my-message' : 'computer-message'"
    >
      <strong>{{ message.sender === "me" ? "Me" : "Computer" }}:</strong>
      {{ message.text }}
    </div>
  </div>
  <form @submit.prevent="sendMessage" class="input-area">
    <input v-model="input" class="chat-input" placeholder="메시지를 입력하세요" />
    <button type="submit" class="send-button">전송</button>
  </form>
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
