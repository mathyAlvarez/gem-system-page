import { THEME_ATTRIBUTE, getTheme, setTheme } from "@gem-org/gem-system/tokens";

const STORAGE_KEY = "gem-docs-theme";

const stored = localStorage.getItem(STORAGE_KEY);
if (stored === "light" || stored === "dark") setTheme(stored);

new MutationObserver(() => {
  localStorage.setItem(STORAGE_KEY, getTheme());
}).observe(document.documentElement, { attributes: true, attributeFilter: [THEME_ATTRIBUTE] });
