<script setup lang="ts">
import { computed } from "vue";
import { VueScrollPicker, type VueScrollPickerOption } from "vue-scroll-picker";

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const props = defineProps<{
  options: VueScrollPickerOption[];
  modelValue: string;
}>();

const localValue = computed({
  get: () => props.modelValue,
  set: value => emit("update:modelValue", value),
});
</script>

<template>
  <VueScrollPicker v-model="localValue" :options="options" class="picker-column">
    <template #default="{ option }">
      <div class="picker-item" :class="{ selected: option.value === localValue }">
        {{ option.name }}
      </div>
    </template>
  </VueScrollPicker>
</template>

<style lang="scss">
.picker-column {
  width: 60px;
  height: 100%;
  overflow: hidden;

  .picker-item {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: $gray100;
    opacity: 0.5;
    transition: all 0.2s;

    &.selected {
      font-size: 24px;
      color: $gray50;
      opacity: 1;
    }
  }
}

.vue-scroll-picker {
  position: relative;
  width: 100%;
  height: 10em;
  overflow: hidden;
  user-select: none;
}

.vue-scroll-picker-rotator {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 0.6em);
}

.vue-scroll-picker-rotator-transition {
  transition: top ease 150ms;
}

.vue-scroll-picker-item {
  text-align: center;
  line-height: 1.2em;
  color: #363636;
}

.vue-scroll-picker-item[aria-selected="true"] {
  color: #007bff;
}

.vue-scroll-picker-item[data-value=""],
.vue-scroll-picker-item[aria-disabled="true"] {
  color: #ccc;
}

.vue-scroll-picker-item[data-value=""][aria-selected="true"],
.vue-scroll-picker-item[aria-disabled="true"][aria-selected="true"] {
  color: #aaa;
}

.vue-scroll-picker-layer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.vue-scroll-picker-layer-top,
.vue-scroll-picker-layer-selection,
.vue-scroll-picker-layer-bottom {
  position: absolute;
  left: 0;
  right: 0;
}

.vue-scroll-picker-layer-top {
  box-sizing: border-box;
  top: 0;
  height: calc(50% - 1em);
  cursor: pointer;
}

.vue-scroll-picker-layer-selection {
  top: calc(50% - 1em);
  bottom: calc(50% - 1em);
}

.vue-scroll-picker-layer-bottom {
  bottom: 0;
  height: calc(50% - 1em);
  cursor: pointer;
}
</style>
