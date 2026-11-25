export const particleRainContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const particleRainAppearanceProps = [
  {
    name: "variant",
    type: '"confetti" | "spark" | "star" | "light" | "mixed"',
    defaultValue: '"confetti"',
  },
  { name: "colors", type: "readonly string[]", defaultValue: "—" },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "count", type: "number", defaultValue: "—" },
  { name: "spread", type: "number", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
  { name: "maxParticles", type: "number", defaultValue: "—" },
] as const;

export const particleRainTimingProps = [
  { name: "duration", type: "number", defaultValue: "1800" },
  { name: "delay", type: "number", defaultValue: "0" },
  { name: "span", type: "number", defaultValue: "—" },
  { name: "interval", type: "number", defaultValue: "110" },
] as const;

export const particleRainStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click" | "hold"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "false" },
] as const;

export const particleRainEventProps = [
  { name: "onParticleRain", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outParticleRain", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const particleRainStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "ParticleRainClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const particleRainCssClasses = [
  { id: "root", name: ".gemfx-particle-rain" },
  { id: "variant", name: ".gemfx-particle-rain--{confetti|spark|star|light|mixed}" },
  { id: "hold", name: ".gemfx-particle-rain--hold" },
  { id: "paused", name: ".gemfx-particle-rain--paused" },
  { id: "inactive", name: ".gemfx-particle-rain--inactive" },
  { id: "disabled", name: ".gemfx-particle-rain--disabled" },
  { id: "touchDisabled", name: ".gemfx-particle-rain--touch-disabled" },
  { id: "surface", name: ".gemfx-particle-rain__surface" },
  { id: "layer", name: ".gemfx-particle-layer.gemfx-particle-layer--rain" },
  { id: "particle", name: ".gemfx-particle.gemfx-particle--{confetti|spark|star|light}" },
] as const;

export const particleRainCssVariables = [
  { id: "particleDuration", name: "--gemfx-particle-duration" },
  { id: "motion", name: "--gemfx-particle-easing, -oy, -end-scale" },
  {
    id: "particle",
    name: "--gemfx-particle-x, -y, -dx, -dy, -heading, -spin, -w, -h, -color, -delay",
  },
] as const;

export const particleRainTokens = [
  {
    id: "confetti",
    name: "--gem-palette-{primary|secondary|tertiary}-400, primary-200, neutral-0",
  },
  { id: "spark", name: "--gem-palette-tertiary-{300|100}, neutral-0, primary-300" },
  { id: "star", name: "--gem-palette-{primary|secondary|tertiary}-300, neutral-0" },
  { id: "light", name: "--gem-palette-neutral-0, primary-200, tertiary-100, secondary-200" },
  { id: "easing", name: "--gemfx-easing-linear" },
] as const;

export const particleRainA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "decorative",
  "keyboard",
  "touch",
  "density",
] as const;
