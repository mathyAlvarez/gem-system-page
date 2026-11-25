import { loader } from "@monaco-editor/react";

let preload: Promise<unknown> | null = null;

/** Starts downloading Monaco once; safe to call from DocsLayout on mount. */
export function preloadMonaco() {
  if (preload) return preload;
  preload = loader.init().catch(() => {
    preload = null;
  });
  return preload;
}
