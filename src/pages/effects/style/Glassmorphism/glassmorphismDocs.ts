export const glassmorphismContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const glassmorphismAppearanceProps = [
  {
    name: "variant",
    type: '"frost" | "clear" | "tinted" | "heavy" | "sheen"',
    defaultValue: '"frost"',
  },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "blur", type: "number | string", defaultValue: "—" },
  { name: "saturate", type: "number", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const glassmorphismTimingProps = [
  { name: "duration", type: "number", defaultValue: "280" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const glassmorphismStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const glassmorphismEventProps = [
  { name: "onGlassmorphism", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outGlassmorphism", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const glassmorphismStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "GlassmorphismClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const glassmorphismCssClasses = [
  { id: "root", name: ".gemfx-glassmorphism" },
  { id: "variant", name: ".gemfx-glassmorphism--{frost|clear|tinted|heavy|sheen}" },
  { id: "trigger", name: ".gemfx-glassmorphism--{hover|click}" },
  { id: "on", name: ".gemfx-glassmorphism--on" },
  { id: "paused", name: ".gemfx-glassmorphism--paused" },
  { id: "inactive", name: ".gemfx-glassmorphism--inactive" },
  { id: "disabled", name: ".gemfx-glassmorphism--disabled" },
  { id: "layer", name: ".gemfx-glassmorphism__layer" },
  { id: "pane", name: ".gemfx-glassmorphism__pane" },
  { id: "highlight", name: ".gemfx-glassmorphism__highlight" },
  { id: "sheen", name: ".gemfx-glassmorphism__sheen" },
  { id: "surface", name: ".gemfx-glassmorphism__surface" },
] as const;

export const glassmorphismCssVariables = [
  { id: "color", name: "--gemfx-glassmorphism-color" },
  { id: "blur", name: "--gemfx-glassmorphism-blur" },
  { id: "saturate", name: "--gemfx-glassmorphism-saturate" },
  { id: "fill", name: "--gemfx-glassmorphism-fill" },
  { id: "intensity", name: "--gemfx-glassmorphism-intensity" },
  { id: "duration", name: "--gemfx-glassmorphism-duration" },
  { id: "delay", name: "--gemfx-glassmorphism-delay" },
  { id: "solidBase", name: "--gemfx-glassmorphism-solid-base" },
] as const;

export const glassmorphismTokens = [
  { id: "easingStandard", name: "--gemfx-easing-standard" },
  { id: "neutral0", name: "--gem-palette-neutral-0" },
  { id: "neutral950", name: "--gem-palette-neutral-950" },
] as const;

export const glassmorphismA11yIds = [
  "contrast",
  "reducedTransparency",
  "reducedMotion",
  "ignoreReducedMotion",
  "decorative",
  "keyboard",
  "performance",
] as const;
