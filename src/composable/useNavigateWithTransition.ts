type Direction = "right" | "left" | "top" | "bottom" | "default";

const transitionDirection = ref<Direction>("default");

export function useNavigateWithTransition() {
  const pageHistoryStore = usePageHistoryStore();

  const push = (path: string, direction: Direction = "default") => {
    pageHistoryStore.pushState(path);
    transitionDirection.value = direction;

    return navigateTo(path);
  };

  const replace = (path: string, direction: Direction = "default") => {
    pageHistoryStore.replaceState(path);
    transitionDirection.value = direction;

    return navigateTo(path, { replace: true });
  };

  const back = () => {
    transitionDirection.value = getReverseDirection(transitionDirection.value);

    pageHistoryStore.popState();

    const stack = pageHistoryStore.getState();
    const previousPath = stack.length > 0 ? stack[stack.length - 1] : "/home";

    return navigateTo(previousPath);
  };

  const getReverseDirection = (dir: Direction): Direction =>
    (
      ({
        right: "left",
        left: "right",
        top: "bottom",
        bottom: "top",
        default: "default",
      }) as const
    )[dir];

  const clearStack = () => {
    const currentPath = useRoute().fullPath;
    pageHistoryStore.pageStack.value.length = 0;
    pageHistoryStore.pushState(currentPath);
  };

  return {
    transitionDirection,
    //
    push,
    pushRight: (path: string) => push(path, "right"),
    pushLeft: (path: string) => push(path, "left"),
    pushTop: (path: string) => push(path, "top"),
    pushBottom: (path: string) => push(path, "bottom"),
    //
    replace,
    replaceRight: (path: string) => replace(path, "right"),
    replaceLeft: (path: string) => replace(path, "left"),
    replaceTop: (path: string) => replace(path, "top"),
    replaceBottom: (path: string) => replace(path, "bottom"),
    //
    back,
    //
    clearStack,
    getDirection: () => transitionDirection.value,
    resetDirection: () => (transitionDirection.value = "default"),
  };
}
