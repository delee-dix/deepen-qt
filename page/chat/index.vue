<script setup lang="ts">
  import { ref } from "vue";

  import { collection, getDocs } from "firebase/firestore";
  import { db } from "~/util/firebase";

  import Create from "./create.vue";

  type ChatRoom = {
    id: string;
    name: string;
    createdAt: any;
  };

  const chatRooms = ref<ChatRoom[]>([]);

  const fetchChatRooms = async () => {
    const snapshot = await getDocs(collection(db, "chatRooms"));
    console.log("읽은 채팅방 수:", snapshot.size);
    snapshot.docs.forEach((doc) => {
      console.log("채팅방 문서:", doc.id, doc.data());
    });

    chatRooms.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ChatRoom[];
  };

  fetchChatRooms();
</script>

<template>
  <div class="chat-list">
    <h1 class="title">채팅방 목록</h1>
    <Create class="create-area" />
    <div v-if="chatRooms.length > 0">
      <div v-for="room in chatRooms" :key="room.id">
        <div class="room-info">
          <NuxtLink :to="`/chat/${room.id}`">{{ room.name }}</NuxtLink>
        </div>
      </div>
    </div>
    <p v-else>채팅방이 없습니다. 새로 만들어보세요!</p>
  </div>
</template>

<style lang="scss" scoped>
  .chat-list {
    border: 3px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    height: 95vh;
    max-width: 600px;
    margin: auto;
    padding: 16px;
    box-sizing: border-box;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .create-area {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .room-info {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      border: 2px solid purple;
      padding: 10px;
    }
  }
</style>
