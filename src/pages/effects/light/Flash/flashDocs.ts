export const flashContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const flashAppearanceProps = [
  { name: "variant", type: '"burst" | "wash" | "bloom"', defaultValue: '"burst"' },
  { name: "origin", type: '"pointer" | "center"', defaultValue: '"center"' },
  { name: "color", type: "string", defaultValue: "var(--gem-palette-neutral-0)" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const flashTimingProps = [
  { name: "duration", type: "number", defaultValue: "320" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const flashStateProps = [
  { name: "trigger", type: '"click" | "hover" | "press" | "always"', defaultValue: '"click"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const flashEventProps = [
  { name: "onFlash", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outFlash", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const flashStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "FlashClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const flashCssClasses = [
  { id: "root", name: ".gemfx-flash" },
  { id: "variant", name: ".gemfx-flash--{burst|wash|bloom}" },
  { id: "trigger", name: ".gemfx-flash--{click|hover|press|always}" },
  { id: "paused", name: ".gemfx-flash--paused" },
  { id: "inactive", name: ".gemfx-flash--inactive" },
  { id: "disabled", name: ".gemfx-flash--disabled" },
  { id: "touchDisabled", name: ".gemfx-flash--touch-disabled" },
  { id: "surface", name: ".gemfx-flash__surface" },
  { id: "layer", name: ".gemfx-flash__layer" },
  { id: "burst", name: ".gemfx-flash__burst" },
] as const;

export const flashCssVariables = [
  { id: "color", name: "--gemfx-flash-color" },
  { id: "duration", name: "--gemfx-flash-duration" },
  { id: "delay", name: "--gemfx-flash-delay" },
  { id: "intensity", name: "--gemfx-flash-intensity" },
  { id: "position", name: "--gemfx-flash-{x|y}" },
  { id: "size", name: "--gemfx-flash-size" },
  { id: "burstDelay", name: "--gemfx-flash-burst-delay" },
] as const;

export const flashTokens = [
  { id: "intensity", name: "--gemfx-intensity-md" },
  { id: "easing", name: "--gemfx-easing-exit" },
  { id: "palette", name: "--gem-palette-neutral-0" },
] as const;

export const flashA11yIds = [
  "hidden",
  "reducedMotion",
  "ignoreReducedMotion",
  "photosensitive",
  "pointerOnly",
  "touch",
  "meaning",
] as const;
