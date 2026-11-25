export const gradientTextContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const gradientTextAppearanceProps = [
  { name: "variant", type: '"flow" | "static" | "pulse"', defaultValue: '"flow"' },
  { name: "from", type: "string", defaultValue: "—" },
  { name: "via", type: "string", defaultValue: "—" },
  { name: "to", type: "string", defaultValue: "—" },
  { name: "angle", type: "number | string", defaultValue: "110" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const gradientTextTimingProps = [
  { name: "duration", type: "number", defaultValue: "3200" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const gradientTextStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const gradientTextEventProps = [
  { name: "onGradientText", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outGradientText", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const gradientTextStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "GradientTextClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const gradientTextCssClasses = [
  { id: "root", name: ".gemfx-gradient-text" },
  { id: "variant", name: ".gemfx-gradient-text--{flow|static|pulse}" },
  { id: "trigger", name: ".gemfx-gradient-text--{hover|click}" },
  { id: "on", name: ".gemfx-gradient-text--on" },
  { id: "paused", name: ".gemfx-gradient-text--paused" },
  { id: "inactive", name: ".gemfx-gradient-text--inactive" },
  { id: "disabled", name: ".gemfx-gradient-text--disabled" },
  { id: "surface", name: ".gemfx-gradient-text__surface" },
  { id: "solid", name: ".gemfx-gradient-text__solid" },
] as const;

export const gradientTextCssVariables = [
  { id: "colors", name: "--gemfx-gradient-text-from, -via, -to" },
  { id: "angle", name: "--gemfx-gradient-text-angle" },
  { id: "span", name: "--gemfx-gradient-text-span" },
  { id: "intensity", name: "--gemfx-gradient-text-intensity" },
  { id: "duration", name: "--gemfx-gradient-text-duration" },
  { id: "delay", name: "--gemfx-gradient-text-delay" },
] as const;

export const gradientTextTokens = [
  { id: "palette", name: "--gem-palette-{primary|secondary|tertiary}-400" },
  { id: "intensity", name: "--gemfx-intensity-{sm|md|lg}" },
  { id: "easingLinear", name: "--gemfx-easing-linear" },
  { id: "easingStandard", name: "--gemfx-easing-standard" },
] as const;

export const gradientTextA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "readable",
  "selection",
  "focus",
  "contrast",
] as const;
