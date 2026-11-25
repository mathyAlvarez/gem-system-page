export const magneticContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const magneticAppearanceProps = [
  { name: "strength", type: "number", defaultValue: "—" },
  { name: "maxOffset", type: "number", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
  { name: "axis", type: '"both" | "x" | "y"', defaultValue: '"both"' },
  { name: "radius", type: "number", defaultValue: "0" },
] as const;

export const magneticTimingProps = [
  { name: "duration", type: "number", defaultValue: "280" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const magneticStateProps = [
  { name: "trigger", type: '"hover" | "press" | "proximity"', defaultValue: '"hover"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "true" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const magneticEventProps = [
  { name: "onMagnetic", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outMagnetic", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const magneticStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "MagneticClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const magneticHookResult = [
  { name: "ref", type: "RefCallback<HTMLElement>" },
  { name: "style", type: "CSSProperties" },
  {
    name: "pointerProps",
    type: "{ onPointerEnter, onPointerLeave, onPointerMove, onPointerDown, onPointerUp, onPointerCancel }",
  },
  { name: "motionClassName", type: "string | undefined" },
  { name: "transform", type: "string" },
  { name: "pose", type: "{ x: number; y: number }" },
  { name: "isTracking", type: "boolean" },
  { name: "isHover", type: "boolean" },
  { name: "isPress", type: "boolean" },
  { name: "isProximity", type: "boolean" },
  { name: "magneticOff", type: "boolean" },
  { name: "isPaused", type: "boolean" },
  { name: "isDisabled", type: "boolean" },
] as const;

export const magneticCssClasses = [
  { id: "root", name: ".gemfx-magnetic" },
  { id: "trigger", name: ".gemfx-magnetic--{hover|press|proximity}" },
  { id: "tracking", name: ".gemfx-magnetic--tracking" },
  { id: "paused", name: ".gemfx-magnetic--paused" },
  { id: "inactive", name: ".gemfx-magnetic--inactive" },
  { id: "disabled", name: ".gemfx-magnetic--disabled" },
  { id: "field", name: ".gemfx-magnetic::after" },
  { id: "surface", name: ".gemfx-magnetic__surface" },
] as const;

export const magneticCssVariables = [
  { id: "x", name: "--gemfx-magnetic-x" },
  { id: "y", name: "--gemfx-magnetic-y" },
  { id: "duration", name: "--gemfx-magnetic-duration" },
  { id: "delay", name: "--gemfx-magnetic-delay" },
  { id: "radius", name: "--gemfx-magnetic-radius" },
] as const;

export const magneticTokens = [
  { id: "easingEmphasized", name: "--gemfx-easing-emphasized" },
  { id: "easingStandard", name: "--gemfx-easing-standard" },
] as const;

export const magneticA11yIds = [
  "transformOnly",
  "reducedMotion",
  "ignoreReducedMotion",
  "nested",
  "pointerOnly",
  "touch",
  "proximity",
] as const;
