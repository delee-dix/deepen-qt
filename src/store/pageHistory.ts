export function usePageHistoryStore() {
  const pageStack = useState<string[]>("page-stack", () => []);

  const pushState = (path: string) => {
    const last = pageStack.value[pageStack.value.length - 1];
    if (last === path) return;
    pageStack.value.push(path);
  };

  const popState = () => {
    if (pageStack.value.length > 0) {
      pageStack.value.pop();
    }
  };

  const replaceState = (path: string) => {
    const last = pageStack.value.at(-1);
    if (!last || last === path) return;
    pageStack.value[pageStack.value.length - 1] = path;
  };

  const getState = () => pageStack.value;
  const getLength = () => pageStack.value.length;

  return {
    pageStack,
    pushState,
    popState,
    replaceState,
    getState,
    getLength,
  };
}
