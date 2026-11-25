export const glowContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const glowAppearanceProps = [
  {
    name: "variant",
    type: '"halo" | "outline" | "inner" | "edge" | "dual" | "pulse" | "text"',
    defaultValue: '"halo"',
  },
  { name: "edge", type: '"top" | "right" | "bottom" | "left"', defaultValue: '"bottom"' },
  { name: "color", type: "string", defaultValue: "var(--gem-palette-primary-400)" },
  { name: "colorAlt", type: "string", defaultValue: "var(--gem-palette-secondary-400)" },
  { name: "spread", type: "number | string", defaultValue: "24" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const glowTimingProps = [
  { name: "duration", type: "number", defaultValue: "2400" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const glowStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const glowEventProps = [
  { name: "onGlow", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outGlow", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const glowStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "GlowClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const glowCssClasses = [
  { id: "root", name: ".gemfx-glow" },
  { id: "variant", name: ".gemfx-glow--{halo|outline|inner|edge|dual|pulse|text}" },
  { id: "edge", name: ".gemfx-glow--edge-{top|right|bottom|left}" },
  { id: "trigger", name: ".gemfx-glow--{hover|click}" },
  { id: "on", name: ".gemfx-glow--on" },
  { id: "paused", name: ".gemfx-glow--paused" },
  { id: "inactive", name: ".gemfx-glow--inactive" },
  { id: "disabled", name: ".gemfx-glow--disabled" },
  { id: "layer", name: ".gemfx-glow__layer" },
  { id: "halo", name: ".gemfx-glow__halo" },
  { id: "haloAlt", name: ".gemfx-glow__halo-alt" },
  { id: "surface", name: ".gemfx-glow__surface" },
] as const;

export const glowCssVariables = [
  { id: "color", name: "--gemfx-glow-color" },
  { id: "colorAlt", name: "--gemfx-glow-color-alt" },
  { id: "duration", name: "--gemfx-glow-duration" },
  { id: "delay", name: "--gemfx-glow-delay" },
  { id: "intensity", name: "--gemfx-glow-intensity" },
  { id: "spread", name: "--gemfx-glow-spread" },
  { id: "blur", name: "--gemfx-glow-blur" },
] as const;

export const glowTokens = [
  { id: "intensity", name: "--gemfx-intensity-md" },
  { id: "easing", name: "--gemfx-easing-standard" },
  { id: "palette", name: "--gem-palette-{primary|secondary}-400" },
] as const;

export const glowA11yIds = [
  "hidden",
  "reducedMotion",
  "ignoreReducedMotion",
  "focus",
  "click",
  "touch",
  "meaning",
] as const;
