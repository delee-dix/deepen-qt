<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createChatRoom } from "~/utils/createRoom";

const name = ref("");
const router = useRouter();

const create = async () => {
  const id = await createChatRoom(name.value, ["anonymous"]);
  router.push(`/chat/${id}`);
};
</script>

<template>
  <div class="search-area">
    <input v-model="name" placeholder="채팅방 이름 입력" />
    <button @click="create">만들기</button>
  </div>
</template>

<style scoped></style>
