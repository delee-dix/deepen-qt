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
  <div class="splash-container">
    <CommonIcon :path="'ic_symbol'" alt="splash" :height="204" />
    <div class="title">Deepen QT</div>
  </div>
</template>

<style lang="scss" scoped>
.splash-container {
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
  gap: 20px;

  .title {
    font-size: 40px;
    font-weight: 700;
    background: linear-gradient(to right, #4e5899, #ce70ca);
    background-clip: text;
    color: transparent;
  }
}
</style>
