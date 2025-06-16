<script setup lang="ts">
import Splash from "~/component/Splash/index.vue";
import { useNavigateWithTransition } from "~/composable/useNavigateWithTransition";

const navigator = useNavigateWithTransition();

onMounted(() => {
  setTimeout(() => {
    navigator.replace("/home");
  }, 2000);
});
</script>

<template>
  <Splash />
</template>
