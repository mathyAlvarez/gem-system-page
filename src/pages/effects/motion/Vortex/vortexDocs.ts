export const vortexContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const vortexAppearanceProps = [
  { name: "variant", type: '"swirl" | "warp" | "ring"', defaultValue: '"swirl"' },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
  { name: "color", type: "string", defaultValue: "—" },
] as const;

export const vortexTimingProps = [
  { name: "duration", type: "number", defaultValue: "4200" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const vortexStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"hover"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const vortexEventProps = [
  { name: "onVortex", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outVortex", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const vortexStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "VortexClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const vortexCssClasses = [
  { id: "root", name: ".gemfx-vortex" },
  { id: "variant", name: ".gemfx-vortex--{swirl|warp|ring}" },
  { id: "trigger", name: ".gemfx-vortex--{hover|click}" },
  { id: "on", name: ".gemfx-vortex--on" },
  { id: "paused", name: ".gemfx-vortex--paused" },
  { id: "inactive", name: ".gemfx-vortex--inactive" },
  { id: "disabled", name: ".gemfx-vortex--disabled" },
  { id: "surface", name: ".gemfx-vortex__surface" },
  { id: "layer", name: ".gemfx-vortex__layer" },
  { id: "swirl", name: ".gemfx-vortex__swirl" },
] as const;

export const vortexCssVariables = [
  { id: "color", name: "--gemfx-vortex-color" },
  { id: "duration", name: "--gemfx-vortex-duration" },
  { id: "delay", name: "--gemfx-vortex-delay" },
  { id: "intensity", name: "--gemfx-vortex-intensity" },
  { id: "twist", name: "--gemfx-vortex-twist" },
] as const;

export const vortexTokens = [
  { id: "palette", name: "--gem-palette-primary-400" },
  { id: "intensity", name: "--gemfx-intensity-md" },
  { id: "durationFast", name: "--gemfx-duration-fast" },
  { id: "durationNormal", name: "--gemfx-duration-normal" },
  { id: "easingStandard", name: "--gemfx-easing-standard" },
] as const;

export const vortexA11yIds = [
  "hidden",
  "reducedMotion",
  "ignoreReducedMotion",
  "focus",
  "click",
  "meaning",
  "vestibular",
] as const;
