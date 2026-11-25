export const holoFoilContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const holoFoilAppearanceProps = [
  { name: "variant", type: '"rainbow" | "iridescent" | "sparkle"', defaultValue: '"rainbow"' },
  { name: "blend", type: '"color-dodge" | "overlay" | "soft-light" | "screen"', defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
  { name: "shine", type: "boolean", defaultValue: "true" },
  { name: "sparkle", type: "boolean", defaultValue: "true" },
] as const;

export const holoFoilTimingProps = [
  { name: "duration", type: "number", defaultValue: "4200" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const holoFoilStateProps = [
  { name: "trigger", type: '"always" | "hover"', defaultValue: '"hover"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "true" },
] as const;

export const holoFoilEventProps = [
  { name: "onHoloFoil", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outHoloFoil", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const holoFoilStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "HoloFoilClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const holoFoilCssClasses = [
  { id: "root", name: ".gemfx-holofoil" },
  { id: "variant", name: ".gemfx-holofoil--{rainbow|iridescent|sparkle}" },
  { id: "trigger", name: ".gemfx-holofoil--{hover|always}" },
  { id: "tracking", name: ".gemfx-holofoil--tracking" },
  { id: "paused", name: ".gemfx-holofoil--paused" },
  { id: "inactive", name: ".gemfx-holofoil--inactive" },
  { id: "disabled", name: ".gemfx-holofoil--disabled" },
  { id: "surface", name: ".gemfx-holofoil__surface" },
  { id: "layer", name: ".gemfx-holofoil__layer" },
  { id: "foil", name: ".gemfx-holofoil__foil" },
  { id: "sparkle", name: ".gemfx-holofoil__sparkle" },
  { id: "shine", name: ".gemfx-holofoil__shine" },
] as const;

export const holoFoilCssVariables = [
  { id: "palette", name: "--gemfx-holofoil-c1 … --gemfx-holofoil-c5" },
  { id: "x", name: "--gemfx-holofoil-x, --gemfx-holofoil-y" },
  { id: "strength", name: "--gemfx-holofoil-strength" },
  { id: "shine", name: "--gemfx-holofoil-shine" },
  { id: "blend", name: "--gemfx-holofoil-blend" },
  { id: "duration", name: "--gemfx-holofoil-duration" },
  { id: "delay", name: "--gemfx-holofoil-delay" },
] as const;

export const holoFoilTokens = [{ id: "easingStandard", name: "--gemfx-easing-standard" }] as const;

export const holoFoilA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "decorative",
  "keyboard",
  "touch",
  "contrast",
] as const;
