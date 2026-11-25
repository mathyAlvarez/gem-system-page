export const pulseScaleContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const pulseScaleAppearanceProps = [
  {
    name: "variant",
    type: '"heartbeat" | "breathe" | "pop" | "ping"',
    defaultValue: '"heartbeat"',
  },
  { name: "scale", type: "number", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
  { name: "ring", type: "boolean", defaultValue: 'variant === "ping"' },
] as const;

export const pulseScaleTimingProps = [
  { name: "duration", type: "number", defaultValue: "1400" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const pulseScaleStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const pulseScaleEventProps = [
  { name: "onPulseScale", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outPulseScale", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const pulseScaleStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "PulseScaleClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const pulseScaleCssClasses = [
  { id: "root", name: ".gemfx-pulse-scale" },
  { id: "variant", name: ".gemfx-pulse-scale--{heartbeat|breathe|pop|ping}" },
  { id: "trigger", name: ".gemfx-pulse-scale--{hover|click}" },
  { id: "on", name: ".gemfx-pulse-scale--on" },
  { id: "ringOn", name: ".gemfx-pulse-scale--ring" },
  { id: "paused", name: ".gemfx-pulse-scale--paused" },
  { id: "inactive", name: ".gemfx-pulse-scale--inactive" },
  { id: "disabled", name: ".gemfx-pulse-scale--disabled" },
  { id: "surface", name: ".gemfx-pulse-scale__surface" },
  { id: "ring", name: ".gemfx-pulse-scale__ring" },
] as const;

export const pulseScaleCssVariables = [
  { id: "duration", name: "--gemfx-pulse-scale-duration" },
  { id: "delay", name: "--gemfx-pulse-scale-delay" },
  { id: "scale", name: "--gemfx-pulse-scale" },
  { id: "ring", name: "--gemfx-pulse-scale-ring" },
  { id: "ringColor", name: "--gemfx-pulse-scale-ring-color" },
] as const;

export const pulseScaleTokens = [
  { id: "easingStandard", name: "--gemfx-easing-standard" },
  { id: "easingEmphasized", name: "--gemfx-easing-emphasized" },
  { id: "easingExit", name: "--gemfx-easing-exit" },
  { id: "palette", name: "--gem-palette-primary-400" },
] as const;

export const pulseScaleA11yIds = [
  "hidden",
  "reducedMotion",
  "ignoreReducedMotion",
  "autoplay",
  "focus",
  "click",
  "meaning",
] as const;
