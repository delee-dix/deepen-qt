<script setup lang="ts">
import Splash from "~/component/Splash/index.vue";

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/home");
  }, 2000);
});
</script>

<template>
  <Splash />
</template>
