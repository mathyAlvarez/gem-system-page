export const ripContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const ripAppearanceProps = [
  { name: "variant", type: '"gouge" | "tear" | "slash" | "claw"', defaultValue: '"gouge"' },
  { name: "particle", type: '"spark" | "star" | "confetti" | "none"', defaultValue: '"spark"' },
  { name: "renderParticle", type: "(particle: RipParticle) => ReactNode", defaultValue: "—" },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "colors", type: "readonly string[]", defaultValue: "—" },
  { name: "veilColor", type: "string", defaultValue: "—" },
  { name: "width", type: "number", defaultValue: "—" },
  { name: "count", type: "number", defaultValue: "—" },
  { name: "lines", type: "number", defaultValue: "1" },
  { name: "gap", type: "number", defaultValue: "10" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const ripTimingProps = [
  { name: "duration", type: "number", defaultValue: "700" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const ripStateProps = [
  { name: "trigger", type: '"drag" | "click" | "always"', defaultValue: '"drag"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "false" },
] as const;

export const ripEventProps = [
  { name: "onRip", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outRip", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const ripStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "RipClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const ripCssClasses = [
  { id: "root", name: ".gemfx-rip" },
  { id: "variant", name: ".gemfx-rip--{gouge|tear|slash|claw}" },
  { id: "trigger", name: ".gemfx-rip--{drag|click|always}" },
  { id: "holding", name: ".gemfx-rip--holding" },
  { id: "open", name: ".gemfx-rip--open" },
  { id: "paused", name: ".gemfx-rip--paused" },
  { id: "inactive", name: ".gemfx-rip--inactive" },
  { id: "disabled", name: ".gemfx-rip--disabled" },
  { id: "touchDisabled", name: ".gemfx-rip--touch-disabled" },
  { id: "surface", name: ".gemfx-rip__surface" },
  { id: "layer", name: ".gemfx-rip__layer" },
  { id: "svg", name: ".gemfx-rip__svg" },
  { id: "veil", name: ".gemfx-rip__veil" },
  { id: "trail", name: ".gemfx-rip__trail" },
  { id: "cut", name: ".gemfx-rip__cut" },
  { id: "flap", name: ".gemfx-rip__flap--{a|b}" },
  { id: "spark", name: ".gemfx-particle-layer--rip .gemfx-particle" },
] as const;

export const ripCssVariables = [
  { id: "color", name: "--gemfx-rip-color" },
  { id: "veil", name: "--gemfx-rip-veil" },
  { id: "stroke", name: "--gemfx-rip-stroke" },
  { id: "timing", name: "--gemfx-rip-duration, --gemfx-rip-delay" },
  { id: "flap", name: "--gemfx-rip-tx, -ty, -rot" },
] as const;

export const ripTokens = [
  { id: "color", name: "--gem-palette-neutral-0" },
  { id: "veil", name: "--gem-palette-neutral-950, primary-800" },
  { id: "spark", name: "--gem-palette-tertiary-{300|100}, neutral-0, primary-300" },
  { id: "easing", name: "--gemfx-easing-emphasized, --gemfx-easing-exit" },
  { id: "durationSlow", name: "--gemfx-duration-slow" },
] as const;

export const ripA11yIds = [
  "control",
  "hidden",
  "keyboard",
  "reducedMotion",
  "ignoreReducedMotion",
  "touch",
] as const;
