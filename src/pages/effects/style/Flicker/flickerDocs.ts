export const flickerContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const flickerAppearanceProps = [
  {
    name: "variant",
    type: '"neon" | "buzz" | "strobe" | "fault" | "text"',
    defaultValue: '"neon"',
  },
  {
    name: "edge",
    type: '"all" | "top" | "right" | "bottom" | "left" | "x" | "y"',
    defaultValue: '"all"',
  },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "spread", type: "number | string", defaultValue: "18" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const flickerTimingProps = [
  { name: "duration", type: "number", defaultValue: "2800" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const flickerStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const flickerEventProps = [
  { name: "onFlicker", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outFlicker", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const flickerStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "FlickerClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const flickerCssClasses = [
  { id: "root", name: ".gemfx-flicker" },
  { id: "variant", name: ".gemfx-flicker--{neon|buzz|strobe|fault|text}" },
  { id: "edge", name: ".gemfx-flicker--edge" },
  { id: "edgeSide", name: ".gemfx-flicker--edge-{top|right|bottom|left|x|y}" },
  { id: "trigger", name: ".gemfx-flicker--{hover|click}" },
  { id: "on", name: ".gemfx-flicker--on" },
  { id: "paused", name: ".gemfx-flicker--paused" },
  { id: "inactive", name: ".gemfx-flicker--inactive" },
  { id: "disabled", name: ".gemfx-flicker--disabled" },
  { id: "layer", name: ".gemfx-flicker__layer" },
  { id: "halo", name: ".gemfx-flicker__halo, .gemfx-flicker__halo-alt" },
  { id: "tube", name: ".gemfx-flicker__tube, .gemfx-flicker__tube-alt" },
  { id: "surface", name: ".gemfx-flicker__surface" },
] as const;

export const flickerCssVariables = [
  { id: "color", name: "--gemfx-flicker-color" },
  { id: "blur", name: "--gemfx-flicker-blur" },
  { id: "duration", name: "--gemfx-flicker-duration" },
  { id: "delay", name: "--gemfx-flicker-delay" },
  { id: "spread", name: "--gemfx-flicker-spread" },
  { id: "intensity", name: "--gemfx-flicker-intensity" },
  { id: "gate", name: "--gemfx-flicker-gate" },
] as const;

export const flickerTokens = [
  { id: "intensityMd", name: "--gemfx-intensity-md" },
  { id: "palette", name: "--gem-palette-primary-400" },
] as const;

export const flickerA11yIds = [
  "photosensitivity",
  "reducedMotion",
  "ignoreReducedMotion",
  "decorative",
  "keyboard",
  "click",
] as const;
