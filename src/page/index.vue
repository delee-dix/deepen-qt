<script setup lang="ts">
import Splash from "~/component/Splash/index.vue";
import { useNavigateWithTransition } from "~/composable/useNavigateWithTransition";

const navigator = useNavigateWithTransition();

onMounted(() => {
  const visited = sessionStorage.getItem("hasVisited");
  if (!visited) {
    sessionStorage.setItem("hasVisited", "true");
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
