import { ref } from "vue";

const pageStack = ref<string[]>([]);

export function usePageStack() {
  return {
    pageStack,
    push(path: string) {
      const last = pageStack.value[pageStack.value.length - 1];

      if (last === path) return;
      pageStack.value.push(path);
    },
    pop() {
      if (pageStack.value.length <= 0) return;

      pageStack.value.pop();
    },
    getDirection(current: string) {
      const index = pageStack.value.indexOf(current);
      return index !== -1 ? "backward" : "forward";
    },
    getCurrentStack() {
      return pageStack.value;
    },
  };
}
