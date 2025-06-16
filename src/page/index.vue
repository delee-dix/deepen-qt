<script setup lang="ts">
import Splash from "~/component/Splash/index.vue";
import { useNavigateWithTransition } from "~/composable/useNavigateWithTransition";

const navigator = useNavigateWithTransition();

onMounted(() => {
  const visited = localStorage.getItem("hasVisited");
  if (!visited) {
    localStorage.setItem("hasVisited", "true");
    setTimeout(() => {
      navigator.replace("/home");
    }, 2000);
  } else {
    navigator.replace("/home");
  }
});
</script>

<template>
  <Splash />
</template>
