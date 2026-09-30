export const skeletonProps = [
  { name: "variant", type: '"text" | "circular" | "rectangular"', defaultValue: '"text"' },
  { name: "animation", type: '"wave" | "pulse" | "none"', defaultValue: '"wave"' },
  { name: "radius", type: '"none" | "sm" | "md" | "lg" | "full"', defaultValue: "auto" },
  { name: "width", type: "number | string", defaultValue: "auto" },
  { name: "height", type: "number | string", defaultValue: "auto" },
  { name: "count", type: "number", defaultValue: "1" },
  { name: "gap", type: "number | string", defaultValue: "var(--gem-space-2)" },
  { name: "lastLineWidth", type: "number | string", defaultValue: '"72%"' },
  { name: "duration", type: "number", defaultValue: "1600" },
  { name: "isLoaded", type: "boolean", defaultValue: "false" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "role", type: "AriaRole", defaultValue: '"status"' },
  { name: "aria-label", type: "string", defaultValue: '"Loading"' },
  { name: "aria-labelledby", type: "string", defaultValue: "—" },
  { name: "aria-busy", type: "boolean", defaultValue: "true" },
  { name: "aria-live", type: '"polite" | "assertive" | "off"', defaultValue: '"polite"' },
  { name: "aria-hidden", type: "boolean", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "SkeletonClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLDivElement>", defaultValue: "—" },
] as const;

export const skeletonCssClasses = [
  { name: ".gem-skeleton", rule: "root" },
  { name: ".gem-skeleton--text", rule: "variant" },
  { name: ".gem-skeleton--radius-sm", rule: "radius" },
  { name: ".gem-skeleton--wave", rule: "animation" },
  { name: ".gem-skeleton--stack", rule: "stack" },
  { name: ".gem-skeleton--fit", rule: "fit" },
  { name: ".gem-skeleton--loaded", rule: "loaded" },
  { name: ".gem-skeleton--paused", rule: "paused" },
  { name: ".gem-skeleton__bone", rule: "bone" },
  { name: ".gem-skeleton__content", rule: "content" },
] as const;

export const skeletonCssVariables = [
  "--gem-skeleton-bg",
  "--gem-skeleton-shine",
  "--gem-skeleton-duration",
  "--gem-skeleton-w",
  "--gem-skeleton-h",
  "--gem-skeleton-radius",
  "--gem-skeleton-gap",
  "--gem-skeleton-last-w",
] as const;

export const skeletonTokens = [
  "--gem-color-neutral-200",
  "--gem-palette-neutral-0",
  "--gem-radius-{none|sm|md|lg|full}",
  "--gem-space-2",
  "--gem-font-sans",
] as const;
