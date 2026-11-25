export const zoomContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const zoomAppearanceProps = [
  { name: "variant", type: '"in" | "out" | "pulse" | "lens"', defaultValue: '"in"' },
  { name: "scale", type: "number", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
  { name: "origin", type: "ZoomOrigin", defaultValue: '"center"' },
  { name: "clip", type: "boolean", defaultValue: "true" },
] as const;

export const zoomTimingProps = [
  { name: "duration", type: "number", defaultValue: "280" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const zoomStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"hover"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "true" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const zoomEventProps = [
  { name: "onZoom", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outZoom", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const zoomStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "ZoomClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const zoomCssClasses = [
  { id: "root", name: ".gemfx-zoom" },
  { id: "variant", name: ".gemfx-zoom--{in|out|pulse|lens}" },
  { id: "trigger", name: ".gemfx-zoom--{always|hover|click}" },
  { id: "on", name: ".gemfx-zoom--on" },
  { id: "clip", name: ".gemfx-zoom--clip" },
  { id: "pointer", name: ".gemfx-zoom--pointer" },
  { id: "touchBlocked", name: ".gemfx-zoom--touch-blocked" },
  { id: "paused", name: ".gemfx-zoom--paused" },
  { id: "inactive", name: ".gemfx-zoom--inactive" },
  { id: "disabled", name: ".gemfx-zoom--disabled" },
  { id: "surface", name: ".gemfx-zoom__surface" },
] as const;

export const zoomCssVariables = [
  { id: "duration", name: "--gemfx-zoom-duration" },
  { id: "delay", name: "--gemfx-zoom-delay" },
  { id: "scale", name: "--gemfx-zoom-scale" },
  { id: "out", name: "--gemfx-zoom-out" },
  { id: "originX", name: "--gemfx-zoom-ox" },
  { id: "originY", name: "--gemfx-zoom-oy" },
] as const;

export const zoomTokens = [
  { id: "easingEmphasized", name: "--gemfx-easing-emphasized" },
  { id: "easingStandard", name: "--gemfx-easing-standard" },
] as const;

export const zoomA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "focus",
  "click",
  "touch",
  "layout",
  "meaning",
] as const;
