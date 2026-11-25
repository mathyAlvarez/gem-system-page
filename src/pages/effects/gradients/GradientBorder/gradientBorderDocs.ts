export const gradientBorderContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const gradientBorderAppearanceProps = [
  { name: "variant", type: '"flow" | "static" | "pulse"', defaultValue: '"flow"' },
  { name: "from", type: "string", defaultValue: "—" },
  { name: "via", type: "string", defaultValue: "—" },
  { name: "to", type: "string", defaultValue: "—" },
  { name: "pad", type: "string", defaultValue: "—" },
  { name: "thickness", type: "number | string", defaultValue: "2" },
  { name: "angle", type: "number | string", defaultValue: "120" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const gradientBorderTimingProps = [
  { name: "duration", type: "number", defaultValue: "4000" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const gradientBorderStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const gradientBorderEventProps = [
  { name: "onGradientBorder", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outGradientBorder", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const gradientBorderStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "GradientBorderClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const gradientBorderCssClasses = [
  { id: "root", name: ".gemfx-gradient-border" },
  { id: "variant", name: ".gemfx-gradient-border--{flow|static|pulse}" },
  { id: "padded", name: ".gemfx-gradient-border--padded" },
  { id: "trigger", name: ".gemfx-gradient-border--{hover|click}" },
  { id: "on", name: ".gemfx-gradient-border--on" },
  { id: "paused", name: ".gemfx-gradient-border--paused" },
  { id: "inactive", name: ".gemfx-gradient-border--inactive" },
  { id: "disabled", name: ".gemfx-gradient-border--disabled" },
  { id: "surface", name: ".gemfx-gradient-border__surface" },
] as const;

export const gradientBorderCssVariables = [
  { id: "colors", name: "--gemfx-gradient-border-from, -via, -to" },
  { id: "pad", name: "--gemfx-gradient-border-pad" },
  { id: "stroke", name: "--gemfx-gradient-border-stroke" },
  { id: "thickness", name: "--gemfx-gradient-border-thickness" },
  { id: "angle", name: "--gemfx-gradient-border-angle" },
  { id: "turn", name: "--gemfx-gradient-border-turn" },
  { id: "intensity", name: "--gemfx-gradient-border-intensity" },
  { id: "strength", name: "--gemfx-gradient-border-strength" },
  { id: "breath", name: "--gemfx-gradient-border-breath" },
  { id: "duration", name: "--gemfx-gradient-border-duration" },
  { id: "delay", name: "--gemfx-gradient-border-delay" },
] as const;

export const gradientBorderTokens = [
  { id: "palette", name: "--gem-palette-{primary|secondary|tertiary}-400" },
  { id: "btnBg", name: "--gem-btn-bg, --gem-btn-bg-hover" },
  { id: "intensity", name: "--gemfx-intensity-{sm|md|lg}" },
  { id: "easingLinear", name: "--gemfx-easing-linear" },
  { id: "easingStandard", name: "--gemfx-easing-standard" },
] as const;

export const gradientBorderA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "decorative",
  "focus",
  "contrast",
] as const;
