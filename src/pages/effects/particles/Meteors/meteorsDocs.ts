export const meteorsContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const meteorsAppearanceProps = [
  { name: "variant", type: '"trail" | "ember" | "shard"', defaultValue: '"trail"' },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "count", type: "number", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
  { name: "reverse", type: "boolean", defaultValue: "false" },
] as const;

export const meteorsTimingProps = [
  { name: "duration", type: "number", defaultValue: "3200" },
  { name: "speed", type: "number", defaultValue: "1" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const meteorsStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const meteorsEventProps = [
  { name: "onMeteors", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outMeteors", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const meteorsStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "MeteorsClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const meteorsCssClasses = [
  { id: "root", name: ".gemfx-meteors" },
  { id: "variant", name: ".gemfx-meteors--{trail|ember|shard}" },
  { id: "reverse", name: ".gemfx-meteors--reverse" },
  { id: "trigger", name: ".gemfx-meteors--{hover|click}" },
  { id: "on", name: ".gemfx-meteors--on" },
  { id: "paused", name: ".gemfx-meteors--paused" },
  { id: "inactive", name: ".gemfx-meteors--inactive" },
  { id: "disabled", name: ".gemfx-meteors--disabled" },
  { id: "layer", name: ".gemfx-meteors__layer" },
  { id: "meteor", name: ".gemfx-meteors__meteor" },
  { id: "surface", name: ".gemfx-meteors__surface" },
] as const;

export const meteorsCssVariables = [
  { id: "color", name: "--gemfx-meteors-color" },
  { id: "intensity", name: "--gemfx-meteors-intensity" },
  { id: "meteor", name: "--gemfx-meteors-meteor-delay, -span, -length" },
  { id: "trajectory", name: "--gemfx-meteors-angle, -slope, -dir, -travel, -head" },
] as const;

export const meteorsTokens = [
  { id: "color", name: "--gem-palette-primary-200" },
  { id: "ember", name: "--gem-palette-tertiary-400" },
  { id: "intensity", name: "--gemfx-intensity-md" },
] as const;

export const meteorsA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "decorative",
  "focus",
  "density",
] as const;
