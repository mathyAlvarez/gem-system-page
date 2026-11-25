export const gradientGlossyContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const gradientGlossyAppearanceProps = [
  { name: "variant", type: '"soft" | "lit" | "deep"', defaultValue: '"lit"' },
  {
    name: "direction",
    type: '"to-bottom" | "to-top" | "to-right" | "to-left"',
    defaultValue: '"to-bottom"',
  },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "lift", type: "number", defaultValue: "—" },
  { name: "depth", type: "number", defaultValue: "—" },
  { name: "sheen", type: "number", defaultValue: "—" },
  { name: "mid", type: "number", defaultValue: "48" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const gradientGlossyTimingProps = [
  { name: "duration", type: "number", defaultValue: "220" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const gradientGlossyStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const gradientGlossyEventProps = [
  { name: "onGradientGlossy", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outGradientGlossy", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const gradientGlossyStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "GradientGlossyClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const gradientGlossyCssClasses = [
  { id: "root", name: ".gemfx-gradient-glossy" },
  { id: "variant", name: ".gemfx-gradient-glossy--{soft|lit|deep}" },
  { id: "direction", name: ".gemfx-gradient-glossy--{to-bottom|to-top|to-right|to-left}" },
  { id: "trigger", name: ".gemfx-gradient-glossy--{hover|click}" },
  { id: "on", name: ".gemfx-gradient-glossy--on" },
  { id: "paused", name: ".gemfx-gradient-glossy--paused" },
  { id: "inactive", name: ".gemfx-gradient-glossy--inactive" },
  { id: "disabled", name: ".gemfx-gradient-glossy--disabled" },
  { id: "surface", name: ".gemfx-gradient-glossy__surface" },
] as const;

export const gradientGlossyCssVariables = [
  { id: "color", name: "--gemfx-gradient-glossy-color" },
  { id: "lift", name: "--gemfx-gradient-glossy-lift" },
  { id: "depth", name: "--gemfx-gradient-glossy-depth" },
  { id: "sheen", name: "--gemfx-gradient-glossy-sheen" },
  { id: "mid", name: "--gemfx-gradient-glossy-mid" },
  { id: "light", name: "--gemfx-gradient-glossy-light" },
  { id: "dark", name: "--gemfx-gradient-glossy-dark" },
  { id: "angle", name: "--gemfx-gradient-glossy-angle" },
  { id: "sheenOffset", name: "--gemfx-gradient-glossy-sheen-x, -sheen-y" },
  { id: "intensity", name: "--gemfx-gradient-glossy-intensity" },
  { id: "curve", name: "--gemfx-gradient-glossy-{lift|depth|sheen}-{md|k}" },
  { id: "amount", name: "--gemfx-gradient-glossy-amount" },
  { id: "duration", name: "--gemfx-gradient-glossy-duration" },
  { id: "delay", name: "--gemfx-gradient-glossy-delay" },
] as const;

export const gradientGlossyTokens = [
  { id: "palette", name: "--gem-palette-primary-500" },
  { id: "white", name: "--gem-palette-neutral-0" },
  { id: "intensity", name: "--gemfx-intensity-{sm|md|lg}" },
  { id: "easingStandard", name: "--gemfx-easing-standard" },
] as const;

export const gradientGlossyA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "decorative",
  "focus",
  "contrast",
] as const;
