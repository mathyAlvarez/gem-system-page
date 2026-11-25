export const rippleContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const rippleAppearanceProps = [
  { name: "variant", type: '"ink" | "ring" | "pulse"', defaultValue: '"ink"' },
  { name: "origin", type: '"pointer" | "center"', defaultValue: '"pointer"' },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const rippleTimingProps = [
  { name: "duration", type: "number", defaultValue: "600" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const rippleStateProps = [
  { name: "trigger", type: '"click" | "hover" | "press"', defaultValue: '"click"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "false" },
] as const;

export const rippleEventProps = [
  { name: "onRipple", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outRipple", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const rippleStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "RippleClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const rippleCssClasses = [
  { id: "root", name: ".gemfx-ripple" },
  { id: "variant", name: ".gemfx-ripple--{ink|ring|pulse}" },
  { id: "trigger", name: ".gemfx-ripple--{click|hover|press}" },
  { id: "paused", name: ".gemfx-ripple--paused" },
  { id: "inactive", name: ".gemfx-ripple--inactive" },
  { id: "disabled", name: ".gemfx-ripple--disabled" },
  { id: "touchDisabled", name: ".gemfx-ripple--touch-disabled" },
  { id: "surface", name: ".gemfx-ripple__surface" },
  { id: "layer", name: ".gemfx-ripple__layer" },
  { id: "wave", name: ".gemfx-ripple__wave" },
] as const;

export const rippleCssVariables = [
  { id: "color", name: "--gemfx-ripple-color" },
  { id: "timing", name: "--gemfx-ripple-duration, --gemfx-ripple-intensity" },
  { id: "wave", name: "--gemfx-ripple-x, -y, -size, -wave-delay" },
] as const;

export const rippleTokens = [
  { id: "intensity", name: "--gemfx-intensity-md" },
  { id: "easing", name: "--gemfx-easing-exit" },
] as const;

export const rippleA11yIds = [
  "decorative",
  "keyboard",
  "focus",
  "reducedMotion",
  "ignoreReducedMotion",
  "touch",
] as const;
