<script setup lang="ts">
  import { computed } from "vue";

  const props = defineProps<{
    path: string;
    width?: number;
    height?: number;
    style?: Record<string, string>;
  }>();

  const iconPath = computed(() => `/img/${props.path}.png`);
</script>

<template>
  <img :src="iconPath" :alt="path" :width="width" :height="height" :style="style" draggable="false" />
</template>
