<script setup lang="ts">
import Splash from "~/component/Splash/index.vue";

const router = useRouter();

onMounted(() => {
  const visited = localStorage.getItem("hasVisited");
  if (!visited) {
    localStorage.setItem("hasVisited", "true");
    setTimeout(() => {
      router.push("/home");
    }, 2000);
  } else {
    router.push("/home");
  }
});
</script>

<template>
  <Splash />
</template>
