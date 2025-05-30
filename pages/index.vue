<script setup lang="ts"></script>

<template>
  <div class="welcome">
    <h1>Deepen QT에 오신 걸 환영합니다!</h1>
    <div class="button"><NuxtLink to="/chat">채팅방으로 이동</NuxtLink></div>
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  border: 3px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  max-width: 600px;
  margin: auto;
  padding: 16px;
  box-sizing: border-box;

  .button {
    border: 2px solid purple;
    padding: 10px;
  }
}
</style>
