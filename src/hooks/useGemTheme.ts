import { useSyncExternalStore } from "react";
import { THEME_ATTRIBUTE, getTheme, type Theme } from "@gem-org/gem-system/tokens";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [THEME_ATTRIBUTE],
  });
  return () => observer.disconnect();
}

export function useGemTheme(): Theme {
  return useSyncExternalStore(
    subscribe,
    () => getTheme(),
    () => "light",
  );
}
