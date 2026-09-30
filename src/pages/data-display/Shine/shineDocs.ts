export const shineProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "tone", type: '"light" | "gold" | "accent"', defaultValue: '"light"' },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "radius", type: '"none" | "sm" | "md" | "lg" | "full"', defaultValue: '"md"' },
  { name: "trigger", type: '"always" | "hover"', defaultValue: '"always"' },
  { name: "effect", type: '"sweep" | "burst"', defaultValue: '"sweep"' },
  { name: "duration", type: "number", defaultValue: "2400" },
  { name: "interval", type: "number", defaultValue: "4000" },
  { name: "delay", type: "number", defaultValue: "0" },
  { name: "angle", type: "number", defaultValue: "125" },
  { name: "block", type: "boolean", defaultValue: "false" },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "ShineClassNames", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLDivElement>", defaultValue: "—" },
] as const;

export const shineCssClasses = [
  { name: ".gem-shine", rule: "root" },
  { name: ".gem-shine--light", rule: "tone" },
  { name: ".gem-shine--radius-md", rule: "radius" },
  { name: ".gem-shine--always", rule: "trigger" },
  { name: ".gem-shine--sweep", rule: "effect" },
  { name: ".gem-shine--block", rule: "block" },
  { name: ".gem-shine--paused", rule: "paused" },
  { name: ".gem-shine--inactive", rule: "inactive" },
  { name: ".gem-shine__surface", rule: "surface" },
  { name: ".gem-shine__gleam", rule: "gleam" },
  { name: ".gem-shine__spark", rule: "spark" },
] as const;

export const shineCssVariables = [
  "--gem-shine-color",
  "--gem-shine-strength",
  "--gem-shine-duration",
  "--gem-shine-angle",
  "--gem-shine-spark-angle",
  "--gem-shine-spark-delay",
  "--gem-shine-spark-travel",
  "--gem-shine-spark-size",
] as const;

export const shineTokens = [
  "--gem-palette-neutral-0",
  "--gem-palette-tertiary-100",
  "--gem-palette-primary-100",
  "--gem-radius-{none|sm|md|lg|full}",
] as const;
