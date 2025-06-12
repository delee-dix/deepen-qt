import { ref } from "vue";
import { usePageStack } from "./usePageStack";

const transitionDirection = ref<"right" | "left" | "top" | "bottom" | "default">("default");

export function usePageTransition() {
  const { pageStack, push, pop, getCurrentStack } = usePageStack();

  return {
    transitionDirection,
    pageStack,

    setRight() {
      transitionDirection.value = "right";
    },

    setLeft() {
      transitionDirection.value = "left";
    },

    reset() {
      transitionDirection.value = "default";
    },

    navigate(path: string) {
      push(path);
      transitionDirection.value = "default";
      return navigateTo(path);
    },

    navigateRight(path: string) {
      push(path);
      transitionDirection.value = "right";
      return navigateTo(path);
    },

    navigateLeft(path: string) {
      push(path);
      transitionDirection.value = "left";
      return navigateTo(path);
    },

    navigateTop(path: string) {
      push(path);
      transitionDirection.value = "top";
      return navigateTo(path);
    },

    navigateBottom(path: string) {
      push(path);
      transitionDirection.value = "bottom";
      return navigateTo(path);
    },

    navigateBack() {
      const currentDirection = transitionDirection.value;

      switch (currentDirection) {
        case "right":
          transitionDirection.value = "left";
          break;
        case "left":
          transitionDirection.value = "right";
          break;
        case "top":
          transitionDirection.value = "bottom";
          break;
        case "bottom":
          transitionDirection.value = "top";
          break;
        case "default":
        default:
          transitionDirection.value = "default";
          break;
      }

      pop();

      const stack = getCurrentStack();
      const previousPath = stack.length > 0 ? stack[stack.length - 1] : "/home";

      return navigateTo(previousPath);
    },

    getDirection() {
      return transitionDirection.value;
    },

    setPageTransition(to: any, direction: "right" | "left") {
      if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean") {
        to.meta.pageTransition.name = direction === "right" ? "slide-left" : "slide-right";
      }
    },

    getCurrentStack,

    clearStack() {
      const currentPath = useRoute().fullPath;
      pageStack.value.length = 0;
      push(currentPath);
    },

    getStackLength() {
      return getCurrentStack().length;
    },

    canGoBack() {
      return getCurrentStack().length > 1;
    },
  };
}
