export const noiseContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const noiseAppearanceProps = [
  { name: "variant", type: '"grain" | "film" | "static"', defaultValue: '"grain"' },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
  { name: "color", type: "string", defaultValue: "—" },
] as const;

export const noiseTimingProps = [
  { name: "duration", type: "number", defaultValue: "2400" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const noiseStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const noiseEventProps = [
  { name: "onNoise", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outNoise", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const noiseStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "NoiseClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const noiseCssClasses = [
  { id: "root", name: ".gemfx-noise" },
  { id: "variant", name: ".gemfx-noise--{grain|film|static}" },
  { id: "trigger", name: ".gemfx-noise--{hover|click}" },
  { id: "on", name: ".gemfx-noise--on" },
  { id: "paused", name: ".gemfx-noise--paused" },
  { id: "inactive", name: ".gemfx-noise--inactive" },
  { id: "disabled", name: ".gemfx-noise--disabled" },
  { id: "surface", name: ".gemfx-noise__surface" },
  { id: "layer", name: ".gemfx-noise__layer" },
  { id: "grain", name: ".gemfx-noise__grain" },
  { id: "tint", name: ".gemfx-noise__tint" },
] as const;

export const noiseCssVariables = [
  { id: "intensity", name: "--gemfx-noise-intensity" },
  { id: "color", name: "--gemfx-noise-color" },
  { id: "duration", name: "--gemfx-noise-duration" },
  { id: "delay", name: "--gemfx-noise-delay" },
  { id: "blend", name: "--gemfx-noise-blend" },
] as const;

export const noiseTokens = [
  { id: "intensity", name: "--gemfx-intensity-{sm|md|lg}" },
  { id: "durationFast", name: "--gemfx-duration-fast" },
  { id: "easingStandard", name: "--gemfx-easing-standard" },
  { id: "neutral0", name: "--gem-palette-neutral-0" },
] as const;

export const noiseA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "decorative",
  "focus",
  "contrast",
] as const;
