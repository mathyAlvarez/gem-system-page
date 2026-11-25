export const gradientMeshContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const gradientMeshAppearanceProps = [
  { name: "variant", type: '"liquid" | "aurora" | "static"', defaultValue: '"liquid"' },
  { name: "from", type: "string", defaultValue: "—" },
  { name: "via", type: "string", defaultValue: "—" },
  { name: "to", type: "string", defaultValue: "—" },
  { name: "blur", type: "number | string", defaultValue: "40" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const gradientMeshTimingProps = [
  { name: "duration", type: "number", defaultValue: "9000" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const gradientMeshStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const gradientMeshEventProps = [
  { name: "onGradientMesh", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outGradientMesh", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const gradientMeshStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "GradientMeshClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const gradientMeshCssClasses = [
  { id: "root", name: ".gemfx-gradient-mesh" },
  { id: "variant", name: ".gemfx-gradient-mesh--{liquid|aurora|static}" },
  { id: "trigger", name: ".gemfx-gradient-mesh--{hover|click}" },
  { id: "on", name: ".gemfx-gradient-mesh--on" },
  { id: "paused", name: ".gemfx-gradient-mesh--paused" },
  { id: "inactive", name: ".gemfx-gradient-mesh--inactive" },
  { id: "disabled", name: ".gemfx-gradient-mesh--disabled" },
  { id: "layer", name: ".gemfx-gradient-mesh__layer" },
  { id: "blob", name: ".gemfx-gradient-mesh__blob, __blob--{a|b|c}" },
  { id: "surface", name: ".gemfx-gradient-mesh__surface" },
] as const;

export const gradientMeshCssVariables = [
  { id: "colors", name: "--gemfx-gradient-mesh-from, -via, -to" },
  { id: "base", name: "--gemfx-gradient-mesh-base" },
  { id: "ink", name: "--gemfx-gradient-mesh-ink" },
  { id: "blur", name: "--gemfx-gradient-mesh-blur" },
  { id: "intensity", name: "--gemfx-gradient-mesh-intensity" },
  { id: "duration", name: "--gemfx-gradient-mesh-duration" },
  { id: "delay", name: "--gemfx-gradient-mesh-delay" },
] as const;

export const gradientMeshTokens = [
  { id: "palette", name: "--gem-palette-{primary|secondary|tertiary}-400" },
  { id: "base", name: "--gem-palette-neutral-950" },
  { id: "ink", name: "--gem-palette-neutral-0" },
  { id: "intensity", name: "--gemfx-intensity-{sm|md|lg}" },
  { id: "easingStandard", name: "--gemfx-easing-standard" },
] as const;

export const gradientMeshA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "decorative",
  "focus",
  "contrast",
] as const;
