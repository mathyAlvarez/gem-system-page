export const floatContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const floatAppearanceProps = [
  {
    name: "variant",
    type: '"bob" | "sway" | "drift" | "lift" | "idle" | "figure8" | "pendulum" | "orbit"',
    defaultValue: '"bob"',
  },
  { name: "amplitude", type: "number | string", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
  { name: "shadow", type: "boolean", defaultValue: "true" },
] as const;

export const floatTimingProps = [
  { name: "duration", type: "number", defaultValue: "2800" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const floatStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const floatEventProps = [
  { name: "onFloat", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outFloat", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const floatStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "FloatClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const floatCssClasses = [
  { id: "root", name: ".gemfx-float" },
  { id: "variant", name: ".gemfx-float--{bob|sway|drift|lift|idle|figure8|pendulum|orbit}" },
  { id: "trigger", name: ".gemfx-float--{hover|click}" },
  { id: "on", name: ".gemfx-float--on" },
  { id: "paused", name: ".gemfx-float--paused" },
  { id: "inactive", name: ".gemfx-float--inactive" },
  { id: "disabled", name: ".gemfx-float--disabled" },
  { id: "surface", name: ".gemfx-float__surface" },
  { id: "shadow", name: ".gemfx-float__shadow" },
] as const;

export const floatCssVariables = [
  { id: "duration", name: "--gemfx-float-duration" },
  { id: "delay", name: "--gemfx-float-delay" },
  { id: "amplitude", name: "--gemfx-float-amplitude" },
  { id: "drift", name: "--gemfx-float-drift" },
  { id: "tilt", name: "--gemfx-float-tilt" },
  { id: "shadow", name: "--gemfx-float-shadow" },
] as const;

export const floatTokens = [
  { id: "easingStandard", name: "--gemfx-easing-standard" },
  { id: "easingLinear", name: "--gemfx-easing-linear" },
  { id: "palette", name: "--gem-palette-neutral-950" },
] as const;

export const floatA11yIds = [
  "hidden",
  "reducedMotion",
  "ignoreReducedMotion",
  "autoplay",
  "focus",
  "click",
  "meaning",
] as const;
