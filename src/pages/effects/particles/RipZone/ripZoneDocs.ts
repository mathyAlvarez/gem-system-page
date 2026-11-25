export const ripZoneContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const ripZoneAppearanceProps = [
  { name: "variant", type: '"matte" | "foil" | "grit"', defaultValue: '"foil"' },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "radius", type: "number", defaultValue: "—" },
  { name: "threshold", type: "number", defaultValue: "0.62" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const ripZoneTimingProps = [
  { name: "duration", type: "number", defaultValue: "480" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const ripZoneStateProps = [
  { name: "trigger", type: '"drag" | "click" | "always"', defaultValue: '"drag"' },
  { name: "resetKey", type: "number | string", defaultValue: "0" },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "false" },
] as const;

export const ripZoneEventProps = [
  { name: "onScratchStart", type: "(event: RipZoneScratchEvent) => void", defaultValue: "—" },
  { name: "onProgress", type: "(event: RipZoneProgressEvent) => void", defaultValue: "—" },
  { name: "onComplete", type: "(event: RipZoneProgressEvent) => void", defaultValue: "—" },
  { name: "onRipZone", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outRipZone", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const ripZoneStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "RipZoneClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const ripZoneCssClasses = [
  { id: "root", name: ".gemfx-rip-zone" },
  { id: "variant", name: ".gemfx-rip-zone--{matte|foil|grit}" },
  { id: "trigger", name: ".gemfx-rip-zone--{drag|click|always}" },
  { id: "holding", name: ".gemfx-rip-zone--holding" },
  { id: "complete", name: ".gemfx-rip-zone--complete" },
  { id: "paused", name: ".gemfx-rip-zone--paused" },
  { id: "inactive", name: ".gemfx-rip-zone--inactive" },
  { id: "disabled", name: ".gemfx-rip-zone--disabled" },
  { id: "touchDisabled", name: ".gemfx-rip-zone--touch-disabled" },
  { id: "surface", name: ".gemfx-rip-zone__surface" },
  { id: "layer", name: ".gemfx-rip-zone__layer" },
  { id: "canvas", name: ".gemfx-rip-zone__canvas" },
] as const;

export const ripZoneCssVariables = [
  { id: "progress", name: "--gemfx-rip-zone-progress" },
  { id: "timing", name: "--gemfx-rip-zone-duration, --gemfx-rip-zone-delay" },
] as const;

export const ripZoneTokens = [
  { id: "cover", name: "--gem-palette-neutral-950, primary-800" },
  { id: "easing", name: "--gemfx-easing-exit" },
  { id: "durationBase", name: "--gemfx-duration-base" },
] as const;

export const ripZoneA11yIds = [
  "control",
  "hidden",
  "keyboard",
  "reducedMotion",
  "ignoreReducedMotion",
  "touch",
] as const;
