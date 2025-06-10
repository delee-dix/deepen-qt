<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "nuxt/app";

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/");
  }, 3000);
});
</script>

<template>
  <div class="welcome">
    <img src="/icon/ic_symbol.svg" alt="splash" />
    <h1>Deepen QT</h1>
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  background-color: #090607;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  margin: auto;
  padding: 16px;
  box-sizing: border-box;

  h1 {
    background: linear-gradient(to right, #4e5899, #ce70ca);
    background-clip: text;
    color: transparent;
  }

  .button {
    border: 2px solid purple;
    padding: 10px;
  }
}
</style>
