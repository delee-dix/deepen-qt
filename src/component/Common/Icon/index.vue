<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  path: string;
  width?: number;
  height?: number;
}>();

const iconPath = computed(() => `/icon/${props.path}.svg`);
</script>

<template>
  <img :src="iconPath" :alt="path" :width="width" :height="height" />
</template>
