export const blurUnveilContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const blurUnveilAppearanceProps = [
  { name: "variant", type: '"in" | "out" | "pulse"', defaultValue: '"in"' },
  { name: "blur", type: "number | string", defaultValue: "—" },
  { name: "scale", type: "number", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const blurUnveilTimingProps = [
  { name: "duration", type: "number", defaultValue: "700" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const blurUnveilStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const blurUnveilEventProps = [
  { name: "onBlurUnveil", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outBlurUnveil", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const blurUnveilStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "BlurUnveilClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const blurUnveilCssClasses = [
  { id: "root", name: ".gemfx-blur-unveil" },
  { id: "variant", name: ".gemfx-blur-unveil--{in|out|pulse}" },
  { id: "trigger", name: ".gemfx-blur-unveil--{always|hover|click}" },
  { id: "on", name: ".gemfx-blur-unveil--on" },
  { id: "paused", name: ".gemfx-blur-unveil--paused" },
  { id: "inactive", name: ".gemfx-blur-unveil--inactive" },
  { id: "disabled", name: ".gemfx-blur-unveil--disabled" },
  { id: "surface", name: ".gemfx-blur-unveil__surface" },
] as const;

export const blurUnveilCssVariables = [
  { id: "duration", name: "--gemfx-blur-unveil-duration" },
  { id: "delay", name: "--gemfx-blur-unveil-delay" },
  { id: "blur", name: "--gemfx-blur-unveil-blur" },
  { id: "scale", name: "--gemfx-blur-unveil-scale" },
] as const;

export const blurUnveilTokens = [
  { id: "easingEmphasized", name: "--gemfx-easing-emphasized" },
  { id: "easingStandard", name: "--gemfx-easing-standard" },
] as const;

export const blurUnveilA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "hidden",
  "keyboard",
  "click",
  "performance",
] as const;
