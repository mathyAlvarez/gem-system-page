export const particleBurstContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const particleBurstAppearanceProps = [
  { name: "variant", type: '"confetti" | "spark" | "star"', defaultValue: '"confetti"' },
  { name: "colors", type: "readonly string[]", defaultValue: "—" },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "count", type: "number", defaultValue: "—" },
  { name: "spread", type: "number", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const particleBurstTimingProps = [
  { name: "duration", type: "number", defaultValue: "900" },
  { name: "delay", type: "number", defaultValue: "0" },
  { name: "interval", type: "number", defaultValue: "150" },
] as const;

export const particleBurstStateProps = [
  { name: "trigger", type: '"click" | "hold"', defaultValue: '"click"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "false" },
] as const;

export const particleBurstEventProps = [
  { name: "onParticleBurst", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outParticleBurst", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const particleBurstStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "ParticleBurstClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const particleBurstCssClasses = [
  { id: "root", name: ".gemfx-particle-burst" },
  { id: "variant", name: ".gemfx-particle-burst--{confetti|spark|star}" },
  { id: "hold", name: ".gemfx-particle-burst--hold" },
  { id: "paused", name: ".gemfx-particle-burst--paused" },
  { id: "inactive", name: ".gemfx-particle-burst--inactive" },
  { id: "disabled", name: ".gemfx-particle-burst--disabled" },
  { id: "touchDisabled", name: ".gemfx-particle-burst--touch-disabled" },
  { id: "surface", name: ".gemfx-particle-burst__surface" },
  { id: "layer", name: ".gemfx-particle-layer.gemfx-particle-layer--burst" },
  { id: "particle", name: ".gemfx-particle.gemfx-particle--{confetti|spark|star}" },
] as const;

export const particleBurstCssVariables = [
  { id: "particleDuration", name: "--gemfx-particle-duration" },
  { id: "motion", name: "--gemfx-particle-easing, -oy, -end-scale" },
  {
    id: "particle",
    name: "--gemfx-particle-x, -y, -dx, -dy, -heading, -spin, -w, -h, -color, -delay",
  },
] as const;

export const particleBurstTokens = [
  {
    id: "confetti",
    name: "--gem-palette-{primary|secondary|tertiary}-400, primary-200, neutral-0",
  },
  { id: "spark", name: "--gem-palette-tertiary-{300|100}, neutral-0, primary-300" },
  { id: "star", name: "--gem-palette-{primary|secondary|tertiary}-300, neutral-0" },
  { id: "easing", name: "--gemfx-easing-exit" },
] as const;

export const particleBurstA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "decorative",
  "keyboard",
  "touch",
] as const;
